import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionBadge } from "@/components/shared/SectionBadge";
import { CTAButton } from "@/components/shared/CTAButton";
import { StatCounter } from "@/components/shared/StatCounter";
import { ContactForm } from "@/components/shared/ContactForm";
import { motion } from "framer-motion";
import {
  Shield,
  Heart,
  Target,
  Users,
  Phone,
  ArrowRight,
  CheckCircle,
  FileText,
  Handshake,
  HardHat,
  Scale,
  Ruler,
  MapPin,
  Fence,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";

/* ──────────────────────────────────────────────
   Animation helpers
   ────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ──────────────────────────────────────────────
   Data
   ────────────────────────────────────────────── */
const VALUES = [
  {
    icon: Handshake,
    title: "Integrity",
    desc: "Honest quotes, honest timelines, honest work. If we say it, we mean it — no hidden fees, no bait-and-switch pricing.",
  },
  {
    icon: Ruler,
    title: "Precision",
    desc: "Measure twice, cut once. Every post is plumb, every rail is level, and every gate swings right. We don't cut corners.",
  },
  {
    icon: Shield,
    title: "Accountability",
    desc: "If something isn't right, we fix it. Period. We stand behind every fence we build with written warranties and our word.",
  },
  {
    icon: Heart,
    title: "Community",
    desc: "We live where we work. Our kids play in the same neighborhoods. That's why we treat every yard like it's our own.",
  },
];

const TRUST_ITEMS = [
  { icon: Scale, label: "Fully Licensed" },
  { icon: Shield, label: "Liability Insurance" },
  { icon: HardHat, label: "Workers' Comp" },
  { icon: FileText, label: "Written Warranties" },
  { icon: CheckCircle, label: "Permit Assistance" },
  { icon: Target, label: "Free Estimates" },
];

/* ──────────────────────────────────────────────
   Page
   ────────────────────────────────────────────── */
export default function About() {
  return (
    <Layout>
      <SEO
        title="About TWOMENS Fence"
        description="Licensed Delaware fence contractor serving DE, PA, and MD since 2008. Learn about our story, values, and commitment to quality."
        canonicalUrl="https://twomensfence.com/about"
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
              <SectionBadge icon={Users} label="About TWOMENS" />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight max-w-4xl mx-auto"
            >
              Built on Hard Work.{" "}
              <span className="text-action">Backed by Reputation.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
            >
              Family-owned and locally operated since {COMPANY.yearFounded}. We
              build fences the right way — and our neighbors can tell you that
              themselves.
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
          STATS BAR
          ═══════════════════════════════════════ */}
      <section className="bg-authority-light border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter
              value={COMPANY.yearFounded === 2008 ? 17 : new Date().getFullYear() - COMPANY.yearFounded}
              suffix="+"
              label="Years of Experience"
            />
            <StatCounter value={2500} suffix="+" label="Fences Installed" />
            <StatCounter value={COMPANY.reviewCount} suffix="+" label="5-Star Reviews" />
            <StatCounter value={11} label="Cities Served" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          OUR STORY — Light
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Copy */}
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={stagger}
              >
                <motion.div variants={fadeUp} custom={0}>
                  <SectionBadge icon={Heart} label="Our Story" />
                </motion.div>

                <motion.h2
                  variants={fadeUp}
                  custom={1}
                  className="mt-6 text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-tight"
                >
                  Two Guys Who Decided to Do Things the Right Way
                </motion.h2>

                <motion.p
                  variants={fadeUp}
                  custom={2}
                  className="mt-6 text-muted-foreground leading-relaxed"
                >
                  Back in 2008, two guys with a truck, a post-hole digger, and a
                  simple belief — that customers deserve honest work at fair
                  prices — started building fences in New Castle County. No
                  fancy office, no sales team. Just hard work, straight talk, and
                  fences that were built to last.
                </motion.p>

                <motion.p
                  variants={fadeUp}
                  custom={3}
                  className="mt-4 text-muted-foreground leading-relaxed"
                >
                  Word got around. One neighbor told another, one referral turned
                  into ten, and before long we had more work than we could
                  handle. We grew — but we never lost sight of what got us here.
                  Every fence still gets the same care and attention as that
                  very first one.
                </motion.p>

                <motion.p
                  variants={fadeUp}
                  custom={4}
                  className="mt-4 text-muted-foreground leading-relaxed"
                >
                  Today, the owners are still on the job site. We still answer
                  our own phone. We still measure twice, cut once, and clean up
                  before we leave. That's not a marketing promise — it's how
                  we've done business for 17 years, and it's why we have over{" "}
                  {COMPANY.reviewCount} five-star reviews from real homeowners
                  across Delaware, Pennsylvania, and Maryland.
                </motion.p>
              </motion.div>
            </div>

            {/* Right — Team photo placeholder */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
            >
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-trust/10 to-authority/10 border border-border overflow-hidden flex items-center justify-center">
                <div className="text-center">
                  <Fence size={64} className="mx-auto text-muted-foreground/30" />
                  <p className="mt-4 text-sm text-muted-foreground/50 font-medium">
                    Team Photo Coming Soon
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          VALUES — bg-section-light
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-section-light">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: Target, label: "Our Values" }}
            title="What We Stand For"
            subtitle="These aren't just words on a wall. They're the principles we built this company on — and the standards we hold ourselves to on every single job."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i}
                className="rounded-2xl border border-border bg-white p-6 hover:shadow-xl hover:border-trust/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-trust/10 flex items-center justify-center mb-4">
                  <v.icon size={24} className="text-trust" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          LICENSE & INSURANCE — Dark
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-authority relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-authority via-authority-light/30 to-authority" />
        <div className="relative max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: Shield, label: "Licensed & Insured" }}
            title="Your Protection Is Our Priority"
            subtitle="We carry full licensing and insurance so you never have to worry. Every project is backed by coverage and accountability."
            light
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {TRUST_ITEMS.map((item, i) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i}
                className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/[0.08] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-trust/10 flex items-center justify-center shrink-0">
                  <item.icon size={20} className="text-trust" />
                </div>
                <span className="text-sm font-semibold text-white">
                  {item.label}
                </span>
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
                Ready to Work With a Team You Can Trust?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                No high-pressure sales. No runaround. Just honest people who
                build great fences. Fill out the form or give us a call — we'll
                take it from there.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Free on-site estimates",
                  "Owners on every job",
                  "Written quotes — no surprises",
                  "Serving DE, PA & MD since 2008",
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
