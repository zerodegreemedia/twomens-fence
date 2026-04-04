import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionBadge } from "@/components/shared/SectionBadge";
import { CTAButton } from "@/components/shared/CTAButton";
import { ContactForm } from "@/components/shared/ContactForm";
import { motion } from "framer-motion";
import {
  DoorOpen,
  Phone,
  CheckCircle,
  ShieldCheck,
  Lock,
  Ruler,
  ChevronDown,
  HelpCircle,
  ArrowRight,
  TreePine,
  Columns3,
  Fence,
  Wrench,
  Link2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { COMPANY, SERVICES } from "@/lib/constants";
import { SERVICE_IMAGES } from "@/lib/images";
import { fadeUp, stagger, VIEWPORT } from "@/lib/animations";

const BENEFITS = [
  {
    icon: Lock,
    title: "Security & Access Control",
    desc: "A proper gate keeps your property secure while giving you convenient access. We install locking hardware, self-closing hinges, and keypad options.",
  },
  {
    icon: Ruler,
    title: "Custom Sizing",
    desc: "Every property is different. We build and install gates sized exactly for your driveway, walkway, or side yard - no awkward gaps or tight squeezes.",
  },
  {
    icon: ShieldCheck,
    title: "Matches Your Fence",
    desc: "Your gate should look like it belongs. We match the material, height, and style of your existing fence for a seamless, professional finish.",
  },
  {
    icon: DoorOpen,
    title: "All Gate Types",
    desc: "Single swing, double swing, sliding, and walk-through gates in wood, vinyl, aluminum, and chain link. We do it all.",
  },
];

const GATE_TYPES = [
  { name: "Single Swing Gate", desc: "Standard walk-through or driveway gate that swings open on one side" },
  { name: "Double Swing Gate", desc: "Two-panel driveway gate for wider openings - opens from the center" },
  { name: "Sliding Gate", desc: "Rolls along a track parallel to the fence line - ideal for sloped or tight driveways" },
  { name: "Walk-Through Gate", desc: "Pedestrian-sized gate for side yards, backyards, and pool enclosures" },
  { name: "Pool Code Gate", desc: "Self-closing, self-latching gate that meets Delaware pool safety requirements" },
  { name: "Commercial Gate", desc: "Heavy-duty gates for business properties, dumpster enclosures, and parking areas" },
];

const RELATED_SERVICES = [
  { slug: "wood-fencing", label: "Wood Fencing", icon: TreePine, desc: "Classic natural wood fencing" },
  { slug: "vinyl-fencing", label: "Vinyl Fencing", icon: Columns3, desc: "Low-maintenance vinyl fences" },
  { slug: "fence-repair", label: "Fence Repair", icon: Wrench, desc: "Fix storm damage & leaning posts" },
  { slug: "chain-link-fencing", label: "Chain Link Fencing", icon: Link2, desc: "Affordable commercial fencing" },
];

const FAQS = [
  {
    q: "Can you add a gate to my existing fence?",
    a: "Yes - this is one of our most common requests. We can cut into an existing fence line and install a new gate with proper posts and hardware. We'll match the material and style of your current fence so it looks like it was always there.",
  },
  {
    q: "What type of gate is best for a driveway?",
    a: "It depends on your driveway width and slope. Double swing gates work great for flat driveways up to 16 feet wide. For wider openings or sloped driveways, a sliding gate is usually the better choice. We'll recommend the right option during your free estimate.",
  },
  {
    q: "Do you install automatic gate openers?",
    a: "We focus on the gate structure, posts, and hardware. For automatic openers and keypads, we can recommend trusted local electricians who specialize in gate automation. The gate itself needs to be properly built first - that's our part.",
  },
  {
    q: "How much does a gate installation cost?",
    a: "Gate pricing varies based on size, material, and style. A standard walk-through gate starts around $300-500 installed. Driveway gates range from $800-2,500+ depending on width and material. We give free on-site estimates with exact pricing - no surprises.",
  },
];

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

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gate Installation Service",
  provider: {
    "@type": "LocalBusiness",
    name: COMPANY.name,
  },
  areaServed: {
    "@type": "State",
    name: "Delaware",
  },
  description:
    "Professional gate installation in Delaware. Driveway gates, walk-through gates, pool code gates, and commercial gates in wood, vinyl, aluminum, and chain link.",
};

export default function GateInstallation() {
  return (
    <Layout>
      <SEO
        title="Gate Installation Delaware - Driveway & Walk-Through"
        description="Professional gate installation in Delaware. Driveway, walk-through, pool code & commercial gates. Wood, vinyl, aluminum, chain link. Free estimates from TWOMENS."
        canonicalUrl="https://twomensfence.com/services/gate-installation"
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
            { "@type": "ListItem", "position": 3, "name": "Gate Installation", "item": "https://twomensfence.com/services/gate-installation" },
          ],
        }]}
      />

      {/* HERO */}
      <section className="relative bg-authority overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={SERVICE_IMAGES.aluminum[0].path}
            alt={SERVICE_IMAGES.aluminum[0].alt}
            width={1920}
            height={1080}
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-authority/95 via-authority/85 to-authority/80" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-trust/5 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-32">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp} custom={0}>
              <SectionBadge icon={DoorOpen} label="Gate Installation" />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
            >
              Custom <span className="text-action">Gates</span>.{" "}
              Built to Match.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 text-lg md:text-xl text-white/60 max-w-xl leading-relaxed"
            >
              Driveway gates, walk-throughs, pool code gates - we build and
              install gates that match your fence and secure your property.
              Custom-sized for a perfect fit.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <CTAButton href="/contact" size="lg">
                Get a Free Gate Estimate
              </CTAButton>
              <CTAButton tel={COMPANY.phoneTel} size="lg" variant="ghost">
                <Phone size={18} className="mr-2" />
                {COMPANY.phone}
              </CTAButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHY A GATE */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: CheckCircle, label: "Benefits" }}
            title="Why Add a Gate?"
            subtitle="A gate completes your fence - adding security, convenience, and curb appeal to your property."
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

      {/* GATE TYPES */}
      <section className="py-20 md:py-28 bg-section-light">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: DoorOpen, label: "Options" }}
            title="Gate Types We Install"
            subtitle="From pedestrian walk-throughs to wide driveway gates - we install every type, in every material."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GATE_TYPES.map((type, i) => (
              <motion.div
                key={type.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                custom={i}
                className="flex items-start gap-4 rounded-xl border border-border bg-white p-5 hover:shadow-md transition-all duration-300"
              >
                <CheckCircle size={20} className="text-trust shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground">{type.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{type.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-16 md:py-20 bg-section-sage">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading badge={{ icon: Fence, label: "Related Services" }} title="You Might Also Need" subtitle="Explore other services that pair well with gate installation." />
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

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-authority relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-authority via-authority-light/30 to-authority" />
        <div className="relative max-w-3xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: HelpCircle, label: "FAQ" }}
            title="Gate Installation Questions"
            subtitle="Common questions about adding or replacing a gate on your property."
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

      {/* BOTTOM CTA */}
      <section className="py-20 md:py-28 bg-section-warm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionBadge icon={Phone} label="Get Started Today" />
              <h2 className="mt-6 text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Ready for a New <span className="text-trust">Gate</span>?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Tell us about your project - driveway gate, walk-through, pool
                code, or something custom. We&apos;ll come out, measure, and
                give you an honest quote.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Free on-site measurements",
                  "Wood, vinyl, aluminum & chain link",
                  "Custom sizing for any opening",
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
