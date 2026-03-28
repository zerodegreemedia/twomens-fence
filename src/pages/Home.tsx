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
} from "lucide-react";
import { COMPANY, SERVICES, SERVICE_AREAS, LOCAL_BUSINESS_SCHEMA } from "@/lib/constants";

/* ──────────────────────────────────────────────
   Animation helpers
   ────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ──────────────────────────────────────────────
   Data
   ────────────────────────────────────────────── */
const TRUST_BADGES = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Award, label: "5-Star Rated" },
  { icon: Clock, label: "Free Estimates" },
  { icon: TreePine, label: "Locally Owned" },
];

const WHY_US = [
  {
    icon: ThumbsUp,
    title: "Quality Craftsmanship",
    desc: "Every fence is built plumb, level, and square — no shortcuts. We use premium materials and proven techniques that stand up to Mid-Atlantic weather.",
  },
  {
    icon: Users,
    title: "Family-Owned Service",
    desc: "When you call, you talk to the owners. No sales reps, no runaround. Just honest people who care about doing the job right.",
  },
  {
    icon: Wrench,
    title: "Full-Service Installation",
    desc: "From permit guidance to final walkthrough, we handle every step. You approve the design — we take care of the rest.",
  },
  {
    icon: Clock,
    title: "On-Time, Every Time",
    desc: "We show up when we say we will. Your project gets a clear timeline and we stick to it — because your time matters.",
  },
];

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    location: "Wilmington, DE",
    text: "TWOMENS installed a beautiful cedar fence in our backyard. The crew was professional, clean, and finished ahead of schedule. Couldn't be happier!",
    rating: 5,
  },
  {
    name: "James R.",
    location: "Bear, DE",
    text: "We got quotes from four companies and TWOMENS was the most honest and transparent. The vinyl fence looks incredible and the price was fair.",
    rating: 5,
  },
  {
    name: "Maria L.",
    location: "Newark, DE",
    text: "They replaced our old chain link with an aluminum fence around the pool. Looks amazing and passed inspection the first time. Highly recommend!",
    rating: 5,
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "Free Estimate", desc: "Call or fill out our form. We'll visit your property, measure, and give you an honest quote — no surprises." },
  { num: "02", title: "Choose Your Fence", desc: "Pick from wood, vinyl, aluminum, or chain link. We'll help you choose the best fit for your property and budget." },
  { num: "03", title: "Professional Install", desc: "Our crew shows up on time, builds it right, and leaves your property clean. Most jobs done in 1–3 days." },
  { num: "04", title: "Final Walkthrough", desc: "We walk the fence line with you, make sure every detail is perfect, and answer any questions before we leave." },
];

const GALLERY_IMAGES = [
  { alt: "Cedar privacy fence installation in Wilmington DE", aspect: "aspect-[4/3]" },
  { alt: "White vinyl fence with gate in Newark DE", aspect: "aspect-[3/4]" },
  { alt: "Aluminum pool fence in Bear DE", aspect: "aspect-[4/3]" },
  { alt: "Chain link fence for commercial property in New Castle DE", aspect: "aspect-[3/4]" },
  { alt: "Custom wood gate installation in Hockessin DE", aspect: "aspect-[4/3]" },
  { alt: "Vinyl privacy fence in Middletown DE", aspect: "aspect-[4/3]" },
];

/* ──────────────────────────────────────────────
   Page
   ────────────────────────────────────────────── */
