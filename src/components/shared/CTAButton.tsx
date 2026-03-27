import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
      : "bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold transition-all duration-300";

  if (tel) {
    return (
      <Button asChild size={size} className={`${baseStyles} ${className}`}>
        <a href={tel}>{children}</a>
      </Button>
    );
  }

  if (href) {
    return (
      <Button asChild size={size} className={`${baseStyles} ${className}`}>
        <Link to={href}>{children}</Link>
      </Button>
    );
  }

  return (
    <Button
      size={size}
      className={`${baseStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
