import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionBadge } from "@/components/shared/SectionBadge";
import { CTAButton } from "@/components/shared/CTAButton";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  ChevronDown,
  Phone,
  MessageSquare,
  Wrench,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import { COMPANY, SERVICE_AREAS } from "@/lib/constants";

/* ──────────────────────────────────────────────
   Data
   ────────────────────────────────────────────── */
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  icon: typeof HelpCircle;
  bg: string;
  items: FAQItem[];
}

const FAQ_CATEGORIES: FAQCategory[] = [
  {
    title: "General",
    icon: MessageSquare,
    bg: "bg-background",
    items: [
      {
        question: "How long have you been in business?",
        answer:
          "TWOMENS Fence & Construction is owned by Oscar and Anna — a husband-and-wife team with over 18 years of experience. They've completed over 2,500 projects including fences, decks, and tree trimming, and built their reputation on quality work and honest service.",
      },
      {
        question: "Are you licensed and insured?",
        answer:
          "Yes, we are fully licensed and insured. We carry both general liability insurance and workers' compensation coverage. Plus, every job comes with a warranty. We're happy to provide proof of insurance upon request — many homeowners and HOAs require this before work begins.",
      },
      {
        question: "What areas do you serve?",
        answer: `We serve a 2-hour radius from our home base in New Castle, DE (19720). This includes ${SERVICE_AREAS.map((a) => a.label).join(", ")}, and surrounding communities across Delaware and Pennsylvania. If you're not sure whether we cover your area, give us a call and we'll let you know.`,
      },
      {
        question: "Do you offer free estimates?",
        answer:
          "Absolutely. Every estimate is 100% free with no obligation. We'll come to your property, take measurements, discuss your needs and preferences, and provide a detailed written quote — no hidden fees, no surprises, no pressure.",
      },
    ],
  },
  {
    title: "Installation",
    icon: Wrench,
    bg: "bg-section-warm",
    items: [
      {
        question: "How long does installation take?",
        answer:
          "Most residential fence installations take 1 to 3 days, depending on the size of the property, the type of fence, and terrain conditions. We'll give you a clear timeline during your estimate so you know exactly what to expect.",
      },
      {
        question: "Do I need a permit for my fence or deck?",
        answer:
          "It depends on your municipality. Some areas in Delaware and Pennsylvania require permits for fence and deck installation, while others don't. We help guide you through the permit process — including what's needed, where to apply, and any setback or height restrictions that may apply.",
      },
      {
        question: "Do you remove old fencing?",
        answer:
          "Yes, we can remove and haul away your existing fence for an additional fee. We'll include this as a separate line item on your estimate so there are no surprises. Many customers combine removal with new installation to save time.",
      },
      {
        question: "What about underground utilities?",
        answer:
          "Safety first — we call 811 (Call Before You Dig) before every single job. This free service marks underground utility lines so we know exactly where it's safe to dig. We never skip this step, and neither should any contractor you hire.",
      },
    ],
  },
  {
    title: "Materials & Pricing",
    icon: DollarSign,
    bg: "bg-background",
    items: [
      {
        question: "Which fence type is the cheapest?",
        answer:
          "Chain link is typically the most affordable option, followed by wood (pressure-treated pine), then vinyl, and aluminum. However, the total cost depends on your property size, terrain, and specific requirements. We'll break down the pricing for each option during your estimate.",
      },
      {
        question: "What's the most durable fence material?",
        answer:
          "Vinyl and aluminum are the lowest-maintenance and most durable options. Vinyl won't rot, warp, or need painting, and aluminum resists rust and corrosion. Wood is durable too, but requires periodic staining or sealing to maximize its lifespan. We'll help you choose the best material for your needs and budget.",
      },
      {
        question: "Do you offer financing?",
        answer:
          "We don't currently offer financing, but we do offer very competitive pricing and work with you to find a solution that fits your budget. We're upfront about costs from the start — what you see on your written quote is what you pay.",
      },
      {
        question: "Do you warranty your work?",
        answer:
          "Absolutely — every single job comes with a warranty. We stand behind every fence, deck, and tree job we do. If there's ever an issue, we'll come back and make it right. Many of our materials also carry their own manufacturer warranties.",
      },
    ],
  },
];

/* ──────────────────────────────────────────────
   Accordion component
   ────────────────────────────────────────────── */
function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="rounded-xl bg-white border border-border overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 p-4 md:p-5 text-left hover:bg-section-light/50 transition-colors"
            >
              <span className="text-sm md:text-base font-semibold text-foreground">
                {item.question}
              </span>
              <ChevronDown
                size={20}
                className={`shrink-0 text-muted-foreground transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-4 md:px-5 pb-4 md:pb-5">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

/* ──────────────────────────────────────────────
   Page
   ────────────────────────────────────────────── */
export default function FAQ() {
  return (
    <Layout>
      <SEO
        title="Fence Installation FAQ"
        description="Answers to common questions about fence installation in Delaware — permits, costs, materials, timelines, and more."
        canonicalUrl="https://twomensfence.com/faq"
        schema={[{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": FAQ_CATEGORIES.flatMap((cat) =>
            cat.items.map((item) => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer,
              },
            }))
          ),
        }, {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://twomensfence.com" },
            { "@type": "ListItem", "position": 2, "name": "FAQ", "item": "https://twomensfence.com/faq" },
          ],
        }]}
      />

      {/* ═══════════════════════════════════════
          HERO — Dark
          ═══════════════════════════════════════ */}
      <section className="relative bg-authority overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-authority via-authority-light/50 to-authority" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-trust/5 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-14 md:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge icon={HelpCircle} label="FAQ" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
          >
            Frequently Asked Questions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            Everything you need to know about fence installation, materials, pricing, and
            working with our team. Can't find your answer? Give us a call.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ CATEGORIES
          ═══════════════════════════════════════ */}
      {FAQ_CATEGORIES.map((category) => (
        <section
          key={category.title}
          className={`py-16 md:py-20 ${category.bg}`}
        >
          <div className="max-w-3xl mx-auto px-6">
            <SectionHeading
              badge={{ icon: category.icon, label: category.title }}
              title={`${category.title} Questions`}
            />
            <FAQAccordion items={category.items} />
          </div>
        </section>
      ))}

      {/* ═══════════════════════════════════════
          BOTTOM CTA — Dark
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-authority">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionHeading
            badge={{ icon: HelpCircle, label: "Need More Help?" }}
            title="Still Have Questions?"
            subtitle="We're always happy to help. Call us or send a message — we typically respond within 24 hours."
            light
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton tel={COMPANY.phoneTel} size="lg">
              <Phone size={18} className="mr-2" />
              Call {COMPANY.phone}
            </CTAButton>
            <CTAButton href="/contact" size="lg" variant="ghost">
              Send Us a Message
              <ArrowRight size={16} className="ml-2" />
            </CTAButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}
