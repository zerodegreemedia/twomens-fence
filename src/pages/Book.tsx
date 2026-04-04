import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { SectionBadge } from "@/components/shared/SectionBadge";
import { motion, AnimatePresence } from "framer-motion";

import { COMPANY, FORM_ENDPOINT } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight,
  Phone,
  Home,
  ArrowRight,
  CheckCircle,
  Loader2,
  User,
  Mail,
  MapPin,
} from "lucide-react";

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
    description: "Quick call to discuss your fencing needs and get a rough estimate.",
  },
  {
    id: "estimate" as const,
    icon: Home,
    title: "Free In-Home Estimate",
    duration: "45 min",
    description:
      "We visit your property to measure, discuss options, and provide a free quote on the spot.",
  },
];

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/** Build time slots based on business hours. */
function getTimeSlots(date: Date, service: ServiceType): string[] {
  const day = date.getDay(); // 0=Sun, 6=Sat
  if (day === 0) return []; // Sunday — closed

  const startHour = day === 6 ? 8 : 7; // Sat starts at 8, weekdays at 7
  const endHour = day === 6 ? 16 : 18; // Sat ends at 4pm, weekdays at 6pm
  const interval = service === "phone" ? 30 : 60; // 30-min blocks for calls, 60 for estimates

  const slots: string[] = [];
  for (let h = startHour; h < endHour; h++) {
    for (let m = 0; m < 60; m += interval) {
      if (h === endHour - 1 && m + interval > 60) break;
      const hour12 = h > 12 ? h - 12 : h === 0 ? 12 : h;
      const ampm = h >= 12 ? "PM" : "AM";
      const min = m.toString().padStart(2, "0");
      slots.push(`${hour12}:${min} ${ampm}`);
    }
  }
  return slots;
}

/** Check if a date is in the past or is a Sunday. */
function isDisabled(date: Date): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date < today || date.getDay() === 0;
}

/* ──────────────────────────────────────────────
   Page Component
   ────────────────────────────────────────────── */
