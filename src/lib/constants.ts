export const COMPANY = {
  name: "TWO MEN Fence & Construction",
  shortName: "TWO MEN",
  owners: "Oscar & Anna",
  phone: "(610) 212-7123",
  phoneTel: "tel:+16102127123",
  phoneLabel: "Oscar",
  phoneSecondary: "(302) 803-0790",
  phoneSecondaryTel: "tel:+13028030790",
  phoneSecondaryLabel: "Anna",
  email: "twomensfence512@gmail.com",
  address: "New Castle, DE 19720",
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
  yearsExperience: 18,
  reviewCount: 120,
  rating: 5.0,
  social: {
    facebook: "https://facebook.com/twomensfence",
    instagram: "https://instagram.com/twomensfence",
  },
} as const;

// Contact form — Formspree endpoint (no backend needed for static site)
export const FORM_ENDPOINT = "https://formspree.io/f/xpqoyegv";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
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
  {
    slug: "deck-building",
    label: "Deck Building",
    shortLabel: "Decks",
    description: "Custom wood and composite decks — from small patios to full outdoor living spaces.",
    href: "/services/deck-building",
  },
  {
    slug: "tree-trimming",
    label: "Tree Trimming",
    shortLabel: "Trees",
    description: "Professional tree trimming and removal to keep your property safe and looking great.",
    href: "/services/tree-trimming",
  },
  {
    slug: "fence-repair",
    label: "Fence Repair",
    shortLabel: "Repair",
    description: "Fast, affordable fence repair — storm damage, leaning posts, broken boards.",
    href: "/services/fence-repair",
  },
  {
    slug: "gate-installation",
    label: "Gate Installation",
    shortLabel: "Gates",
    description: "Custom driveway, walk-through, and pool code gate installation.",
    href: "/services/gate-installation",
  },
] as const;

/** Map of service slugs to Lucide icon names (resolved to components at usage site) */
export const SERVICE_ICON_NAMES: Record<string, string> = {
  "wood-fencing": "TreePine",
  "vinyl-fencing": "Columns3",
  "aluminum-fencing": "Fence",
  "chain-link-fencing": "Link2",
  "deck-building": "Hammer",
  "tree-trimming": "Axe",
  "fence-repair": "Wrench",
  "gate-installation": "DoorOpen",
};

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
    slug: "media-pa",
    city: "Media",
    state: "Pennsylvania",
    stateAbbr: "PA",
    label: "Media, PA",
    href: "/service-areas/media-pa",
    driveTime: "~40 min",
    refs: ["Delaware County seat", "State Street", "Ridley Creek"],
  },
  {
    slug: "chester-pa",
    city: "Chester",
    state: "Pennsylvania",
    stateAbbr: "PA",
    label: "Chester, PA",
    href: "/service-areas/chester-pa",
    driveTime: "~25 min",
    refs: ["Delaware County", "waterfront", "I-95 corridor"],
  },
  {
    slug: "downingtown-pa",
    city: "Downingtown",
    state: "Pennsylvania",
    stateAbbr: "PA",
    label: "Downingtown, PA",
    href: "/service-areas/downingtown-pa",
    driveTime: "~45 min",
    refs: ["Chester County", "Brandywine Creek", "Route 30"],
  },
  {
    slug: "milford-de",
    city: "Milford",
    state: "Delaware",
    stateAbbr: "DE",
    label: "Milford, DE",
    href: "/service-areas/milford-de",
    driveTime: "~1 hr",
    refs: ["Mispillion River", "Kent/Sussex border", "downtown revitalization"],
  },
  {
    slug: "seaford-de",
    city: "Seaford",
    state: "Delaware",
    stateAbbr: "DE",
    label: "Seaford, DE",
    href: "/service-areas/seaford-de",
    driveTime: "~1 hr 30 min",
    refs: ["Nanticoke River", "western Sussex County"],
  },
];

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: COMPANY.name,
  image: "https://twomensfence.com/img/hero/hero-cedar-privacy-fence-twomens-crew.webp",
  telephone: COMPANY.phone,
  email: COMPANY.email,
  url: "https://twomensfence.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New Castle",
    addressRegion: "DE",
    postalCode: "19720",
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

