/**
 * Booking confirmation email via Resend.
 * Sends a branded HTML email with "Add to Calendar" buttons
 * (Google Calendar, Apple/Outlook .ics).
 */

export interface ConfirmationEmailParams {
  to: string;
  customerName: string;
  serviceLabel: string;       // "Phone Consultation" or "Free In-Home Estimate"
  dateFormatted: string;      // "Monday, April 14, 2026"
  time: string;               // "9:00 AM"
  duration: string;           // "15 min" or "45 min"
  address?: string;
  startISO: string;           // "2026-04-14T09:00:00"
  endISO: string;             // "2026-04-14T09:45:00"
}

/* ── .ics generation ──────────────────────────────── */

function toICSDate(iso: string): string {
  // Convert "2026-04-14T09:00:00" → "20260414T090000"
  return iso.replace(/[-:]/g, "").replace(/\.\d+/, "");
}

function generateICS(p: ConfirmationEmailParams): string {
  const uid = `${Date.now()}@twomensfence.com`;
  const now = new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//TWO MEN Fence//Booking//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:REQUEST",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${now}`,
    `DTSTART;TZID=America/New_York:${toICSDate(p.startISO)}`,
    `DTEND;TZID=America/New_York:${toICSDate(p.endISO)}`,
    `SUMMARY:${p.serviceLabel} — TWO MEN Fence`,
    `DESCRIPTION:Your ${p.serviceLabel.toLowerCase()} with TWO MEN Fence & Construction.\\nPhone: (610) 212-7123`,
    p.address ? `LOCATION:${p.address}` : "",
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
  ].filter(Boolean);
  return lines.join("\r\n");
}

/* ── Google Calendar link ─────────────────────────── */

function googleCalendarUrl(p: ConfirmationEmailParams): string {
  const start = toICSDate(p.startISO);
  const end = toICSDate(p.endISO);
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `${p.serviceLabel} — TWO MEN Fence`,
    dates: `${start}/${end}`,
    ctz: "America/New_York",
    details: `Your ${p.serviceLabel.toLowerCase()} with TWO MEN Fence & Construction.\nPhone: (610) 212-7123`,
    ...(p.address ? { location: p.address } : {}),
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/* ── HTML email template ──────────────────────────── */

function buildEmailHTML(p: ConfirmationEmailParams, icsBase64: string): string {
  const gcalUrl = googleCalendarUrl(p);
  const icsDataUri = `data:text/calendar;base64,${icsBase64}`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Booking Confirmed</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">

          <!-- Header -->
          <tr>
            <td style="background-color:#1a2332;padding:32px 32px 24px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.3px;">TWO MEN Fence &amp; Construction</h1>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.6);font-size:13px;">New Castle, DE &middot; (610) 212-7123</p>
            </td>
          </tr>

          <!-- Green confirmation bar -->
          <tr>
            <td style="background-color:#22c55e;padding:16px 32px;text-align:center;">
              <p style="margin:0;color:#ffffff;font-size:16px;font-weight:600;">&#10003; Booking Confirmed</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px;">
              <p style="margin:0 0 20px;color:#374151;font-size:15px;line-height:1.6;">
                Hi <strong>${p.customerName}</strong>,
              </p>
              <p style="margin:0 0 24px;color:#374151;font-size:15px;line-height:1.6;">
                Your <strong>${p.serviceLabel.toLowerCase()}</strong> with TWO MEN Fence has been confirmed. Here are the details:
              </p>

              <!-- Appointment card -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;margin-bottom:24px;">
                <tr>
                  <td style="padding:20px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:6px 0;color:#6b7280;font-size:13px;width:90px;vertical-align:top;">Service</td>
                        <td style="padding:6px 0;color:#111827;font-size:14px;font-weight:600;">${p.serviceLabel}</td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;color:#6b7280;font-size:13px;vertical-align:top;">Date</td>
                        <td style="padding:6px 0;color:#111827;font-size:14px;font-weight:600;">${p.dateFormatted}</td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;color:#6b7280;font-size:13px;vertical-align:top;">Time</td>
                        <td style="padding:6px 0;color:#111827;font-size:14px;font-weight:600;">${p.time} (${p.duration})</td>
                      </tr>
                      ${p.address ? `<tr>
                        <td style="padding:6px 0;color:#6b7280;font-size:13px;vertical-align:top;">Address</td>
                        <td style="padding:6px 0;color:#111827;font-size:14px;font-weight:600;">${p.address}</td>
                      </tr>` : ""}
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Add to Calendar buttons -->
              <p style="margin:0 0 12px;color:#6b7280;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Add to your calendar</p>
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="padding-right:8px;">
                    <a href="${gcalUrl}" target="_blank" style="display:inline-block;padding:10px 18px;background-color:#1a73e8;color:#ffffff;font-size:13px;font-weight:600;text-decoration:none;border-radius:6px;">
                      Google Calendar
                    </a>
                  </td>
                  <td>
                    <a href="${icsDataUri}" download="twomens-fence-booking.ics" style="display:inline-block;padding:10px 18px;background-color:#374151;color:#ffffff;font-size:13px;font-weight:600;text-decoration:none;border-radius:6px;">
                      Apple / Outlook
                    </a>
                  </td>
                </tr>
              </table>

              <!-- What to expect -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #e5e7eb;padding-top:20px;">
                <tr>
                  <td>
                    <p style="margin:0 0 8px;color:#111827;font-size:14px;font-weight:600;">What to expect</p>
                    <p style="margin:0;color:#6b7280;font-size:13px;line-height:1.6;">
                      ${p.serviceLabel === "Phone Consultation"
                        ? "We'll call you at your scheduled time to discuss your fencing needs and give you a rough estimate."
                        : "Oscar or Anna will visit your property to measure, discuss options, and provide a free written quote on the spot. No obligation — just honest pricing."}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f9fafb;border-top:1px solid #e5e7eb;padding:24px 32px;text-align:center;">
              <p style="margin:0 0 6px;color:#6b7280;font-size:13px;">
                Need to reschedule? Call us at <a href="tel:+16102127123" style="color:#1a73e8;text-decoration:none;font-weight:600;">(610) 212-7123</a>
              </p>
              <p style="margin:0;color:#9ca3af;font-size:12px;">
                TWO MEN Fence &amp; Construction &middot; New Castle, DE 19720
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/* ── Send via Resend API ──────────────────────────── */

export async function sendConfirmationEmail(
  resendApiKey: string,
  params: ConfirmationEmailParams,
): Promise<{ success: boolean; error?: string }> {
  const icsContent = generateICS(params);
  const icsBase64 = btoa(icsContent);
  const html = buildEmailHTML(params, icsBase64);

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "TWO MEN Fence <bookings@send.twomensfence.com>",
        to: [params.to],
        subject: `Confirmed: ${params.serviceLabel} on ${params.dateFormatted}`,
        html,
        attachments: [
          {
            filename: "twomens-fence-booking.ics",
            content: icsBase64,
            content_type: "text/calendar",
          },
        ],
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Resend API error:", res.status, text);
      return { success: false, error: `Resend ${res.status}: ${text}` };
    }

    return { success: true };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("Resend send failed:", msg);
    return { success: false, error: msg };
  }
}
