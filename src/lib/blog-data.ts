export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  content: string;
  featuredImage: string;
  featuredImageAlt: string;
  category: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-much-does-a-fence-cost-in-delaware",
    title: "How Much Does a Fence Cost in Delaware?",
    description:
      "A breakdown of fence installation costs in Delaware — wood, vinyl, aluminum, and chain link — plus what factors affect your final price.",
    date: "2026-04-04",
    author: "TWOMENS Fence & Construction",
    category: "Cost Guides",
    featuredImage: "/img/gallery/gallery-01-cedar-privacy-fence.webp",
    featuredImageAlt:
      "Cedar privacy fence installation by TWOMENS Fence in Delaware",
    content: `
      <p>If you're planning a fence project in Delaware, the first question on your mind is probably: <strong>how much is this going to cost?</strong> The honest answer is — it depends. But we can give you a realistic breakdown based on the hundreds of fences we've installed across New Castle County, Wilmington, Newark, Bear, and surrounding areas.</p>

      <h2>Average Fence Costs by Material</h2>
      <p>Here's what Delaware homeowners typically pay per linear foot (materials + labor) as of 2026:</p>

      <table>
        <thead>
          <tr><th>Material</th><th>Cost Per Linear Foot</th><th>100 ft Estimate</th></tr>
        </thead>
        <tbody>
          <tr><td>Chain Link (galvanized)</td><td>$15 – $25</td><td>$1,500 – $2,500</td></tr>
          <tr><td>Pressure-Treated Wood</td><td>$25 – $40</td><td>$2,500 – $4,000</td></tr>
          <tr><td>Cedar Wood</td><td>$30 – $50</td><td>$3,000 – $5,000</td></tr>
          <tr><td>Vinyl Privacy</td><td>$28 – $45</td><td>$2,800 – $4,500</td></tr>
          <tr><td>Aluminum Ornamental</td><td>$30 – $55</td><td>$3,000 – $5,500</td></tr>
        </tbody>
      </table>

      <p>These are ballpark ranges. Your actual cost depends on several factors specific to your property.</p>

      <h2>What Affects Your Fence Cost?</h2>

      <h3>1. Property Size and Layout</h3>
      <p>A flat, rectangular backyard is straightforward. But if your property has slopes, curves, or tight corners, it takes more time and materials. More linear feet = higher cost, but you also get a better per-foot rate on larger jobs.</p>

      <h3>2. Fence Height</h3>
      <p>Standard residential fences are 4 to 6 feet tall. Going taller (for privacy or pool code compliance) increases material costs. A 6-foot privacy fence costs roughly 20–30% more than a 4-foot version of the same material.</p>

      <h3>3. Gates</h3>
      <p>Every fence needs at least one gate. Walk-through gates typically add $200–$500 each, while driveway or double gates can run $500–$1,500+ depending on the material and width.</p>

      <h3>4. Old Fence Removal</h3>
      <p>If you have an existing fence that needs to come down first, expect to add $3–$5 per linear foot for removal and haul-away. We include this as a separate line item so you can see exactly what you're paying for.</p>

      <h3>5. Terrain and Soil</h3>
      <p>Rocky soil, tree roots, or high water tables can make post-hole digging more difficult and time-consuming. Delaware's clay-heavy soil in some areas (especially around New Castle and Bear) can require extra work.</p>

      <h3>6. Permits</h3>
      <p>Some Delaware municipalities require fence permits. New Castle County, Wilmington, and Newark each have their own rules. Permit fees typically range from $50–$150. We help guide you through the process.</p>

      <h2>Which Fence Material Is the Best Value?</h2>
      <p><strong>Chain link</strong> is the cheapest upfront, but offers minimal privacy. <strong>Pressure-treated wood</strong> is the most popular choice — it looks great, provides full privacy, and is very affordable. <strong>Vinyl</strong> costs more upfront but requires zero maintenance, which saves money long-term. <strong>Aluminum</strong> is best for ornamental looks and pool areas.</p>

      <p>There's no single "best" option — it depends on your priorities: privacy, durability, looks, or budget.</p>

      <h2>Get a Free Estimate</h2>
      <p>The best way to know your exact cost is to get a free, no-obligation estimate. We'll come to your property, take measurements, discuss your options, and give you a clear written quote — no hidden fees, no pressure.</p>

      <p><strong>Call Oscar at (610) 212-7123 or Anna at (302) 803-0790</strong> to schedule your free estimate today.</p>
    `,
  },
  {
    slug: "wood-vs-vinyl-fence-which-is-right-for-you",
    title: "Wood vs Vinyl Fence: Which Is Right for You?",
    description:
      "Comparing wood and vinyl fencing — cost, durability, maintenance, and appearance — to help Delaware homeowners choose the right fence.",
    date: "2026-04-04",
    author: "TWOMENS Fence & Construction",
    category: "Buying Guides",
    featuredImage: "/img/gallery/gallery-06-vinyl-privacy-long.webp",
    featuredImageAlt: "White vinyl privacy fence long installation run",
    content: `
      <p>Wood and vinyl are the two most popular fence materials for Delaware homeowners — and for good reason. Both provide excellent privacy, look great, and last for years. But they're very different in terms of cost, maintenance, and long-term value.</p>

      <p>Here's an honest comparison to help you decide which is right for your property.</p>

      <h2>Cost Comparison</h2>
      <p><strong>Wood wins upfront.</strong> A pressure-treated wood privacy fence typically costs $25–$40 per linear foot installed, while vinyl runs $28–$45 per linear foot. For a 150-foot fence, that's roughly a $500–$1,500 difference.</p>

      <p>But factor in maintenance, and the gap narrows. Wood needs staining or sealing every 2–3 years ($1–$3 per linear foot each time), while vinyl needs nothing beyond an occasional rinse with a hose.</p>

      <h2>Durability and Lifespan</h2>
      <p><strong>Vinyl wins long-term.</strong> A quality vinyl fence can last 30+ years with virtually zero maintenance. It won't rot, warp, crack, or attract termites.</p>

      <p>Wood fences typically last 15–20 years with proper care. Without regular staining/sealing, that lifespan drops to 10–12 years. Pressure-treated pine holds up better than untreated wood, and cedar naturally resists rot — but neither is maintenance-free.</p>

      <h2>Appearance</h2>
      <p>This one comes down to personal preference.</p>

      <p><strong>Wood</strong> has a natural, warm look that many homeowners love. It can be stained any color and ages into a rustic gray if left untreated. Cedar especially has a beautiful natural grain. The downside: it will weather and change appearance over time unless you stay on top of maintenance.</p>

      <p><strong>Vinyl</strong> keeps its appearance for decades. White vinyl is the most popular, but tan, gray, and wood-grain textures are also available. It won't fade, peel, or discolor. The downside: some people find vinyl looks less "natural" than real wood.</p>

      <h2>Maintenance</h2>
      <p><strong>Vinyl wins decisively.</strong> A vinyl fence requires almost zero maintenance. Spray it with a hose once or twice a year to remove dirt, and that's it.</p>

      <p>Wood requires regular upkeep: staining or sealing every 2–3 years, occasional board replacement, and checking for rot or insect damage. If you skip maintenance, the fence deteriorates faster.</p>

      <h2>Repairs</h2>
      <p><strong>Wood is easier to repair.</strong> A single broken board can be replaced quickly and cheaply. With vinyl, a damaged panel often means replacing an entire section, which can be more expensive.</p>

      <p>That said, vinyl is far less likely to need repairs in the first place. It doesn't crack from moisture, and it's flexible enough to handle moderate impacts.</p>

      <h2>Wind and Weather Resistance</h2>
      <p>Both materials hold up well in Delaware's climate. Vinyl is slightly better in extreme weather — it flexes rather than breaking in high winds, and it's impervious to moisture. Wood can handle wind well too, but prolonged moisture exposure causes rot over time.</p>

      <h2>Our Recommendation</h2>
      <p><strong>Choose wood if:</strong> You want the natural look, you're on a tighter budget, or you don't mind spending a weekend staining your fence every few years.</p>

      <p><strong>Choose vinyl if:</strong> You want zero maintenance, you're planning to stay in your home long-term, or you want a fence that looks the same in 15 years as it does today.</p>

      <p>Both are excellent choices — we install hundreds of each every year. The best fence is the one that fits your property, your budget, and your lifestyle.</p>

      <h2>Get a Free Quote for Both</h2>
      <p>Not sure which way to go? We'll give you quotes for both wood and vinyl during your free estimate, so you can compare side by side with real numbers for your property.</p>

      <p><strong>Call Oscar at (610) 212-7123 or Anna at (302) 803-0790</strong> to schedule your free estimate.</p>
    `,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit = 2): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.slug !== currentSlug).slice(0, limit);
}
