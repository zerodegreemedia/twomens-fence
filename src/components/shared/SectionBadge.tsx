import type { LucideIcon } from "lucide-react";

interface SectionBadgeProps {
  icon: LucideIcon;
  label: string;
}

export function SectionBadge({ icon: Icon, label }: SectionBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-action/10 border border-action/20 text-action text-sm font-medium">
      <Icon size={14} />
      {label}
    </span>
  );
}
