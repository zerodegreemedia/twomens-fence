import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { COMPANY } from "@/lib/constants";

export function MobileCTABar() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  // Hide on /contact, /thank-you, and /book
  const hidden = ["/contact", "/thank-you", "/book"].includes(location.pathname);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (hidden || !visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-authority/95 backdrop-blur-md border-t border-white/10 px-4 py-3 safe-bottom">
      <div className="flex gap-3">
        <a
          href={COMPANY.phoneTel}
          onClick={() => {
            if (typeof gtag === "function") {
              gtag("event", "phone_click", { event_category: "contact", event_label: "mobile_cta_bar" });
            }
          }}
          className={cn(
            buttonVariants({ size: "lg" }),
            "flex-1 bg-transparent border border-white/30 text-white hover:bg-white/10 hover:text-white font-semibold"
          )}
        >
          <Phone size={18} className="mr-2" />
          Call Now
        </a>
        <Link
          to="/book"
          className={cn(
            buttonVariants({ size: "lg" }),
            "flex-1 bg-action hover:bg-action-glow text-foreground font-semibold shadow-lg shadow-action/25 transition-all duration-300"
          )}
        >
          Free Quote
          <ArrowRight size={18} className="ml-2" />
        </Link>
      </div>
    </div>
  );
}
