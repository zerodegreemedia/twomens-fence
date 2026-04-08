import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionBadge } from "@/components/shared/SectionBadge";
import { CTAButton } from "@/components/shared/CTAButton";
import { BlogPostCard } from "@/components/shared/BlogPostCard";
import { BLOG_POSTS } from "@/lib/blog-data";
import { COMPANY } from "@/lib/constants";
import { motion } from "framer-motion";
import { BookOpen, Phone, ArrowRight } from "lucide-react";

export default function Blog() {
  return (
    <Layout>
      <SEO
        title="Fence Blog — Tips, Costs & Guides"
        description="Expert fence installation tips, cost guides, and buying advice from Delaware's trusted fence contractors. Wood, vinyl, aluminum, chain link — we cover it all."
        canonicalUrl="https://twomensfence.com/blog"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "TWO MEN Fence Blog",
            description:
              "Expert fence installation tips, cost guides, and buying advice for Delaware homeowners.",
            url: "https://twomensfence.com/blog",
            publisher: {
              "@type": "Organization",
              name: COMPANY.name,
              url: "https://twomensfence.com",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://twomensfence.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://twomensfence.com/blog",
              },
            ],
          },
        ]}
      />

      {/* HERO */}
      <section className="relative bg-authority overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-authority via-authority-light/50 to-authority" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-trust/5 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-14 md:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge icon={BookOpen} label="Blog" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
          >
            Fence Tips, Costs & Guides
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            Practical advice from 18+ years of fence installation in Delaware.
            Cost breakdowns, material comparisons, and expert tips.
          </motion.p>
        </div>
      </section>

      {/* POST GRID */}
      <section className="py-16 md:py-24 bg-section-light">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: BookOpen, label: "Latest Posts" }}
            title="From Our Blog"
          />

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {BLOG_POSTS.map((post, i) => (
              <BlogPostCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 md:py-28 bg-authority">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionHeading
            badge={{ icon: BookOpen, label: "Ready to Start?" }}
            title="Get Your Free Fence Estimate"
            subtitle="Have questions about fencing for your property? We'll give you honest advice and a clear written quote — no pressure, no hidden fees."
            light
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton tel={COMPANY.phoneTel} size="lg">
              <Phone size={18} className="mr-2" />
              Call {COMPANY.phone}
            </CTAButton>
            <CTAButton href="/contact" size="lg" variant="ghost">
              Get a Free Estimate
              <ArrowRight size={16} className="ml-2" />
            </CTAButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}
