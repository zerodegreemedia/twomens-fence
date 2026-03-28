import { Link } from "react-router-dom";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  tel?: string;
  size?: "default" | "lg";
  variant?: "action" | "ghost";
  className?: string;
  onClick?: () => void;
}

export function CTAButton({
  children,
  href,
  tel,
  size = "default",
  variant = "action",
  className = "",
  onClick,
}: CTAButtonProps) {
  const baseStyles =
    variant === "action"
      ? "bg-action hover:bg-action-glow text-foreground font-semibold shadow-lg shadow-action/25 transition-all duration-300 hover:scale-[1.02]"
      : "bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold transition-all duration-300";

  if (tel) {
    return (
      <a href={tel} className={cn(buttonVariants({ size }), baseStyles, className)}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link to={href} className={cn(buttonVariants({ size }), baseStyles, className)}>
        {children}
      </Link>
    );
  }

  return (
    <Button
      size={size}
      className={cn(baseStyles, className)}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
