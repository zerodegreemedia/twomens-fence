import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionBadge } from "@/components/shared/SectionBadge";
import { CTAButton } from "@/components/shared/CTAButton";
import { ContactForm } from "@/components/shared/ContactForm";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, VIEWPORT } from "@/lib/animations";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { COMPANY, SERVICE_AREAS } from "@/lib/constants";

/* ──────────────────────────────────────────────
   Data
   ────────────────────────────────────────────── */
const CONTACT_CARDS = [
  {
    icon: Phone,
    label: "Office",
    value: COMPANY.phone,
    href: COMPANY.phoneTel,
    isLink: true,
  },
  {
    icon: Phone,
    label: COMPANY.phoneSecondaryLabel,
    value: COMPANY.phoneSecondary,
    href: COMPANY.phoneSecondaryTel,
    isLink: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    isLink: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: COMPANY.address,
    href: undefined,
    isLink: false,
  },
  {
    icon: Calendar,
    label: "Book Online",
    value: "Schedule a call or estimate",
    href: "/book",
    isLink: true,
  },
  {
    icon: Clock,
    label: "Hours",
    value: COMPANY.hours,
    href: undefined,
    isLink: false,
  },
];

const WHAT_TO_EXPECT = [
  "We respond within 24 hours",
  "Free on-site measurement",
  "Written quote with no hidden fees",
  "Most projects start within 2 weeks",
];

/* ──────────────────────────────────────────────
   Page
   ────────────────────────────────────────────── */
export default function Contact() {
  return (
    <Layout>
      <SEO
        title="Get a Free Fence Estimate"
        description="Contact TWO MEN Fence for a free, no-obligation fence estimate. Call (610) 212-7123 or fill out our online form."
        canonicalUrl="https://twomensfence.com/contact"
        schema={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://twomensfence.com" },
            { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://twomensfence.com/contact" },
          ],
        }}
      />

      {/* ═══════════════════════════════════════
          HERO - Dark
          ═══════════════════════════════════════ */}
      <section className="relative bg-authority overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-authority via-authority-light/50 to-authority" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-trust/5 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-14 md:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge icon={MessageSquare} label="Contact Us" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
          >
            Let&apos;s Talk About Your Fence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            Ready for a free, no-obligation estimate? Fill out the form below or give us a
            call. We respond within 24 hours - usually same day.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT INFO + FORM - Light
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left — Contact info */}
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                variants={fadeUp}
              >
                <SectionBadge icon={Phone} label="Get in Touch" />
                <h2 className="mt-6 text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  Contact Information
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Reach out however works best for you. We&apos;re here to answer
                  questions and get your project started.
                </p>
              </motion.div>

              {/* Contact cards */}
              <div className="mt-8 space-y-4">
                {CONTACT_CARDS.map((card, i) => (
                  <motion.div
                    key={card.label}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={VIEWPORT}
                    custom={i}
                    className="flex items-start gap-4 rounded-xl bg-white border border-border p-4 hover:shadow-md hover:border-trust/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-trust/10 flex items-center justify-center shrink-0">
                      <card.icon size={20} className="text-trust" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        {card.label}
                      </p>
                      {card.isLink && card.href ? (
                        <a
                          href={card.href}
                          className="text-sm font-semibold text-foreground hover:text-trust transition-colors"
                        >
                          {card.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-foreground">
                          {card.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* What to expect */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                className="mt-10"
              >
                <h3 className="text-lg font-bold text-foreground mb-4">
                  What to Expect
                </h3>
                <ol className="space-y-3">
                  {WHAT_TO_EXPECT.map((item, i) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-trust/10 flex items-center justify-center shrink-0">
                        <span className="text-xs font-bold text-trust">
                          {i + 1}
                        </span>
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ol>
              </motion.div>
            </div>

            {/* Right — Contact form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MAP PLACEHOLDER - Section light
          ═══════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-section-sage">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-gradient-to-br from-trust/10 to-authority/10 border border-border overflow-hidden aspect-[16/6] flex flex-col items-center justify-center gap-3"
          >
            <MapPin size={48} className="text-muted-foreground/40" />
            <p className="text-muted-foreground font-medium">
              Map - New Castle, DE 19720
            </p>
            <p className="text-sm text-muted-foreground/60">
              Serving a 2-hour radius across Delaware & Pennsylvania
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICE AREAS - Dark
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-authority">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: MapPin, label: "Areas We Serve" }}
            title="Fence Installation Near You"
            subtitle="Based in New Castle, DE - proudly serving Delaware and southeastern Pennsylvania within a 2-hour radius."
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

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={fadeUp}
            className="mt-12 text-center"
          >
            <CTAButton href="/contact" size="lg">
              Get Your Free Estimate
              <ArrowRight size={16} className="ml-2" />
            </CTAButton>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
