import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { COMPANY, NAV_LINKS, SERVICE_AREAS } from "@/lib/constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setAreasOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Utility Bar */}
      <div className="bg-authority text-white/70 text-xs py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span>Licensed & Insured - Every Job Warranted</span>
            <span className="text-white/30">·</span>
            <span>Serving {SERVICE_AREAS.length} Areas in DE & PA</span>
            <span className="text-white/30">·</span>
            <span className="text-action font-medium">
              ★ Satisfaction Guaranteed
            </span>
          </div>
          <a
            href={COMPANY.phoneTel}
            onClick={() => {
              if (typeof gtag === "function") {
                gtag("event", "phone_click", { event_category: "contact", event_label: "utility_bar" });
              }
            }}
            className="text-white/90 hover:text-white transition-colors font-medium"
          >
            {COMPANY.phone}
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 bg-authority ${
          scrolled ? "shadow-lg shadow-black/10" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/img/logo/logo-white.svg"
              alt="TWO MEN Fence & Construction"
              width={192}
              height={48}
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.href
                    ? "text-white bg-white/10"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Service Areas Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAreasOpen(true)}
              onMouseLeave={() => setAreasOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/80 hover:text-white rounded-md transition-colors"
                onClick={() => setAreasOpen(!areasOpen)}
                aria-expanded={areasOpen}
                aria-haspopup="true"
                aria-label="Service areas menu"
              >
                Service Areas
                <ChevronDown
                  size={14}
                  className={`transition-transform ${areasOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {areasOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-border p-2 max-h-[70vh] overflow-y-auto"
                  >
                    <p className="px-3 py-1.5 text-[11px] font-semibold text-muted-foreground/60 uppercase tracking-wider">Delaware</p>
                    {SERVICE_AREAS.filter((a) => a.state === "Delaware").map((area) => (
                      <Link
                        key={area.slug}
                        to={area.href}
                        className="block px-3 py-2 text-sm text-foreground hover:bg-section-light rounded-lg transition-colors"
                      >
                        {area.city}
                      </Link>
                    ))}
                    <div className="my-1 border-t border-border" />
                    <p className="px-3 py-1.5 text-[11px] font-semibold text-muted-foreground/60 uppercase tracking-wider">Pennsylvania</p>
                    {SERVICE_AREAS.filter((a) => a.state === "Pennsylvania").map((area) => (
                      <Link
                        key={area.slug}
                        to={area.href}
                        className="block px-3 py-2 text-sm text-foreground hover:bg-section-light rounded-lg transition-colors"
                      >
                        {area.city}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={COMPANY.phoneTel}
              onClick={() => {
                if (typeof gtag === "function") {
                  gtag("event", "phone_click", { event_category: "contact", event_label: "desktop_nav" });
                }
              }}
              className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
            >
              <Phone size={16} />
              {COMPANY.phone}
            </a>
            <Link
              to="/book"
              className={cn(
                buttonVariants(),
                "bg-action hover:bg-action-glow text-foreground font-semibold shadow-lg shadow-action/25 transition-all duration-300 hover:scale-[1.02]"
              )}
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger className="p-2 text-white" aria-label="Open navigation menu">
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-authority border-authority-light p-0">
                <div className="flex flex-col h-full pt-12">
                  <nav className="flex flex-col px-6 gap-1">
                    {NAV_LINKS.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="px-4 py-3 text-base font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                    <div className="py-2">
                      <p className="px-4 py-2 text-xs font-semibold text-white/50 uppercase tracking-wider">
                        Delaware
                      </p>
                      {SERVICE_AREAS.filter((a) => a.state === "Delaware").map((area) => (
                        <Link
                          key={area.slug}
                          to={area.href}
                          className="block px-4 py-2 text-sm text-white/60 hover:text-white transition-colors"
                        >
                          {area.city}
                        </Link>
                      ))}
                      <p className="px-4 py-2 text-xs font-semibold text-white/50 uppercase tracking-wider mt-1">
                        Pennsylvania
                      </p>
                      {SERVICE_AREAS.filter((a) => a.state === "Pennsylvania").map((area) => (
                        <Link
                          key={area.slug}
                          to={area.href}
                          className="block px-4 py-2 text-sm text-white/60 hover:text-white transition-colors"
                        >
                          {area.city}
                        </Link>
                      ))}
                    </div>
                  </nav>
                  <div className="mt-auto p-6 space-y-3 border-t border-white/10">
                    <a
                      href={COMPANY.phoneTel}
                      onClick={() => {
                        if (typeof gtag === "function") {
                          gtag("event", "phone_click", { event_category: "contact", event_label: "mobile_nav" });
                        }
                      }}
                      className="flex items-center justify-center gap-2 py-3 text-white font-medium"
                    >
                      <Phone size={18} />
                      {COMPANY.phone}
                    </a>
                    <Link
                      to="/book"
                      className={cn(
                        buttonVariants(),
                        "w-full bg-action hover:bg-action-glow text-foreground font-semibold"
                      )}
                    >
                      Get a Free Quote
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
