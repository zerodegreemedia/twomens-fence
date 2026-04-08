import type { LucideIcon } from "lucide-react";
import {
  TreePine,
  Eye,
  Paintbrush,
  DollarSign,
  Sparkles,
  PaintBucket,
  ShieldCheck,
  Sun,
  Droplets,
  Crown,
  Waves,
  Wrench,
  Zap,
  Shield,
  Clock,
  Lock,
  Ruler,
  DoorOpen,
  LayoutGrid,
  TrendingUp,
  Heart,
  Columns3,
  Fence,
  Link2,
  Hammer,
  Axe,
} from "lucide-react";

/* ──────────────────────────────────────────────
   Types
   ────────────────────────────────────────────── */
export interface ServiceBenefit {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface ServiceStyle {
  name: string;
  desc: string;
}

export interface RelatedService {
  slug: string;
  label: string;
  icon: LucideIcon;
  desc: string;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceCTA {
  highlightWord: string;
  subtitle: string;
  bullets: string[];
}

export interface ServiceRecentProjects {
  serviceType: string;
  title: string;
  subtitle: string;
  limit: number;
  captions: Record<string, string>;
}

export interface ServicePageData {
  slug: string;
  label: string;

  /* SEO */
  seoTitle: string;
  seoDescription: string;
  canonicalUrl: string;
  schemaDescription: string;
  breadcrumbName: string;

  /* Hero */
  heroIcon: LucideIcon;
  heroBadgeLabel: string;
  heroTitle: string;         // HTML-safe: use {highlight} placeholder for <span>
  heroHighlight: string;     // The text inside the <span class="text-action">
  heroSubtitle: string;

  /* Image key for SERVICE_IMAGES */
  imageKey: string;

  /* Benefits */
  benefitsTitle: string;
  benefitsSubtitle: string;
  benefits: ServiceBenefit[];

  /* Styles / Options */
  stylesBadgeLabel: string;
  stylesTitle: string;
  stylesSubtitle: string;
  styles: ServiceStyle[];

  /* Related services */
  relatedServicesSubtitle: string;
  relatedServices: RelatedService[];

  /* Recent projects */
  recentProjects: ServiceRecentProjects;

  /* FAQ */
  faqTitle: string;
  faqSubtitle: string;
  faqs: ServiceFAQ[];

  /* Bottom CTA */
  cta: ServiceCTA;

