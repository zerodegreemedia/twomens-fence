import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionBadge } from "@/components/shared/SectionBadge";
import { CTAButton } from "@/components/shared/CTAButton";
import { ContactForm } from "@/components/shared/ContactForm";
import { COMPANY, SERVICES, SERVICE_AREAS, AREA_INTROS } from "@/lib/constants";
import { fadeUp, stagger, VIEWPORT } from "@/lib/animations";
import { motion } from "framer-motion";
import {
  MapPin,
  Fence,
  CheckCircle,
  Phone,
  ArrowRight,
  Shield,
  Wrench,
} from "lucide-react";

export default function ServiceArea() {
  const { slug } = useParams<{ slug: string }>();
  const area = SERVICE_AREAS.find((a) => a.slug === slug);

  if (!area) {
    return (
      <Layout>
        <SEO
          title="Area Not Found"
          description="The service area you're looking for could not be found."
        />
        <div className="py-32 text-center max-w-xl mx-auto px-6">
          <MapPin size={48} className="mx-auto text-muted-foreground/30 mb-6" />
          <h1 className="text-4xl font-bold mb-4">Area Not Found</h1>
          <p className="text-muted-foreground mb-8">
            We couldn&apos;t find the service area you&apos;re looking for. Check
            our full list of service areas or head back home.
          </p>
          <CTAButton href="/">Go Home</CTAButton>
        </div>
      </Layout>
    );
  }

  const isHQ = area.driveTime === "HQ";
  const driveLabel = isHQ
    ? "Based right here in New Castle"
    : `${area.driveTime} from our New Castle HQ`;

  const otherAreas = SERVICE_AREAS.filter((a) => a.slug !== area.slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Fence Installation in ${area.city}, ${area.stateAbbr}`,
    description: `Professional fencing, deck building, and tree trimming in ${area.city}, ${area.state}. Licensed, insured, every job warranted.`,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: COMPANY.name,
      telephone: COMPANY.phone,
      email: COMPANY.email,
    },
    areaServed: {
      "@type": "City",
      name: area.city,
      addressRegion: area.stateAbbr,
      addressCountry: "US",
    },
  };

  return (
    <Layout>
      <SEO
        title={`Fence Installation in ${area.city}, ${area.stateAbbr}`}
        description={`Fences, decks & tree trimming in ${area.city}, ${area.state}. 18+ years experience. Licensed, insured, every job warranted. Free estimates from ${COMPANY.name}.`}
        canonicalUrl={`https://twomensfence.com${area.href}`}
        geoRegion={`US-${area.stateAbbr}`}
        geoPlacename={area.city}
        schema={[serviceSchema, {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://twomensfence.com" },
            { "@type": "ListItem", "position": 2, "name": "Service Areas" },
            { "@type": "ListItem", "position": 3, "name": `${area.city}, ${area.stateAbbr}`, "item": `https://twomensfence.com${area.href}` },
          ],
        }]}
      />

      {/* ═══════════════════════════════════════
          HERO - Dark
          ═══════════════════════════════════════ */}
      <section className="relative bg-authority overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-authority via-authority-light/50 to-authority" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-trust/5 to-transparent" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-32 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} custom={0}>
              <SectionBadge
                icon={MapPin}
                label={`Fence Installation in ${area.city}`}
              />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight max-w-4xl mx-auto"
            >
              Professional Fence Installation in{" "}
              <span className="text-action">
                {area.city}, {area.stateAbbr}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
            >
              {AREA_INTROS[area.slug] ||
                `${driveLabel}. Serving ${area.refs.join(", ")} and surrounding neighborhoods with quality fence installation since ${COMPANY.yearFounded}.`}
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <CTAButton href="/contact" size="lg">
                Get Your Free Estimate
                <ArrowRight size={16} className="ml-2" />
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
          SERVICES AVAILABLE - Light
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: Fence, label: "Our Services" }}
            title={`Fencing Services in ${area.city}`}
            subtitle={`We install all major fence types in ${area.city} and the surrounding ${area.stateAbbr} area. Every project includes a free on-site estimate.`}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.slug}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                custom={i}
              >
                <Link
                  to={service.href}
                  className="block rounded-2xl border border-border bg-white p-6 hover:shadow-xl hover:border-trust/30 transition-all duration-300 h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-trust/10 flex items-center justify-center mb-4">
                    <Fence size={24} className="text-trust" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {service.label}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-trust">
                    Learn More <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHY CHOOSE US - bg-section-light
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-section-light">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: Shield, label: "Why TWO MEN" }}
            title={`Why Choose ${COMPANY.shortName} for ${area.city}`}
            subtitle={`We know ${area.city} and the ${area.stateAbbr} area. Here's why homeowners trust us with their fence projects.`}
          />

          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl border border-border bg-white p-8">
              <ul className="space-y-4">
                {[
                  `Local knowledge of the ${area.city} area`,
                  `Experience with ${area.refs.join(", ")} neighborhoods`,
                  `Licensed for ${area.state} work`,
                  isHQ
                    ? "Based right here in New Castle - your neighbors"
                    : `${area.driveTime} from our New Castle HQ`,
                  "Free on-site estimates with written quotes",
                  "Satisfaction guaranteed on every project",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-foreground"
                  >
                    <CheckCircle
                      size={18}
                      className="text-trust shrink-0 mt-0.5"
                    />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          OTHER SERVICE AREAS - Dark
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-authority relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-authority via-authority-light/30 to-authority" />
        <div className="relative max-w-7xl mx-auto px-6">
          <SectionHeading
            badge={{ icon: MapPin, label: "Service Areas" }}
            title="Other Areas We Serve"
            subtitle="We serve a 2-hour radius from New Castle, DE - across Delaware and southeastern Pennsylvania."
            light
          />

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {otherAreas.map((a, i) => (
              <motion.div
                key={a.slug}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                custom={i * 0.5}
              >
                <Link
                  to={a.href}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all duration-300"
                >
                  <MapPin size={14} className="text-action" />
                  {a.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOTTOM CTA - Light with form
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-section-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionBadge icon={Wrench} label="Get Started Today" />
              <h2 className="mt-6 text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Ready for a New Fence in {area.city}?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Get a free, no-obligation estimate for your {area.city} property.
                We&apos;ll come to you, measure your yard, and give you a written
                quote on the spot.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Free on-site estimates",
                  "Written quotes - no surprises",
                  "Owners on every job",
                  `Serving ${area.city} since ${COMPANY.yearFounded}`,
                ].map((item) => (
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
