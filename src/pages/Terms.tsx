import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { SectionBadge } from "@/components/shared/SectionBadge";
import { COMPANY } from "@/lib/constants";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Terms() {
  return (
    <Layout>
      <SEO
        title="Terms of Service"
        description={`${COMPANY.name} terms of service. Review the terms and conditions that govern the use of our website and services.`}
        canonicalUrl="https://twomensfence.com/terms"
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
              <SectionBadge icon={FileText} label="Legal" />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
            >
              Terms of Service
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
                  Acceptance of Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using the {COMPANY.name} website and services,
                  you accept and agree to be bound by these Terms of Service. If
                  you do not agree to these terms, please do not use our website or
                  engage our services. We reserve the right to update these terms at
                  any time, and continued use of our services constitutes acceptance
                  of any changes.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  Services
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {COMPANY.name} provides residential and commercial fence
                  installation, repair, and related construction services across
                  Delaware, southeastern Pennsylvania, and northeastern Maryland.
                  All services are subject to availability, scheduling, and site
                  conditions. We reserve the right to decline any project at our
                  discretion.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  Estimates &amp; Pricing
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  All estimates provided by {COMPANY.name} are valid for 30 days
                  from the date of issue unless otherwise noted. Estimates are based
                  on visible site conditions at the time of assessment. Additional
                  charges may apply if unforeseen conditions are encountered during
                  installation, including but not limited to underground utilities,
                  rock, tree roots, or grade changes not visible at the time of the
                  estimate. Any changes to the scope of work will be communicated
                  and agreed upon before additional charges are incurred.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  Payment Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Payment terms will be outlined in your project agreement. A
                  deposit may be required before work begins. The balance is due
                  upon completion of the project unless otherwise agreed in writing.
                  We accept cash, check, and major credit cards. Late payments may
                  be subject to additional fees as outlined in your agreement.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  Warranties
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {COMPANY.name} provides workmanship warranties on all fence
                  installations. Specific warranty terms and duration vary by
                  material type and will be detailed in your project agreement.
                  Material warranties are provided by the manufacturer and are
                  passed through to the customer. Warranties do not cover damage
                  caused by acts of nature, improper use, modifications by others,
                  or normal wear and tear.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law, {COMPANY.name} shall not
                  be liable for any indirect, incidental, special, consequential, or
                  punitive damages arising out of or related to our services or this
                  agreement. Our total liability shall not exceed the amount paid by
                  you for the specific service giving rise to the claim. This
                  limitation applies regardless of the theory of liability.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  Governing Law
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Service shall be governed by and construed in
                  accordance with the laws of the State of Delaware, without regard
                  to its conflict of law provisions. Any disputes arising under
                  these terms shall be resolved in the courts located in New Castle
                  County, Delaware.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about these Terms of Service, please contact
                  us at{" "}
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
