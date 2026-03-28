import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { COMPANY, NAV_LINKS, SERVICE_AREAS } from "@/lib/constants";

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
            <a
              href={COMPANY.phoneTel}
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-action hover:bg-action-glow text-foreground font-semibold shadow-lg shadow-action/25 transition-all duration-300 hover:scale-[1.02]"
              )}
            >
              Call Now
            </a>
            <Link
              to="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-action hover:bg-action-glow text-foreground font-semibold shadow-lg shadow-action/25 transition-all duration-300 hover:scale-[1.02]"
              )}
            >
              Get Free Quote
            </Link>
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
                <span className="text-2xl font-extrabold text-white">TWOMENS</span>
                <span className="block text-sm text-white/50">Fence & Construction</span>
              </Link>
              <p className="text-sm leading-relaxed mb-4">
                Professional fence installation serving Delaware, Pennsylvania,
                and Maryland. Licensed, insured, and committed to quality
                craftsmanship since {COMPANY.yearFounded}.
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
                  aria-label="Facebook"
                >
                  <ExternalLink size={18} />
                </a>
                <a
                  href={COMPANY.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label="Instagram"
                >
                  <ExternalLink size={18} />
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
                    {COMPANY.phone}
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
