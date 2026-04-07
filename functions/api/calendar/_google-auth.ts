/**
 * Google Calendar API authentication for Cloudflare Workers.
 * Uses Web Crypto API to sign JWTs (no Node.js googleapis dependency).
 *
 * Required env vars:
 *   GOOGLE_SERVICE_ACCOUNT_EMAIL – service account email
 *   GOOGLE_PRIVATE_KEY           – PEM-encoded RSA private key (with \n literals)
 *   GOOGLE_CALENDAR_ID           – calendar ID to query (usually an email)
 */

export interface Env {
  GOOGLE_SERVICE_ACCOUNT_EMAIL: string;
  GOOGLE_PRIVATE_KEY: string;
  GOOGLE_CALENDAR_ID: string;
  FORM_ENDPOINT?: string;
}

/* ── helpers ─────────────────────────────────────── */

function base64url(buf: ArrayBuffer | Uint8Array): string {
  const bytes = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
  let binary = "";
  for (const b of bytes) binary += String.fromCharCode(b);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function str2ab(str: string): Uint8Array {
  return new TextEncoder().encode(str);
}

/** Strip PEM headers and decode base64 to ArrayBuffer */
function pemToArrayBuffer(pem: string): ArrayBuffer {
  const b64 = pem
    .replace(/-----BEGIN [A-Z ]+-----/g, "")
    .replace(/-----END [A-Z ]+-----/g, "")
    .replace(/\s/g, "");
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes.buffer;
}

/** Import an RSA private key (PEM) for signing */
async function importPrivateKey(pem: string): Promise<CryptoKey> {
  // Replace literal \n with real newlines (Cloudflare env vars store them escaped)
  const normalizedPem = pem.replace(/\\n/g, "\n");
  const keyData = pemToArrayBuffer(normalizedPem);
  return crypto.subtle.importKey(
    "pkcs8",
    keyData,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"],
  );
}

/* ── JWT creation ────────────────────────────────── */

export async function getAccessToken(env: Env): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    scope: "https://www.googleapis.com/auth/calendar",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  };

  const encodedHeader = base64url(str2ab(JSON.stringify(header)));
  const encodedPayload = base64url(str2ab(JSON.stringify(payload)));
  const signingInput = `${encodedHeader}.${encodedPayload}`;

  const key = await importPrivateKey(env.GOOGLE_PRIVATE_KEY);
  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    key,
    str2ab(signingInput),
  );
  const encodedSignature = base64url(signature);
  const jwt = `${signingInput}.${encodedSignature}`;

  // Exchange JWT for access token
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Google token exchange failed (${res.status}): ${text}`);
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
