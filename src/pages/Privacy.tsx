import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { SectionBadge } from "@/components/shared/SectionBadge";
import { COMPANY } from "@/lib/constants";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Privacy() {
  return (
    <Layout>
      <SEO
        title="Privacy Policy"
        description={`${COMPANY.name} privacy policy. Learn how we collect, use, and protect your personal information.`}
        canonicalUrl="https://twomensfence.com/privacy"
      />

      {/* ═══════════════════════════════════════
          HERO — Dark
          ═══════════════════════════════════════ */}
      <section className="relative bg-authority overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-authority via-authority-light/50 to-authority" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}>
              <SectionBadge icon={ShieldCheck} label="Legal" />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
            >
              Privacy Policy
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg text-white/60"
            >
              Last updated: March 2026
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTENT — Light
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-section-light">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="rounded-2xl bg-white border border-border p-8 md:p-12"
          >
            <div className="prose prose-neutral max-w-none space-y-8">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  Information We Collect
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  When you contact {COMPANY.name} through our website, phone, or
                  email, we may collect personal information including your name,
                  phone number, email address, physical address, and details about
                  your fencing project. We also collect standard web analytics data
                  such as IP addresses, browser type, and pages visited.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use the information we collect to respond to your inquiries,
                  provide estimates, schedule and complete fencing projects,
                  communicate with you about your project, improve our website and
                  services, and send occasional updates about our services if you
                  have opted in. We do not sell, rent, or trade your personal
                  information to third parties for marketing purposes.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  Cookies
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website uses cookies and similar tracking technologies to
                  improve your browsing experience and analyze site traffic. These
                  include essential cookies required for site functionality and
                  analytics cookies that help us understand how visitors interact
                  with our website. You can control cookie settings through your
                  browser preferences.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  Third-Party Services
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may use third-party services for website analytics, form
                  processing, and communication tools. These services may have
                  access to your information only as needed to perform their
                  functions and are obligated to maintain the confidentiality and
                  security of your data. We do not share your personal information
                  with third parties for their own marketing purposes.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement reasonable administrative, technical, and physical
                  security measures to protect your personal information against
                  unauthorized access, alteration, disclosure, or destruction.
                  However, no method of transmission over the internet is 100%
                  secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  Your Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  You have the right to request access to the personal information
                  we hold about you, request correction of inaccurate information,
                  request deletion of your personal information, opt out of
                  marketing communications, and ask questions about our privacy
                  practices. To exercise any of these rights, please contact us
                  using the information below.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy or how we handle
                  your personal information, please contact us at{" "}
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-trust hover:underline font-medium"
                  >
                    {COMPANY.email}
                  </a>{" "}
                  or call us at{" "}
                  <a
                    href={COMPANY.phoneTel}
                    className="text-trust hover:underline font-medium"
                  >
                    {COMPANY.phone}
                  </a>
                  .
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
