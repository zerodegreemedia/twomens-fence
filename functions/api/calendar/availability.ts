/**
 * GET /api/calendar/availability?date=YYYY-MM-DD&service=phone|estimate
 *
 * Returns available time slots for the given date, filtered against
 * Google Calendar busy periods.
 */
import type { Env } from "./_google-auth";
import { getBusySlots } from "./_google-auth";

interface CfPagesContext {
  request: Request;
  env: Env;
}

/* ── Business-hours slot generation ──────────────── */

function generateSlots(date: string, service: "phone" | "estimate"): { start: string; end: string; label: string }[] {
  const d = new Date(`${date}T12:00:00`); // avoid TZ shifting
  const day = d.getDay(); // 0=Sun, 6=Sat
  if (day === 0) return []; // Sunday closed

  const startHour = day === 6 ? 8 : 7;
  const endHour = day === 6 ? 16 : 18;
  const durationMin = service === "phone" ? 30 : 60;
  const intervalMin = service === "phone" ? 30 : 60;

  const slots: { start: string; end: string; label: string }[] = [];
  for (let h = startHour; h < endHour; h++) {
    for (let m = 0; m < 60; m += intervalMin) {
      const slotEndTotalMin = h * 60 + m + durationMin;
      if (slotEndTotalMin > endHour * 60) break;

      const startISO = `${date}T${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:00`;
      const endH = Math.floor(slotEndTotalMin / 60);
      const endM = slotEndTotalMin % 60;
      const endISO = `${date}T${String(endH).padStart(2, "0")}:${String(endM).padStart(2, "0")}:00`;

      const hour12 = h > 12 ? h - 12 : h === 0 ? 12 : h;
      const ampm = h >= 12 ? "PM" : "AM";
      const minStr = String(m).padStart(2, "0");
      const label = `${hour12}:${minStr} ${ampm}`;

      slots.push({ start: startISO, end: endISO, label });
    }
  }
  return slots;
}

/* ── Overlap check ───────────────────────────────── */

function slotsOverlap(
  slotStart: string,
  slotEnd: string,
  busyStart: string,
  busyEnd: string,
  date: string,
): boolean {
  // Normalise to comparable timestamps
  const sStart = new Date(`${slotStart.includes("T") ? slotStart : `${date}T${slotStart}`}`).getTime();
  const sEnd = new Date(`${slotEnd.includes("T") ? slotEnd : `${date}T${slotEnd}`}`).getTime();
  const bStart = new Date(busyStart).getTime();
  const bEnd = new Date(busyEnd).getTime();
  return sStart < bEnd && sEnd > bStart;
}

/* ── Handler ─────────────────────────────────────── */

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export const onRequestOptions: PagesFunction<Env> = async () => {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
};

export const onRequestGet: PagesFunction<Env> = async (context: CfPagesContext) => {
  const url = new URL(context.request.url);
  const date = url.searchParams.get("date");
  const service = url.searchParams.get("service") as "phone" | "estimate" | null;

  if (!date || !service || !["phone", "estimate"].includes(service)) {
    return new Response(
      JSON.stringify({ error: "Missing or invalid 'date' (YYYY-MM-DD) or 'service' (phone|estimate) param" }),
      { status: 400, headers: { "Content-Type": "application/json", ...CORS_HEADERS } },
    );
  }

  // Validate date format
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return new Response(
      JSON.stringify({ error: "Invalid date format. Use YYYY-MM-DD." }),
      { status: 400, headers: { "Content-Type": "application/json", ...CORS_HEADERS } },
    );
  }

  const allSlots = generateSlots(date, service);

  try {
    const busySlots = await getBusySlots(context.env, date);

    const available = allSlots.filter(
      (slot) => !busySlots.some((busy) => slotsOverlap(slot.start, slot.end, busy.start, busy.end, date)),
    );

    return new Response(
      JSON.stringify({ date, service, slots: available, source: "google-calendar" }),
      { status: 200, headers: { "Content-Type": "application/json", ...CORS_HEADERS } },
    );
  } catch (err) {
    // Fallback: return all business-hours slots if Google Calendar is unavailable
    console.error("Google Calendar API error, falling back to all slots:", err);
    return new Response(
      JSON.stringify({
        date,
        service,
        slots: allSlots,
        source: "fallback",
        warning: "Could not check calendar availability. Showing all business-hours slots.",
      }),
      { status: 200, headers: { "Content-Type": "application/json", ...CORS_HEADERS } },
    );
  }
};
