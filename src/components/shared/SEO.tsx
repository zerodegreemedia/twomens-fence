import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  schema?: object | object[];
  noIndex?: boolean;
  geoRegion?: string;
  geoPlacename?: string;
  geoPosition?: string;
}

const SITE_URL = "https://twomensfence.com";

export function SEO({
  title,
  description,
  canonicalUrl,
  ogImage = "/img/og-image.png",
  ogType = "website",
  schema,
  noIndex = false,
  geoRegion,
  geoPlacename,
  geoPosition,
}: SEOProps) {
  const fullTitle = `${title} | TWOMENS Fence & Construction`;
  const absoluteOgImage = ogImage.startsWith("http")
    ? ogImage
    : `${SITE_URL}${ogImage}`;
  const schemas = schema
    ? Array.isArray(schema)
      ? schema
      : [schema]
    : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Geo */}
      {geoRegion && <meta name="geo.region" content={geoRegion} />}
      {geoPlacename && <meta name="geo.placename" content={geoPlacename} />}
      {geoPosition && <meta name="geo.position" content={geoPosition} />}
      {geoPosition && <meta name="ICBM" content={geoPosition.replace(";", ", ")} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteOgImage} />

      {/* JSON-LD Schema */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
