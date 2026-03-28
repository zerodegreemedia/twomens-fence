import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionBadge } from "@/components/shared/SectionBadge";
import { CTAButton } from "@/components/shared/CTAButton";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Hammer,
  Phone,
  ArrowRight,
  CheckCircle,
  Fence,
  Wrench,
  DoorOpen,
  HelpCircle,
} from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/constants";

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
const EXTRA_SERVICES = [
  {
    icon: Wrench,
    title: "Fence Repair",
    description:
      "Storm damage, leaning posts, broken boards — we fix it all. Our repair crew can restore your existing fence to like-new condition, saving you the cost of a full replacement.",
    features: [
      "Storm & wind damage repair",
      "Leaning post correction",
      "Board & panel replacement",
      "Gate realignment & hardware",
    ],
  },
  {
    icon: DoorOpen,
    title: "Gate Installation",
    description:
      "From single walk gates to double-wide driveway gates, we build and install custom gates that match your fence perfectly. Smooth operation and secure latching guaranteed.",
    features: [
      "Walk gates & garden gates",
      "Double driveway gates",
      "Self-closing pool gates",
      "Custom sizing & hardware",
    ],
  },
];

/* ──────────────────────────────────────────────
   Page
   ────────────────────────────────────────────── */
export default function Services() {
  return (
    <Layout>
      <SEO
        title="Fence Installation Services"
        description="Professional wood, vinyl, aluminum, and chain link fence installation in Delaware, Pennsylvania, and Maryland. Plus fence repair and gate installation."
        canonicalUrl="https://twomensfence.com/services"
      />

      {/* ═══════════════════════════════════════
          HERO — Dark
          ═══════════════════════════════════════ */}
      <section className="relative bg-authority overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-authority via-authority-light/50 to-authority" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-trust/5 to-transparent" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-32 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} custom={0}>
              <SectionBadge icon={Hammer} label="Our Services" />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight max-w-4xl mx-auto"
            >
              Fencing Solutions for{" "}
              <span className="text-action">Every Property</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
            >
              From classic wood privacy fences to low-maintenance vinyl and
              elegant aluminum — we install it all with the same attention to
              detail and craftsmanship.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <CTAButton href="/contact" size="lg">
                Get Your Free Estimate
                <ArrowRight size={16} className="ml-2" />
              </CTAButton>
              <CTAButton tel={COMPANY.phoneTel} size="lg" variant="ghost">
                <Phone size={18} className="mr-2" />
                {COMPANY.phone}
              </CTAButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MAIN SERVICES GRID — Light
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: Fence, label: "Fence Types" }}
            title="Professional Installation for Every Style"
            subtitle="Each fence type is installed by experienced crews using premium materials. Pick the style that fits your property — we handle the rest."
          />

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
                  className="group block rounded-2xl border border-border bg-white overflow-hidden hover:shadow-xl hover:border-trust/30 transition-all duration-300 h-full"
                >
                  {/* Image placeholder */}
                  <div className="aspect-[16/10] bg-gradient-to-br from-trust/10 to-authority/10 flex items-center justify-center group-hover:from-trust/15 group-hover:to-authority/15 transition-all duration-300">
                    <Fence
                      size={56}
                      className="text-muted-foreground/30 group-hover:text-trust/40 transition-colors"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-trust transition-colors">
                      {service.label}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center text-sm font-semibold text-trust group-hover:gap-2 transition-all">
                      Learn More & Get Quote
                      <ArrowRight size={14} className="ml-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          EXTRA SERVICES — bg-section-light
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-section-light">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: Wrench, label: "Additional Services" }}
            title="Repairs, Gates & More"
            subtitle="Beyond new installations, we keep your existing fence in top shape and add the finishing touches that make it complete."
          />

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {EXTRA_SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i}
                className="rounded-2xl border border-border bg-white p-6 md:p-8 hover:shadow-xl hover:border-trust/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-trust/10 flex items-center justify-center mb-4">
                  <service.icon size={24} className="text-trust" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {service.description}
                </p>
                <ul className="space-y-2.5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 text-foreground"
                    >
                      <CheckCircle
                        size={16}
                        className="text-trust shrink-0"
                      />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOTTOM CTA — Dark
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-authority relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-authority via-authority-light/30 to-authority" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} custom={0}>
              <SectionBadge icon={HelpCircle} label="Need Help Choosing?" />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              custom={1}
              className="mt-6 text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight max-w-2xl mx-auto"
            >
              Not Sure Which Fence Is Right?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-4 text-lg text-white/60 max-w-xl mx-auto leading-relaxed"
            >
              No problem. We'll visit your property, talk through your goals and
              budget, and recommend the best option — no pressure, no obligation.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <CTAButton href="/contact" size="lg">
                Get Your Free Estimate
                <ArrowRight size={16} className="ml-2" />
              </CTAButton>
              <CTAButton tel={COMPANY.phoneTel} size="lg" variant="ghost">
                <Phone size={18} className="mr-2" />
                Call {COMPANY.phone}
              </CTAButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
