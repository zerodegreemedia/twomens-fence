import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionBadge } from "@/components/shared/SectionBadge";
import { CTAButton } from "@/components/shared/CTAButton";
import { StatCounter } from "@/components/shared/StatCounter";
import { ContactForm } from "@/components/shared/ContactForm";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield,
  Star,
  Clock,
  Award,
  TreePine,
  Hammer,
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle,
  Quote,
  ChevronRight,
  Fence,
  Users,
  ThumbsUp,
  Wrench,
  Columns3,
  DoorOpen,
  Axe,
  Link2,
  Calendar,
  type LucideIcon,
} from "lucide-react";
import { COMPANY, SERVICES, SERVICE_AREAS, LOCAL_BUSINESS_SCHEMA } from "@/lib/constants";
import { HERO_IMAGES, OG_IMAGE, GALLERY_IMAGES } from "@/lib/images";
import { fadeUp, stagger, VIEWPORT } from "@/lib/animations";

/* ──────────────────────────────────────────────
   Data
   ────────────────────────────────────────────── */
/* Icon map — unique icon per service slug */
const SERVICE_ICON_MAP: Record<string, LucideIcon> = {
  "wood-fencing": TreePine,
  "vinyl-fencing": Columns3,
  "aluminum-fencing": Fence,
  "chain-link-fencing": Link2,
  "deck-building": Hammer,
  "tree-trimming": Axe,
  "fence-repair": Wrench,
  "gate-installation": DoorOpen,
};

const TRUST_BADGES = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Award, label: "5-Star Rated" },
  { icon: Clock, label: "Free Estimates" },
  { icon: TreePine, label: "Locally Owned" },
];

const WHY_US = [
  {
    icon: ThumbsUp,
    title: "18+ Years of Experience",
    desc: "With over 18 years in the business, we've seen it all and built it all - fences, decks, tree trimming, and more.",
  },
  {
    icon: Users,
    title: "Husband & Wife Team",
    desc: "When you call, you talk to the owners - Oscar or Anna. No sales reps, no runaround. Just honest people who care about doing the job right.",
  },
  {
    icon: Shield,
    title: "Licensed, Insured & Warranted",
    desc: "Every job is fully licensed and insured. And every project comes with a warranty - because we stand behind our work, period.",
  },
  {
    icon: Clock,
    title: "On-Time, Every Time",
    desc: "We show up when we say we will. Your project gets a clear timeline and we stick to it - because your time matters.",
  },
];

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    location: "Wilmington, DE",
    text: "Oscar and Anna built a beautiful cedar fence in our backyard. They were professional, clean, and finished ahead of schedule. Couldn't be happier!",
    rating: 5,
  },
  {
    name: "James R.",
    location: "Bear, DE",
    text: "We got quotes from four companies and TWOMENS was the most honest and transparent. The vinyl fence looks incredible and the price was fair. Plus everything comes with a warranty.",
    rating: 5,
  },
  {
    name: "Maria L.",
    location: "Newark, DE",
    text: "They built our deck and trimmed three big trees in the same week. Oscar and Anna run a tight operation - on time, clean, and great work. Highly recommend!",
    rating: 5,
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "Free Estimate", desc: "Call or fill out our form. We'll visit your property, measure, and give you an honest quote - no surprises." },
  { num: "02", title: "Choose Your Project", desc: "Fence, deck, or tree work - we'll help you choose the best fit for your property and budget." },
  { num: "03", title: "Professional Install", desc: "Our crew shows up on time, builds it right, and leaves your property clean. Most jobs done in 1–3 days." },
  { num: "04", title: "Final Walkthrough", desc: "We walk the fence line with you, make sure every detail is perfect, and answer any questions before we leave." },
];


/* ──────────────────────────────────────────────
   Page
   ────────────────────────────────────────────── */
