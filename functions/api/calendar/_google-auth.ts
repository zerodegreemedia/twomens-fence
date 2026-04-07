/**
 * Google Calendar API authentication for Cloudflare Workers.
 * Uses OAuth 2.0 refresh token flow (no service account key needed).
 *
 * Required env vars:
 *   GOOGLE_CLIENT_ID       – OAuth 2.0 client ID
 *   GOOGLE_CLIENT_SECRET   – OAuth 2.0 client secret
 *   GOOGLE_REFRESH_TOKEN   – Refresh token obtained via one-time consent flow
 *   GOOGLE_CALENDAR_ID     – Calendar ID to query (usually an email address)
 */

export interface Env {
  GOOGLE_CLIENT_ID: string;
  GOOGLE_CLIENT_SECRET: string;
  GOOGLE_REFRESH_TOKEN: string;
  GOOGLE_CALENDAR_ID: string;
}

/* ── OAuth 2.0 refresh token → access token ──────── */

export async function getAccessToken(env: Env): Promise<string> {
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      client_id: env.GOOGLE_CLIENT_ID,
      client_secret: env.GOOGLE_CLIENT_SECRET,
      refresh_token: env.GOOGLE_REFRESH_TOKEN,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Google token refresh failed (${res.status}): ${text}`);
  }

  const data = (await res.json()) as { access_token: string };
  return data.access_token;
}

/* ── Calendar helpers ────────────────────────────── */

export interface BusySlot {
  start: string;
  end: string;
}

/** Fetch busy periods from Google Calendar for a given date (in America/New_York). */
export async function getBusySlots(
  env: Env,
  date: string, // YYYY-MM-DD
): Promise<BusySlot[]> {
  const token = await getAccessToken(env);
  const timeMin = `${date}T00:00:00-04:00`; // Eastern time
  const timeMax = `${date}T23:59:59-04:00`;

  const res = await fetch(
    "https://www.googleapis.com/calendar/v3/freeBusy",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        timeMin,
        timeMax,
        timeZone: "America/New_York",
        items: [{ id: env.GOOGLE_CALENDAR_ID }],
      }),
    },
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`FreeBusy query failed (${res.status}): ${text}`);
  }

  const data = (await res.json()) as {
    calendars: Record<string, { busy: BusySlot[] }>;
  };
  return data.calendars[env.GOOGLE_CALENDAR_ID]?.busy ?? [];
}

/** Create a Google Calendar event for a confirmed booking. */
export async function createCalendarEvent(
  env: Env,
  params: {
    summary: string;
    description: string;
    startDateTime: string; // ISO 8601
    endDateTime: string;   // ISO 8601
    attendeeEmail?: string;
    location?: string;
  },
): Promise<{ eventId: string; htmlLink: string }> {
  const token = await getAccessToken(env);

  const event: Record<string, unknown> = {
    summary: params.summary,
    description: params.description,
    start: { dateTime: params.startDateTime, timeZone: "America/New_York" },
    end: { dateTime: params.endDateTime, timeZone: "America/New_York" },
    reminders: {
      useDefault: false,
      overrides: [
        { method: "popup", minutes: 60 },
        { method: "popup", minutes: 15 },
      ],
    },
  };

  if (params.location) event.location = params.location;
  if (params.attendeeEmail) {
    event.attendees = [{ email: params.attendeeEmail }];
  }

  const res = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(env.GOOGLE_CALENDAR_ID)}/events`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    },
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Create event failed (${res.status}): ${text}`);
  }

  const data = (await res.json()) as { id: string; htmlLink: string };
  return { eventId: data.id, htmlLink: data.htmlLink };
}
