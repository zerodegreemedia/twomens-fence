import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
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
            <span>Licensed & Insured</span>
            <span className="text-white/30">·</span>
            <span>Locally Owned — New Castle, DE</span>
            <span className="text-white/30">·</span>
            <span>Free Estimates</span>
          </div>
          <a
            href={COMPANY.phoneTel}
            className="text-white/90 hover:text-white transition-colors font-medium"
          >
            {COMPANY.phone}
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-authority shadow-lg shadow-black/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-baseline gap-1.5 group">
            <span className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
              TWOMENS
            </span>
            <span className="text-sm md:text-base font-medium text-white/60 group-hover:text-white/80 transition-colors">
              Fence & Construction
            </span>
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
                    className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-border p-2"
                  >
                    {SERVICE_AREAS.map((area) => (
                      <Link
                        key={area.slug}
                        to={area.href}
                        className="block px-3 py-2 text-sm text-foreground hover:bg-section-light rounded-lg transition-colors"
                      >
                        {area.label}
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
              className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
            >
              <Phone size={16} />
              {COMPANY.phone}
            </a>
            <Button
              asChild
              className="bg-action hover:bg-action-glow text-foreground font-semibold shadow-lg shadow-action/25 transition-all duration-300 hover:scale-[1.02]"
            >
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button className="p-2 text-white">
                  {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
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
                      <p className="px-4 py-2 text-xs font-semibold text-white/40 uppercase tracking-wider">
                        Service Areas
                      </p>
                      {SERVICE_AREAS.map((area) => (
                        <Link
                          key={area.slug}
                          to={area.href}
                          className="block px-4 py-2 text-sm text-white/60 hover:text-white transition-colors"
                        >
                          {area.label}
                        </Link>
                      ))}
                    </div>
                  </nav>
                  <div className="mt-auto p-6 space-y-3 border-t border-white/10">
                    <a
                      href={COMPANY.phoneTel}
                      className="flex items-center justify-center gap-2 py-3 text-white font-medium"
                    >
                      <Phone size={18} />
                      {COMPANY.phone}
                    </a>
                    <Button
                      asChild
                      className="w-full bg-action hover:bg-action-glow text-foreground font-semibold"
                    >
                      <Link to="/contact">Get a Free Quote</Link>
                    </Button>
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
