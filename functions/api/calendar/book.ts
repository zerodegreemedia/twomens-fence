/**
 * POST /api/calendar/book
 *
 * Creates a Google Calendar event for the booking AND forwards
 * the form data to Formspree (so email notifications still work).
 */
import type { Env as GoogleEnv } from "./_google-auth";
import { createCalendarEvent } from "./_google-auth";
import { sendConfirmationEmail } from "./_send-email";

interface Env extends GoogleEnv {
  RESEND_API_KEY: string;
}

interface BookingPayload {
  name: string;
  phone: string;
  email?: string;
  address?: string;
  notes?: string;
  service: "phone" | "estimate";
  date: string;     // YYYY-MM-DD
  time: string;     // "9:00 AM"
  sourcePage?: string;
}

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpqoyegv";

/* ── Parse 12h time string to 24h components ─────── */

function parseTime(time: string): { hour: number; minute: number } {
  const match = time.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) throw new Error(`Invalid time format: ${time}`);
  let hour = parseInt(match[1], 10);
  const minute = parseInt(match[2], 10);
  const period = match[3].toUpperCase();
  if (period === "PM" && hour !== 12) hour += 12;
  if (period === "AM" && hour === 12) hour = 0;
  return { hour, minute };
}

/* ── Handler ─────────────────────────────────────── */

export const onRequestOptions: PagesFunction<Env> = async () => {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  let body: BookingPayload;
  try {
    body = (await context.request.json()) as BookingPayload;
  } catch {
    return new Response(
      JSON.stringify({ error: "Invalid JSON body" }),
      { status: 400, headers: { "Content-Type": "application/json", ...CORS_HEADERS } },
    );
  }

  const { name, phone, email, address, notes, service, date, time, sourcePage } = body;

  if (!name || !phone || !service || !date || !time) {
    return new Response(
      JSON.stringify({ error: "Missing required fields: name, phone, service, date, time" }),
      { status: 400, headers: { "Content-Type": "application/json", ...CORS_HEADERS } },
    );
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return new Response(
      JSON.stringify({ error: "Invalid date format. Use YYYY-MM-DD." }),
      { status: 400, headers: { "Content-Type": "application/json", ...CORS_HEADERS } },
    );
  }

  if (!["phone", "estimate"].includes(service)) {
    return new Response(
      JSON.stringify({ error: "Invalid service. Use 'phone' or 'estimate'." }),
      { status: 400, headers: { "Content-Type": "application/json", ...CORS_HEADERS } },
    );
  }

  // Build ISO date-times
  const { hour, minute } = parseTime(time);
  const durationMin = service === "phone" ? 30 : 60;
  const startDT = `${date}T${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:00`;
  const endTotalMin = hour * 60 + minute + durationMin;
  const endH = Math.floor(endTotalMin / 60);
  const endM = endTotalMin % 60;
  const endDT = `${date}T${String(endH).padStart(2, "0")}:${String(endM).padStart(2, "0")}:00`;

  const serviceLabel = service === "phone" ? "Phone Consultation" : "Free In-Home Estimate";
  const dateObj = new Date(`${date}T12:00:00`);
  const dateStr = dateObj.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // Prepare results
  let calendarResult: { eventId: string; htmlLink: string } | null = null;
  let calendarError: string | null = null;

  // 1) Create Google Calendar event
  try {
    calendarResult = await createCalendarEvent(context.env, {
      summary: `${serviceLabel} — ${name}`,
      description: [
        `Customer: ${name}`,
        `Phone: ${phone}`,
        email ? `Email: ${email}` : null,
        address ? `Address: ${address}` : null,
        notes ? `Notes: ${notes}` : null,
        `\nBooked via: ${sourcePage || "website"}`,
      ]
        .filter(Boolean)
        .join("\n"),
      startDateTime: startDT,
      endDateTime: endDT,
      attendeeEmail: email || undefined,
      location: address || undefined,
    });
  } catch (err) {
    calendarError = err instanceof Error ? err.message : String(err);
    console.error("Failed to create calendar event:", calendarError);
  }

  // 2) Forward to Formspree (always, even if calendar fails)
  let formspreeOk = false;
  try {
    const formRes = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name,
        phone,
        email: email || "",
        address: address || "",
        serviceType: serviceLabel,
        description: `Booking: ${serviceLabel} on ${dateStr} at ${time}.\n\nAddress: ${address || "N/A"}\nNotes: ${notes || "None"}`,
        preferredContact: "phone",
        sourcePage: sourcePage || "booking-api",
        _gotcha: "",
      }),
    });
    formspreeOk = formRes.ok;
  } catch (err) {
    console.error("Formspree submission failed:", err);
  }

  // 3) Send confirmation email to customer (if email provided)
  let emailSent = false;
  if (email && context.env.RESEND_API_KEY) {
    try {
      const durationLabel = service === "phone" ? "15 min" : "45 min";
      const result = await sendConfirmationEmail(context.env.RESEND_API_KEY, {
        to: email,
        customerName: name,
        serviceLabel,
        dateFormatted: dateStr,
        time,
        duration: durationLabel,
        address: address || undefined,
        startISO: startDT,
        endISO: endDT,
      });
      emailSent = result.success;
      if (!result.success) {
        console.error("Confirmation email failed:", result.error);
      }
    } catch (err) {
      console.error("Confirmation email error:", err);
    }
  }

  return new Response(
    JSON.stringify({
      success: true,
      calendar: calendarResult
        ? { eventId: calendarResult.eventId, synced: true }
        : { synced: false, error: calendarError },
      formNotification: formspreeOk,
      confirmationEmail: emailSent,
    }),
    { status: 200, headers: { "Content-Type": "application/json", ...CORS_HEADERS } },
  );
};