export default function Home() {
  return (
    <Layout>
      <SEO
        title="Fences, Decks & Tree Trimming in Delaware | TWOMENS"
        description="Oscar & Anna - 18+ years building fences, decks, and trimming trees in Delaware & PA. Licensed, insured, every job warranted. Free estimates."
        canonicalUrl="https://twomensfence.com"
        schema={[LOCAL_BUSINESS_SCHEMA, {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": COMPANY.name,
          "url": "https://twomensfence.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://twomensfence.com/services?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }]}
        ogImage={OG_IMAGE}
      />

      {/* ═══════════════════════════════════════
          HERO - Asymmetric with embedded form
          ═══════════════════════════════════════ */}
      <section className="relative bg-authority overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGES[0].path}
            alt={HERO_IMAGES[0].alt}
            width={1920}
            height={1080}
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-authority/95 via-authority/85 to-authority/80" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-trust/8 to-transparent" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-32">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">
            {/* Left — Copy */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div variants={fadeUp} custom={0}>
                <SectionBadge icon={MapPin} label="Serving Delaware & Pennsylvania" />
              </motion.div>

              <motion.h1
                variants={fadeUp}
                custom={1}
                className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
              >
                Fences, Decks & Trees.{" "}
                <span className="text-action">Done Right.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                custom={2}
                className="mt-6 text-lg md:text-xl text-white/60 max-w-xl leading-relaxed"
              >
                Oscar &amp; Anna have been building fences, decks, and trimming
                trees for over 18 years. Husband-and-wife owned, licensed,
                insured, and every job comes with a warranty.
              </motion.p>

              {/* CTA Row */}
              <motion.div
                variants={fadeUp}
                custom={3}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <CTAButton href="/book" size="lg">
                  Get Your Free Estimate
                </CTAButton>
                <CTAButton tel={COMPANY.phoneTel} size="lg" variant="ghost">
                  <Phone size={18} className="mr-2" />
                  {COMPANY.phone}
                </CTAButton>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                variants={fadeUp}
                custom={4}
                className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-4 md:border-0 md:pt-0"
              >
                {TRUST_BADGES.map((b) => (
                  <div
                    key={b.label}
                    className="flex items-center gap-2 text-sm text-white/50"
                  >
                    <b.icon size={16} className="text-trust" />
                    <span>{b.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — Embedded Lead Form */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="mb-4">
                <h2 className="text-white font-bold text-lg">
                  Get Your Free Estimate
                </h2>
                <p className="text-white/50 text-sm">
                  We respond within 24 hours - usually same day.
                </p>
              </div>
              <ContactForm dark />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TRUST BAR - Stats (visually distinct)
          ═══════════════════════════════════════ */}
      <section className="relative bg-section-sage border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter value={COMPANY.yearsExperience} suffix="+" label="Years of Experience" light={false} />
            <StatCounter value={2500} suffix="+" label="Projects Completed" light={false} />
            <StatCounter value={COMPANY.reviewCount} suffix="+" label="5-Star Reviews" light={false} />
            <StatCounter value={15} label="Cities Served" light={false} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES - Light section
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: Hammer, label: "Our Services" }}
            title="Fences, Decks & Tree Trimming"
            subtitle="From classic wood privacy fences to custom decks and professional tree trimming - we handle it all with 18+ years of hands-on experience."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, i) => {
              const Icon = SERVICE_ICON_MAP[service.slug] || Fence;
              return (
                <motion.div
                  key={service.slug}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT}
                  custom={i}
                >
                  <Link
                    to={service.href}
                    className="group block rounded-2xl border border-border bg-white p-6 hover:shadow-xl hover:border-trust/30 transition-all duration-300 h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-trust/10 flex items-center justify-center mb-4 group-hover:bg-trust/20 transition-colors">
                      <Icon size={24} className="text-trust" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-trust transition-colors">
                      {service.label}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center text-sm font-medium text-trust group-hover:gap-2 transition-all">
                      Learn More
                      <ArrowRight size={14} className="ml-1" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Extra services callout */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={fadeUp}
            className="mt-10 text-center"
          >
            <p className="text-muted-foreground">
              We also offer{" "}
              <span className="font-semibold text-foreground">fence repair</span>,{" "}
              <span className="font-semibold text-foreground">gate installation</span>, and more.{" "}
              <Link
                to="/contact"
                className="text-trust font-semibold hover:text-trust-glow transition-colors"
              >
                Contact us for details →
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHY US - Dark section
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-authority relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-authority via-authority-light/40 to-authority" />
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-trust/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: Star, label: "Why Choose Us" }}
            title="The TWOMENS Difference"
            subtitle="We're not a franchise. We're not a call center. We're Oscar and Anna - a husband-and-wife team with 18 years of experience and a reputation built on doing things right."
            light
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_US.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                custom={i}
                className="rounded-2xl bg-white/[0.06] border border-white/10 p-6 hover:bg-white/[0.10] hover:border-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-action/15 flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-action" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROCESS - Warm tinted section
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-section-warm">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: CheckCircle, label: "Our Process" }}
            title="How It Works"
            subtitle="From first call to final walkthrough - we keep it simple, transparent, and stress-free."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                custom={i}
                className="relative"
              >
                {/* Connector line */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%_-_16px)] w-[calc(100%_-_48px)] h-px bg-border" />
                )}
                <div className="text-5xl font-extrabold text-trust/15 mb-3">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={fadeUp}
            className="mt-12 text-center"
          >
            <CTAButton href="/contact" size="lg">
              Start Your Free Estimate
              <ArrowRight size={16} className="ml-2" />
            </CTAButton>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TESTIMONIALS - Dark section (different gradient)
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-authority relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tl from-authority-light/20 via-transparent to-authority" />
        <div className="relative max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: Quote, label: "What Customers Say" }}
            title="Trusted by Homeowners Across Delaware"
            light
          />

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                custom={i}
                className="rounded-2xl bg-white/[0.06] border border-white/10 p-6 hover:bg-white/[0.09] transition-colors duration-300"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      className="text-action fill-action"
                    />
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={fadeUp}
            className="mt-10 text-center"
          >
            <p className="text-white/40 text-sm">
              {COMPANY.rating} stars from {COMPANY.reviewCount}+ reviews on Google
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          GALLERY PREVIEW - Light
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: Award, label: "Our Work" }}
            title="Recent Projects"
            subtitle="Fences, decks, tree work - every project is different. Here's a look at some of our recent work across Delaware and Pennsylvania."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY_IMAGES.slice(0, 6).map((img, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                custom={i}
                className="aspect-[4/3] rounded-xl border border-border overflow-hidden group cursor-pointer"
              >
                <img
                  src={img.path}
                  alt={img.alt}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={fadeUp}
            className="mt-10 text-center"
          >
            <CTAButton href="/gallery">
              View Full Gallery
              <ChevronRight size={16} className="ml-1" />
            </CTAButton>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICE AREAS - Dark (authority-light base)
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-authority-light">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: MapPin, label: "Areas We Serve" }}
            title="Serving a 2-Hour Radius"
            subtitle="Based in New Castle, DE (19720) - serving Delaware and southeastern Pennsylvania within a 2-hour drive."
            light
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {SERVICE_AREAS.map((area, i) => (
              <motion.div
                key={area.slug}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                custom={i}
              >
                <Link
                  to={area.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-trust/30 transition-all duration-300 group"
                >
                  <MapPin
                    size={16}
                    className="text-trust shrink-0 group-hover:text-trust-glow transition-colors"
                  />
                  <div>
                    <span className="text-sm font-medium text-white group-hover:text-white transition-colors">
                      {area.city}
                    </span>
                    <span className="text-xs text-white/30 ml-1">
                      {area.stateAbbr}
                    </span>
                  </div>
                  {area.driveTime !== "HQ" && (
                    <span className="ml-auto text-xs text-white/20">
                      {area.driveTime}
                    </span>
                  )}
                  {area.driveTime === "HQ" && (
                    <span className="ml-auto text-[10px] font-semibold text-action bg-action/10 px-2 py-0.5 rounded-full">
                      HQ
                    </span>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SCHEDULE ESTIMATE - Book online
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-authority overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Copy */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              variants={stagger}
            >
              <motion.div variants={fadeUp} custom={0}>
                <SectionBadge icon={Calendar} label="Book Online" />
              </motion.div>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="mt-6 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight"
              >
                Schedule Your{" "}
                <span className="text-action">Free Estimate</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="mt-5 text-lg text-white/55 leading-relaxed max-w-lg"
              >
                Skip the phone tag. Pick a date and time that works for you, and
                we&apos;ll confirm within the hour. No obligation, no pressure.
              </motion.p>
              <motion.ul
                variants={fadeUp}
                custom={3}
                className="mt-8 space-y-4"
              >
                {[
                  { icon: Phone, text: "Phone Consultation — 15 min quick call" },
                  { icon: MapPin, text: "In-Home Estimate — we come to you, free" },
                  { icon: Clock, text: "Same-week availability, Mon–Sat" },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-trust/15 flex items-center justify-center shrink-0">
                      <item.icon size={16} className="text-trust" />
                    </div>
                    <span className="text-sm font-medium text-white/70">{item.text}</span>
                  </li>
                ))}
              </motion.ul>
              <motion.div
                variants={fadeUp}
                custom={4}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <CTAButton href="/book" size="lg">
                  <Calendar size={18} className="mr-2" />
                  Book Your Estimate
                </CTAButton>
                <CTAButton tel={COMPANY.phoneTel} size="lg" variant="ghost">
                  <Phone size={18} className="mr-2" />
                  {COMPANY.phone}
                </CTAButton>
              </motion.div>
            </motion.div>

            {/* Right — Visual calendar preview */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-bold text-lg">Pick a Date</h3>
                  <span className="text-sm text-white/40">April 2026</span>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center text-xs font-semibold text-white/30 mb-3">
                  {["Su","Mo","Tu","We","Th","Fr","Sa"].map((d) => <div key={d}>{d}</div>)}
                </div>
                <div className="grid grid-cols-7 gap-2 text-center">
                  {Array.from({ length: 2 }, (_, i) => (
                    <div key={`e${i}`} />
                  ))}
                  {Array.from({ length: 30 }, (_, i) => {
                    const day = i + 1;
                    const col = (i + 2) % 7; // 0=Sun
                    const isSunday = col === 0;
                    const isHighlighted = day === 9 || day === 15 || day === 22;
                    return (
                      <div
                        key={day}
                        className={`py-2 rounded-lg text-sm font-medium transition-colors ${
                          isSunday
                            ? "text-white/15"
                            : isHighlighted
                            ? "bg-action text-foreground font-bold"
                            : "text-white/60 hover:bg-white/10"
                        }`}
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-xs text-white/30 mb-3">Available times — Wed, Apr 9</p>
                  <div className="flex flex-wrap gap-2">
                    {["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM"].map((t, i) => (
                      <span
                        key={t}
                        className={`px-3 py-1.5 rounded-md text-xs font-semibold ${
                          i === 1
                            ? "bg-action text-foreground"
                            : "bg-white/10 text-white/50"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOTTOM CTA - Sage tinted with form
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-section-sage">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionBadge icon={Phone} label="Get Started Today" />
              <h2 className="mt-6 text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Your New Fence Is One Call Away
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Fill out the form or call us directly - we&apos;ll come to your
                property, measure everything, and give you an honest quote with
                no hidden fees.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Free on-site estimates",
                  "No high-pressure sales",
                  "Written quotes - no surprises",
                  "Most projects done in 1–3 days",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <CheckCircle size={18} className="text-trust shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CTAButton tel={COMPANY.phoneTel} size="lg">
                  <Phone size={18} className="mr-2" />
                  Call {COMPANY.phone}
                </CTAButton>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
