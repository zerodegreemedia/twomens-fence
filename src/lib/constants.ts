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
  // NOTE: aggregateRating removed — Google requires ratings to come from
  // a verifiable review source (GBP, Yelp, etc). Re-add once Oscar's Google
  // Business Profile review count is confirmed and linked via sameAs.
  foundingDate: `${COMPANY.yearFounded}`,
};

/** Per-city unique content for service area pages — SEO differentiation */
export interface AreaContent {
  popularFenceTypes: string[];
  localTip: string;
  relatedBlogSlugs: string[];
}

export const AREA_CONTENT: Record<string, AreaContent> = {
  "new-castle-de": {
    popularFenceTypes: [
      "Cedar privacy fencing for historic-area homes",
      "Vinyl privacy fencing for newer subdivisions along Route 9",
      "Chain link for commercial properties near the waterfront",
      "Aluminum ornamental fencing for Battery Park-area properties",
    ],
    localTip:
      "New Castle County requires a fence permit for most residential installations. Permit fees run $50–$100 and take 1–2 weeks to process through the Land Use Department. If your property is in a historic district near downtown New Castle, expect additional review requirements for materials and style.",
    relatedBlogSlugs: [
      "do-i-need-a-permit-for-a-fence-in-delaware",
      "how-much-does-a-fence-cost-in-delaware",
      "how-to-choose-a-fence-contractor-checklist",
    ],
  },
  "wilmington-de": {
    popularFenceTypes: [
      "Wood privacy fencing for Rockford Park row homes",
      "Vinyl fencing for Westover Hills and Brandywine neighborhoods",
      "Aluminum ornamental fencing for Trolley Square properties",
      "Chain link with privacy slats for Riverside rentals",
    ],
    localTip:
      "Wilmington has its own fence permit process separate from New Castle County — permits go through the Licenses & Inspections Department. Historic districts (including parts of Trolley Square and the Riverfront) require Historic Preservation Commission review, which adds time. Submit early and expect stricter enforcement on materials and style.",
    relatedBlogSlugs: [
      "do-i-need-a-permit-for-a-fence-in-delaware",
      "best-fence-for-dogs-delaware-homeowners-guide",
      "fence-installation-timeline-what-to-expect",
    ],
  },
  "newark-de": {
    popularFenceTypes: [
      "Wood privacy fencing for family homes along Elkton Road",
      "Chain link for rental properties near the University of Delaware",
      "Vinyl fencing for newer developments off Main Street",
      "Aluminum fencing for front yards in established neighborhoods",
    ],
    localTip:
      "Newark requires a fence permit and site plan showing exact fence location. Corner lot owners: Newark has specific sight-triangle rules near intersections — fences in corner lots must maintain clear visibility for drivers. The Building Department typically processes permits in 1–2 weeks.",
    relatedBlogSlugs: [
      "do-i-need-a-permit-for-a-fence-in-delaware",
      "hoa-fence-rules-new-castle-county-delaware",
      "how-much-does-a-fence-cost-in-delaware",
    ],
  },
  "bear-de": {
    popularFenceTypes: [
      "Vinyl privacy fencing — the #1 choice in Bear's HOA communities",
      "Wood privacy fencing for larger lots near Lums Pond",
      "Aluminum ornamental fencing for front yards in Governor's Square",
      "Chain link for properties along Route 40",
    ],
    localTip:
      "Bear has a high concentration of HOA communities, especially near Governor's Square and Fox Run. Most HOAs require Architectural Review Board (ARB) approval before you can apply for a county permit. Submit your HOA application first — ARB reviews can take 2–6 weeks. White and tan vinyl are the most commonly approved materials.",
    relatedBlogSlugs: [
      "hoa-fence-rules-new-castle-county-delaware",
      "best-fence-for-dogs-delaware-homeowners-guide",
      "fence-installation-timeline-what-to-expect",
    ],
  },
  "hockessin-de": {
    popularFenceTypes: [
      "Cedar privacy fencing for large-lot estate properties",
      "Split rail fencing for equestrian properties and acreage",
      "Aluminum ornamental fencing for front boundaries",
      "Vinyl fencing for newer Hockessin Corner developments",
    ],
    localTip:
      "Hockessin's larger lots and rolling terrain often mean longer fence runs and more complex installations. Many properties here are 1+ acres, so wood and split rail fencing are popular cost-effective options. If you're in an HOA community along Lancaster Pike, check your CC&Rs — some Hockessin HOAs have stricter-than-average material and height restrictions.",
    relatedBlogSlugs: [
      "hoa-fence-rules-new-castle-county-delaware",
      "how-much-does-a-fence-cost-in-delaware",
      "cedar-vs-composite-deck-which-is-better-for-delaware",
    ],
  },
  "middletown-de": {
    popularFenceTypes: [
      "Vinyl privacy fencing — required by most Middletown HOAs",
      "Aluminum ornamental fencing for front yard boundaries in Westown",
      "Wood privacy fencing for non-HOA properties",
      "Chain link for rural properties outside the MOT corridor",
    ],
    localTip:
      "Middletown is one of Delaware's fastest-growing areas, and almost every new development has an HOA with fence rules. Westown, Parkside, and Village of Bayberry all require ARB approval. White vinyl privacy fencing is the most universally approved material in Middletown communities. Non-HOA properties still need a New Castle County permit.",
    relatedBlogSlugs: [
      "hoa-fence-rules-new-castle-county-delaware",
      "fence-installation-timeline-what-to-expect",
      "how-to-choose-a-fence-contractor-checklist",
    ],
  },
  "smyrna-de": {
    popularFenceTypes: [
      "Wood privacy fencing for homes near Duck Creek and historic downtown",
      "Vinyl fencing for newer developments along Route 13",
      "Chain link for larger rural properties",
      "Aluminum pool fencing for backyard pools",
    ],
    localTip:
      "Smyrna sits at the New Castle County / Kent County border. Make sure you know which county your property is in — permit requirements differ. Kent County has slightly more relaxed rules for standard residential fences under 6 feet in some unincorporated areas, but always verify before building.",
    relatedBlogSlugs: [
      "do-i-need-a-permit-for-a-fence-in-delaware",
      "pool-fence-requirements-delaware",
      "how-much-does-a-fence-cost-in-delaware",
    ],
  },
  "dover-de": {
    popularFenceTypes: [
      "Wood privacy fencing for Kent County residential properties",
      "Chain link for properties near Dover Air Force Base",
      "Vinyl fencing for newer Dover suburbs",
      "Aluminum ornamental fencing for historic downtown properties",
    ],
    localTip:
      "As the state capital, Dover has its own permit process through the Planning & Inspections Department — separate from Kent County. Properties near Dover Air Force Base may have additional easement requirements. Dover's mix of historic neighborhoods and newer suburbs means fence rules can vary block to block — always check before building.",
    relatedBlogSlugs: [
      "do-i-need-a-permit-for-a-fence-in-delaware",
      "best-fence-for-dogs-delaware-homeowners-guide",
      "how-to-choose-a-fence-contractor-checklist",
    ],
  },
  "west-chester-pa": {
    popularFenceTypes: [
      "Cedar and wood privacy fencing for historic Chester County homes",
      "Vinyl privacy fencing for Brandywine Valley neighborhoods",
      "Aluminum ornamental fencing for front yards downtown",
      "Split rail fencing for larger lots and horse properties",
    ],
    localTip:
      "West Chester Borough has its own zoning and fence permit requirements separate from Chester County. Historic district properties may face additional design review. In Pennsylvania, make sure your contractor has a valid PA Home Improvement Contractor (HIC) registration — it's required by state law.",
    relatedBlogSlugs: [
      "how-to-choose-a-fence-contractor-checklist",
      "how-much-does-a-fence-cost-in-delaware",
      "fence-installation-timeline-what-to-expect",
    ],
  },
  "kennett-square-pa": {
    popularFenceTypes: [
      "Split rail and post-and-rail fencing for rural estates",
      "Cedar privacy fencing for in-town properties",
      "Vinyl fencing for newer developments",
      "Aluminum ornamental fencing for front boundary definition",
    ],
    localTip:
      "Kennett Square's mix of farmland and upscale homes means fence needs vary widely. Rural properties often use split rail or post-and-rail for aesthetics and livestock. In-town properties may need borough permits. For larger estate properties near Longwood Gardens, plan for longer fence runs — wood and split rail are the most cost-effective options per linear foot.",
    relatedBlogSlugs: [
      "how-much-does-a-fence-cost-in-delaware",
      "cedar-vs-composite-deck-which-is-better-for-delaware",
      "how-to-choose-a-fence-contractor-checklist",
    ],
  },
  "media-pa": {
    popularFenceTypes: [
      "Wood privacy fencing for borough lots and township properties",
      "Vinyl fencing for low-maintenance suburban backyards",
      "Aluminum ornamental fencing for front yards on State Street-area homes",
      "Chain link for larger Delaware County properties",
    ],
    localTip:
      "Media Borough has tight lot lines, so fence placement and setback rules matter more here than in suburban areas. Check with the borough about exact setback requirements before installation. Township properties outside the borough follow Delaware County rules. Verify your contractor's PA HIC registration.",
    relatedBlogSlugs: [
      "fence-installation-timeline-what-to-expect",
      "how-to-choose-a-fence-contractor-checklist",
      "best-fence-for-dogs-delaware-homeowners-guide",
    ],
  },
  "chester-pa": {
    popularFenceTypes: [
      "Chain link fencing for security and property definition",
      "Wood privacy fencing for residential backyards",
      "Vinyl fencing for waterfront-area homes",
      "Aluminum ornamental fencing for commercial properties along I-95",
    ],
    localTip:
      "Chester's waterfront development and I-95 corridor mean a mix of residential and commercial fencing needs. Commercial fence projects may require additional engineering or permits. For residential properties, check with the city about permit requirements — Chester has its own process separate from Delaware County.",
    relatedBlogSlugs: [
      "how-much-does-a-fence-cost-in-delaware",
      "how-to-choose-a-fence-contractor-checklist",
      "fence-installation-timeline-what-to-expect",
    ],
  },
  "downingtown-pa": {
    popularFenceTypes: [
      "Wood privacy fencing for homes along Brandywine Creek",
      "Vinyl fencing for newer Route 30 corridor developments",
      "Split rail fencing for Chester County acreage",
      "Aluminum ornamental fencing for front yard aesthetics",
    ],
    localTip:
      "Downingtown Borough and East/West Brandywine Townships each have their own fence regulations. The rolling terrain along Brandywine Creek can make fence installation more complex — stepped or racked panels may be needed on slopes. Get a property survey if you're near the creek or on uneven ground.",
    relatedBlogSlugs: [
      "fence-installation-timeline-what-to-expect",
      "how-much-does-a-fence-cost-in-delaware",
      "cedar-vs-composite-deck-which-is-better-for-delaware",
    ],
  },
  "milford-de": {
    popularFenceTypes: [
      "Wood privacy fencing for residential properties",
      "Vinyl fencing for newer downtown revitalization homes",
      "Chain link for larger rural lots along the Mispillion River",
      "Aluminum pool fencing for backyard pools",
    ],
    localTip:
      "Milford straddles the Kent/Sussex County border — your permit requirements depend on which county your property is in. Kent County generally requires permits; Sussex County is more relaxed for standard residential fences in unincorporated areas. Milford's downtown revitalization means more new-build fencing projects — check with the city for any additional requirements.",
    relatedBlogSlugs: [
      "do-i-need-a-permit-for-a-fence-in-delaware",
      "pool-fence-requirements-delaware",
      "how-to-choose-a-fence-contractor-checklist",
    ],
  },
  "seaford-de": {
    popularFenceTypes: [
      "Wood privacy fencing for residential properties",
      "Chain link for larger Sussex County lots",
      "Vinyl fencing for newer subdivisions",
      "Aluminum fencing for pool enclosures",
    ],
    localTip:
      "Seaford is in western Sussex County, where fence permit requirements are generally more relaxed than in northern Delaware. Many standard residential fences in unincorporated Sussex County areas don't require a permit — but always confirm with the county Building Code Department before building. Coastal wind-load requirements don't typically apply this far inland.",
    relatedBlogSlugs: [
      "do-i-need-a-permit-for-a-fence-in-delaware",
      "how-much-does-a-fence-cost-in-delaware",
      "best-fence-for-dogs-delaware-homeowners-guide",
    ],
  },
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
