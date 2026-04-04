import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { GALLERY_IMAGES } from "@/lib/images";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { fadeUp, VIEWPORT } from "@/lib/animations";

interface RecentProjectsProps {
  serviceType: string;
  title?: string;
  subtitle?: string;
  limit?: number;
  captions?: Record<string, string>;
}

export function RecentProjects({
  serviceType,
  title = "Recent Projects",
  subtitle,
  limit = 6,
  captions,
}: RecentProjectsProps) {
  const filtered = GALLERY_IMAGES.filter(
    (img) => img.type.toLowerCase() === serviceType.toLowerCase()
  ).slice(0, limit);

  if (filtered.length === 0) return null;

  const resolvedSubtitle =
    subtitle ??
    `Browse our latest ${serviceType.toLowerCase()} installations across Delaware.`;

  return (
    <section className="py-20 md:py-28 bg-section-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          badge={{ icon: Camera, label: "Recent Projects" }}
          title={title}
          subtitle={resolvedSubtitle}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((img, i) => (
            <motion.div
              key={img.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              custom={i}
              className="rounded-xl border border-border overflow-hidden group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img.path}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {captions?.[img.name] ?? img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
