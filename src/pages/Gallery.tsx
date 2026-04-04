import { useState, useCallback, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionBadge } from "@/components/shared/SectionBadge";
import { CTAButton } from "@/components/shared/CTAButton";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Phone, ArrowRight, Fence, X, ChevronLeft, ChevronRight } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { GALLERY_IMAGES } from "@/lib/images";
import { fadeUp, VIEWPORT } from "@/lib/animations";

const FILTER_TABS = ["All", "Wood", "Vinyl", "Aluminum", "Chain Link", "Deck", "Tree"] as const;
const PAGE_SIZE = 12;

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeFilter === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((item) => item.type === activeFilter);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const handleFilterChange = (tab: string) => {
    setActiveFilter(tab);
    setVisibleCount(PAGE_SIZE);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  }, []);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0
    );
  }, [lightboxIndex, filteredItems.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1
    );
  }, [lightboxIndex, filteredItems.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  return (
    <Layout>
      <SEO
        title="Project Gallery - Fences, Decks & Trees"
        description="Browse our fence, deck, and tree projects across Delaware and Pennsylvania. Wood, vinyl, aluminum, chain link, and more."
        canonicalUrl="https://twomensfence.com/gallery"
        schema={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://twomensfence.com" },
            { "@type": "ListItem", "position": 2, "name": "Gallery", "item": "https://twomensfence.com/gallery" },
          ],
        }}
      />

      {/* HERO */}
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
            <SectionBadge icon={Camera} label="Our Work" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
          >
            See Our Work in Action
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            Browse recent fences, decks, and tree projects across Delaware and Pennsylvania.
            Every project is built with the same attention to detail and quality craftsmanship.
          </motion.p>
        </div>
      </section>

      {/* FILTER TABS + GALLERY */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {FILTER_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => handleFilterChange(tab)}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {visibleItems.map((img, i) => {
                const globalIndex = filteredItems.indexOf(img);
                return (
                  <motion.div
                    key={img.name}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                    custom={i % PAGE_SIZE}
                    onClick={() => openLightbox(globalIndex)}
                    className="aspect-[4/3] rounded-2xl border border-border overflow-hidden group cursor-pointer hover:shadow-xl hover:border-trust/30 transition-all duration-300 bg-section-light"
                  >
                    <img
                      src={img.path}
                      alt={img.alt}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading={i < 6 ? "eager" : "lazy"}
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Load more / count */}
          {filteredItems.length > 0 && (
            <div className="mt-10 text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                Showing {Math.min(visibleCount, filteredItems.length)} of {filteredItems.length} projects
              </p>
              {hasMore && (
                <button
                  onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
                  className="px-6 py-3 rounded-full bg-white border border-border text-sm font-semibold text-foreground hover:border-trust/30 hover:shadow-md transition-all duration-300"
                >
                  Load More Projects
                </button>
              )}
            </div>
          )}

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No projects in this category yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 md:py-28 bg-authority">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionHeading
            badge={{ icon: Fence, label: "Ready to Start?" }}
            title="Like What You See?"
            subtitle="Every project in this gallery started with a free estimate. Let's talk about yours."
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
      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            {/* Prev button */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-[90vw] max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredItems[lightboxIndex].path}
                alt={filteredItems[lightboxIndex].alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg">
                <p className="text-white text-sm text-center">
                  {filteredItems[lightboxIndex].alt}
                </p>
                <p className="text-white/50 text-xs text-center mt-1">
                  {lightboxIndex + 1} / {filteredItems.length}
                </p>
              </div>
            </motion.div>

            {/* Next button */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
