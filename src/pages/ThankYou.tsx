import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { CTAButton } from "@/components/shared/CTAButton";
import { motion } from "framer-motion";
import { CheckCircle, Phone, Clock, ClipboardList, Hammer } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const STEPS = [
  {
    icon: ClipboardList,
    title: "We Review Your Request",
    desc: "Our team reviews the details you submitted so we can come prepared.",
  },
  {
    icon: Phone,
    title: "We Call You Within 24 Hours",
    desc: "A real person — not a robot — will call to discuss your project and schedule a visit.",
  },
  {
    icon: Hammer,
    title: "Free On-Site Estimate",
    desc: "We come to your property, measure everything, and give you an honest quote on the spot.",
  },
];

export default function ThankYou() {
  return (
    <Layout>
      <SEO
        title="Thank You — Request Received"
        description="Your free fence estimate request has been received. TWOMENS Fence will contact you within 24 hours."
        canonicalUrl="https://twomensfence.com/thank-you"
        noIndex
      />

      {/* Hero */}
      <section className="relative bg-authority overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-authority via-authority-light/20 to-authority" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-trust/5 to-transparent" />

        <div className="relative max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
          <motion.div initial="hidden" animate="visible" className="space-y-6">
            <motion.div variants={fadeUp} custom={0} className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-trust/20 flex items-center justify-center">
                <CheckCircle size={40} className="text-trust" />
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl md:text-5xl font-extrabold text-white leading-tight"
            >
              Thank You!
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg md:text-xl text-white/60 max-w-xl mx-auto leading-relaxed"
            >
              Your free estimate request has been received. We&apos;ll be in
              touch within 24 hours to discuss your fencing project.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12"
          >
            What Happens Next
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-trust/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon size={28} className="text-trust" />
                </div>
                <div className="text-sm font-bold text-action mb-1">Step {i + 1}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Can't Wait CTA */}
      <section className="py-16 md:py-20 bg-section-light">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Clock size={32} className="text-action mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Can&apos;t Wait?
            </h2>
            <p className="text-muted-foreground mb-8">
              Give us a call right now and we&apos;ll get your project started today.
            </p>
            <CTAButton tel={COMPANY.phoneTel} size="lg">
              <Phone size={18} className="mr-2" />
              Call {COMPANY.phone}
            </CTAButton>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
