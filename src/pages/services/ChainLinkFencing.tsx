import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionBadge } from "@/components/shared/SectionBadge";
import { CTAButton } from "@/components/shared/CTAButton";
import { ContactForm } from "@/components/shared/ContactForm";
import { motion } from "framer-motion";
import {
  Link as LinkIcon,
  Phone,
  CheckCircle,
  DollarSign,
  Shield,
  Eye,
  Zap,
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
    icon: DollarSign,
    title: "Most Affordable Option",
    desc: "Chain link delivers the lowest cost per linear foot of any fencing material - ideal for large properties and tight budgets.",
  },
  {
    icon: Shield,
    title: "Extremely Durable",
    desc: "Galvanized steel wire and posts stand up to years of weather, impact, and heavy use without bending or breaking.",
  },
  {
    icon: Eye,
    title: "See-Through Security",
    desc: "Chain link provides a clear sightline across your property - great for keeping an eye on kids, pets, and equipment.",
  },
  {
    icon: Zap,
    title: "Quick Installation",
    desc: "Chain link goes up faster than any other fence type. Most residential jobs are done in a single day.",
  },
];

const STYLES = [
  { name: "Galvanized Standard", desc: "Classic silver chain link - the most economical and widely used option" },
  { name: "Vinyl-Coated (Black / Green / Brown)", desc: "Color-coated mesh that blends with landscaping and looks more refined" },
  { name: "Privacy Slats", desc: "Vertical or diagonal slats woven into the mesh for added privacy and wind reduction" },
  { name: "Barbed Wire (Commercial)", desc: "Security topping for commercial, industrial, and storage properties" },
  { name: "Heights: 4ft / 5ft / 6ft / 8ft", desc: "Residential heights from 4ft up to 8ft commercial and security applications" },
];

const RELATED_SERVICES = [
  { slug: "aluminum-fencing", label: "Aluminum Fencing", icon: Fence, desc: "Elegant ornamental fencing" },
  { slug: "gate-installation", label: "Gate Installation", icon: DoorOpen, desc: "Custom gates for your property" },
  { slug: "fence-repair", label: "Fence Repair", icon: Wrench, desc: "Fix storm damage & leaning posts" },
  { slug: "vinyl-fencing", label: "Vinyl Fencing", icon: Columns3, desc: "Low-maintenance privacy fencing" },
];

const FAQS = [
  {
    q: "How long does a chain link fence last?",
    a: "A galvanized chain link fence typically lasts 15 to 20 years. Vinyl-coated chain link can last 20 years or more because the coating provides an extra layer of protection against rust and corrosion. Posts set in concrete and quality hardware add even more longevity.",
  },
  {
    q: "Can you add privacy to a chain link fence?",
    a: "Yes. We offer privacy slats that weave into the chain link mesh, as well as privacy mesh screens that attach to the outside. Slats come in multiple colors and provide 70-90% privacy depending on the style. It's a great way to upgrade an existing fence without replacing it.",
  },
  {
    q: "Do you install commercial chain link with barbed wire?",
    a: "Yes. We install commercial-grade chain link fencing with barbed wire or razor wire topping for warehouses, storage yards, construction sites, and industrial properties. We use heavier gauge wire, thicker posts, and commercial-grade hardware for maximum security.",
  },
  {
    q: "What's the difference between residential and commercial gauge?",
    a: "Residential chain link uses lighter gauge wire (typically 11.5 gauge) and thinner posts, which is perfectly adequate for backyards and pet containment. Commercial chain link uses heavier gauge wire (9 or 6 gauge) and thicker, stronger posts designed for high-traffic, high-security applications.",
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
  name: "Chain Link Fence Installation",
  provider: {
    "@type": "LocalBusiness",
    name: COMPANY.name,
  },
  areaServed: {
    "@type": "State",
    name: "Delaware",
  },
  description:
    "Professional galvanized and vinyl-coated chain link fence installation in Delaware for residential and commercial properties. Privacy slats and barbed wire options available.",
};

export default function ChainLinkFencing() {
  return (
    <Layout>
      <SEO
        title="Chain Link Fence Installation Delaware"
        description="Affordable chain link fence installation in Delaware. Galvanized, vinyl-coated, privacy slats. Residential & commercial. Free estimates from TWOMENS."
        canonicalUrl="https://twomensfence.com/services/chain-link-fencing"
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
            { "@type": "ListItem", "position": 3, "name": "Chain Link Fencing", "item": "https://twomensfence.com/services/chain-link-fencing" },
          ],
        }]}
      />

      {/* ═══════════════════════════════════════
          HERO - Dark
          ═══════════════════════════════════════ */}
      <section className="relative bg-authority overflow-hidden">
        <div className="absolute inset-0">
          <img src={SERVICE_IMAGES.chainlink[0].path} alt={SERVICE_IMAGES.chainlink[0].alt} width={1920} height={1080} fetchPriority="high" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-authority/95 via-authority/85 to-authority/80" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-trust/5 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-32">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp} custom={0}>
              <SectionBadge icon={LinkIcon} label="Chain Link Fencing" />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
            >
              <span className="text-action">Chain Link Fencing</span>. Tough,
              Affordable, Reliable.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 text-lg md:text-xl text-white/60 max-w-xl leading-relaxed"
            >
              The most cost-effective way to secure your property. Galvanized or
              vinyl-coated chain link for homes, businesses, and everything in
              between - installed fast by a local Delaware crew.
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
          WHY CHOOSE CHAIN LINK - Light
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: CheckCircle, label: "Benefits" }}
            title="Why Choose Chain Link Fencing?"
            subtitle="Chain link is the workhorse of the fencing world - affordable, durable, and fast to install."
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
            subtitle="Chain link is more versatile than most people think - from basic galvanized to color-coated with privacy slats."
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
          <SectionHeading badge={{ icon: Eye, label: "Our Work" }} title="Chain Link Fence Projects" subtitle="Browse recent chain link fence installations across Delaware and Pennsylvania." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SERVICE_IMAGES.chainlink.slice(0, 8).map((img, i) => (
              <motion.div key={img.name} variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT} custom={i} className="aspect-[4/3] rounded-xl border border-border overflow-hidden group">
                <img src={img.path} alt={img.alt} width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <RecentProjects
        serviceType="Chain Link"
        title="Recent Chain Link Fence Projects"
        subtitle="See our latest chain link fence installations across Delaware and Pennsylvania."
        limit={6}
        captions={{
          "gallery-12-chainlink-galvanized-field": "Galvanized chain link fence — large commercial property, New Castle County",
          "gallery-10-chainlink-commercial-sports": "Black vinyl-coated chain link — sports facility, Delaware",
          "gallery-11-chainlink-black-commercial": "Black chain link fence — commercial perimeter, Bear, DE",
          "gallery-13-chainlink-dumpster-enclosure": "Chain link dumpster enclosure — commercial property, Wilmington",
        }}
      />

      {/* ═══════════════════════════════════════
          RELATED SERVICES
          ═══════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-section-sage">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading badge={{ icon: Fence, label: "Related Services" }} title="You Might Also Need" subtitle="Explore other services that pair well with chain link fencing." />
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
            title="Chain Link Fencing Questions"
            subtitle="Answers to common questions about chain link fencing for residential and commercial properties."
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
                <span className="text-trust">Chain Link Fence</span>?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Tell us about your project and we&apos;ll come out for a free
                on-site estimate. Residential or commercial - we handle it all.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Free on-site estimates",
                  "Residential & commercial installations",
                  "Vinyl-coated color options available",
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
