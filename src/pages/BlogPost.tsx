import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTAButton } from "@/components/shared/CTAButton";
import { BlogPostCard } from "@/components/shared/BlogPostCard";
import { getBlogPost, getRelatedPosts } from "@/lib/blog-data";
import { COMPANY } from "@/lib/constants";
import { motion } from "framer-motion";
import {
  Calendar,
  ArrowLeft,
  Phone,
  ArrowRight,
  BookOpen,
} from "lucide-react";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const related = getRelatedPosts(post.slug, 2);

  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.description}
        canonicalUrl={`https://twomensfence.com/blog/${post.slug}`}
        ogType="article"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            image: `https://twomensfence.com${post.featuredImage}`,
            datePublished: post.date,
            author: {
              "@type": "Organization",
              name: post.author,
              url: "https://twomensfence.com",
            },
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
              {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: `https://twomensfence.com/blog/${post.slug}`,
              },
            ],
          },
        ]}
      />

      {/* ARTICLE HEADER */}
      <section className="bg-authority">
        <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white/80 transition-colors mb-8"
            >
              <ArrowLeft size={14} />
              Back to Blog
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-authority bg-trust/20 text-trust-glow px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-white/50">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
              {post.title}
            </h1>

            <p className="mt-4 text-lg text-white/60 leading-relaxed max-w-2xl">
              {post.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <div className="max-w-4xl mx-auto px-6 -mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl overflow-hidden border border-border shadow-lg"
        >
          <img
            src={post.featuredImage}
            alt={post.featuredImageAlt}
            className="w-full aspect-[16/9] object-cover"
          />
        </motion.div>
      </div>

      {/* ARTICLE CONTENT */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="blog-prose"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* RELATED POSTS */}
      {related.length > 0 && (
        <section className="py-16 md:py-20 bg-section-light">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              badge={{ icon: BookOpen, label: "Keep Reading" }}
              title="Related Articles"
            />
            <div className="mt-10 grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
              {related.map((relPost, i) => (
                <BlogPostCard key={relPost.slug} post={relPost} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BOTTOM CTA */}
      <section className="py-20 md:py-28 bg-authority">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionHeading
            badge={{ icon: BookOpen, label: "Ready to Start?" }}
            title="Get Your Free Fence Estimate"
            subtitle="Have questions? Call us for honest advice and a clear quote."
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
