import { useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionBadge } from "@/components/shared/SectionBadge";
import { CTAButton } from "@/components/shared/CTAButton";
import { ContactForm } from "@/components/shared/ContactForm";
import { RecentProjects } from "@/components/shared/RecentProjects";
import { motion } from "framer-motion";
import {
  Phone,
  CheckCircle,
  ChevronDown,
  Fence,
  HelpCircle,
  ArrowRight,
  Eye,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";
import { COMPANY, SERVICES } from "@/lib/constants";
import { SERVICE_IMAGES } from "@/lib/images";
import { BLOG_POSTS } from "@/lib/blog-data";
import { getServiceData } from "@/lib/service-data";
import { ResponsiveImage } from "@/components/shared/ResponsiveImage";
import { fadeUp, stagger, VIEWPORT } from "@/lib/animations";

/* ──────────────────────────────────────────────
   FAQ Accordion Item
   ────────────────────────────────────────────── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/5 transition-colors"
      >
        <span className="text-white font-semibold">{q}</span>
        <ChevronDown
          size={20}
          className={`text-white/40 shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-white/60 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

/* ──────────────────────────────────────────────
   Page Component
   ────────────────────────────────────────────── */
export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? getServiceData(slug) : undefined;

  if (!data) {
    return (
      <Layout>
        <SEO
          title="Service Not Found"
          description="The service you're looking for could not be found."
        />
        <div className="py-32 text-center max-w-xl mx-auto px-6">
          <Fence size={48} className="mx-auto text-muted-foreground/30 mb-6" />
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">
            We couldn&apos;t find the service you&apos;re looking for.
          </p>
          <CTAButton href="/services">View All Services</CTAButton>
        </div>
      </Layout>
    );
  }

  const images =
    SERVICE_IMAGES[data.imageKey as keyof typeof SERVICE_IMAGES] || [];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.label,
    provider: {
      "@type": "LocalBusiness",
      name: COMPANY.name,
    },
    areaServed: {
      "@type": "State",
      name: "Delaware",
    },
    description: data.schemaDescription,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const breadcrumbSchema = {
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
        name: "Services",
        item: "https://twomensfence.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: data.breadcrumbName,
        item: data.canonicalUrl,
      },
    ],
  };

  /* Resolve related blog posts */
  const relatedPosts = data.relatedBlogSlugs
    .map((s) => BLOG_POSTS.find((p) => p.slug === s))
    .filter(Boolean);

  /* Parse hero title with highlight */
  const titleParts = data.heroTitle.split("{highlight}");

  return (
    <Layout>
      <SEO
        title={data.seoTitle}
        description={data.seoDescription}
        canonicalUrl={data.canonicalUrl}
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* ═══════════════════════════════════════
          HERO - Dark
          ═══════════════════════════════════════ */}
      <section className="relative bg-authority overflow-hidden">
        <div className="absolute inset-0">
          {images[0] && (
            <img
              src={images[0].path}
              alt={images[0].alt}
              width={1920}
              height={1080}
              fetchPriority="high"
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-authority/95 via-authority/85 to-authority/80" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-trust/5 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} custom={0}>
              <SectionBadge
                icon={data.heroIcon}
                label={data.heroBadgeLabel}
              />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
            >
              {titleParts[0]}
              <span className="text-action">{data.heroHighlight}</span>
              {titleParts[1]}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 text-lg md:text-xl text-white/60 max-w-xl leading-relaxed"
            >
              {data.heroSubtitle}
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <CTAButton href="/contact" size="lg">
                Get Your Free Estimate
              </CTAButton>
              <CTAButton tel={COMPANY.phoneTel} size="lg" variant="ghost">
                <Phone size={18} className="mr-2" />
                {COMPANY.phone}
              </CTAButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BENEFITS - Light
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: CheckCircle, label: "Benefits" }}
            title={data.benefitsTitle}
            subtitle={data.benefitsSubtitle}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.benefits.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                custom={i}
                className="rounded-2xl border border-border bg-white p-6 hover:shadow-xl hover:border-trust/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-trust/10 flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-trust" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STYLES / OPTIONS - Section Light
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-section-light">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: Fence, label: data.stylesBadgeLabel }}
            title={data.stylesTitle}
            subtitle={data.stylesSubtitle}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.styles.map((style, i) => (
              <motion.div
                key={style.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                custom={i}
                className="flex items-start gap-4 rounded-xl border border-border bg-white p-5 hover:shadow-md transition-all duration-300"
              >
                <CheckCircle
                  size={20}
                  className="text-trust shrink-0 mt-0.5"
                />
                <div>
                  <h3 className="font-semibold text-foreground">
                    {style.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {style.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PHOTO GALLERY - White
          ═══════════════════════════════════════ */}
      {images.length > 0 && (
        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              badge={{ icon: Eye, label: "Our Work" }}
              title={`${data.label} Projects`}
              subtitle={`Browse recent ${data.label.toLowerCase()} projects across Delaware and Pennsylvania.`}
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {images.map((img, i) => (
                <motion.div
                  key={img.name}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT}
                  custom={i}
                  className="aspect-[4/3] rounded-xl border border-border overflow-hidden group"
                >
                  <ResponsiveImage
                    src={img.path}
                    alt={img.alt}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════
          RECENT PROJECTS
          ═══════════════════════════════════════ */}
      <RecentProjects
        serviceType={data.recentProjects.serviceType}
        title={data.recentProjects.title}
        subtitle={data.recentProjects.subtitle}
        limit={data.recentProjects.limit}
        captions={data.recentProjects.captions}
      />

      {/* ═══════════════════════════════════════
          RELATED SERVICES - Sage
          ═══════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-section-sage">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: Fence, label: "Related Services" }}
            title="You Might Also Need"
            subtitle={data.relatedServicesSubtitle}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.relatedServices.map((svc, i) => {
              const href =
                SERVICES.find((s) => s.slug === svc.slug)?.href ||
                `/services/${svc.slug}`;
              return (
                <motion.div
                  key={svc.slug}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT}
                  custom={i}
                >
                  <Link
                    to={href}
                    className="group flex items-center gap-4 rounded-xl border border-border bg-white p-4 hover:shadow-lg hover:border-trust/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-trust/10 flex items-center justify-center shrink-0 group-hover:bg-trust/20 transition-colors">
                      <svc.icon size={20} className="text-trust" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-foreground group-hover:text-trust transition-colors">
                        {svc.label}
                      </h3>
                      <p className="text-xs text-muted-foreground truncate">
                        {svc.desc}
                      </p>
                    </div>
                    <ArrowRight
                      size={14}
                      className="text-trust/40 shrink-0 ml-auto group-hover:text-trust transition-colors"
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          RELATED ARTICLES - White (Cross-linking)
          ═══════════════════════════════════════ */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              badge={{ icon: BookOpen, label: "Related Articles" }}
              title="Helpful Guides"
              subtitle={`Learn more about ${data.label.toLowerCase()} and fencing in Delaware.`}
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <motion.div
                  key={post!.slug}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT}
                >
                  <Link
                    to={`/blog/${post!.slug}`}
                    className="block rounded-2xl border border-border bg-white p-6 hover:shadow-xl hover:border-trust/30 transition-all duration-300 h-full"
                  >
                    <span className="text-xs font-semibold text-trust uppercase tracking-wider">
                      {post!.category}
                    </span>
                    <h3 className="text-base font-bold text-foreground mt-2 mb-2 leading-snug">
                      {post!.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {post!.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-trust mt-3">
                      Read More <ArrowRight size={14} />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════
          FAQ - Dark
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-authority relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-authority via-authority-light/30 to-authority" />
        <div className="relative max-w-3xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: HelpCircle, label: "FAQ" }}
            title={data.faqTitle}
            subtitle={data.faqSubtitle}
            light
          />

          <div className="space-y-3">
            {data.faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                custom={i}
              >
                <FAQItem q={faq.q} a={faq.a} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOTTOM CTA - Warm with form
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-section-warm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionBadge icon={Phone} label="Get Started Today" />
              <h2 className="mt-6 text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Ready for Your New{" "}
                <span className="text-trust">{data.cta.highlightWord}</span>?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {data.cta.subtitle}
              </p>
              <ul className="mt-6 space-y-3">
                {data.cta.bullets.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <CheckCircle size={18} className="text-trust shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CTAButton tel={COMPANY.phoneTel} size="lg">
                  <Phone size={18} className="mr-2" />
                  Call {COMPANY.phone}
                </CTAButton>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