export default function Book() {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>("service");
  const [service, setService] = useState<ServiceType | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [calMonth, setCalMonth] = useState(new Date().getMonth());
  const [calYear, setCalYear] = useState(new Date().getFullYear());
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [info, setInfo] = useState({ name: "", phone: "", email: "", address: "", notes: "" });

  /* Calendar grid for the current month view */
  const calendarDays = useMemo(() => {
    const firstDay = new Date(calYear, calMonth, 1).getDay();
    const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
    const grid: (Date | null)[] = [];
    for (let i = 0; i < firstDay; i++) grid.push(null);
    for (let d = 1; d <= daysInMonth; d++) grid.push(new Date(calYear, calMonth, d));
    return grid;
  }, [calMonth, calYear]);

  const timeSlots = useMemo(
    () => (selectedDate && service ? getTimeSlots(selectedDate, service) : []),
    [selectedDate, service]
  );

  const canGoBack = step !== "service";

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

  function handleDateClick(date: Date) {
    setSelectedDate(date);
    setSelectedTime(null);
    setStep("time");
  }

  async function handleSubmit() {
    if (!service || !selectedDate || !selectedTime) return;
    setStatus("loading");

    const serviceLabel = SERVICES.find((s) => s.id === service)?.title ?? service;
    const dateStr = selectedDate.toLocaleDateString("en-US", {
      weekday: "long", month: "long", day: "numeric", year: "numeric",
    });

    try {
      await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: info.name,
          phone: info.phone,
          email: info.email,
          address: info.address,
          serviceType: serviceLabel,
          description: `Booking: ${serviceLabel} on ${dateStr} at ${selectedTime}.\n\nAddress: ${info.address}\nNotes: ${info.notes || "None"}`,
          preferredContact: "phone",
          sourcePage: "/book",
          _gotcha: "",
        }),
      });
      setStatus("success");
      setStep("confirm");
    } catch {
      setStatus("error");
    }
  }

  const selectedServiceData = SERVICES.find((s) => s.id === service);

  return (
    <Layout>
      <SEO
        title="Book an Appointment"
        description="Schedule a free phone consultation or in-home fence estimate with TWOMENS Fence. Pick your date and time online."
        canonicalUrl="https://twomensfence.com/book"
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-authority via-authority-light/50 to-authority" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-14 md:py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <SectionBadge icon={Calendar} label="Book Online" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
          >
            Schedule Your Free Estimate
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            Pick a service, choose your date and time, and we&apos;ll confirm within the hour.
          </motion.p>
        </div>
      </section>

      {/* Booking Widget */}
      <section className="py-16 md:py-24 bg-section-light">
        <div className="max-w-2xl mx-auto px-6">
          {/* Progress bar */}
          <div className="flex items-center gap-2 mb-10">
            {(["service", "date", "time", "info"] as Step[]).map((s, i) => (
              <div key={s} className="flex-1 flex items-center gap-2">
                <div
                  className={`h-1.5 rounded-full flex-1 transition-colors duration-300 ${
                    (["service", "date", "time", "info", "confirm"] as Step[]).indexOf(step) >= i
                      ? "bg-action"
                      : "bg-border"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Back button */}
          {canGoBack && step !== "confirm" && (
            <button
              onClick={goBack}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ChevronLeft size={16} />
              Back
            </button>
          )}

          <AnimatePresence mode="wait">
            {/* ═══ Step 1: Service ═══ */}
            {step === "service" && (
              <motion.div key="service" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Choose a Service</h2>
                <p className="text-muted-foreground mb-8">What would you like to schedule?</p>

                <div className="space-y-4">
                  {SERVICES.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => { setService(s.id); setStep("date"); }}
                      className={`w-full text-left rounded-xl border-2 p-5 transition-all duration-200 hover:shadow-md ${
                        service === s.id
                          ? "border-action bg-action/5 shadow-md"
                          : "border-border bg-white hover:border-trust/40"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-trust/10 flex items-center justify-center shrink-0">
                          <s.icon size={24} className="text-trust" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-bold text-foreground text-lg">{s.title}</h3>
                            <span className="text-sm font-medium text-action bg-action/10 px-3 py-1 rounded-full">
                              {s.duration}
                            </span>
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground">{s.description}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <p className="mt-6 text-sm text-muted-foreground text-center">
                  Both services are completely free — no obligation.
                </p>
              </motion.div>
            )}

            {/* ═══ Step 2: Date ═══ */}
            {step === "date" && (
              <motion.div key="date" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Pick a Date</h2>
                <p className="text-muted-foreground mb-8">
                  {selectedServiceData?.title} &middot; {selectedServiceData?.duration}
                </p>

                {/* Calendar header */}
                <div className="rounded-xl border border-border bg-white shadow-sm overflow-hidden">
                  <div className="flex items-center justify-between px-5 py-4 bg-authority text-white">
                    <button onClick={prevMonth} className="p-1 hover:bg-white/10 rounded transition-colors">
                      <ChevronLeft size={20} />
                    </button>
                    <span className="font-semibold text-lg">{MONTHS[calMonth]} {calYear}</span>
                    <button onClick={nextMonth} className="p-1 hover:bg-white/10 rounded transition-colors">
                      <ChevronRight size={20} />
                    </button>
                  </div>

                  {/* Day headers */}
                  <div className="grid grid-cols-7 text-center text-xs font-semibold text-muted-foreground border-b border-border">
                    {DAYS.map((d) => (
                      <div key={d} className="py-3">{d}</div>
                    ))}
                  </div>

                  {/* Day grid */}
                  <div className="grid grid-cols-7 text-center p-2 gap-1">
                    {calendarDays.map((date, i) => {
                      if (!date) return <div key={`empty-${i}`} />;
                      const disabled = isDisabled(date);
                      const isToday =
                        date.toDateString() === new Date().toDateString();
                      const isSelected =
                        selectedDate?.toDateString() === date.toDateString();

                      return (
                        <button
                          key={date.toISOString()}
                          disabled={disabled}
                          onClick={() => handleDateClick(date)}
                          className={`relative py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                            disabled
                              ? "text-muted-foreground/30 cursor-not-allowed"
                              : isSelected
                              ? "bg-action text-foreground shadow-md shadow-action/25"
                              : "hover:bg-action/10 text-foreground"
                          }`}
                        >
                          {date.getDate()}
                          {isToday && !isSelected && (
                            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-action" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <p className="mt-4 text-xs text-muted-foreground text-center">
                  {COMPANY.hours} &middot; Sundays closed
                </p>
              </motion.div>
            )}

            {/* ═══ Step 3: Time ═══ */}
            {step === "time" && selectedDate && (
              <motion.div key="time" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Pick a Time</h2>
                <p className="text-muted-foreground mb-8">
                  {selectedDate.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
                  {" "}&middot; {selectedServiceData?.title}
                </p>

                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => { setSelectedTime(slot); setStep("info"); }}
                      className={`py-3 px-2 rounded-lg border-2 text-sm font-semibold transition-all duration-200 ${
                        selectedTime === slot
                          ? "border-action bg-action/10 text-foreground shadow-md"
                          : "border-border bg-white hover:border-trust/40 text-foreground hover:shadow-sm"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>

                {timeSlots.length === 0 && (
                  <p className="text-center text-muted-foreground py-8">
                    No available slots for this day. Please pick another date.
                  </p>
                )}
              </motion.div>
            )}

            {/* ═══ Step 4: Contact Info ═══ */}
            {step === "info" && (
              <motion.div key="info" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Your Information</h2>
                <p className="text-muted-foreground mb-8">
                  {selectedServiceData?.title} &middot;{" "}
                  {selectedDate?.toLocaleDateString("en-US", { month: "short", day: "numeric" })} at {selectedTime}
                </p>

                <div className="space-y-5">
                  <div>
                    <Label htmlFor="book-name" className="text-sm font-medium text-foreground flex items-center gap-2 mb-1.5">
                      <User size={14} /> Full Name *
                    </Label>
                    <Input
                      id="book-name"
                      value={info.name}
                      onChange={(e) => setInfo({ ...info, name: e.target.value })}
                      placeholder="John Smith"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="book-phone" className="text-sm font-medium text-foreground flex items-center gap-2 mb-1.5">
                      <Phone size={14} /> Phone *
                    </Label>
                    <Input
                      id="book-phone"
                      type="tel"
                      value={info.phone}
                      onChange={(e) => setInfo({ ...info, phone: e.target.value })}
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="book-email" className="text-sm font-medium text-foreground flex items-center gap-2 mb-1.5">
                      <Mail size={14} /> Email
                    </Label>
                    <Input
                      id="book-email"
                      type="email"
                      value={info.email}
                      onChange={(e) => setInfo({ ...info, email: e.target.value })}
                      placeholder="john@email.com"
                    />
                  </div>

                  {service === "estimate" && (
                    <div>
                      <Label htmlFor="book-address" className="text-sm font-medium text-foreground flex items-center gap-2 mb-1.5">
                        <MapPin size={14} /> Property Address *
                      </Label>
                      <Input
                        id="book-address"
                        value={info.address}
                        onChange={(e) => setInfo({ ...info, address: e.target.value })}
                        placeholder="123 Main St, New Castle, DE 19720"
                        required
                      />
                    </div>
                  )}

                  <div>
                    <Label htmlFor="book-notes" className="text-sm font-medium text-foreground mb-1.5 block">
                      Additional Notes
                    </Label>
                    <textarea
                      id="book-notes"
                      value={info.notes}
                      onChange={(e) => setInfo({ ...info, notes: e.target.value })}
                      rows={3}
                      placeholder="Fence type, yard size, any details..."
                      className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-action/40 focus:border-action transition-colors"
                    />
                  </div>

                  {/* Honeypot */}
                  <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                  {status === "error" && (
                    <p className="text-sm text-red-600 bg-red-50 rounded-lg p-3">
                      Something went wrong. Please try again or call us at {COMPANY.phone}.
                    </p>
                  )}

                  <Button
                    onClick={handleSubmit}
                    disabled={!info.name || !info.phone || (service === "estimate" && !info.address) || status === "loading"}
                    className="w-full bg-action hover:bg-action-glow text-foreground font-semibold h-12 text-base shadow-lg shadow-action/25"
                  >
                    {status === "loading" ? (
                      <><Loader2 size={18} className="animate-spin mr-2" /> Confirming...</>
                    ) : (
                      <>Confirm Booking <ArrowRight size={18} className="ml-2" /></>
                    )}
                  </Button>
                </div>
              </motion.div>
            )}

            {/* ═══ Step 5: Confirmation ═══ */}
            {step === "confirm" && (
              <motion.div key="confirm" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-trust/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} className="text-trust" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">You&apos;re All Set!</h2>
                  <p className="text-muted-foreground max-w-md mx-auto mb-8">
                    We&apos;ve received your booking request. We&apos;ll confirm your{" "}
                    <strong>{selectedServiceData?.title?.toLowerCase()}</strong> within the hour.
                  </p>

                  <div className="rounded-xl border border-border bg-white p-6 text-left max-w-sm mx-auto space-y-3">
                    <div className="flex items-center gap-3">
                      <Calendar size={16} className="text-trust shrink-0" />
                      <span className="text-sm text-foreground font-medium">
                        {selectedDate?.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock size={16} className="text-trust shrink-0" />
                      <span className="text-sm text-foreground font-medium">{selectedTime}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      {service === "phone" ? <Phone size={16} className="text-trust shrink-0" /> : <Home size={16} className="text-trust shrink-0" />}
                      <span className="text-sm text-foreground font-medium">{selectedServiceData?.title}</span>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                    <Button
                      onClick={() => navigate("/")}
                      variant="outline"
                      className="border-border"
                    >
                      Back to Home
                    </Button>
                    <a
                      href={COMPANY.phoneTel}
                      className="inline-flex items-center justify-center h-10 px-4 rounded-md bg-action hover:bg-action-glow text-foreground font-semibold transition-colors"
                    >
                      <Phone size={16} className="mr-2" />
                      Call {COMPANY.phone}
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </Layout>
  );
}
