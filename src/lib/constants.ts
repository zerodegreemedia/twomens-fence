export const COMPANY = {
  name: "TWOMENS Fence & Construction",
  shortName: "TWOMENS",
  phone: "(302) 555-0180",
  phoneTel: "tel:+13025550180",
  email: "info@twomensfence.com",
  address: "New Castle, DE 19808",
  hours: "Mon–Fri 7am–6pm, Sat 8am–4pm, Sun Closed",
  hoursStructured: [
    { day: "Monday", open: "07:00", close: "18:00" },
    { day: "Tuesday", open: "07:00", close: "18:00" },
    { day: "Wednesday", open: "07:00", close: "18:00" },
    { day: "Thursday", open: "07:00", close: "18:00" },
    { day: "Friday", open: "07:00", close: "18:00" },
    { day: "Saturday", open: "08:00", close: "16:00" },
  ],
  geo: { lat: 39.6582, lng: -75.5666 },
  priceRange: "$$",
  yearFounded: 2008,
  reviewCount: 120,
  rating: 5.0,
  social: {
    facebook: "https://facebook.com/twomensfence",
    instagram: "https://instagram.com/twomensfence",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "wood-fencing",
    label: "Wood Fencing",
    shortLabel: "Wood",
    description: "Cedar, pine, and pressure-treated wood fencing built to last.",
    href: "/services/wood-fencing",
  },
  {
    slug: "vinyl-fencing",
    label: "Vinyl Fencing",
    shortLabel: "Vinyl",
    description: "Low-maintenance vinyl fencing that looks great year after year.",
    href: "/services/vinyl-fencing",
  },
  {
    slug: "aluminum-fencing",
    label: "Aluminum Fencing",
    shortLabel: "Aluminum",
    description: "Elegant ornamental and pool-code-compliant aluminum fencing.",
    href: "/services/aluminum-fencing",
  },
  {
    slug: "chain-link-fencing",
    label: "Chain Link Fencing",
    shortLabel: "Chain Link",
    description: "Affordable, durable chain link for residential and commercial properties.",
    href: "/services/chain-link-fencing",
  },
] as const;

export interface ServiceArea {
  slug: string;
  city: string;
  state: string;
  stateAbbr: string;
  label: string;
  href: string;
  driveTime: string;
  refs: string[];
}

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: "new-castle-de",
    city: "New Castle",
    state: "Delaware",
    stateAbbr: "DE",
    label: "New Castle, DE",
    href: "/service-areas/new-castle-de",
    driveTime: "HQ",
    refs: ["County seat", "Battery Park", "Delaware River waterfront"],
  },
  {
    slug: "wilmington-de",
    city: "Wilmington",
    state: "Delaware",
    stateAbbr: "DE",
    label: "Wilmington, DE",
    href: "/service-areas/wilmington-de",
    driveTime: "~10 min",
    refs: ["Brandywine", "Trolley Square", "Riverfront", "Rockford Park"],
  },
  {
    slug: "newark-de",
    city: "Newark",
    state: "Delaware",
    stateAbbr: "DE",
    label: "Newark, DE",
    href: "/service-areas/newark-de",
    driveTime: "~20 min",
    refs: ["University of Delaware", "Main Street", "Elkton Road"],
  },
  {
    slug: "bear-de",
    city: "Bear",
    state: "Delaware",
    stateAbbr: "DE",
    label: "Bear, DE",
    href: "/service-areas/bear-de",
    driveTime: "~15 min",
    refs: ["Lums Pond", "Route 40", "Governor's Square"],
  },
  {
    slug: "hockessin-de",
    city: "Hockessin",
    state: "Delaware",
    stateAbbr: "DE",
    label: "Hockessin, DE",
    href: "/service-areas/hockessin-de",
    driveTime: "~25 min",
    refs: ["Hockessin Corner", "large lots", "equestrian properties"],
  },
  {
    slug: "middletown-de",
    city: "Middletown",
    state: "Delaware",
    stateAbbr: "DE",
    label: "Middletown, DE",
    href: "/service-areas/middletown-de",
    driveTime: "~25 min",
    refs: ["new developments", "Westown", "MOT area"],
  },
  {
    slug: "smyrna-de",
    city: "Smyrna",
    state: "Delaware",
    stateAbbr: "DE",
    label: "Smyrna, DE",
    href: "/service-areas/smyrna-de",
    driveTime: "~35 min",
    refs: ["historic downtown", "Duck Creek", "Route 13"],
  },
  {
    slug: "dover-de",
    city: "Dover",
    state: "Delaware",
    stateAbbr: "DE",
    label: "Dover, DE",
    href: "/service-areas/dover-de",
    driveTime: "~45 min",
    refs: ["state capital", "Dover Air Force Base", "Kent County"],
  },
  {
    slug: "west-chester-pa",
    city: "West Chester",
    state: "Pennsylvania",
    stateAbbr: "PA",
    label: "West Chester, PA",
    href: "/service-areas/west-chester-pa",
    driveTime: "~30 min",
    refs: ["Chester County", "Brandywine Valley"],
  },
  {
    slug: "kennett-square-pa",
    city: "Kennett Square",
    state: "Pennsylvania",
    stateAbbr: "PA",
    label: "Kennett Square, PA",
    href: "/service-areas/kennett-square-pa",
    driveTime: "~35 min",
    refs: ["Longwood Gardens", "mushroom capital"],
  },
  {
    slug: "elkton-md",
    city: "Elkton",
    state: "Maryland",
    stateAbbr: "MD",
    label: "Elkton, MD",
    href: "/service-areas/elkton-md",
    driveTime: "~25 min",
    refs: ["Cecil County", "Fair Hill", "I-95 corridor"],
  },
];

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FencingContractor",
  name: COMPANY.name,
  image: "https://twomensfence.com/og-image.jpg",
  telephone: COMPANY.phone,
  email: COMPANY.email,
  url: "https://twomensfence.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New Castle",
    addressRegion: "DE",
    postalCode: "19808",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: COMPANY.geo.lat,
    longitude: COMPANY.geo.lng,
  },
  openingHoursSpecification: COMPANY.hoursStructured.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.day,
    opens: h.open,
    closes: h.close,
  })),
  priceRange: COMPANY.priceRange,
  areaServed: SERVICE_AREAS.map((area) => ({
    "@type": "City",
    name: `${area.city}, ${area.stateAbbr}`,
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: COMPANY.rating,
    reviewCount: COMPANY.reviewCount,
  },
  foundingDate: `${COMPANY.yearFounded}`,
};
