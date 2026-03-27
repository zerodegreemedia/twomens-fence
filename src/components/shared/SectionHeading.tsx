import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { SectionBadge } from "./SectionBadge";

interface SectionHeadingProps {
  badge?: { icon: LucideIcon; label: string };
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {badge && (
        <div className="mb-4">
          <SectionBadge icon={badge.icon} label={badge.label} />
        </div>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-white/60" : "text-muted-foreground"}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