  /* Related blog post slugs for cross-linking */
  relatedBlogSlugs: string[];
}

/* ──────────────────────────────────────────────
   Service Data
   ────────────────────────────────────────────── */
export const SERVICE_PAGE_DATA: Record<string, ServicePageData> = {
  "wood-fencing": {
    slug: "wood-fencing",
    label: "Wood Fencing",
    seoTitle: "Wood Fence Installation Delaware",
    seoDescription:
      "Cedar, pine & pressure-treated wood fence installation in Delaware. Privacy, picket, board-on-board styles. Free estimates from TWO MEN.",
    canonicalUrl: "https://twomensfence.com/services/wood-fencing",
    schemaDescription:
      "Professional cedar, pine, and pressure-treated wood fence installation in Delaware. Privacy, picket, board-on-board, shadow box, and split rail styles.",
    breadcrumbName: "Wood Fencing",
    heroIcon: TreePine,
    heroBadgeLabel: "Wood Fencing",
    heroTitle: "Classic {highlight}. Built to Last.",
    heroHighlight: "Wood Fencing",
    heroSubtitle:
      "From cedar privacy fences to rustic split rail - we build wood fences that look great and hold up to Delaware weather. Installed by a local crew that does it right.",
    imageKey: "wood",
    benefitsTitle: "Why Choose Wood Fencing?",
    benefitsSubtitle:
      "Wood is the most popular fencing material in America for a reason - it's beautiful, versatile, and fits any budget.",
    benefits: [
      {
        icon: TreePine,
        title: "Natural Beauty",
        desc: "Nothing matches the warm, classic look of real wood. Cedar and pine fences add timeless curb appeal to any property.",
      },
      {
        icon: Eye,
        title: "Complete Privacy",
        desc: "6-foot solid board and board-on-board designs block sightlines completely - enjoy your backyard without an audience.",
      },
      {
        icon: Paintbrush,
        title: "Fully Customizable",
        desc: "Stain it, paint it, or leave it natural. Choose from dozens of styles, heights, and finishes to match your home.",
      },
      {
        icon: DollarSign,
        title: "Affordable",
        desc: "Wood fencing offers the best value per linear foot - especially for larger properties where every dollar counts.",
      },
    ],
    stylesBadgeLabel: "Options",
    stylesTitle: "Styles & Options",
    stylesSubtitle:
      "We install every major wood fence style - choose the one that fits your property, privacy needs, and budget.",
    styles: [
      { name: "Cedar Privacy (6ft)", desc: "Premium cedar boards for full privacy and natural rot resistance" },
      { name: "Pressure-Treated Pine", desc: "Budget-friendly and chemically treated to resist decay and insects" },
      { name: "Board-on-Board", desc: "Overlapping boards for privacy from every angle - no gaps" },
      { name: "Shadow Box", desc: "Alternating boards on each side for airflow with partial privacy" },
      { name: "Picket Fence", desc: "Classic American look for front yards and decorative boundaries" },
      { name: "Split Rail", desc: "Rustic open-style fencing perfect for large lots and rural properties" },
    ],
    relatedServicesSubtitle: "Explore other services that pair well with wood fencing.",
    relatedServices: [
      { slug: "vinyl-fencing", label: "Vinyl Fencing", icon: Columns3, desc: "Low-maintenance alternative to wood" },
      { slug: "fence-repair", label: "Fence Repair", icon: Wrench, desc: "Fix storm damage & leaning posts" },
      { slug: "gate-installation", label: "Gate Installation", icon: DoorOpen, desc: "Custom gates to match your fence" },
      { slug: "deck-building", label: "Deck Building", icon: Fence, desc: "Custom wood & composite decks" },
    ],
    recentProjects: {
      serviceType: "Wood",
      title: "Recent Wood Fence Projects",
      subtitle: "See our latest wood fence installations across Delaware and Pennsylvania.",
      limit: 6,
      captions: {
        "gallery-01-cedar-privacy-fence": "Cedar privacy fence — 6ft tall, full backyard enclosure in New Castle County",
        "gallery-02-wood-fence-with-gate": "Pressure-treated pine fence with custom gate — Newark, DE",
        "gallery-03-wood-privacy-backyard": "Board-on-board privacy fence along property line — Bear, DE",
        "gallery-04-porch-railing-complete": "Custom wood porch railing with matching privacy fence — Wilmington",
        "gallery-05-wood-deck-framing": "Cedar deck framing and railing project — Hockessin, DE",
        "gallery-19-crew-building-railing": "TWO MEN crew building custom porch railing — residential project",
      },
    },
    faqTitle: "Wood Fencing Questions",
    faqSubtitle: "Answers to the most common questions we hear from homeowners about wood fences.",
    faqs: [
      {
        q: "How long does a wood fence last?",
        a: "With proper maintenance, a wood fence lasts 15 to 20 years. Cedar naturally resists rot and can last even longer. Pressure-treated pine is chemically protected and holds up well in Delaware's climate. Regular staining or sealing every 2-3 years extends the life significantly.",
      },
      {
        q: "What's the difference between cedar and pressure-treated pine?",
        a: "Cedar is naturally rot-resistant, has a beautiful grain, and doesn't require chemical treatment - but it costs more. Pressure-treated pine is more affordable and chemically treated to resist decay and insects. Both are excellent choices; it comes down to budget and aesthetic preference.",
      },
      {
        q: "Do you stain or seal the fence after installation?",
        a: "We focus on expert installation. Staining and sealing is the homeowner's choice - we recommend letting the wood dry for 3-6 months before applying a stain or sealant. We're happy to recommend trusted products and local contractors who specialize in staining.",
      },
      {
        q: "How long does installation take?",
        a: "Most residential wood fence installations take 1 to 3 days depending on the size of the yard, terrain, and style chosen. We'll give you a clear timeline during your free estimate so there are no surprises.",
      },
    ],
    cta: {
      highlightWord: "Wood Fence",
      subtitle:
        "Tell us about your project and we'll come out for a free on-site estimate. No pressure, no gimmicks - just an honest quote from a local crew.",
      bullets: [
        "Free on-site estimates",
        "Cedar, pine & pressure-treated options",
        "Most installs done in 1\u20133 days",
        "Licensed & insured in Delaware",
      ],
    },
    relatedBlogSlugs: [
      "how-much-does-a-fence-cost-in-delaware",
      "wood-vs-vinyl-fence-which-is-right-for-you",
      "how-to-choose-a-fence-contractor-checklist",
      "fence-installation-timeline-what-to-expect",
    ],
  },

  "vinyl-fencing": {
    slug: "vinyl-fencing",
    label: "Vinyl Fencing",
    seoTitle: "Vinyl Fence Installation Delaware",
    seoDescription:
      "Low-maintenance vinyl fence installation in Delaware. Privacy, semi-privacy, picket & ranch rail in multiple colors. Free estimates from TWO MEN.",
    canonicalUrl: "https://twomensfence.com/services/vinyl-fencing",
    schemaDescription:
      "Professional low-maintenance vinyl fence installation in Delaware. Privacy, semi-privacy, picket, and ranch rail styles in white, tan, and gray.",
    breadcrumbName: "Vinyl Fencing",
    heroIcon: Sparkles,
    heroBadgeLabel: "Vinyl Fencing",
    heroTitle: "{highlight}. Zero Maintenance. All Style.",
    heroHighlight: "Vinyl Fencing",
    heroSubtitle:
      "No painting. No staining. No rotting. Vinyl fencing looks beautiful for decades with virtually zero upkeep - installed by a Delaware crew that knows how to do it right.",
    imageKey: "vinyl",
    benefitsTitle: "Why Choose Vinyl Fencing?",
    benefitsSubtitle:
      "Vinyl is the lowest-maintenance fencing option on the market - and it looks great doing it.",
    benefits: [
      {
        icon: PaintBucket,
        title: "No Painting or Staining",
        desc: "Vinyl never needs to be painted, stained, or sealed. The color is baked in during manufacturing - it looks new for decades.",
      },
      {
        icon: ShieldCheck,
        title: "Won't Rot or Warp",
        desc: "Unlike wood, vinyl is immune to moisture, insects, and rot. It holds its shape through rain, snow, and Delaware humidity.",
      },
      {
        icon: Sun,
        title: "Lifetime Color",
        desc: "Modern vinyl fencing is UV-stabilized to resist fading. The white stays white, the tan stays tan - year after year.",
      },
      {
        icon: Droplets,
        title: "Easy to Clean",
        desc: "A garden hose or pressure washer is all you need. No scrubbing, no chemicals - vinyl practically cleans itself.",
      },
    ],
    stylesBadgeLabel: "Options",
    stylesTitle: "Styles & Options",
    stylesSubtitle:
      "We install every major vinyl fence style - choose the one that fits your property, privacy needs, and budget.",
    styles: [
      { name: "Privacy (6ft)", desc: "Solid tongue-and-groove panels for complete backyard privacy" },
      { name: "Semi-Privacy", desc: "Spaced boards or lattice tops that let light in while maintaining boundaries" },
      { name: "Picket", desc: "Classic picket style in vinyl - all the charm with zero maintenance" },
      { name: "Ranch Rail", desc: "2, 3, or 4-rail options for large properties and equestrian fencing" },
      { name: "Pool Code Compliant", desc: "Self-closing gate hardware and proper spacing to meet Delaware pool codes" },
      { name: "Color Options", desc: "Available in white, tan, gray, and woodgrain textures to match any home" },
    ],
    relatedServicesSubtitle: "Explore other services that pair well with vinyl fencing.",
    relatedServices: [
      { slug: "wood-fencing", label: "Wood Fencing", icon: TreePine, desc: "Classic natural wood fencing" },
      { slug: "fence-repair", label: "Fence Repair", icon: Wrench, desc: "Fix storm damage & leaning posts" },
      { slug: "gate-installation", label: "Gate Installation", icon: DoorOpen, desc: "Custom gates to match your fence" },
      { slug: "aluminum-fencing", label: "Aluminum Fencing", icon: Fence, desc: "Elegant ornamental fencing" },
    ],
    recentProjects: {
      serviceType: "Vinyl",
      title: "Recent Vinyl Fence Projects",
      subtitle: "See our latest vinyl fence installations across Delaware and Pennsylvania.",
      limit: 6,
      captions: {
        "gallery-06-vinyl-privacy-long": "White vinyl privacy fence — long property line run in Sussex County",
        "gallery-07-vinyl-privacy-residential": "6ft vinyl privacy fence — residential installation, Bear, DE",
        "gallery-08-vinyl-privacy-house": "Vinyl privacy fence alongside home — New Castle County",
        "gallery-09-vinyl-picket-house": "White vinyl picket fence — front yard curb appeal, Newark, DE",
      },
    },
    faqTitle: "Vinyl Fencing Questions",
    faqSubtitle: "Answers to the most common questions we hear from homeowners about vinyl fences.",
    faqs: [
      {
        q: "How long does a vinyl fence last?",
        a: "Vinyl fences are built to last 20 to 30 years or more. Most manufacturers offer lifetime warranties on their vinyl fencing products. Unlike wood, vinyl doesn't rot, warp, or splinter - so it maintains its appearance with virtually no upkeep.",
      },
      {
        q: "Does vinyl fencing yellow over time?",
        a: "Modern vinyl fencing is manufactured with UV inhibitors that prevent yellowing and fading. The technology has come a long way - today's vinyl holds its color for decades. We only install high-quality, UV-resistant vinyl products.",
      },
      {
        q: "Can vinyl fencing handle Delaware wind and weather?",
        a: "Absolutely. The vinyl fencing we install is engineered for Mid-Atlantic conditions - high winds, heavy rain, snow, and summer heat. Posts are set in concrete and panels are designed to flex without cracking under wind pressure.",
      },
      {
        q: "How does vinyl compare to wood on cost?",
        a: "Vinyl costs more upfront per linear foot than wood. However, over its lifetime vinyl is often cheaper because you never pay for staining, sealing, painting, or replacing rotted boards. Most homeowners break even within 5-7 years and save money every year after that.",
      },
    ],
    cta: {
      highlightWord: "Vinyl Fence",
      subtitle:
        "Tell us about your project and we'll come out for a free on-site estimate. No pressure, no gimmicks - just an honest quote from a local crew.",
      bullets: [
        "Free on-site estimates",
        "White, tan, gray & woodgrain options",
        "Lifetime manufacturer warranties",
        "Licensed & insured in Delaware",
      ],
    },
    relatedBlogSlugs: [
      "wood-vs-vinyl-fence-which-is-right-for-you",
      "how-much-does-a-fence-cost-in-delaware",
      "hoa-fence-rules-new-castle-county-delaware",
      "best-fence-for-dogs-delaware-homeowners-guide",
    ],
  },

  "aluminum-fencing": {
    slug: "aluminum-fencing",
    label: "Aluminum Fencing",
    seoTitle: "Aluminum Fence Installation Delaware",
    seoDescription:
      "Professional ornamental and pool-code-compliant aluminum fence installation in Delaware. Flat top, spear top, and puppy picket styles. Free estimates from TWO MEN Fence.",
    canonicalUrl: "https://twomensfence.com/services/aluminum-fencing",
    schemaDescription:
      "Professional ornamental and pool-code-compliant aluminum fence installation in Delaware. Flat top, spear top, and puppy picket styles in black, bronze, and white.",
    breadcrumbName: "Aluminum Fencing",
    heroIcon: Crown,
    heroBadgeLabel: "Aluminum Fencing",
    heroTitle: "{highlight}. Elegant & Maintenance-Free.",
    heroHighlight: "Aluminum Fencing",
    heroSubtitle:
      "The classic look of wrought iron without the rust, weight, or maintenance. Aluminum fencing adds curb appeal and security - installed by a local Delaware crew.",
    imageKey: "aluminum",
    benefitsTitle: "Why Choose Aluminum Fencing?",
    benefitsSubtitle:
      "Aluminum gives you the ornamental look of wrought iron with none of the drawbacks - no rust, no painting, no hassle.",
    benefits: [
      {
        icon: Crown,
        title: "Ornamental Look",
        desc: "Aluminum fencing delivers the elegant, upscale appearance of wrought iron without the weight, rust, or high price tag.",
      },
      {
        icon: ShieldCheck,
        title: "Rust-Proof",
        desc: "Powder-coated aluminum will never rust, corrode, or flake - even in Delaware's humid summers and salty coastal air.",
      },
      {
        icon: Waves,
        title: "Pool-Code Compliant",
        desc: "We install aluminum fencing that meets Delaware pool safety codes with proper picket spacing and self-closing gate hardware.",
      },
      {
        icon: Wrench,
        title: "Low Maintenance",
        desc: "No painting, no staining, no rust treatment. Aluminum fencing holds its finish for decades with virtually zero upkeep.",
      },
    ],
    stylesBadgeLabel: "Options",
    stylesTitle: "Styles & Options",
    stylesSubtitle:
      "We install every major aluminum fence style - choose the one that fits your property and budget.",
    styles: [
      { name: "Flat Top", desc: "Clean, modern profile with level horizontal rails - the most popular residential style" },
      { name: "Spear Top", desc: "Traditional pointed pickets for an elegant, classic wrought-iron look" },
      { name: "Puppy Picket", desc: "Closer picket spacing at the bottom to keep small dogs and pets contained" },
      { name: "Pool Code Panels", desc: "Meets local pool safety requirements with proper spacing and self-closing gates" },
      { name: "Heights: 3ft / 4ft / 5ft / 6ft", desc: "Available in multiple heights for front yards, backyards, pools, and commercial sites" },
      { name: "Colors: Black / Bronze / White", desc: "Powder-coated finishes that resist fading, chipping, and peeling" },
    ],
    relatedServicesSubtitle: "Explore other services that pair well with aluminum fencing.",
    relatedServices: [
      { slug: "vinyl-fencing", label: "Vinyl Fencing", icon: Columns3, desc: "Low-maintenance privacy fencing" },
      { slug: "gate-installation", label: "Gate Installation", icon: DoorOpen, desc: "Custom gates to match your fence" },
      { slug: "fence-repair", label: "Fence Repair", icon: Wrench, desc: "Fix storm damage & leaning posts" },
      { slug: "chain-link-fencing", label: "Chain Link Fencing", icon: Link2, desc: "Affordable commercial fencing" },
    ],
    recentProjects: {
      serviceType: "Aluminum",
      title: "Recent Aluminum Fence Projects",
      subtitle: "See our latest aluminum fence installations across Delaware.",
      limit: 6,
      captions: {
        "gallery-15-aluminum-landscape": "Black aluminum ornamental fence — landscaped property, Hockessin, DE",
        "gallery-16-aluminum-black-classic": "Classic black aluminum fence — front yard installation, Wilmington",
        "gallery-17-aluminum-residential-front": "Aluminum ornamental fence — residential front yard, Newark, DE",
      },
    },
    faqTitle: "Aluminum Fencing Questions",
    faqSubtitle: "Answers to the most common questions we hear from homeowners about aluminum fences.",
    faqs: [
      {
        q: "What's the difference between aluminum and wrought iron fencing?",
        a: "Aluminum is significantly lighter, will never rust, costs less, and requires virtually no maintenance. Wrought iron is heavier and stronger but rusts over time and needs regular painting. For most residential applications, aluminum gives you the same ornamental look at a fraction of the long-term cost.",
      },
      {
        q: "Is aluminum fencing strong enough for security?",
        a: "Yes. Modern aluminum fencing is made from heavy-duty, powder-coated aluminum alloy that is surprisingly strong. It won't bend or break under normal conditions. While it's not a commercial security barrier, it provides an effective deterrent and clear property boundary for residential use.",
      },
      {
        q: "Does aluminum fencing meet pool code requirements?",
        a: "Yes - we install aluminum pool fencing that meets Delaware and local municipal pool safety codes. This includes proper picket spacing (no more than 4 inches), minimum height requirements, and self-closing/self-latching gate hardware. We know the local codes and make sure your fence passes inspection.",
      },
      {
        q: "Can aluminum fencing be installed on sloped ground?",
        a: "Absolutely. Aluminum fence panels are rackable, meaning they can angle to follow the slope of your yard while keeping the pickets vertical. For steeper grades, we use stair-step installation. Either way, the fence looks clean and follows your terrain naturally.",
      },
    ],
    cta: {
      highlightWord: "Aluminum Fence",
      subtitle:
        "Tell us about your project and we'll come out for a free on-site estimate. No pressure, no gimmicks - just an honest quote from a local crew.",
      bullets: [
        "Free on-site estimates",
        "Pool-code compliant options",
        "Black, bronze & white finishes",
        "Licensed & insured in Delaware",
      ],
    },
    relatedBlogSlugs: [
      "pool-fence-requirements-delaware",
      "how-much-does-a-fence-cost-in-delaware",
      "best-fence-for-dogs-delaware-homeowners-guide",
    ],
  },

  "chain-link-fencing": {
    slug: "chain-link-fencing",
    label: "Chain Link Fencing",
    seoTitle: "Chain Link Fence Installation Delaware",
    seoDescription:
      "Affordable chain link fence installation in Delaware. Galvanized, vinyl-coated, privacy slats. Residential & commercial. Free estimates from TWO MEN.",
    canonicalUrl: "https://twomensfence.com/services/chain-link-fencing",
    schemaDescription:
      "Professional galvanized and vinyl-coated chain link fence installation in Delaware for residential and commercial properties. Privacy slats and barbed wire options available.",
    breadcrumbName: "Chain Link Fencing",
    heroIcon: Link2,
    heroBadgeLabel: "Chain Link Fencing",
    heroTitle: "{highlight}. Tough, Affordable, Reliable.",
    heroHighlight: "Chain Link Fencing",
    heroSubtitle:
      "The most cost-effective way to secure your property. Galvanized or vinyl-coated chain link for homes, businesses, and everything in between - installed fast by a local Delaware crew.",
    imageKey: "chainlink",
    benefitsTitle: "Why Choose Chain Link Fencing?",
    benefitsSubtitle:
      "Chain link is the most affordable way to secure a property - and it goes up fast.",
    benefits: [
      {
        icon: DollarSign,
        title: "Most Affordable Option",
        desc: "Chain link delivers the lowest cost per linear foot of any fencing material - ideal for large properties and tight budgets.",
      },
      {
        icon: Shield,
        title: "Extremely Durable",
        desc: "Galvanized steel wire and posts stand up to years of weather, impact, and heavy use without bending or breaking.",
      },
      {
        icon: Eye,
        title: "See-Through Security",
        desc: "Chain link provides a clear sightline across your property - great for keeping an eye on kids, pets, and equipment.",
      },
      {
        icon: Zap,
        title: "Quick Installation",
        desc: "Chain link goes up faster than any other fence type. Most residential jobs are done in a single day.",
      },
    ],
    stylesBadgeLabel: "Options",
    stylesTitle: "Styles & Options",
    stylesSubtitle:
      "We install residential and commercial chain link in multiple styles and heights.",
    styles: [
      { name: "Galvanized Standard", desc: "Classic silver chain link - the most economical and widely used option" },
      { name: "Vinyl-Coated (Black / Green / Brown)", desc: "Color-coated mesh that blends with landscaping and looks more refined" },
      { name: "Privacy Slats", desc: "Vertical or diagonal slats woven into the mesh for added privacy and wind reduction" },
      { name: "Barbed Wire (Commercial)", desc: "Security topping for commercial, industrial, and storage properties" },
      { name: "Heights: 4ft / 5ft / 6ft / 8ft", desc: "Residential heights from 4ft up to 8ft commercial and security applications" },
    ],
    relatedServicesSubtitle: "Explore other services that pair well with chain link fencing.",
    relatedServices: [
      { slug: "aluminum-fencing", label: "Aluminum Fencing", icon: Fence, desc: "Elegant ornamental fencing" },
      { slug: "gate-installation", label: "Gate Installation", icon: DoorOpen, desc: "Custom gates for your property" },
      { slug: "fence-repair", label: "Fence Repair", icon: Wrench, desc: "Fix storm damage & leaning posts" },
      { slug: "vinyl-fencing", label: "Vinyl Fencing", icon: Columns3, desc: "Low-maintenance privacy fencing" },
    ],
    recentProjects: {
      serviceType: "Chain Link",
      title: "Recent Chain Link Fence Projects",
      subtitle: "See our latest chain link fence installations across Delaware and Pennsylvania.",
      limit: 6,
      captions: {
        "gallery-12-chainlink-galvanized-field": "Galvanized chain link fence — large commercial property, New Castle County",
        "gallery-10-chainlink-commercial-sports": "Black vinyl-coated chain link — sports facility, Delaware",
        "gallery-11-chainlink-black-commercial": "Black chain link fence — commercial perimeter, Bear, DE",
        "gallery-13-chainlink-dumpster-enclosure": "Chain link dumpster enclosure — commercial property, Wilmington",
      },
    },
    faqTitle: "Chain Link Fencing Questions",
    faqSubtitle: "Answers to the most common questions about chain link fences.",
    faqs: [
      {
        q: "How long does a chain link fence last?",
        a: "A galvanized chain link fence typically lasts 15 to 20 years. Vinyl-coated chain link can last 20 years or more because the coating provides an extra layer of protection against rust and corrosion. Posts set in concrete and quality hardware add even more longevity.",
      },
      {
        q: "Can you add privacy to a chain link fence?",
        a: "Yes. We offer privacy slats that weave into the chain link mesh, as well as privacy mesh screens that attach to the outside. Slats come in multiple colors and provide 70-90% privacy depending on the style. It's a great way to upgrade an existing fence without replacing it.",
      },
      {
        q: "Do you install commercial chain link with barbed wire?",
        a: "Yes. We install commercial-grade chain link fencing with barbed wire or razor wire topping for warehouses, storage yards, construction sites, and industrial properties. We use heavier gauge wire, thicker posts, and commercial-grade hardware for maximum security.",
      },
      {
        q: "What's the difference between residential and commercial gauge?",
        a: "Residential chain link uses lighter gauge wire (typically 11.5 gauge) and thinner posts, which is perfectly adequate for backyards and pet containment. Commercial chain link uses heavier gauge wire (9 or 6 gauge) and thicker, stronger posts designed for high-traffic, high-security applications.",
      },
    ],
    cta: {
      highlightWord: "Chain Link Fence",
      subtitle:
        "Tell us about your project and we'll come out for a free on-site estimate. Residential or commercial - we handle it all.",
      bullets: [
        "Free on-site estimates",
        "Residential & commercial installations",
        "Vinyl-coated color options available",
        "Licensed & insured in Delaware",
      ],
    },
    relatedBlogSlugs: [
      "how-much-does-a-fence-cost-in-delaware",
      "best-fence-for-dogs-delaware-homeowners-guide",
      "how-to-choose-a-fence-contractor-checklist",
    ],
  },

  "fence-repair": {
    slug: "fence-repair",
    label: "Fence Repair",
    seoTitle: "Fence Repair Delaware - Fast, Affordable Fixes",
    seoDescription:
      "Professional fence repair in Delaware. Storm damage, leaning posts, broken boards, gate fixes. All materials - wood, vinyl, aluminum, chain link. Free estimates.",
    canonicalUrl: "https://twomensfence.com/services/fence-repair",
    schemaDescription:
      "Professional fence repair in Delaware. Wood, vinyl, aluminum, and chain link fence repair. Storm damage, leaning posts, broken boards, gate repair. Free estimates.",
    breadcrumbName: "Fence Repair",
    heroIcon: Wrench,
    heroBadgeLabel: "Fence Repair",
    heroTitle: "Fence {highlight}? We Fix It Fast.",
    heroHighlight: "Broken",
    heroSubtitle:
      "Storm damage, leaning posts, broken boards - whatever happened, we'll get your fence back in shape. Most repairs done in one day by our local Delaware crew.",
    imageKey: "wood",
    benefitsTitle: "Why Call TWO MEN for Repairs?",
    benefitsSubtitle:
      "We fix fences fast - and honestly. If repair makes more sense than replacement, we'll tell you.",
    benefits: [
      {
        icon: Clock,
        title: "Fast Turnaround",
        desc: "Most fence repairs are completed in a single day. We show up on time and get it done right - no dragging the job out.",
      },
      {
        icon: DollarSign,
        title: "Save vs. Replace",
        desc: "Repair costs a fraction of a full replacement. We'll honestly tell you if repair makes sense or if it's time for new.",
      },
      {
        icon: ShieldCheck,
        title: "All Materials",
        desc: "We repair wood, vinyl, aluminum, and chain link fencing. Whatever you have, we can fix it.",
      },
      {
        icon: Wrench,
        title: "Storm Damage Pros",
        desc: "Delaware storms hit hard. We respond fast to wind, tree, and impact damage to get your property secured quickly.",
      },
    ],
    stylesBadgeLabel: "We Fix It All",
    stylesTitle: "Common Repairs",
    stylesSubtitle:
      "Whatever went wrong with your fence, we've seen it before and we know how to fix it.",
    styles: [
      { name: "Leaning or Falling Posts", desc: "Re-set rotted or damaged posts with new concrete footings" },
      { name: "Broken or Missing Boards", desc: "Replace individual boards to match your existing fence style" },
      { name: "Storm & Wind Damage", desc: "Emergency repair for sections knocked down by weather or fallen trees" },
      { name: "Gate Repair & Realignment", desc: "Fix sagging, sticking, or broken gates - hardware and frame repairs" },
      { name: "Rotted Bottom Rails", desc: "Replace ground-contact rails that have deteriorated from moisture" },
      { name: "Chain Link Patching", desc: "Repair holes, replace top rails, and re-tension sagging chain link fabric" },
    ],
    relatedServicesSubtitle: "Need a full replacement? Check out our new fence options.",
    relatedServices: [
      { slug: "wood-fencing", label: "Wood Fencing", icon: TreePine, desc: "New wood fence installation" },
      { slug: "vinyl-fencing", label: "Vinyl Fencing", icon: Columns3, desc: "Low-maintenance vinyl fences" },
      { slug: "gate-installation", label: "Gate Installation", icon: DoorOpen, desc: "Custom gates for your property" },
      { slug: "chain-link-fencing", label: "Chain Link Fencing", icon: Fence, desc: "Affordable commercial fencing" },
    ],
    recentProjects: {
      serviceType: "Wood",
      title: "Recent Fence Repair Projects",
      subtitle: "See examples of fence repairs and replacements we've completed across Delaware.",
      limit: 4,
      captions: {},
    },
    faqTitle: "Fence Repair Questions",
    faqSubtitle: "Common questions about fence repair and when replacement makes more sense.",
    faqs: [
      {
        q: "How do I know if my fence needs repair or replacement?",
        a: "If the damage is limited to a few posts, boards, or a single section, repair is usually the better value. If more than 30-40% of the fence is damaged, rotted, or leaning, a full replacement often makes more sense long-term. We'll give you an honest recommendation during your free estimate.",
      },
      {
        q: "Do you repair fences you didn't install?",
        a: "Absolutely. We repair all types of fences regardless of who installed them. Wood, vinyl, aluminum, chain link - if it's broken, we can fix it.",
      },
      {
        q: "How quickly can you get to a storm damage repair?",
        a: "For storm damage and emergencies, we prioritize getting to your property as fast as possible - often within 24-48 hours. We'll secure the area first, then schedule the full repair.",
      },
      {
        q: "Will the repaired section match my existing fence?",
        a: "We do our best to match materials, height, and style. With wood fences, new boards may look slightly different in color at first but will weather to match over time. For vinyl and aluminum, we source matching manufacturer panels whenever possible.",
      },
    ],
    cta: {
      highlightWord: "Fence Repair",
      subtitle:
        "Send us a few details and we'll come out to assess the damage for free. No pressure - just an honest recommendation from a local crew that does this every day.",
      bullets: [
        "Free damage assessment",
        "Same-day response for storm damage",
        "Wood, vinyl, aluminum & chain link",
        "Licensed & insured in Delaware",
      ],
    },
    relatedBlogSlugs: [
      "how-much-does-a-fence-cost-in-delaware",
      "fence-installation-timeline-what-to-expect",
      "do-i-need-a-permit-for-a-fence-in-delaware",
    ],
  },

  "gate-installation": {
    slug: "gate-installation",
    label: "Gate Installation",
    seoTitle: "Gate Installation Delaware - Driveway & Walk-Through",
    seoDescription:
      "Professional gate installation in Delaware. Driveway, walk-through, pool code & commercial gates. Wood, vinyl, aluminum, chain link. Free estimates from TWO MEN.",
    canonicalUrl: "https://twomensfence.com/services/gate-installation",
    schemaDescription:
      "Professional gate installation in Delaware. Driveway gates, walk-through gates, pool code gates, and commercial gates in wood, vinyl, aluminum, and chain link.",
    breadcrumbName: "Gate Installation",
    heroIcon: DoorOpen,
    heroBadgeLabel: "Gate Installation",
    heroTitle: "Custom {highlight}. Built to Match.",
    heroHighlight: "Gates",
    heroSubtitle:
      "Driveway gates, walk-throughs, pool code gates - we build and install gates that match your fence and secure your property. Custom-sized for a perfect fit.",
    imageKey: "aluminum",
    benefitsTitle: "Why TWO MEN for Gates?",
    benefitsSubtitle:
      "A gate is only as good as its installation. We build gates that close right, latch right, and look right.",
    benefits: [
      {
        icon: Lock,
        title: "Security & Access Control",
        desc: "A proper gate keeps your property secure while giving you convenient access. We install locking hardware, self-closing hinges, and keypad options.",
      },
      {
        icon: Ruler,
        title: "Custom Sizing",
        desc: "Every property is different. We build and install gates sized exactly for your driveway, walkway, or side yard - no awkward gaps or tight squeezes.",
      },
      {
        icon: ShieldCheck,
        title: "Matches Your Fence",
        desc: "Your gate should look like it belongs. We match the material, height, and style of your existing fence for a seamless, professional finish.",
      },
      {
        icon: DoorOpen,
        title: "All Gate Types",
        desc: "Single swing, double swing, sliding, and walk-through gates in wood, vinyl, aluminum, and chain link. We do it all.",
      },
    ],
    stylesBadgeLabel: "Gate Types",
    stylesTitle: "Gate Types We Install",
    stylesSubtitle:
      "We install every type of residential and commercial gate - sized and built for your specific property.",
    styles: [
      { name: "Single Swing Gate", desc: "Standard walk-through or driveway gate that swings open on one side" },
      { name: "Double Swing Gate", desc: "Two-panel driveway gate for wider openings - opens from the center" },
      { name: "Sliding Gate", desc: "Rolls along a track parallel to the fence line - ideal for sloped or tight driveways" },
      { name: "Walk-Through Gate", desc: "Pedestrian-sized gate for side yards, backyards, and pool enclosures" },
      { name: "Pool Code Gate", desc: "Self-closing, self-latching gate that meets Delaware pool safety requirements" },
      { name: "Commercial Gate", desc: "Heavy-duty gates for business properties, dumpster enclosures, and parking areas" },
    ],
    relatedServicesSubtitle: "Explore other services that pair well with gate installation.",
    relatedServices: [
      { slug: "wood-fencing", label: "Wood Fencing", icon: TreePine, desc: "Classic natural wood fencing" },
      { slug: "vinyl-fencing", label: "Vinyl Fencing", icon: Columns3, desc: "Low-maintenance vinyl fences" },
      { slug: "fence-repair", label: "Fence Repair", icon: Wrench, desc: "Fix storm damage & leaning posts" },
      { slug: "chain-link-fencing", label: "Chain Link Fencing", icon: Link2, desc: "Affordable commercial fencing" },
    ],
    recentProjects: {
      serviceType: "Wood",
      title: "Recent Gate & Fence Projects",
      subtitle: "See our latest gate installations and fence projects across Delaware.",
      limit: 4,
      captions: {},
    },
    faqTitle: "Gate Installation Questions",
    faqSubtitle: "Common questions about gate types, sizing, and installation.",
    faqs: [
      {
        q: "Can you add a gate to my existing fence?",
        a: "Yes - this is one of our most common requests. We can cut into an existing fence line and install a new gate with proper posts and hardware. We'll match the material and style of your current fence so it looks like it was always there.",
      },
      {
        q: "What type of gate is best for a driveway?",
        a: "It depends on your driveway width and slope. Double swing gates work great for flat driveways up to 16 feet wide. For wider openings or sloped driveways, a sliding gate is usually the better choice. We'll recommend the right option during your free estimate.",
      },
      {
        q: "Do you install automatic gate openers?",
        a: "We focus on the gate structure, posts, and hardware. For automatic openers and keypads, we can recommend trusted local electricians who specialize in gate automation. The gate itself needs to be properly built first - that's our part.",
      },
      {
        q: "How much does a gate installation cost?",
        a: "Gate pricing varies based on size, material, and style. A standard walk-through gate starts around $300-500 installed. Driveway gates range from $800-2,500+ depending on width and material. We give free on-site estimates with exact pricing - no surprises.",
      },
    ],
    cta: {
      highlightWord: "Gate",
      subtitle:
        "Tell us about your project - driveway gate, walk-through, pool code, or something custom. We'll come out, measure, and give you an honest quote.",
      bullets: [
        "Free on-site measurements",
        "Wood, vinyl, aluminum & chain link",
        "Custom sizing for any opening",
        "Licensed & insured in Delaware",
      ],
    },
    relatedBlogSlugs: [
      "pool-fence-requirements-delaware",
      "best-fence-for-dogs-delaware-homeowners-guide",
      "fence-installation-timeline-what-to-expect",
    ],
  },

  "deck-building": {
    slug: "deck-building",
    label: "Deck Building",
    seoTitle: "Custom Deck Building Delaware | TWO MEN",
    seoDescription:
      "Custom wood & composite deck building in Delaware. Pressure-treated, cedar, and Trex decks. Free estimates from Oscar & Anna at TWO MEN.",
    canonicalUrl: "https://twomensfence.com/services/deck-building",
    schemaDescription:
      "Custom wood and composite deck building in Delaware. Pressure-treated, cedar, and Trex decks with railings, stairs, and built-in features.",
    breadcrumbName: "Deck Building",
    heroIcon: LayoutGrid,
    heroBadgeLabel: "Deck Building",
    heroTitle: "Custom {highlight}. Built to Last.",
    heroHighlight: "Decks",
    heroSubtitle:
      "From simple backyard patios to multi-level composite decks - we build decks that look great and hold up to Delaware weather. Every project comes with a warranty.",
    imageKey: "deck",
    benefitsTitle: "Why Build a Deck?",
    benefitsSubtitle:
      "A deck is one of the best investments you can make in your home - and we build them to last.",
    benefits: [
      {
        icon: LayoutGrid,
        title: "Expand Your Living Space",
        desc: "A deck extends your home into the outdoors - perfect for grilling, entertaining, or just relaxing on a warm evening.",
      },
      {
        icon: TrendingUp,
        title: "Increase Home Value",
        desc: "A well-built deck is one of the highest-ROI home improvements. Most homeowners recoup 65-75% of the cost at resale.",
      },
      {
        icon: Paintbrush,
        title: "Fully Customizable",
        desc: "Choose from pressure-treated wood, cedar, or low-maintenance composite. Multi-level, wrap-around, built-in benches - we build it all.",
      },
      {
        icon: Shield,
        title: "Warranted Work",
        desc: "Every deck we build comes with a warranty. Oscar and Anna stand behind their work - if there's ever an issue, they'll make it right.",
      },
    ],
    stylesBadgeLabel: "Options",
    stylesTitle: "Deck Types & Materials",
    stylesSubtitle:
      "We build decks in every major material and configuration - from simple platforms to full outdoor living spaces.",
    styles: [
      { name: "Pressure-Treated Wood Deck", desc: "The most affordable option - durable, versatile, and ready to stain or paint" },
      { name: "Cedar Deck", desc: "Naturally rot-resistant with beautiful grain - ages gracefully with minimal maintenance" },
      { name: "Composite / Trex Deck", desc: "Zero maintenance, won't rot or splinter. Available in dozens of colors and textures" },
      { name: "Multi-Level Deck", desc: "Step-down designs that work with sloped yards and create distinct outdoor zones" },
      { name: "Screened-In Deck", desc: "Enjoy the outdoors bug-free - screened enclosures for ultimate comfort" },
      { name: "Deck with Built-In Features", desc: "Benches, planters, lighting, pergolas - custom features that make your deck unique" },
    ],
    relatedServicesSubtitle: "Explore other services that pair well with deck building.",
    relatedServices: [
      { slug: "wood-fencing", label: "Wood Fencing", icon: TreePine, desc: "Classic natural wood fencing" },
      { slug: "tree-trimming", label: "Tree Trimming", icon: Axe, desc: "Clear trees before your deck build" },
      { slug: "fence-repair", label: "Fence Repair", icon: Wrench, desc: "Fix storm damage & leaning posts" },
      { slug: "vinyl-fencing", label: "Vinyl Fencing", icon: Columns3, desc: "Low-maintenance privacy fencing" },
    ],
    recentProjects: {
      serviceType: "Deck",
      title: "Recent Deck Projects",
      subtitle: "See our latest deck building projects across Delaware.",
      limit: 6,
      captions: {
        "gallery-05-wood-deck-framing": "Cedar deck framing — new construction, Hockessin, DE",
        "gallery-18-deck-boards-progress": "Deck board installation in progress — residential project",
        "gallery-20-deck-complete-backyard": "Completed backyard deck with railing — Bear, DE",
      },
    },
    faqTitle: "Deck Building Questions",
    faqSubtitle: "Answers to the most common questions about deck building in Delaware.",
    faqs: [
      {
        q: "How long does it take to build a deck?",
        a: "Most residential decks take 3 to 7 days depending on size, complexity, and material. A simple 12x16 pressure-treated deck can often be done in 3-4 days. Multi-level or composite decks may take a full week. We'll give you a clear timeline during your free estimate.",
      },
      {
        q: "Do I need a permit for a deck?",
        a: "In most Delaware municipalities, yes - decks typically require a building permit. We help guide you through the permit process, including what's needed and where to apply. Permits ensure your deck is built to code and safe for your family.",
      },
      {
        q: "What's the best deck material?",
        a: "It depends on your budget and maintenance preferences. Pressure-treated wood is the most affordable. Cedar looks beautiful naturally. Composite (Trex) costs more upfront but requires zero maintenance - no staining, no sealing, no splinters. We'll help you choose the best fit.",
      },
      {
        q: "Do you build decks with railings?",
        a: "Absolutely. Most decks require railings by code (anything 30 inches or higher off the ground). We install wood, composite, and aluminum railings to match your deck. We also handle stairs, gates, and ADA-compliant access ramps.",
      },
    ],
    cta: {
      highlightWord: "Deck",
      subtitle:
        "Tell us about your project and we'll come out for a free on-site estimate. No pressure, no gimmicks - just an honest quote from a local crew.",
      bullets: [
        "Free on-site estimates",
        "Wood, cedar & composite options",
        "Most builds done in 3\u20137 days",
        "Every project comes with a warranty",
      ],
    },
    relatedBlogSlugs: [
      "cedar-vs-composite-deck-which-is-better-for-delaware",
      "fence-installation-timeline-what-to-expect",
      "how-to-choose-a-fence-contractor-checklist",
    ],
  },

  "tree-trimming": {
    slug: "tree-trimming",
    label: "Tree Trimming",
    seoTitle: "Tree Trimming & Removal Delaware | TWO MEN",
    seoDescription:
      "Professional tree trimming, removal, and stump grinding in Delaware. 18+ years experience. Free estimates from Oscar & Anna at TWO MEN.",
    canonicalUrl: "https://twomensfence.com/services/tree-trimming",
    schemaDescription:
      "Professional tree trimming, removal, and stump grinding services in Delaware. Routine pruning, emergency storm damage cleanup, hedge trimming, and lot clearing.",
    breadcrumbName: "Tree Trimming",
    heroIcon: Axe,
    heroBadgeLabel: "Tree Trimming",
    heroTitle: "Professional {highlight} & Removal.",
    heroHighlight: "Tree Trimming",
    heroSubtitle:
      "Oscar and Anna handle everything from routine trimming to full tree removal and stump grinding. 18+ years of experience, fully insured, and every job comes with a warranty.",
    imageKey: "tree",
    benefitsTitle: "Why Professional Tree Care?",
    benefitsSubtitle:
      "Trees are one of your property's biggest assets - proper care keeps them healthy, safe, and looking great.",
    benefits: [
      {
        icon: Shield,
        title: "Safety First",
        desc: "Dead branches and overgrown trees are a hazard - especially during storms. Regular trimming keeps your family and property safe.",
      },
      {
        icon: Eye,
        title: "Boost Curb Appeal",
        desc: "Well-maintained trees transform the look of your property. Trimming opens up sightlines, lets in light, and gives your yard a clean, polished look.",
      },
      {
        icon: Heart,
        title: "Healthier Trees",
        desc: "Proper pruning removes diseased or crossing branches, improves airflow, and encourages strong new growth. Your trees will live longer and look better.",
      },
      {
        icon: Zap,
        title: "Storm Prevention",
        desc: "Delaware storms can bring down weakened branches in seconds. Proactive trimming reduces the risk of damage to your roof, car, fence, and power lines.",
      },
    ],
    stylesBadgeLabel: "Our Services",
    stylesTitle: "Tree Services We Offer",
    stylesSubtitle:
      "From routine trimming to emergency storm cleanup - we handle every aspect of tree care for your property.",
    styles: [
      { name: "Tree Trimming & Pruning", desc: "Routine trimming to keep trees healthy, safe, and looking their best year-round" },
      { name: "Tree Removal", desc: "Full tree removal for dead, damaged, or unwanted trees - including cleanup and haul-away" },
      { name: "Stump Grinding", desc: "Complete stump removal below grade so you can reclaim your yard space" },
      { name: "Storm Damage Cleanup", desc: "Emergency response for fallen trees and broken branches after storms" },
      { name: "Hedge & Shrub Trimming", desc: "Shape and maintain hedges, bushes, and ornamental shrubs for a clean landscape" },
      { name: "Branch Clearing & Lot Clearing", desc: "Clear overgrown areas, remove low-hanging branches, and open up your property" },
    ],
    relatedServicesSubtitle: "Explore other services that pair well with tree work.",
    relatedServices: [
      { slug: "deck-building", label: "Deck Building", icon: Hammer, desc: "Custom wood & composite decks" },
      { slug: "wood-fencing", label: "Wood Fencing", icon: TreePine, desc: "Classic natural wood fencing" },
      { slug: "fence-repair", label: "Fence Repair", icon: Wrench, desc: "Fix storm damage & leaning posts" },
      { slug: "vinyl-fencing", label: "Vinyl Fencing", icon: Columns3, desc: "Low-maintenance privacy fencing" },
    ],
    recentProjects: {
      serviceType: "Tree",
      title: "Recent Tree Service Projects",
      subtitle: "See our latest tree trimming and removal work across Delaware.",
      limit: 6,
      captions: {},
    },
    faqTitle: "Tree Service Questions",
    faqSubtitle: "Common questions about tree trimming, removal, and stump grinding.",
    faqs: [
      {
        q: "How often should trees be trimmed?",
        a: "Most trees benefit from trimming every 2-3 years, but it depends on the species and growth rate. Fast-growing trees like maples and oaks may need attention more frequently. Dead or hazardous branches should be removed as soon as they're noticed - don't wait for a storm to do it for you.",
      },
      {
        q: "Do you handle emergency tree removal?",
        a: "Yes. If a tree comes down during a storm or a branch is threatening your home, call us. We respond as quickly as possible for emergency situations. Safety is our top priority - we'll assess the situation, make it safe, and handle the full cleanup.",
      },
      {
        q: "Do you remove the stump too?",
        a: "We offer stump grinding as an add-on service. We grind the stump below grade so you can fill the area with soil and grass seed. It's the cleanest way to remove a stump - no digging, no mess.",
      },
      {
        q: "Are you insured for tree work?",
        a: "Absolutely. We carry full general liability insurance and workers' compensation. Tree work can be dangerous, so insurance isn't optional - it's essential. We're happy to provide proof of insurance before any job.",
      },
    ],
    cta: {
      highlightWord: "Tree Work",
      subtitle:
        "Tell us about your project and we'll come out for a free on-site estimate. No pressure, no gimmicks - just an honest quote from a local crew.",
      bullets: [
        "Free on-site estimates",
        "Trimming, removal & stump grinding",
        "Storm damage emergency service",
        "Every job fully insured & warranted",
      ],
    },
    relatedBlogSlugs: [
      "fence-installation-timeline-what-to-expect",
      "how-to-choose-a-fence-contractor-checklist",
      "cedar-vs-composite-deck-which-is-better-for-delaware",
    ],
  },
};

export function getServiceData(slug: string): ServicePageData | undefined {
  return SERVICE_PAGE_DATA[slug];
}
