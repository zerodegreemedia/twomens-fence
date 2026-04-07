/**
 * Client-side helpers for the Google Calendar booking API.
 * Calls Cloudflare Pages Functions at /api/calendar/*.
 *
 * Graceful fallback: if the API is unreachable or misconfigured,
 * the frontend falls back to showing all business-hours slots.
 */

export interface TimeSlot {
  start: string;   // "2025-07-15T09:00:00"
  end: string;     // "2025-07-15T10:00:00"
  label: string;   // "9:00 AM"
}

export interface AvailabilityResponse {
  date: string;
  service: string;
  slots: TimeSlot[];
  source: "google-calendar" | "fallback";
  warning?: string;
}

export interface BookingRequest {
  name: string;
  phone: string;
  email?: string;
  address?: string;
  notes?: string;
  service: "phone" | "estimate";
  date: string;      // YYYY-MM-DD
  time: string;      // "9:00 AM"
  sourcePage?: string;
}

export interface BookingResponse {
  success: boolean;
  calendar: { eventId?: string; synced: boolean; error?: string };
  formNotification: boolean;
}

const API_BASE = "/api/calendar";

/**
 * Fetch available time slots for a given date and service type.
 * Returns { slots, source } — source indicates whether Google Calendar
 * was consulted or we fell back to hard-coded business hours.
 */
export async function fetchAvailability(
  date: string,
  service: "phone" | "estimate",
): Promise<AvailabilityResponse> {
  const res = await fetch(
    `${API_BASE}/availability?date=${encodeURIComponent(date)}&service=${encodeURIComponent(service)}`,
  );
  if (!res.ok) throw new Error(`Availability API returned ${res.status}`);
  return res.json() as Promise<AvailabilityResponse>;
}

/**
 * Submit a booking — creates a Google Calendar event and sends
 * the Formspree notification email.
 */
export async function submitBooking(data: BookingRequest): Promise<BookingResponse> {
  const res = await fetch(`${API_BASE}/book`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`Booking API returned ${res.status}`);
  return res.json() as Promise<BookingResponse>;
}

/* ── Local fallback slot generator ───────────────── */

/** Generate slots purely from business hours (no calendar check). */
export function generateFallbackSlots(
  date: string,
  service: "phone" | "estimate",
): TimeSlot[] {
  const d = new Date(`${date}T12:00:00`);
  const day = d.getDay();
  if (day === 0) return [];

  const startHour = day === 6 ? 8 : 7;
  const endHour = day === 6 ? 16 : 18;
  const durationMin = service === "phone" ? 30 : 60;
  const intervalMin = service === "phone" ? 30 : 60;

  const slots: TimeSlot[] = [];
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

      slots.push({ start: startISO, end: endISO, label: `${hour12}:${minStr} ${ampm}` });
    }
  }
  return slots;
}
