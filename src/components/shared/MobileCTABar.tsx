import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MobileCTABar() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  // Hide on /contact and /thank-you
  const hidden = ["/contact", "/thank-you"].includes(location.pathname);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (hidden || !visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-authority/95 backdrop-blur-md border-t border-white/10 px-4 py-3 safe-bottom">
      <Link
        to="/book"
        className={cn(
          buttonVariants({ size: "lg" }),
          "w-full bg-action hover:bg-action-glow text-foreground font-semibold shadow-lg shadow-action/25 transition-all duration-300"
        )}
      >
        Get Your Free Estimate
        <ArrowRight size={18} className="ml-2" />
      </Link>
    </div>
  );
}
