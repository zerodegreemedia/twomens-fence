import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionBadge } from "@/components/shared/SectionBadge";
import { CTAButton } from "@/components/shared/CTAButton";
import { ContactForm } from "@/components/shared/ContactForm";
import { motion } from "framer-motion";
import {
  LayoutGrid,
  TrendingUp,
  Paintbrush,
  Shield,
  Phone,
  CheckCircle,
  ChevronDown,
  HelpCircle,
  ArrowRight,
  TreePine,
  Columns3,
  Fence,
  Wrench,
  Axe,
  Eye,
} from "lucide-react";
import { Link } from "react-router-dom";
import { COMPANY, SERVICES } from "@/lib/constants";
import { SERVICE_IMAGES } from "@/lib/images";
import { fadeUp, stagger, VIEWPORT } from "@/lib/animations";

/* ──────────────────────────────────────────────
   Data
   ────────────────────────────────────────────── */
const BENEFITS = [
  {
    icon: LayoutGrid,
    title: "Expand Your Living Space",
    desc: "A deck extends your home into the outdoors — perfect for grilling, entertaining, or just relaxing on a warm evening.",
  },
  {
    icon: TrendingUp,
    title: "Increase Home Value",
    desc: "A well-built deck is one of the highest-ROI home improvements. Most homeowners recoup 65-75% of the cost at resale.",
  },
  {
    icon: Paintbrush,
    title: "Fully Customizable",
    desc: "Choose from pressure-treated wood, cedar, or low-maintenance composite. Multi-level, wrap-around, built-in benches — we build it all.",
  },
  {
    icon: Shield,
    title: "Warranted Work",
    desc: "Every deck we build comes with a warranty. Oscar and Anna stand behind their work — if there's ever an issue, they'll make it right.",
  },
];

const STYLES = [
  { name: "Pressure-Treated Wood Deck", desc: "The most affordable option — durable, versatile, and ready to stain or paint" },
  { name: "Cedar Deck", desc: "Naturally rot-resistant with beautiful grain — ages gracefully with minimal maintenance" },
  { name: "Composite / Trex Deck", desc: "Zero maintenance, won't rot or splinter. Available in dozens of colors and textures" },
  { name: "Multi-Level Deck", desc: "Step-down designs that work with sloped yards and create distinct outdoor zones" },
  { name: "Screened-In Deck", desc: "Enjoy the outdoors bug-free — screened enclosures for ultimate comfort" },
  { name: "Deck with Built-In Features", desc: "Benches, planters, lighting, pergolas — custom features that make your deck unique" },
];

const RELATED_SERVICES = [
  { slug: "wood-fencing", label: "Wood Fencing", icon: TreePine, desc: "Classic natural wood fencing" },
  { slug: "tree-trimming", label: "Tree Trimming", icon: Axe, desc: "Clear trees before your deck build" },
  { slug: "fence-repair", label: "Fence Repair", icon: Wrench, desc: "Fix storm damage & leaning posts" },
  { slug: "vinyl-fencing", label: "Vinyl Fencing", icon: Columns3, desc: "Low-maintenance privacy fencing" },
];

