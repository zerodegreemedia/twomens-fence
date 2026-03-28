import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionBadge } from "@/components/shared/SectionBadge";
import { CTAButton } from "@/components/shared/CTAButton";
import { motion, AnimatePresence } from "framer-motion";
import { Fence, Camera, Phone, ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { GALLERY_IMAGES } from "@/lib/images";

/* ──────────────────────────────────────────────
   Animation helpers
   ────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

/* ──────────────────────────────────────────────
   Data
   ────────────────────────────────────────────── */
const FILTER_TABS = ["All", "Wood", "Vinyl", "Aluminum", "Chain Link"] as const;


/* ──────────────────────────────────────────────
   Page
   ────────────────────────────────────────────── */
export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredItems =
    activeFilter === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((item) => item.type === activeFilter);

  return (
    <Layout>
      <SEO
        title="Fence Project Gallery"
        description="Browse our fence installation projects across Delaware, Pennsylvania, and Maryland. Wood, vinyl, aluminum, and chain link."
        canonicalUrl="https://twomensfence.com/gallery"
      />

      {/* ═══════════════════════════════════════
          HERO — Dark
          ═══════════════════════════════════════ */}
      <section className="relative bg-authority overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-authority via-authority-light/50 to-authority" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-trust/5 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge icon={Camera} label="Our Work" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
          >
            See Our Fences in Action
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            Browse recent installations across Delaware, Pennsylvania, and Maryland.
            Every project is built with the same attention to detail and quality craftsmanship.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FILTER TABS + GALLERY — Light
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {FILTER_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === tab
                    ? "bg-action text-foreground shadow-lg shadow-action/25"
                    : "bg-white border border-border text-muted-foreground hover:border-trust/30 hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </motion.div>

          {/* Gallery grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((img, i) => (
                <motion.div
                  key={img.name}
                  layout
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                  custom={i % 6}
                  className="aspect-[4/3] rounded-2xl border border-border overflow-hidden group cursor-pointer hover:shadow-xl hover:border-trust/30 transition-all duration-300"
                >
                  <img
                    src={img.path}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No projects in this category yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOTTOM CTA — Dark
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-authority">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionHeading
            badge={{ icon: Fence, label: "Ready to Start?" }}
            title="Like What You See?"
            subtitle="Every fence in this gallery started with a free estimate. Let's talk about yours."
            light
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" size="lg">
              Get Your Free Estimate
              <ArrowRight size={16} className="ml-2" />
            </CTAButton>
            <CTAButton tel={COMPANY.phoneTel} size="lg" variant="ghost">
              <Phone size={18} className="mr-2" />
              Call {COMPANY.phone}
            </CTAButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}
