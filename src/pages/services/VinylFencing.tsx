import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionBadge } from "@/components/shared/SectionBadge";
import { CTAButton } from "@/components/shared/CTAButton";
import { ContactForm } from "@/components/shared/ContactForm";
import { motion } from "framer-motion";
import {
  Sparkles,
  Phone,
  CheckCircle,
  ShieldCheck,
  Sun,
  Droplets,
  ChevronDown,
  Fence,
  HelpCircle,
  PaintBucket,
  ArrowRight,
  TreePine,
  Wrench,
  DoorOpen,
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
    icon: PaintBucket,
    title: "No Painting or Staining",
    desc: "Vinyl never needs to be painted, stained, or sealed. The color is baked in during manufacturing - it looks new for decades.",
  },
  {
    icon: ShieldCheck,
    title: "Won't Rot or Warp",
    desc: "Unlike wood, vinyl is immune to moisture, insects, and rot. It holds its shape through rain, snow, and Delaware humidity.",
  },
  {
    icon: Sun,
    title: "Lifetime Color",
    desc: "Modern vinyl fencing is UV-stabilized to resist fading. The white stays white, the tan stays tan - year after year.",
  },
  {
    icon: Droplets,
    title: "Easy to Clean",
    desc: "A garden hose or pressure washer is all you need. No scrubbing, no chemicals - vinyl practically cleans itself.",
  },
];

const STYLES = [
  { name: "Privacy (6ft)", desc: "Solid tongue-and-groove panels for complete backyard privacy" },
  { name: "Semi-Privacy", desc: "Spaced boards or lattice tops that let light in while maintaining boundaries" },
  { name: "Picket", desc: "Classic picket style in vinyl - all the charm with zero maintenance" },
  { name: "Ranch Rail", desc: "2, 3, or 4-rail options for large properties and equestrian fencing" },
  { name: "Pool Code Compliant", desc: "Self-closing gate hardware and proper spacing to meet Delaware pool codes" },
  { name: "Color Options", desc: "Available in white, tan, gray, and woodgrain textures to match any home" },
];

const RELATED_SERVICES = [
  { slug: "wood-fencing", label: "Wood Fencing", icon: TreePine, desc: "Classic natural wood fencing" },
  { slug: "fence-repair", label: "Fence Repair", icon: Wrench, desc: "Fix storm damage & leaning posts" },
  { slug: "gate-installation", label: "Gate Installation", icon: DoorOpen, desc: "Custom gates to match your fence" },
  { slug: "aluminum-fencing", label: "Aluminum Fencing", icon: Fence, desc: "Elegant ornamental fencing" },
];

const FAQS = [
  {
    q: "How long does a vinyl fence last?",
    a: "Vinyl fences are built to last 20 to 30 years or more. Most manufacturers offer lifetime warranties on their vinyl fencing products. Unlike wood, vinyl doesn't rot, warp, or splinter - so it maintains its appearance with virtually no upkeep.",
  },
  {
    q: "Does vinyl fencing yellow over time?",
    a: "Modern vinyl fencing is manufactured with UV inhibitors that prevent yellowing and fading. The technology has come a long way - today's vinyl holds its color for decades. We only install high-quality, UV-resistant vinyl products.",
  },
  {
    q: "Can vinyl fencing handle Delaware wind and weather?",
    a: "Absolutely. The vinyl fencing we install is engineered for Mid-Atlantic conditions - high winds, heavy rain, snow, and summer heat. Posts are set in concrete and panels are designed to flex without cracking under wind pressure.",
  },
  {
    q: "How does vinyl compare to wood on cost?",
    a: "Vinyl costs more upfront per linear foot than wood. However, over its lifetime vinyl is often cheaper because you never pay for staining, sealing, painting, or replacing rotted boards. Most homeowners break even within 5-7 years and save money every year after that.",
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
  name: "Vinyl Fence Installation",
  provider: {
    "@type": "LocalBusiness",
    name: COMPANY.name,
  },
  areaServed: {
    "@type": "State",
    name: "Delaware",
  },
  description:
    "Professional low-maintenance vinyl fence installation in Delaware. Privacy, semi-privacy, picket, and ranch rail styles in white, tan, and gray.",
};

export default function VinylFencing() {
  return (
    <Layout>
      <SEO
        title="Vinyl Fence Installation Delaware"
        description="Low-maintenance vinyl fence installation in Delaware. Privacy, semi-privacy, picket & ranch rail in multiple colors. Free estimates from TWOMENS."
        canonicalUrl="https://twomensfence.com/services/vinyl-fencing"
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
            { "@type": "ListItem", "position": 3, "name": "Vinyl Fencing", "item": "https://twomensfence.com/services/vinyl-fencing" },
          ],
        }]}
      />

      {/* ═══════════════════════════════════════
          HERO - Dark
          ═══════════════════════════════════════ */}
      <section className="relative bg-authority overflow-hidden">
        <div className="absolute inset-0">
          <img src={SERVICE_IMAGES.vinyl[0].path} alt={SERVICE_IMAGES.vinyl[0].alt} width={1920} height={1080} fetchPriority="high" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-authority/95 via-authority/85 to-authority/80" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-trust/5 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-32">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp} custom={0}>
              <SectionBadge icon={Sparkles} label="Vinyl Fencing" />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
            >
              <span className="text-action">Vinyl Fencing</span>. Zero
              Maintenance. All Style.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 text-lg md:text-xl text-white/60 max-w-xl leading-relaxed"
            >
              No painting. No staining. No rotting. Vinyl fencing looks
              beautiful for decades with virtually zero upkeep - installed by a
              Delaware crew that knows how to do it right.
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
          WHY CHOOSE VINYL - Light
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: CheckCircle, label: "Benefits" }}
            title="Why Choose Vinyl Fencing?"
            subtitle="Vinyl is the lowest-maintenance fencing option on the market - and it looks great doing it."
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
            subtitle="Vinyl fencing comes in more styles than most people expect - from full privacy panels to classic picket and ranch rail."
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
          PHOTO GALLERY - Light
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: Eye, label: "Our Work" }}
            title="Vinyl Fence Projects"
            subtitle="Browse recent vinyl fence installations across Delaware and Pennsylvania."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SERVICE_IMAGES.vinyl.map((img, i) => (
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
          RELATED SERVICES - Sage
          ═══════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-section-sage">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: Fence, label: "Related Services" }}
            title="You Might Also Need"
            subtitle="Explore other services that pair well with vinyl fencing."
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
                    <ArrowRight
                      size={14}
                      className="text-trust/40 shrink-0 ml-auto group-hover:text-trust transition-colors"
                    />
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
            title="Vinyl Fencing Questions"
            subtitle="Everything you need to know before choosing vinyl for your property."
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
                Ready for Your New <span className="text-trust">Vinyl Fence</span>?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Tell us about your project and we&apos;ll come out for a free
                on-site estimate. No pressure, no gimmicks - just an honest
                quote from a local crew.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Free on-site estimates",
                  "White, tan, gray & woodgrain options",
                  "Lifetime manufacturer warranties",
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
