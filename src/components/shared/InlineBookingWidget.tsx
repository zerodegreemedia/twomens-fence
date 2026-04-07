import { useState, useMemo, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  Home,
  ArrowRight,
  CheckCircle,
  Loader2,
  Calendar,
  Clock,
  AlertCircle,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";
import {
  fetchAvailability,
  submitBooking,
  generateFallbackSlots,
  type TimeSlot,
} from "@/lib/calendar-api";

/* ──────────────────────────────────────────────
   Types & Constants
   ────────────────────────────────────────────── */
type ServiceType = "phone" | "estimate";
type Step = "service" | "date" | "time" | "info" | "confirm";

const SERVICES = [
  {
    id: "phone" as const,
    icon: Phone,
    title: "Phone Consultation",
    duration: "15 min",
    desc: "Quick call to discuss your needs",
  },
  {
    id: "estimate" as const,
    icon: Home,
    title: "In-Home Estimate",
    duration: "45 min",
    desc: "We measure & quote on-site, free",
  },
];

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/** Format Date to YYYY-MM-DD */
function toDateStr(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function isDisabled(date: Date): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date < today || date.getDay() === 0;
}

/* ──────────────────────────────────────────────
   Component
   ────────────────────────────────────────────── */
export function InlineBookingWidget() {
  const [step, setStep] = useState<Step>("service");
  const [service, setService] = useState<ServiceType | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [calMonth, setCalMonth] = useState(new Date().getMonth());
  const [calYear, setCalYear] = useState(new Date().getFullYear());
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [info, setInfo] = useState({ name: "", phone: "", email: "", address: "", notes: "" });
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [slotsSource, setSlotsSource] = useState<"google-calendar" | "fallback" | null>(null);
  const [calendarSynced, setCalendarSynced] = useState(false);

  const calendarDays = useMemo(() => {
    const firstDay = new Date(calYear, calMonth, 1).getDay();
    const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
    const grid: (Date | null)[] = [];
    for (let i = 0; i < firstDay; i++) grid.push(null);
    for (let d = 1; d <= daysInMonth; d++) grid.push(new Date(calYear, calMonth, d));
    return grid;
  }, [calMonth, calYear]);

  const selectedServiceData = SERVICES.find((s) => s.id === service);

  /** Fetch available slots from API (with fallback) when a date is selected. */
  const loadSlots = useCallback(async (date: Date, svc: ServiceType) => {
    const dateStr = toDateStr(date);
    setSlotsLoading(true);
    setAvailableSlots([]);
    setSlotsSource(null);
    try {
      const res = await fetchAvailability(dateStr, svc);
      setAvailableSlots(res.slots);
      setSlotsSource(res.source);
    } catch {
      // API unreachable — use local fallback
      const fallback = generateFallbackSlots(dateStr, svc);
      setAvailableSlots(fallback);
      setSlotsSource("fallback");
    } finally {
      setSlotsLoading(false);
    }
  }, []);

  function prevMonth() {
    if (calMonth === 0) { setCalMonth(11); setCalYear(calYear - 1); }
    else setCalMonth(calMonth - 1);
  }
  function nextMonth() {
    if (calMonth === 11) { setCalMonth(0); setCalYear(calYear + 1); }
    else setCalMonth(calMonth + 1);
  }

  function goBack() {
    const order: Step[] = ["service", "date", "time", "info", "confirm"];
    const idx = order.indexOf(step);
    if (idx > 0) setStep(order[idx - 1]);
  }

  async function handleSubmit() {
    if (!service || !selectedDate || !selectedTime) return;
    setStatus("loading");
    try {
      const res = await submitBooking({
        name: info.name,
        phone: info.phone,
        email: info.email || undefined,
        address: info.address || undefined,
        notes: info.notes || undefined,
        service,
        date: toDateStr(selectedDate),
        time: selectedTime,
        sourcePage: "home-inline-booking",
      });
      setCalendarSynced(res.calendar.synced);
      setStatus("success");
      setStep("confirm");
    } catch {
      setStatus("error");
    }
  }

  const canGoBack = step !== "service" && step !== "confirm";

  const slide = {
    initial: { opacity: 0, x: 16 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -16 },
    transition: { duration: 0.25 },
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl overflow-hidden">
      {/* Progress dots */}
      <div className="flex gap-1.5 px-6 pt-5">
        {(["service", "date", "time", "info"] as Step[]).map((s, i) => (
          <div
            key={s}
            className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
              (["service", "date", "time", "info", "confirm"] as Step[]).indexOf(step) >= i
                ? "bg-action"
                : "bg-white/10"
            }`}
          />
        ))}
      </div>

      <div className="p-6">
        {/* Back button */}
        {canGoBack && (
          <button
            onClick={goBack}
            className="flex items-center gap-1 text-xs text-white/40 hover:text-white/70 mb-4 transition-colors"
          >
            <ChevronLeft size={14} />
            Back
          </button>
        )}

        <AnimatePresence mode="wait">
          {/* ═══ Step 1: Service ═══ */}
          {step === "service" && (
            <motion.div key="service" {...slide}>
              <h3 className="text-white font-bold text-lg mb-4">Choose a Service</h3>
              <div className="space-y-3">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => { setService(s.id); setStep("date"); }}
                    className="w-full text-left rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 hover:border-white/20 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-trust/15 flex items-center justify-center shrink-0">
                        <s.icon size={18} className="text-trust" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-white font-semibold text-sm">{s.title}</span>
                          <span className="text-xs font-medium text-action bg-action/15 px-2 py-0.5 rounded-full">
                            {s.duration}
                          </span>
                        </div>
                        <p className="text-xs text-white/40 mt-0.5">{s.desc}</p>
                      </div>
                      <ArrowRight size={14} className="text-white/20 group-hover:text-white/50 shrink-0 transition-colors" />
                    </div>
                  </button>
                ))}
              </div>
              <p className="mt-4 text-xs text-white/25 text-center">Both services are free — no obligation.</p>
            </motion.div>
          )}

          {/* ═══ Step 2: Date ═══ */}
          {step === "date" && (
            <motion.div key="date" {...slide}>
              <h3 className="text-white font-bold text-lg mb-1">Pick a Date</h3>
              <p className="text-xs text-white/40 mb-4">
                {selectedServiceData?.title} · {selectedServiceData?.duration}
              </p>

              {/* Calendar */}
              <div className="rounded-xl border border-white/10 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 bg-white/5">
                  <button onClick={prevMonth} className="p-1 hover:bg-white/10 rounded transition-colors text-white/50 hover:text-white">
                    <ChevronLeft size={16} />
                  </button>
                  <span className="text-white font-semibold text-sm">{MONTHS[calMonth]} {calYear}</span>
                  <button onClick={nextMonth} className="p-1 hover:bg-white/10 rounded transition-colors text-white/50 hover:text-white">
                    <ChevronRight size={16} />
                  </button>
                </div>
                <div className="grid grid-cols-7 text-center text-[10px] font-semibold text-white/25 py-2">
                  {DAYS.map((d) => <div key={d}>{d}</div>)}
                </div>
                <div className="grid grid-cols-7 text-center px-1 pb-2 gap-0.5">
                  {calendarDays.map((date, i) => {
                    if (!date) return <div key={`e${i}`} />;
                    const disabled = isDisabled(date);
                    const isToday = date.toDateString() === new Date().toDateString();
                    const isSelected = selectedDate?.toDateString() === date.toDateString();
                    return (
                      <button
                        key={date.toISOString()}
                        disabled={disabled}
                        onClick={() => { setSelectedDate(date); setSelectedTime(null); setStep("time"); loadSlots(date, service!); }}
                        className={`py-1.5 rounded-md text-xs font-medium transition-all ${
                          disabled
                            ? "text-white/10 cursor-not-allowed"
                            : isSelected
                            ? "bg-action text-foreground font-bold"
                            : isToday
                            ? "text-action hover:bg-white/10"
                            : "text-white/60 hover:bg-white/10"
                        }`}
                      >
                        {date.getDate()}
                      </button>
                    );
                  })}
                </div>
              </div>
              <p className="mt-3 text-[10px] text-white/20 text-center">
                {COMPANY.hours} · Sundays closed
              </p>
            </motion.div>
          )}

          {/* ═══ Step 3: Time ═══ */}
          {step === "time" && selectedDate && (
            <motion.div key="time" {...slide}>
              <h3 className="text-white font-bold text-lg mb-1">Pick a Time</h3>
              <p className="text-xs text-white/40 mb-4">
                {selectedDate.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
                {" "}· {selectedServiceData?.title}
              </p>

              {slotsLoading ? (
                <div className="flex items-center justify-center py-8 gap-2 text-white/40">
                  <Loader2 size={18} className="animate-spin" />
                  <span className="text-sm">Checking availability…</span>
                </div>
              ) : (
                <>
                  {slotsSource === "fallback" && (
                    <div className="flex items-center gap-2 text-[10px] text-amber-400/70 bg-amber-400/10 rounded-lg px-3 py-2 mb-3">
                      <AlertCircle size={12} className="shrink-0" />
                      <span>Live availability unavailable. Showing all business-hours slots — we'll confirm within the hour.</span>
                    </div>
                  )}
                  <div className="grid grid-cols-3 gap-2 max-h-[240px] overflow-y-auto pr-1">
                    {availableSlots.map((slot) => (
                      <button
                        key={slot.label}
                        onClick={() => { setSelectedTime(slot.label); setStep("info"); }}
                        className={`py-2 rounded-lg border text-xs font-semibold transition-all ${
                          selectedTime === slot.label
                            ? "border-action bg-action/20 text-action"
                            : "border-white/10 bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/70"
                        }`}
                      >
                        {slot.label}
                      </button>
                    ))}
                  </div>
                  {availableSlots.length === 0 && (
                    <p className="text-center text-white/30 py-6 text-sm">
                      No slots this day. Pick another date.
                    </p>
                  )}
                </>
              )}
            </motion.div>
          )}

          {/* ═══ Step 4: Info ═══ */}
          {step === "info" && (
            <motion.div key="info" {...slide}>
              <h3 className="text-white font-bold text-lg mb-1">Your Info</h3>
              <p className="text-xs text-white/40 mb-4">
                {selectedServiceData?.title} ·{" "}
                {selectedDate?.toLocaleDateString("en-US", { month: "short", day: "numeric" })} at {selectedTime}
              </p>
              <div className="space-y-3">
                <input
                  value={info.name}
                  onChange={(e) => setInfo({ ...info, name: e.target.value })}
                  placeholder="Full Name *"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-action/40 focus:border-action transition-colors"
                />
                <input
                  type="tel"
                  value={info.phone}
                  onChange={(e) => setInfo({ ...info, phone: e.target.value })}
                  placeholder="Phone *"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-action/40 focus:border-action transition-colors"
                />
                <input
                  type="email"
                  value={info.email}
                  onChange={(e) => setInfo({ ...info, email: e.target.value })}
                  placeholder="Email"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-action/40 focus:border-action transition-colors"
                />
                {service === "estimate" && (
                  <input
                    value={info.address}
                    onChange={(e) => setInfo({ ...info, address: e.target.value })}
                    placeholder="Property Address *"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-action/40 focus:border-action transition-colors"
                  />
                )}
                {/* Honeypot */}
                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                {status === "error" && (
                  <p className="text-xs text-red-400 bg-red-400/10 rounded-lg p-2">
                    Something went wrong. Try again or call {COMPANY.phone}.
                  </p>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={!info.name || !info.phone || (service === "estimate" && !info.address) || status === "loading"}
                  className="w-full bg-action hover:bg-action-glow text-foreground font-semibold py-3 rounded-lg text-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-action/25"
                >
                  {status === "loading" ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 size={16} className="animate-spin" /> Confirming...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Confirm Booking <ArrowRight size={16} />
                    </span>
                  )}
                </button>
              </div>
            </motion.div>
          )}

          {/* ═══ Step 5: Confirmation ═══ */}
          {step === "confirm" && (
            <motion.div key="confirm" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
              <div className="text-center py-4">
                <div className="w-12 h-12 rounded-full bg-trust/15 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={24} className="text-trust" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">You&apos;re All Set!</h3>
                <p className="text-xs text-white/40 mb-5">
                  {calendarSynced
                    ? <>Your {selectedServiceData?.title?.toLowerCase()} has been added to our calendar.</>
                    : <>We&apos;ll confirm your {selectedServiceData?.title?.toLowerCase()} within the hour.</>
                  }
                </p>
                <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-left space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-trust shrink-0" />
                    <span className="text-xs text-white/70">
                      {selectedDate?.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-trust shrink-0" />
                    <span className="text-xs text-white/70">{selectedTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {service === "phone" ? <Phone size={14} className="text-trust shrink-0" /> : <Home size={14} className="text-trust shrink-0" />}
                    <span className="text-xs text-white/70">{selectedServiceData?.title}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
