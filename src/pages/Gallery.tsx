import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionBadge } from "@/components/shared/SectionBadge";
import { CTAButton } from "@/components/shared/CTAButton";
import { motion, AnimatePresence } from "framer-motion";
import { Fence, Camera, Phone, ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/constants";

/* ──────────────────────────────────────────────
   Animation helpers
   ────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

/* ──────────────────────────────────────────────
   Data
   ────────────────────────────────────────────── */
const FILTER_TABS = ["All", "Wood", "Vinyl", "Aluminum", "Chain Link"] as const;

type FenceType = "Wood" | "Vinyl" | "Aluminum" | "Chain Link";

interface GalleryItem {
  id: number;
  alt: string;
  type: FenceType;
  aspect: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, alt: "6-foot cedar privacy fence with lattice top in Wilmington DE", type: "Wood", aspect: "aspect-[4/3]" },
  { id: 2, alt: "White vinyl privacy fence with scalloped gate in Newark DE", type: "Vinyl", aspect: "aspect-[4/3]" },
  { id: 3, alt: "Black aluminum pool fence with self-closing gate in Bear DE", type: "Aluminum", aspect: "aspect-[3/4]" },
  { id: 4, alt: "Commercial chain link fence with barbed wire in New Castle DE", type: "Chain Link", aspect: "aspect-[4/3]" },
  { id: 5, alt: "Pressure-treated wood split rail fence in Hockessin DE", type: "Wood", aspect: "aspect-[3/4]" },
  { id: 6, alt: "Tan vinyl semi-privacy fence in Middletown DE", type: "Vinyl", aspect: "aspect-[4/3]" },
  { id: 7, alt: "Ornamental aluminum fence with puppy pickets in Smyrna DE", type: "Aluminum", aspect: "aspect-[4/3]" },
  { id: 8, alt: "Residential chain link fence with vinyl coating in Dover DE", type: "Chain Link", aspect: "aspect-[4/3]" },
  { id: 9, alt: "Custom cedar horizontal slat fence in West Chester PA", type: "Wood", aspect: "aspect-[4/3]" },
  { id: 10, alt: "White vinyl picket fence along front yard in Kennett Square PA", type: "Vinyl", aspect: "aspect-[3/4]" },
  { id: 11, alt: "Bronze aluminum estate fence in Elkton MD", type: "Aluminum", aspect: "aspect-[4/3]" },
  { id: 12, alt: "6-foot chain link privacy fence with slats in Bear DE", type: "Chain Link", aspect: "aspect-[4/3]" },
];

/* ──────────────────────────────────────────────
   Page
   ────────────────────────────────────────────── */
export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredItems =
    activeFilter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.type === activeFilter);

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
              {filteredItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                  custom={i % 6}
                  className={`${item.aspect} rounded-2xl bg-gradient-to-br from-trust/10 to-authority/10 border border-border overflow-hidden group cursor-pointer hover:shadow-xl hover:border-trust/30 transition-all duration-300`}
                >
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-muted-foreground/40 group-hover:text-trust/60 transition-colors">
                    <Fence size={48} />
                    <span className="text-xs font-medium text-muted-foreground/30 group-hover:text-trust/40 transition-colors px-4 text-center">
                      {item.alt}
                    </span>
                  </div>
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