const FAQS = [
  {
    q: "How long does it take to build a deck?",
    a: "Most residential decks take 3 to 7 days depending on size, complexity, and material. A simple 12x16 pressure-treated deck can often be done in 3-4 days. Multi-level or composite decks may take a full week. We'll give you a clear timeline during your free estimate.",
  },
  {
    q: "Do I need a permit for a deck?",
    a: "In most Delaware municipalities, yes — decks typically require a building permit. We help guide you through the permit process, including what's needed and where to apply. Permits ensure your deck is built to code and safe for your family.",
  },
  {
    q: "What's the best deck material?",
    a: "It depends on your budget and maintenance preferences. Pressure-treated wood is the most affordable. Cedar looks beautiful naturally. Composite (Trex) costs more upfront but requires zero maintenance — no staining, no sealing, no splinters. We'll help you choose the best fit.",
  },
  {
    q: "Do you build decks with railings?",
    a: "Absolutely. Most decks require railings by code (anything 30 inches or higher off the ground). We install wood, composite, and aluminum railings to match your deck. We also handle stairs, gates, and ADA-compliant access ramps.",
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
  name: "Custom Deck Building",
  provider: {
    "@type": "LocalBusiness",
    name: COMPANY.name,
  },
  areaServed: {
    "@type": "State",
    name: "Delaware",
  },
  description:
    "Custom wood and composite deck building in Delaware. Pressure-treated, cedar, and Trex decks with railings, stairs, and built-in features.",
};

export default function DeckBuilding() {
  return (
    <Layout>
      <SEO
        title="Custom Deck Building Delaware | TWOMENS"
        description="Custom wood & composite deck building in Delaware. Pressure-treated, cedar, and Trex decks. Free estimates from Oscar & Anna at TWOMENS."
        canonicalUrl="https://twomensfence.com/services/deck-building"
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
            { "@type": "ListItem", "position": 3, "name": "Deck Building", "item": "https://twomensfence.com/services/deck-building" },
          ],
        }]}
      />

      {/* ═══════════════════════════════════════
          HERO — Dark
          ═══════════════════════════════════════ */}
      <section className="relative bg-authority overflow-hidden">
        <div className="absolute inset-0">
          <img src={SERVICE_IMAGES.deck[0].path} alt={SERVICE_IMAGES.deck[0].alt} width={1920} height={1080} fetchPriority="high" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-authority/95 via-authority/85 to-authority/80" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-trust/5 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-32">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp} custom={0}>
              <SectionBadge icon={LayoutGrid} label="Deck Building" />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
            >
              Custom <span className="text-action">Decks</span>.{" "}
              Built to Last.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 text-lg md:text-xl text-white/60 max-w-xl leading-relaxed"
            >
              From simple backyard patios to multi-level composite decks — we
              build decks that look great and hold up to Delaware weather.
              Every project comes with a warranty.
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
          WHY CHOOSE DECK — Light
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: CheckCircle, label: "Benefits" }}
            title="Why Build a Deck?"
            subtitle="A custom deck is one of the best investments you can make in your home — it adds space, value, and enjoyment year-round."
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
          STYLES & OPTIONS — Section Light
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-section-light">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: LayoutGrid, label: "Options" }}
            title="Styles & Options"
            subtitle="We build every major deck style — choose the one that fits your property, lifestyle, and budget."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {STYLES.map((style, i) => (
              <motion.div
                key={style.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                custom={i}
                className="flex items-start gap-4 rounded-xl border border-border bg-white p-5 hover:shadow-md transition-all duration-300"
              >
                <CheckCircle size={20} className="text-trust shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground">{style.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{style.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PHOTO GALLERY
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading badge={{ icon: Eye, label: "Our Work" }} title="Deck Building Projects" subtitle="Browse recent deck builds across Delaware and Pennsylvania." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SERVICE_IMAGES.deck.map((img, i) => (
              <motion.div key={img.name} variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT} custom={i} className="aspect-[4/3] rounded-xl border border-border overflow-hidden group">
                <img src={img.path} alt={img.alt} width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          RELATED SERVICES
          ═══════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-section-sage">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading badge={{ icon: Fence, label: "Related Services" }} title="You Might Also Need" subtitle="Explore other services that pair well with deck building." />
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
          FAQ — Dark
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-authority relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-authority via-authority-light/30 to-authority" />
        <div className="relative max-w-3xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: HelpCircle, label: "FAQ" }}
            title="Deck Building Questions"
            subtitle="Answers to the most common questions we hear from homeowners about deck projects."
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
          BOTTOM CTA — Warm with form
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-section-warm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionBadge icon={Phone} label="Get Started Today" />
              <h2 className="mt-6 text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Ready for Your New <span className="text-trust">Deck</span>?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Tell us about your project and we&apos;ll come out for a free
                on-site estimate. No pressure, no gimmicks — just an honest
                quote from a local crew.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Free on-site estimates",
                  "Wood, cedar & composite options",
                  "Most builds done in 3–7 days",
                  "Every project comes with a warranty",
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
