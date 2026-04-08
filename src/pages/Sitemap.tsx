import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { SectionBadge } from "@/components/shared/SectionBadge";
import { SERVICES, SERVICE_AREAS } from "@/lib/constants";
import { motion } from "framer-motion";
import { Map, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const MAIN_PAGES = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const LEGAL_PAGES = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function SitemapPage() {
  return (
    <Layout>
      <SEO
        title="Sitemap"
        description="TWO MEN Fence & Construction sitemap. Browse all pages, services, and service areas."
        canonicalUrl="https://twomensfence.com/sitemap"
      />

      {/* ═══════════════════════════════════════
          HERO - Dark
          ═══════════════════════════════════════ */}
      <section className="relative bg-authority overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-authority via-authority-light/50 to-authority" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} custom={0}>
              <SectionBadge icon={Map} label="Site Navigation" />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
            >
              Sitemap
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTENT - Light
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-section-light">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Main Pages */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={0}
              className="rounded-2xl bg-white border border-border p-6"
            >
              <h2 className="text-lg font-bold text-foreground mb-4">
                Main Pages
              </h2>
              <ul className="space-y-3">
                {MAIN_PAGES.map((page) => (
                  <li key={page.href}>
                    <Link
                      to={page.href}
                      className="inline-flex items-center gap-2 text-sm text-trust hover:underline font-medium"
                    >
                      <ArrowRight size={12} />
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={1}
              className="rounded-2xl bg-white border border-border p-6"
            >
              <h2 className="text-lg font-bold text-foreground mb-4">
                Services
              </h2>
              <ul className="space-y-3">
                {SERVICES.map((service) => (
                  <li key={service.slug}>
                    <Link
                      to={service.href}
                      className="inline-flex items-center gap-2 text-sm text-trust hover:underline font-medium"
                    >
                      <ArrowRight size={12} />
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Service Areas */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={2}
              className="rounded-2xl bg-white border border-border p-6"
            >
              <h2 className="text-lg font-bold text-foreground mb-4">
                Service Areas
              </h2>
              <ul className="space-y-3">
                {SERVICE_AREAS.map((area) => (
                  <li key={area.slug}>
                    <Link
                      to={area.href}
                      className="inline-flex items-center gap-2 text-sm text-trust hover:underline font-medium"
                    >
                      <ArrowRight size={12} />
                      {area.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={3}
              className="rounded-2xl bg-white border border-border p-6"
            >
              <h2 className="text-lg font-bold text-foreground mb-4">Legal</h2>
              <ul className="space-y-3">
                {LEGAL_PAGES.map((page) => (
                  <li key={page.href}>
                    <Link
                      to={page.href}
                      className="inline-flex items-center gap-2 text-sm text-trust hover:underline font-medium"
                    >
                      <ArrowRight size={12} />
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
