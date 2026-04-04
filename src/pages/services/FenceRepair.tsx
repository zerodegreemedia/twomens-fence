import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionBadge } from "@/components/shared/SectionBadge";
import { CTAButton } from "@/components/shared/CTAButton";
import { ContactForm } from "@/components/shared/ContactForm";
import { motion } from "framer-motion";
import {
  Wrench,
  Phone,
  CheckCircle,
  ShieldCheck,
  Clock,
  DollarSign,
  ChevronDown,
  AlertTriangle,
  HelpCircle,
  ArrowRight,
  TreePine,
  Columns3,
  Fence,
  DoorOpen,
} from "lucide-react";
import { Link } from "react-router-dom";
import { COMPANY, SERVICES } from "@/lib/constants";
import { SERVICE_IMAGES } from "@/lib/images";
import { fadeUp, stagger, VIEWPORT } from "@/lib/animations";

const BENEFITS = [
  {
    icon: Clock,
    title: "Fast Turnaround",
    desc: "Most fence repairs are completed in a single day. We show up on time and get it done right - no dragging the job out.",
  },
  {
    icon: DollarSign,
    title: "Save vs. Replace",
    desc: "Repair costs a fraction of a full replacement. We'll honestly tell you if repair makes sense or if it's time for new.",
  },
  {
    icon: ShieldCheck,
    title: "All Materials",
    desc: "We repair wood, vinyl, aluminum, and chain link fencing. Whatever you have, we can fix it.",
  },
  {
    icon: Wrench,
    title: "Storm Damage Pros",
    desc: "Delaware storms hit hard. We respond fast to wind, tree, and impact damage to get your property secured quickly.",
  },
];

const REPAIR_TYPES = [
  { name: "Leaning or Falling Posts", desc: "Re-set rotted or damaged posts with new concrete footings" },
  { name: "Broken or Missing Boards", desc: "Replace individual boards to match your existing fence style" },
  { name: "Storm & Wind Damage", desc: "Emergency repair for sections knocked down by weather or fallen trees" },
  { name: "Gate Repair & Realignment", desc: "Fix sagging, sticking, or broken gates - hardware and frame repairs" },
  { name: "Rotted Bottom Rails", desc: "Replace ground-contact rails that have deteriorated from moisture" },
  { name: "Chain Link Patching", desc: "Repair holes, replace top rails, and re-tension sagging chain link fabric" },
];

const RELATED_SERVICES = [
  { slug: "wood-fencing", label: "Wood Fencing", icon: TreePine, desc: "New wood fence installation" },
  { slug: "vinyl-fencing", label: "Vinyl Fencing", icon: Columns3, desc: "Low-maintenance vinyl fences" },
  { slug: "gate-installation", label: "Gate Installation", icon: DoorOpen, desc: "Custom gates for your property" },
  { slug: "chain-link-fencing", label: "Chain Link Fencing", icon: Fence, desc: "Affordable commercial fencing" },
];

const FAQS = [
  {
    q: "How do I know if my fence needs repair or replacement?",
    a: "If the damage is limited to a few posts, boards, or a single section, repair is usually the better value. If more than 30-40% of the fence is damaged, rotted, or leaning, a full replacement often makes more sense long-term. We'll give you an honest recommendation during your free estimate.",
  },
  {
    q: "Do you repair fences you didn't install?",
    a: "Absolutely. We repair all types of fences regardless of who installed them. Wood, vinyl, aluminum, chain link - if it's broken, we can fix it.",
  },
  {
    q: "How quickly can you get to a storm damage repair?",
    a: "For storm damage and emergencies, we prioritize getting to your property as fast as possible - often within 24-48 hours. We'll secure the area first, then schedule the full repair.",
  },
  {
    q: "Will the repaired section match my existing fence?",
    a: "We do our best to match materials, height, and style. With wood fences, new boards may look slightly different in color at first but will weather to match over time. For vinyl and aluminum, we source matching manufacturer panels whenever possible.",
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
  name: "Fence Repair Service",
  provider: {
    "@type": "LocalBusiness",
    name: COMPANY.name,
  },
  areaServed: {
    "@type": "State",
    name: "Delaware",
  },
  description:
    "Professional fence repair in Delaware. Wood, vinyl, aluminum, and chain link fence repair. Storm damage, leaning posts, broken boards, gate repair. Free estimates.",
};

export default function FenceRepair() {
  return (
    <Layout>
      <SEO
        title="Fence Repair Delaware - Fast, Affordable Fixes"
        description="Professional fence repair in Delaware. Storm damage, leaning posts, broken boards, gate fixes. All materials - wood, vinyl, aluminum, chain link. Free estimates."
        canonicalUrl="https://twomensfence.com/services/fence-repair"
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
            { "@type": "ListItem", "position": 3, "name": "Fence Repair", "item": "https://twomensfence.com/services/fence-repair" },
          ],
        }]}
      />

      {/* HERO */}
      <section className="relative bg-authority overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={SERVICE_IMAGES.wood[1].path}
            alt={SERVICE_IMAGES.wood[1].alt}
            width={1920}
            height={1080}
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-authority/95 via-authority/85 to-authority/80" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-action/5 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-32">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp} custom={0}>
              <SectionBadge icon={Wrench} label="Fence Repair" />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
            >
              Fence <span className="text-action">Broken</span>?{" "}
              We Fix It Fast.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 text-lg md:text-xl text-white/60 max-w-xl leading-relaxed"
            >
              Storm damage, leaning posts, broken boards - whatever happened,
              we&apos;ll get your fence back in shape. Most repairs done in one
              day by our local Delaware crew.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <CTAButton href="/contact" size="lg">
                Get a Free Repair Estimate
              </CTAButton>
              <CTAButton tel={COMPANY.phoneTel} size="lg" variant="ghost">
                <Phone size={18} className="mr-2" />
                {COMPANY.phone}
              </CTAButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHY REPAIR */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: CheckCircle, label: "Benefits" }}
            title="Why Repair Instead of Replace?"
            subtitle="A targeted repair can save you thousands and extend your fence's life by years. Here's why it makes sense."
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

      {/* REPAIR TYPES */}
      <section className="py-20 md:py-28 bg-section-light">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: AlertTriangle, label: "Common Repairs" }}
            title="What We Fix"
            subtitle="From a single broken board to an entire section knocked down by a storm - no job is too small or too urgent."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {REPAIR_TYPES.map((type, i) => (
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
          <SectionHeading badge={{ icon: Fence, label: "Related Services" }} title="You Might Also Need" subtitle="Explore other services that pair well with fence repair." />
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
            title="Fence Repair Questions"
            subtitle="Answers to what homeowners ask us most about fence repairs."
            light
          />

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
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
                Need a <span className="text-trust">Fence Repair</span>?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Send us a few details and we&apos;ll come out to assess the damage
                for free. No pressure - just an honest recommendation from a
                local crew that does this every day.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Free damage assessment",
                  "Same-day response for storm damage",
                  "Wood, vinyl, aluminum & chain link",
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