export default function Home() {
  return (
    <Layout>
      <SEO
        title="Professional Fence Installation in Delaware"
        description="TWOMENS Fence & Construction — professional fence installation in New Castle, DE. Wood, vinyl, aluminum & chain link fencing. Free estimates. Licensed & insured."
        canonicalUrl="https://twomensfence.com"
        schema={LOCAL_BUSINESS_SCHEMA}
      />

      {/* ═══════════════════════════════════════
          HERO — Asymmetric with embedded form
          ═══════════════════════════════════════ */}
      <section className="relative bg-authority overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-authority via-authority-light/40 to-authority-light/20" />
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
                <SectionBadge icon={MapPin} label="Serving Delaware, PA & MD" />
              </motion.div>

              <motion.h1
                variants={fadeUp}
                custom={1}
                className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
              >
                Fences Built Right.{" "}
                <span className="text-action">Guaranteed.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                custom={2}
                className="mt-6 text-lg md:text-xl text-white/60 max-w-xl leading-relaxed"
              >
                Professional fence installation from a locally owned crew that
                shows up on time, does the job right, and treats your property
                like our own. Serving New Castle County and beyond.
              </motion.p>

              {/* CTA Row */}
              <motion.div
                variants={fadeUp}
                custom={3}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <CTAButton href="/contact" size="lg">
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
                  We respond within 24 hours — usually same day.
                </p>
              </div>
              <ContactForm dark />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TRUST BAR — Stats
          ═══════════════════════════════════════ */}
      <section className="bg-authority-light border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter value={COMPANY.yearFounded === 2008 ? 17 : new Date().getFullYear() - COMPANY.yearFounded} suffix="+" label="Years of Experience" />
            <StatCounter value={2500} suffix="+" label="Fences Installed" />
            <StatCounter value={COMPANY.reviewCount} suffix="+" label="5-Star Reviews" />
            <StatCounter value={11} label="Cities Served" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES — Light section
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: Hammer, label: "Our Services" }}
            title="Fencing Solutions for Every Property"
            subtitle="From classic wood privacy fences to modern vinyl and ornamental aluminum — we install it all with the same attention to detail."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.slug}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i}
              >
                <Link
                  to={service.href}
                  className="group block rounded-2xl border border-border bg-white p-6 hover:shadow-xl hover:border-trust/30 transition-all duration-300 h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-trust/10 flex items-center justify-center mb-4 group-hover:bg-trust/20 transition-colors">
                    <Fence size={24} className="text-trust" />
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
            ))}
          </div>

          {/* Extra services callout */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-10 text-center"
          >
            <p className="text-muted-foreground">
              We also offer{" "}
              <span className="font-semibold text-foreground">fence repair</span> and{" "}
              <span className="font-semibold text-foreground">gate installation</span>.{" "}
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
          WHY US — Dark section
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-authority relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-authority via-authority-light/30 to-authority" />
        <div className="relative max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: Star, label: "Why Choose Us" }}
            title="The TWOMENS Difference"
            subtitle="We're not a franchise. We're not a call center. We're a local crew that builds fences the way they should be built."
            light
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_US.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i}
                className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/[0.08] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-action/10 flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-action" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROCESS — Light section (green tint)
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-section-light">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: CheckCircle, label: "Our Process" }}
            title="How It Works"
            subtitle="From first call to final walkthrough — we keep it simple, transparent, and stress-free."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
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
            viewport={{ once: true }}
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
          TESTIMONIALS — Dark section
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-authority">
        <div className="max-w-7xl mx-auto px-6">
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
                viewport={{ once: true, margin: "-60px" }}
                custom={i}
                className="rounded-2xl bg-white/5 border border-white/10 p-6"
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
            viewport={{ once: true }}
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
          GALLERY PREVIEW — Light
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: Award, label: "Our Work" }}
            title="Recent Fence Installations"
            subtitle="Every project is different. Here's a look at some of our recent work across Delaware and the tri-state area."
          />

          {/* Placeholder grid — swap for real images later */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((img, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={i}
                className={`${img.aspect} rounded-xl bg-gradient-to-br from-trust/10 to-authority/10 border border-border overflow-hidden group cursor-pointer`}
              >
                <div className="w-full h-full flex items-center justify-center text-muted-foreground/40 group-hover:text-trust/40 transition-colors">
                  <Fence size={48} />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
          SERVICE AREAS — Dark
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-authority">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: MapPin, label: "Areas We Serve" }}
            title="Fence Installation Near You"
            subtitle="Based in New Castle, DE — serving an area within 50 miles including Delaware, southeast Pennsylvania, and northeast Maryland."
            light
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {SERVICE_AREAS.map((area, i) => (
              <motion.div
                key={area.slug}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
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
          BOTTOM CTA — Light with form
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-section-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionBadge icon={Phone} label="Get Started Today" />
              <h2 className="mt-6 text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Your New Fence Is One Call Away
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Fill out the form or call us directly — we&apos;ll come to your
                property, measure everything, and give you an honest quote with
                no hidden fees.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Free on-site estimates",
                  "No high-pressure sales",
                  "Written quotes — no surprises",
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
