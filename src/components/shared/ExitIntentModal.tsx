import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { COMPANY } from "@/lib/constants";

const DISMISSED_KEY = "twomens_exit_modal_dismissed";

export function ExitIntentModal() {
  const [show, setShow] = useState(false);
  const location = useLocation();

  // Don't show on contact or thank-you pages
  const excluded = ["/contact", "/thank-you"].includes(location.pathname);

  useEffect(() => {
    if (excluded) return;
    if (sessionStorage.getItem(DISMISSED_KEY)) return;

    let triggered = false;

    const onScroll = () => {
      if (triggered) return;
      const scrollPercent =
        window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (scrollPercent >= 0.6) {
        triggered = true;
        // Small delay so it doesn't feel jarring
        setTimeout(() => setShow(true), 800);
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [excluded, location.pathname]);

  const dismiss = () => {
    setShow(false);
    sessionStorage.setItem(DISMISSED_KEY, "1");
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
            onClick={dismiss}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-0 left-0 right-0 z-[61] sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:max-w-lg sm:w-[calc(100%-2rem)]"
          >
            <div className="bg-authority rounded-t-2xl sm:rounded-2xl p-8 relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-trust/10 to-transparent pointer-events-none" />

              {/* Close button */}
              <button
                onClick={dismiss}
                className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors z-10"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="relative">
                <p className="text-action text-sm font-semibold mb-2">
                  Before You Go...
                </p>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3">
                  Get Your Free Estimate
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  No pressure, no gimmicks - just an honest quote from a local
                  Delaware crew. Takes 30 seconds to request.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/book"
                    onClick={dismiss}
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "flex-1 bg-action hover:bg-action-glow text-foreground font-semibold shadow-lg shadow-action/25 transition-all duration-300"
                    )}
                  >
                    Get a Free Quote
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                  <a
                    href={COMPANY.phoneTel}
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold transition-all duration-300"
                    )}
                  >
                    <Phone size={16} className="mr-2" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
