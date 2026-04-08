import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionBadge } from "@/components/shared/SectionBadge";
import { CTAButton } from "@/components/shared/CTAButton";
import { ContactForm } from "@/components/shared/ContactForm";
import { motion } from "framer-motion";
import {
  TreePine,
  Phone,
  CheckCircle,
  Eye,
  Paintbrush,
  DollarSign,
  ChevronDown,
  Fence,
  HelpCircle,
  ArrowRight,
  Columns3,
  Wrench,
  DoorOpen,
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
    icon: TreePine,
    title: "Natural Beauty",
    desc: "Nothing matches the warm, classic look of real wood. Cedar and pine fences add timeless curb appeal to any property.",
  },
  {
    icon: Eye,
    title: "Complete Privacy",
    desc: "6-foot solid board and board-on-board designs block sightlines completely - enjoy your backyard without an audience.",
  },
  {
    icon: Paintbrush,
    title: "Fully Customizable",
    desc: "Stain it, paint it, or leave it natural. Choose from dozens of styles, heights, and finishes to match your home.",
  },
  {
    icon: DollarSign,
    title: "Affordable",
    desc: "Wood fencing offers the best value per linear foot - especially for larger properties where every dollar counts.",
  },
];

const STYLES = [
  { name: "Cedar Privacy (6ft)", desc: "Premium cedar boards for full privacy and natural rot resistance" },
  { name: "Pressure-Treated Pine", desc: "Budget-friendly and chemically treated to resist decay and insects" },
  { name: "Board-on-Board", desc: "Overlapping boards for privacy from every angle - no gaps" },
  { name: "Shadow Box", desc: "Alternating boards on each side for airflow with partial privacy" },
  { name: "Picket Fence", desc: "Classic American look for front yards and decorative boundaries" },
  { name: "Split Rail", desc: "Rustic open-style fencing perfect for large lots and rural properties" },
];

/* Related services for internal linking */
const RELATED_SERVICES = [
  { slug: "vinyl-fencing", label: "Vinyl Fencing", icon: Columns3, desc: "Low-maintenance alternative to wood" },
  { slug: "fence-repair", label: "Fence Repair", icon: Wrench, desc: "Fix storm damage & leaning posts" },
  { slug: "gate-installation", label: "Gate Installation", icon: DoorOpen, desc: "Custom gates to match your fence" },
  { slug: "deck-building", label: "Deck Building", icon: Fence, desc: "Custom wood & composite decks" },
];

