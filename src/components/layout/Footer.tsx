import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { COMPANY, NAV_LINKS, SERVICES, SERVICE_AREAS } from "@/lib/constants";

export function Footer() {
  return (
    <>
      {/* Pre-footer CTA */}
      <section className="bg-authority relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-authority via-authority-light to-authority opacity-80" />
        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Property?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Get your free, no-obligation estimate today. We serve all of New
            Castle County and beyond.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-action hover:bg-action-glow text-foreground font-semibold shadow-lg shadow-action/25 transition-all duration-300 hover:scale-[1.02]"
              )}
            >
              Get Free Quote
              <ArrowRight size={16} className="ml-2" />
            </Link>
            <a
              href={COMPANY.phoneTel}
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-transparent border border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold transition-all duration-300"
              )}
            >
              <Phone size={16} className="mr-2" />
              Call {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-authority text-white/70">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Column 1 — Brand */}
            <div>
              <Link to="/" className="inline-block mb-4">
                <img
                  src="/img/logo/logo-white.svg"
                  alt="TWOMENS Fence & Construction"
                  width={192}
                  height={48}
                  className="h-12 w-auto"
                />
              </Link>
              <p className="text-sm leading-relaxed mb-4">
                Owned by Oscar &amp; Anna — a husband-and-wife team with 18+
                years building fences, decks, and trimming trees across Delaware
                and Pennsylvania. Licensed, insured, and every job warranted.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-action font-semibold">{COMPANY.rating}</span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-action">★</span>
                  ))}
                </div>
                <span>· {COMPANY.reviewCount}+ Reviews</span>
              </div>
              <div className="flex gap-3 mt-4">
                <a
                  href={COMPANY.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a
                  href={COMPANY.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>
            </div>

            {/* Column 2 — Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 mt-8">
                Services
              </h3>
              <ul className="space-y-2">
                {SERVICES.map((service) => (
                  <li key={service.href}>
                    <Link
                      to={service.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Service Areas */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                Service Areas
              </h3>
              <ul className="space-y-2">
                {SERVICE_AREAS.map((area) => (
                  <li key={area.slug}>
                    <Link
                      to={area.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {area.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 — Contact */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                Contact Us
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={COMPANY.phoneTel}
                    className="flex items-center gap-3 text-sm hover:text-white transition-colors"
                  >
                    <Phone size={16} className="text-trust shrink-0" />
                    {COMPANY.phone} <span className="text-white/40 ml-1">({COMPANY.phoneLabel})</span>
                  </a>
                </li>
                <li>
                  <a
                    href={COMPANY.phoneSecondaryTel}
                    className="flex items-center gap-3 text-sm hover:text-white transition-colors"
                  >
                    <Phone size={16} className="text-trust shrink-0" />
                    {COMPANY.phoneSecondary} <span className="text-white/40 ml-1">({COMPANY.phoneSecondaryLabel})</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="flex items-center gap-3 text-sm hover:text-white transition-colors"
                  >
                    <Mail size={16} className="text-trust shrink-0" />
                    {COMPANY.email}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <MapPin size={16} className="text-trust shrink-0" />
                  {COMPANY.address}
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Clock size={16} className="text-trust shrink-0" />
                  {COMPANY.hours}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
            <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="/privacy" className="hover:text-white/60 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white/60 transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="hover:text-white/60 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
