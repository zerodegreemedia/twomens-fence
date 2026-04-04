import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionBadge } from "@/components/shared/SectionBadge";
import { CTAButton } from "@/components/shared/CTAButton";
import { ContactForm } from "@/components/shared/ContactForm";
import { motion } from "framer-motion";
import {
  Trees,
  Phone,
  CheckCircle,
  Shield,
  Eye,
  Heart,
  Zap,
  ChevronDown,
  HelpCircle,
  ArrowRight,
  TreePine,
  Columns3,
  Fence,
  Hammer,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";
import { COMPANY, SERVICES } from "@/lib/constants";
import { SERVICE_IMAGES } from "@/lib/images";
import { RecentProjects } from "@/components/shared/RecentProjects";
import { fadeUp, stagger, VIEWPORT } from "@/lib/animations";

/* ──────────────────────────────────────────────
   Data
   ────────────────────────────────────────────── */
const BENEFITS = [
  {
    icon: Shield,
    title: "Safety First",
    desc: "Dead branches and overgrown trees are a hazard - especially during storms. Regular trimming keeps your family and property safe.",
  },
  {
    icon: Eye,
    title: "Boost Curb Appeal",
    desc: "Well-maintained trees transform the look of your property. Trimming opens up sightlines, lets in light, and gives your yard a clean, polished look.",
  },
  {
    icon: Heart,
    title: "Healthier Trees",
    desc: "Proper pruning removes diseased or crossing branches, improves airflow, and encourages strong new growth. Your trees will live longer and look better.",
  },
  {
    icon: Zap,
    title: "Storm Prevention",
    desc: "Delaware storms can bring down weakened branches in seconds. Proactive trimming reduces the risk of damage to your roof, car, fence, and power lines.",
  },
];

const SERVICES_LIST = [
  { name: "Tree Trimming & Pruning", desc: "Routine trimming to keep trees healthy, safe, and looking their best year-round" },
  { name: "Tree Removal", desc: "Full tree removal for dead, damaged, or unwanted trees - including cleanup and haul-away" },
  { name: "Stump Grinding", desc: "Complete stump removal below grade so you can reclaim your yard space" },
  { name: "Storm Damage Cleanup", desc: "Emergency response for fallen trees and broken branches after storms" },
  { name: "Hedge & Shrub Trimming", desc: "Shape and maintain hedges, bushes, and ornamental shrubs for a clean landscape" },
  { name: "Branch Clearing & Lot Clearing", desc: "Clear overgrown areas, remove low-hanging branches, and open up your property" },
];

const RELATED_SERVICES = [
  { slug: "deck-building", label: "Deck Building", icon: Hammer, desc: "Custom wood & composite decks" },
  { slug: "wood-fencing", label: "Wood Fencing", icon: TreePine, desc: "Classic natural wood fencing" },
  { slug: "fence-repair", label: "Fence Repair", icon: Wrench, desc: "Fix storm damage & leaning posts" },
  { slug: "vinyl-fencing", label: "Vinyl Fencing", icon: Columns3, desc: "Low-maintenance vinyl fences" },
];

const FAQS = [
  {
    q: "How often should trees be trimmed?",
    a: "Most trees benefit from trimming every 2-3 years, but it depends on the species and growth rate. Fast-growing trees like maples and oaks may need attention more frequently. Dead or hazardous branches should be removed as soon as they're noticed - don't wait for a storm to do it for you.",
  },
  {
    q: "Do you handle emergency tree removal?",
    a: "Yes. If a tree comes down during a storm or a branch is threatening your home, call us. We respond as quickly as possible for emergency situations. Safety is our top priority - we'll assess the situation, make it safe, and handle the full cleanup.",
  },
  {
    q: "Do you remove the stump too?",
    a: "We offer stump grinding as an add-on service. We grind the stump below grade so you can fill the area with soil and grass seed. It's the cleanest way to remove a stump - no digging, no mess.",
  },
  {
    q: "Are you insured for tree work?",
    a: "Absolutely. We carry full general liability insurance and workers' compensation. Tree work can be dangerous, so insurance isn't optional - it's essential. We're happy to provide proof of insurance before any job.",
  },
];

/* ──────────────────────────────────────────────
   FAQ Item
   ────────────────────────────────────────────── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/5 transition-colors"
      >
        <span className="text-white font-semibold">{q}</span>
        <ChevronDown
          size={20}
          className={`text-white/40 shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-white/60 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

/* ──────────────────────────────────────────────
   Page
   ────────────────────────────────────────────── */
const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tree Trimming & Removal",
  provider: {
    "@type": "LocalBusiness",
    name: COMPANY.name,
  },
  areaServed: {
    "@type": "State",
    name: "Delaware",
  },
  description:
    "Professional tree trimming, removal, and stump grinding services in Delaware. Routine pruning, emergency storm damage cleanup, hedge trimming, and lot clearing.",
};