const FAQS = [
  {
    q: "How long does a wood fence last?",
    a: "With proper maintenance, a wood fence lasts 15 to 20 years. Cedar naturally resists rot and can last even longer. Pressure-treated pine is chemically protected and holds up well in Delaware's climate. Regular staining or sealing every 2-3 years extends the life significantly.",
  },
  {
    q: "What's the difference between cedar and pressure-treated pine?",
    a: "Cedar is naturally rot-resistant, has a beautiful grain, and doesn't require chemical treatment - but it costs more. Pressure-treated pine is more affordable and chemically treated to resist decay and insects. Both are excellent choices; it comes down to budget and aesthetic preference.",
  },
  {
    q: "Do you stain or seal the fence after installation?",
    a: "We focus on expert installation. Staining and sealing is the homeowner's choice - we recommend letting the wood dry for 3-6 months before applying a stain or sealant. We're happy to recommend trusted products and local contractors who specialize in staining.",
  },
  {
    q: "How long does installation take?",
    a: "Most residential wood fence installations take 1 to 3 days depending on the size of the yard, terrain, and style chosen. We'll give you a clear timeline during your free estimate so there are no surprises.",
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
  name: "Wood Fence Installation",
  provider: {
    "@type": "LocalBusiness",
    name: COMPANY.name,
  },
  areaServed: {
    "@type": "State",
    name: "Delaware",
  },
  description:
    "Professional cedar, pine, and pressure-treated wood fence installation in Delaware. Privacy, picket, board-on-board, shadow box, and split rail styles.",
};

export default function WoodFencing() {
  return (
    <Layout>
      <SEO
        title="Wood Fence Installation Delaware"
        description="Cedar, pine & pressure-treated wood fence installation in Delaware. Privacy, picket, board-on-board styles. Free estimates from TWO MEN."
        canonicalUrl="https://twomensfence.com/services/wood-fencing"
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
            { "@type": "ListItem", "position": 3, "name": "Wood Fencing", "item": "https://twomensfence.com/services/wood-fencing" },
          ],
        }]}
      />

      {/* ═══════════════════════════════════════
          HERO - Dark
          ═══════════════════════════════════════ */}
      <section className="relative bg-authority overflow-hidden">
        <div className="absolute inset-0">
          <img src={SERVICE_IMAGES.wood[0].path} alt={SERVICE_IMAGES.wood[0].alt} width={1920} height={1080} fetchPriority="high" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-authority/95 via-authority/85 to-authority/80" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-trust/5 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-32">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp} custom={0}>
              <SectionBadge icon={TreePine} label="Wood Fencing" />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
            >
              Classic <span className="text-action">Wood Fencing</span>.{" "}
              Built to Last.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 text-lg md:text-xl text-white/60 max-w-xl leading-relaxed"
            >
              From cedar privacy fences to rustic split rail - we build wood
              fences that look great and hold up to Delaware weather. Installed
              by a local crew that does it right.
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
          WHY CHOOSE WOOD - Light
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: CheckCircle, label: "Benefits" }}
            title="Why Choose Wood Fencing?"
            subtitle="Wood is the most popular fencing material in America for a reason - it's beautiful, versatile, and fits any budget."
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
          STYLES & OPTIONS - Section Light
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-section-light">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: Fence, label: "Options" }}
            title="Styles & Options"
            subtitle="We install every major wood fence style - choose the one that fits your property, privacy needs, and budget."
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
          PHOTO GALLERY - White
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: Eye, label: "Our Work" }}
            title="Wood Fence Projects"
            subtitle="Browse recent wood fence installations across Delaware and Pennsylvania."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SERVICE_IMAGES.wood.map((img, i) => (
              <motion.div
                key={img.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                custom={i}
                className="aspect-[4/3] rounded-xl border border-border overflow-hidden group"
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
        </div>
      </section>

      {/* ═══════════════════════════════════════
          RECENT PROJECTS - Light
          ═══════════════════════════════════════ */}
      <RecentProjects
        serviceType="Wood"
        title="Recent Wood Fence Projects"
        subtitle="See our latest wood fence installations across Delaware and Pennsylvania."
        limit={6}
        captions={{
          "gallery-01-cedar-privacy-fence": "Cedar privacy fence — 6ft tall, full backyard enclosure in New Castle County",
          "gallery-02-wood-fence-with-gate": "Pressure-treated pine fence with custom gate — Newark, DE",
          "gallery-03-wood-privacy-backyard": "Board-on-board privacy fence along property line — Bear, DE",
          "gallery-04-porch-railing-complete": "Custom wood porch railing with matching privacy fence — Wilmington",
          "gallery-05-wood-deck-framing": "Cedar deck framing and railing project — Hockessin, DE",
          "gallery-19-crew-building-railing": "TWO MEN crew building custom porch railing — residential project",
        }}
      />

      {/* ═══════════════════════════════════════
          RELATED SERVICES - Sage
          ═══════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-section-sage">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: Fence, label: "Related Services" }}
            title="You Might Also Need"
            subtitle="Explore other services that pair well with wood fencing."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {RELATED_SERVICES.map((svc, i) => {
              const href = SERVICES.find((s) => s.slug === svc.slug)?.href || `/services/${svc.slug}`;
              return (
                <motion.div
                  key={svc.slug}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT}
                  custom={i}
                >
                  <Link
                    to={href}
                    className="group flex items-center gap-4 rounded-xl border border-border bg-white p-4 hover:shadow-lg hover:border-trust/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-trust/10 flex items-center justify-center shrink-0 group-hover:bg-trust/20 transition-colors">
                      <svc.icon size={20} className="text-trust" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-foreground group-hover:text-trust transition-colors">
                        {svc.label}
                      </h3>
                      <p className="text-xs text-muted-foreground truncate">
                        {svc.desc}
                      </p>
                    </div>
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
            title="Wood Fencing Questions"
            subtitle="Answers to the most common questions we hear from homeowners about wood fences."
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
          BOTTOM CTA - Light with form
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-section-warm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionBadge icon={Phone} label="Get Started Today" />
              <h2 className="mt-6 text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Ready for Your New <span className="text-trust">Wood Fence</span>?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Tell us about your project and we&apos;ll come out for a free
                on-site estimate. No pressure, no gimmicks - just an honest
                quote from a local crew.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Free on-site estimates",
                  "Cedar, pine & pressure-treated options",
                  "Most installs done in 1–3 days",
                  "Licensed & insured in Delaware",
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