export const AREA_INTROS: Record<string, string> = {
  "new-castle-de":
    "Based right here in New Castle near Battery Park and the Delaware River waterfront, TWO MEN is your neighbor. We know the historic homes, the tight lots near downtown, and the new builds off Route 9. When you need a fence that fits New Castle\u2019s character, we\u2019re minutes away.",
  "wilmington-de":
    "From Brandywine to Trolley Square to the Riverfront, we\u2019ve been building fences across Wilmington for over 18 years. Whether you need privacy fencing for a Rockford Park row home or a vinyl fence for a Westover Hills backyard, we know the terrain and the permitting process.",
  "newark-de":
    "Serving the University of Delaware area, Main Street corridor, and neighborhoods along Elkton Road, we handle everything from student rental properties to family homes. Newark homeowners trust TWO MEN for fences that hold up to Delaware weather and look great year-round.",
  "bear-de":
    "From the communities around Lums Pond to the developments along Route 40 and Governor\u2019s Square, Bear is one of our busiest service areas. We build fences for new construction, replace aging chain-link, and install privacy fencing for growing families throughout Bear.",
  "hockessin-de":
    "Hockessin\u2019s large lots and equestrian properties near Hockessin Corner call for fencing that matches the landscape. We install wood, vinyl, and aluminum fences designed for bigger yards, horse paddocks, and the rolling terrain that makes this area unique.",
  "middletown-de":
    "Middletown is growing fast \u2014 new developments in Westown and across the MOT area need fencing from day one. We work with builders and homeowners throughout Middletown, installing fences that meet HOA requirements and stand up to Delaware\u2019s coastal weather.",
  "smyrna-de":
    "From Smyrna\u2019s historic downtown to the neighborhoods along Duck Creek and Route 13, we bring the same quality craftsmanship with a satisfaction guarantee on every project. Smyrna homeowners appreciate our honest pricing and reliable timelines \u2014 no runaround.",
  "dover-de":
    "As the state capital, Dover has a mix of historic neighborhoods, military housing near Dover Air Force Base, and growing suburbs across Kent County. We\u2019ve installed fences throughout the area and understand the local permitting requirements that come with each zone.",
  "west-chester-pa":
    "West Chester\u2019s tree-lined streets and historic Chester County charm deserve fencing that complements the architecture. From downtown row homes to the larger properties in Brandywine Valley, we build fences that add curb appeal and lasting value.",
  "kennett-square-pa":
    "Known as the mushroom capital of the world and home to Longwood Gardens, Kennett Square blends rural character with upscale living. We install fences for farmettes, estate properties, and in-town yards \u2014 always matching the craftsmanship to the community.",
  "media-pa":
    "Media \u2014 the Delaware County seat \u2014 is known for its vibrant State Street and the trails along Ridley Creek. We fence homes throughout Media\u2019s tight borough lots and larger properties in the surrounding townships, with designs that fit each neighborhood\u2019s character.",
  "chester-pa":
    "Serving Chester and the surrounding Delaware County waterfront communities along the I-95 corridor, we install durable fences built for high-traffic areas. Whether you need security fencing or a backyard upgrade, TWO MEN delivers quality work at a fair price.",
  "downingtown-pa":
    "Downingtown\u2019s Chester County location along Brandywine Creek and Route 30 offers a mix of historic homes and newer developments. We install wood, vinyl, and aluminum fences that handle the rolling terrain and meet local requirements \u2014 all backed by our warranty.",
  "milford-de":
    "Sitting at the Kent/Sussex border along the Mispillion River, Milford is experiencing a downtown revitalization that brings new homeowners and new fencing needs. We serve the entire Milford area with the same quality and warranty that\u2019s made us a trusted name across Delaware.",
  "seaford-de":
    "In western Sussex County along the Nanticoke River, Seaford homeowners count on TWO MEN for reliable fence installation without the long wait. We make the drive so you get the same licensed, insured, and warranted service that our New Castle neighbors receive.",
};