export default function TreeTrimming() {
  return (
    <Layout>
      <SEO
        title="Tree Trimming & Removal Delaware | TWOMENS"
        description="Professional tree trimming, removal, and stump grinding in Delaware. 18+ years experience. Free estimates from Oscar & Anna at TWOMENS."
        canonicalUrl="https://twomensfence.com/services/tree-trimming"
        schema={[SERVICE_SCHEMA, {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": FAQS.map((faq) => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.a,
            },
          })),
        }, {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://twomensfence.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://twomensfence.com/services" },
            { "@type": "ListItem", "position": 3, "name": "Tree Trimming", "item": "https://twomensfence.com/services/tree-trimming" },
          ],
        }]}
      />

      {/* ═══════════════════════════════════════
          HERO - Dark
          ═══════════════════════════════════════ */}
      <section className="relative bg-authority overflow-hidden">
        <div className="absolute inset-0">
          <img src={SERVICE_IMAGES.tree[0].path} alt={SERVICE_IMAGES.tree[0].alt} width={1920} height={1080} fetchPriority="high" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-authority/95 via-authority/85 to-authority/80" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-trust/5 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-32">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp} custom={0}>
              <SectionBadge icon={Trees} label="Tree Trimming" />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
            >
              Professional <span className="text-action">Tree Trimming</span>{" "}
              & Removal.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 text-lg md:text-xl text-white/60 max-w-xl leading-relaxed"
            >
              Oscar and Anna handle everything from routine trimming to full
              tree removal and stump grinding. 18+ years of experience, fully
              insured, and every job comes with a warranty.
            </motion.p>

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
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHY TREE TRIMMING - Light
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: CheckCircle, label: "Benefits" }}
            title="Why Regular Tree Trimming?"
            subtitle="Healthy trees don't just look better - they protect your property, increase your home's value, and prevent costly storm damage."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                custom={i}
                className="rounded-2xl border border-border bg-white p-6 hover:shadow-xl hover:border-trust/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-trust/10 flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-trust" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES LIST - Section Light
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-section-light">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: Trees, label: "Services" }}
            title="What We Do"
            subtitle="From routine pruning to emergency storm cleanup - we handle every aspect of tree care for residential and commercial properties."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES_LIST.map((service, i) => (
              <motion.div
                key={service.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                custom={i}
                className="flex items-start gap-4 rounded-xl border border-border bg-white p-5 hover:shadow-md transition-all duration-300"
              >
                <CheckCircle size={20} className="text-trust shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground">{service.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <RecentProjects
        serviceType="Tree"
        title="Recent Tree Service Projects"
        subtitle="See our latest tree trimming and removal work across Delaware."
        limit={6}
      />

      {/* ═══════════════════════════════════════
          RELATED SERVICES - Sage
          ═══════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-section-sage">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading badge={{ icon: Fence, label: "Related Services" }} title="You Might Also Need" subtitle="Explore other services that pair well with tree trimming." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {RELATED_SERVICES.map((svc, i) => {
              const href = SERVICES.find((s) => s.slug === svc.slug)?.href || `/services/${svc.slug}`;
              return (
                <motion.div key={svc.slug} variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT} custom={i}>
                  <Link to={href} className="group flex items-center gap-4 rounded-xl border border-border bg-white p-4 hover:shadow-lg hover:border-trust/30 transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-trust/10 flex items-center justify-center shrink-0 group-hover:bg-trust/20 transition-colors"><svc.icon size={20} className="text-trust" /></div>
                    <div className="min-w-0"><h3 className="text-sm font-bold text-foreground group-hover:text-trust transition-colors">{svc.label}</h3><p className="text-xs text-muted-foreground truncate">{svc.desc}</p></div>
                    <ArrowRight size={14} className="text-trust/40 shrink-0 ml-auto group-hover:text-trust transition-colors" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ - Dark
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-authority relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-authority via-authority-light/30 to-authority" />
        <div className="relative max-w-3xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: HelpCircle, label: "FAQ" }}
            title="Tree Trimming Questions"
            subtitle="Answers to the most common questions we hear from homeowners about tree trimming and removal."
            light
          />

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                custom={i}
              >
                <FAQItem q={faq.q} a={faq.a} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOTTOM CTA - Warm with form
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-section-warm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionBadge icon={Phone} label="Get Started Today" />
              <h2 className="mt-6 text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Ready for <span className="text-trust">Tree Work</span>?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Tell us about your project and we&apos;ll come out for a free
                on-site estimate. No pressure, no gimmicks - just an honest
                quote from a local crew.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Free on-site estimates",
                  "Trimming, removal & stump grinding",
                  "Storm damage emergency service",
                  "Every job fully insured & warranted",
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
