import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionBadge } from "@/components/shared/SectionBadge";
import { CTAButton } from "@/components/shared/CTAButton";
import { ContactForm } from "@/components/shared/ContactForm";
import { motion } from "framer-motion";
import {
  Crown,
  Phone,
  CheckCircle,
  ShieldCheck,
  Waves,
  Wrench,
  ChevronDown,
  Fence,
  HelpCircle,
  ArrowRight,
  Columns3,
  Link2,
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
    icon: Crown,
    title: "Ornamental Look",
    desc: "Aluminum fencing delivers the elegant, upscale appearance of wrought iron without the weight, rust, or high price tag.",
  },
  {
    icon: ShieldCheck,
    title: "Rust-Proof",
    desc: "Powder-coated aluminum will never rust, corrode, or flake - even in Delaware's humid summers and salty coastal air.",
  },
  {
    icon: Waves,
    title: "Pool-Code Compliant",
    desc: "We install aluminum fencing that meets Delaware pool safety codes with proper picket spacing and self-closing gate hardware.",
  },
  {
    icon: Wrench,
    title: "Low Maintenance",
    desc: "No painting, no staining, no rust treatment. Aluminum fencing holds its finish for decades with virtually zero upkeep.",
  },
];

const STYLES = [
  { name: "Flat Top", desc: "Clean, modern profile with level horizontal rails - the most popular residential style" },
  { name: "Spear Top", desc: "Traditional pointed pickets for an elegant, classic wrought-iron look" },
  { name: "Puppy Picket", desc: "Closer picket spacing at the bottom to keep small dogs and pets contained" },
  { name: "Pool Code Panels", desc: "Meets local pool safety requirements with proper spacing and self-closing gates" },
  { name: "Heights: 3ft / 4ft / 5ft / 6ft", desc: "Available in multiple heights for front yards, backyards, pools, and commercial sites" },
  { name: "Colors: Black / Bronze / White", desc: "Powder-coated finishes that resist fading, chipping, and peeling" },
];

const RELATED_SERVICES = [
  { slug: "vinyl-fencing", label: "Vinyl Fencing", icon: Columns3, desc: "Low-maintenance privacy fencing" },
  { slug: "gate-installation", label: "Gate Installation", icon: DoorOpen, desc: "Custom gates to match your fence" },
  { slug: "fence-repair", label: "Fence Repair", icon: Wrench, desc: "Fix storm damage & leaning posts" },
  { slug: "chain-link-fencing", label: "Chain Link Fencing", icon: Link2, desc: "Affordable commercial fencing" },
];

const FAQS = [
  {
    q: "What's the difference between aluminum and wrought iron fencing?",
    a: "Aluminum is significantly lighter, will never rust, costs less, and requires virtually no maintenance. Wrought iron is heavier and stronger but rusts over time and needs regular painting. For most residential applications, aluminum gives you the same ornamental look at a fraction of the long-term cost.",
  },
  {
    q: "Is aluminum fencing strong enough for security?",
    a: "Yes. Modern aluminum fencing is made from heavy-duty, powder-coated aluminum alloy that is surprisingly strong. It won't bend or break under normal conditions. While it's not a commercial security barrier, it provides an effective deterrent and clear property boundary for residential use.",
  },
  {
    q: "Does aluminum fencing meet pool code requirements?",
    a: "Yes - we install aluminum pool fencing that meets Delaware and local municipal pool safety codes. This includes proper picket spacing (no more than 4 inches), minimum height requirements, and self-closing/self-latching gate hardware. We know the local codes and make sure your fence passes inspection.",
  },
  {
    q: "Can aluminum fencing be installed on sloped ground?",
    a: "Absolutely. Aluminum fence panels are rackable, meaning they can angle to follow the slope of your yard while keeping the pickets vertical. For steeper grades, we use stair-step installation. Either way, the fence looks clean and follows your terrain naturally.",
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
  name: "Aluminum Fence Installation",
  provider: {
    "@type": "LocalBusiness",
    name: COMPANY.name,
  },
  areaServed: {
    "@type": "State",
    name: "Delaware",
  },
  description:
    "Professional ornamental and pool-code-compliant aluminum fence installation in Delaware. Flat top, spear top, and puppy picket styles in black, bronze, and white.",
};

export default function AluminumFencing() {
  return (
    <Layout>
      <SEO
        title="Aluminum Fence Installation Delaware"
        description="Professional ornamental and pool-code-compliant aluminum fence installation in Delaware. Flat top, spear top, and puppy picket styles. Free estimates from TWOMENS Fence."
        canonicalUrl="https://twomensfence.com/services/aluminum-fencing"
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
            { "@type": "ListItem", "position": 3, "name": "Aluminum Fencing", "item": "https://twomensfence.com/services/aluminum-fencing" },
          ],
        }]}
      />

      {/* ═══════════════════════════════════════
          HERO - Dark
          ═══════════════════════════════════════ */}
      <section className="relative bg-authority overflow-hidden">
        <div className="absolute inset-0">
          <img src={SERVICE_IMAGES.aluminum[0].path} alt={SERVICE_IMAGES.aluminum[0].alt} width={1920} height={1080} fetchPriority="high" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-authority/95 via-authority/85 to-authority/80" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-trust/5 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-32">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp} custom={0}>
              <SectionBadge icon={Crown} label="Aluminum Fencing" />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
            >
              <span className="text-action">Aluminum Fencing</span>. Elegant
              &amp; Maintenance-Free.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 text-lg md:text-xl text-white/60 max-w-xl leading-relaxed"
            >
              The classic look of wrought iron without the rust, weight, or
              maintenance. Aluminum fencing adds curb appeal and security -               installed by a local Delaware crew.
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
          WHY CHOOSE ALUMINUM - Light
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: CheckCircle, label: "Benefits" }}
            title="Why Choose Aluminum Fencing?"
            subtitle="Aluminum gives you the ornamental look of wrought iron with none of the drawbacks - no rust, no painting, no hassle."
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
            subtitle="From classic spear tops to puppy picket and pool-code panels - we have an aluminum fence style for every need."
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
          <SectionHeading badge={{ icon: Eye, label: "Our Work" }} title="Aluminum Fence Projects" subtitle="Browse recent aluminum fence installations across Delaware and Pennsylvania." />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {SERVICE_IMAGES.aluminum.map((img, i) => (
              <motion.div key={img.name} variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT} custom={i} className="aspect-[4/3] rounded-xl border border-border overflow-hidden group">
                <img src={img.path} alt={img.alt} width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
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
          <SectionHeading badge={{ icon: Fence, label: "Related Services" }} title="You Might Also Need" subtitle="Explore other services that pair well with aluminum fencing." />
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
            title="Aluminum Fencing Questions"
            subtitle="Common questions from homeowners considering aluminum fencing for their property."
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
                Ready for Your New{" "}
                <span className="text-trust">Aluminum Fence</span>?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Tell us about your project and we&apos;ll come out for a free
                on-site estimate. No pressure, no gimmicks - just an honest
                quote from a local crew.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Free on-site estimates",
                  "Pool-code compliant options",
                  "Black, bronze & white finishes",
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
