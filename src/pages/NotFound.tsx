import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { CTAButton } from "@/components/shared/CTAButton";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function NotFound() {
  return (
    <Layout>
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist or has been moved."
        noIndex
      />

      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center max-w-xl mx-auto px-6 py-32">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p
              variants={fadeUp}
              className="text-[10rem] md:text-[12rem] font-extrabold leading-none text-trust/20 select-none"
            >
              404
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="-mt-6 text-3xl md:text-4xl font-bold text-foreground"
            >
              Page Not Found
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg text-muted-foreground leading-relaxed"
            >
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <CTAButton href="/" size="lg">
                Go Home
              </CTAButton>
              <CTAButton href="/contact" size="lg" variant="ghost">
                Contact Us
              </CTAButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
