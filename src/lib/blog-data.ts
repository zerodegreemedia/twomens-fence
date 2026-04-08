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
    author: "TWO MEN Fence & Construction",
    category: "Cost Guides",
    featuredImage: "/img/gallery/gallery-01-cedar-privacy-fence.webp",
    featuredImageAlt:
      "Cedar privacy fence installation by TWO MEN Fence in Delaware",
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
    author: "TWO MEN Fence & Construction",
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
  {
    slug: "do-i-need-a-permit-for-a-fence-in-delaware",
    title: "Do I Need a Permit for a Fence in Delaware?",
    description:
      "A county-by-county guide to fence permit requirements in Delaware — New Castle County, Kent County, Sussex County, Wilmington, Newark, Dover, and more.",
    date: "2026-04-04",
    author: "TWO MEN Fence & Construction",
    category: "Permits & Regulations",
    featuredImage: "/img/gallery/gallery-03-wood-privacy-backyard.webp",
    featuredImageAlt:
      "Wood privacy fence installation in Delaware backyard requiring permit",
    content: `
      <p>If you're planning to install a fence in Delaware, one of the first things you need to figure out is whether you need a permit. The short answer: <strong>yes, most Delaware municipalities require a fence permit.</strong> The rules vary depending on where you live — each county and city has its own requirements for height limits, setbacks, and application processes.</p>

      <p>Here's a county-by-county breakdown of what you need to know before you start your fence project.</p>

      <h2>New Castle County Fence Permits</h2>
      <p>New Castle County is the most populated county in Delaware, and it has clear fence permit requirements. <strong>Most residential fences require a permit</strong> through the county's Land Use Department.</p>

      <p>Key rules to know:</p>
      <ul>
        <li><strong>Maximum height:</strong> 6 feet in rear and side yards, 4 feet in front yards</li>
        <li><strong>Setbacks:</strong> Fences typically must be set back from the property line — the exact distance depends on your zoning district</li>
        <li><strong>Permit fee:</strong> Approximately $50–$100 depending on the scope of the project</li>
        <li><strong>Application:</strong> Submit through the New Castle County Land Use Department with a site plan showing fence location, height, and materials</li>
      </ul>

      <p>If your property is in an unincorporated area of New Castle County, the county rules apply directly. If you're within a city or town, check their local ordinances as well — they may have additional requirements.</p>

      <h2>City of Wilmington</h2>
      <p>Wilmington has its own fence permit process, separate from New Castle County. Permits are required through the <strong>Licenses & Inspections Department</strong>.</p>

      <ul>
        <li><strong>Height limits:</strong> Similar to the county — 6 feet for rear/side yards, 4 feet for front yards</li>
        <li><strong>Historic districts:</strong> If your property is in a Wilmington historic district, your fence may require additional review by the Historic Preservation Commission. Materials, style, and height may all be subject to approval</li>
        <li><strong>Application process:</strong> Submit a permit application with your fence plan, including dimensions, materials, and location on the property</li>
      </ul>

      <p>Wilmington tends to be stricter about enforcement, especially in established neighborhoods. Don't skip the permit — violations can result in fines and required removal.</p>

      <h2>City of Newark</h2>
      <p>Newark requires a fence permit for residential installations. The city has some specific rules worth noting:</p>

      <ul>
        <li><strong>Site plan required:</strong> You must submit a site plan showing the exact location of the fence on your property</li>
        <li><strong>Height restrictions:</strong> Standard 6-foot maximum in rear yards, 4 feet in front yards</li>
        <li><strong>Visibility at intersections:</strong> Newark has specific rules about fences near street intersections — fences in corner lots must maintain a clear sight triangle so drivers can see oncoming traffic. This usually means a lower fence height or setback near the corner</li>
        <li><strong>Materials:</strong> Some materials may be restricted in certain zoning districts</li>
      </ul>

      <p>The Newark Building Department handles fence permits. Processing time is typically 1–2 weeks.</p>

      <h2>Kent County (Dover Area)</h2>
      <p>Kent County has slightly more relaxed fence permit requirements compared to New Castle County, but permits are still generally required:</p>

      <ul>
        <li><strong>Fences over 6 feet:</strong> Always require a permit</li>
        <li><strong>Standard residential fences under 6 feet:</strong> May be exempt in some unincorporated areas, but you should always verify with the county planning office before building</li>
        <li><strong>City of Dover:</strong> Has its own separate permit process. Dover requires permits for most fence installations through their Planning & Inspections Department</li>
        <li><strong>Setback requirements:</strong> Vary by zoning district — check with Kent County Levy Court for specifics</li>
      </ul>

      <p>Even if your area doesn't technically require a permit for a standard fence, getting one on record protects you if a neighbor disputes the fence location later.</p>

      <h2>Sussex County</h2>
      <p>Sussex County generally has the most relaxed fence regulations in Delaware, particularly in unincorporated areas. However, there are important exceptions:</p>

      <ul>
        <li><strong>Unincorporated areas:</strong> Many standard residential fences do not require a permit, but always confirm with the Sussex County Building Code Department</li>
        <li><strong>Rehoboth Beach:</strong> Has its own fence codes with specific height, material, and placement rules. Permits are required</li>
        <li><strong>Lewes:</strong> Also has local fence ordinances separate from the county</li>
        <li><strong>Coastal areas:</strong> Properties in coastal zones may have wind-load requirements for fences. This is especially relevant for vinyl and wood fences that can act as wind sails during storms</li>
        <li><strong>Flood zones:</strong> If your property is in a FEMA flood zone, fence construction may have additional requirements to avoid impeding water flow</li>
      </ul>

      <h2>What You Need to Apply for a Fence Permit</h2>
      <p>While every jurisdiction is slightly different, most Delaware fence permit applications require the same basic documents:</p>

      <ul>
        <li><strong>Site plan or survey:</strong> Showing your property boundaries and the proposed fence location</li>
        <li><strong>Fence specifications:</strong> Height, material type (wood, vinyl, aluminum, chain link), and style</li>
        <li><strong>Setback measurements:</strong> Distance from the fence to property lines, structures, and the street</li>
        <li><strong>HOA approval letter:</strong> If your property is in a community with a homeowners association</li>
        <li><strong>Contractor information:</strong> Name, license number, and contact information for the fence installer</li>
      </ul>

      <p>Most permits are reviewed and approved within <strong>1–2 weeks</strong>. Some municipalities offer expedited processing for an additional fee.</p>

      <h2>Do I Need a Survey?</h2>
      <p>A property survey is <strong>not always required</strong> for a fence permit, but it is <strong>strongly recommended</strong>. Here's why:</p>

      <ul>
        <li><strong>Prevents encroachment:</strong> If your fence accidentally crosses onto a neighbor's property, you could be forced to tear it down and rebuild it — at your expense</li>
        <li><strong>Saves money long-term:</strong> A boundary survey costs $300–$800 depending on property size. Moving a fence that's in the wrong place costs significantly more</li>
        <li><strong>Resolves disputes:</strong> If a neighbor questions your fence placement, a recent survey is your best defense</li>
        <li><strong>Required by some municipalities:</strong> Certain towns in Delaware require a survey as part of the permit application</li>
      </ul>

      <p>If you don't have a recent survey, we recommend getting one before any fence installation — especially on properties where the boundary isn't clearly marked.</p>

      <h2>HOA Rules: The Other Permit You Might Need</h2>
      <p>Many Delaware subdivisions — especially newer developments in Bear, Middletown, Hockessin, and the Dover area — have homeowners associations with their own fence rules. These are <strong>in addition to</strong> county or city permit requirements.</p>

      <p>Common HOA fence restrictions include:</p>
      <ul>
        <li><strong>Material restrictions:</strong> Some HOAs only allow vinyl or aluminum — no wood or chain link</li>
        <li><strong>Color requirements:</strong> White, tan, or earth tones only in many communities</li>
        <li><strong>Height limits:</strong> May be more restrictive than county rules (e.g., 4 feet maximum even in backyards)</li>
        <li><strong>Style requirements:</strong> Specific picket spacing, post cap style, or panel design may be mandated</li>
        <li><strong>Approval process:</strong> You typically need to submit an Architectural Review Board (ARB) application and get written approval before applying for a county permit</li>
      </ul>

      <p>Check your community's CC&Rs (Covenants, Conditions, and Restrictions) before you start planning your fence. Getting HOA approval first can save you from costly changes later.</p>

      <h2>We Handle the Paperwork</h2>
      <p>Navigating fence permits doesn't have to be stressful. <strong>TWO MEN Fence & Construction</strong> helps guide you through the entire permit process. We know the requirements in every area we serve — from New Castle County to Kent County and everywhere in between.</p>

      <p>We'll help you understand what's required, prepare the right documents, and make sure your fence is installed to code.</p>

      <p>Ready to get started? Browse our <a href="/services/wood-fencing">wood fencing</a> and <a href="/services/vinyl-fencing">vinyl fencing</a> options, or <a href="/contact">contact us</a> directly for a free estimate.</p>

      <p><strong>Call Oscar at (610) 212-7123 or Anna at (302) 803-0790</strong> to schedule your free consultation today.</p>
    `,
  },
  {
    slug: "best-fence-for-dogs-delaware-homeowners-guide",
    title: "Best Fence for Dogs: A Delaware Homeowner's Guide",
    description:
      "Choosing the right fence to keep your dog safe — comparing wood, vinyl, chain link, and aluminum fences for pet owners in Delaware.",
    date: "2026-04-04",
    author: "TWO MEN Fence & Construction",
    category: "Buying Guides",
    featuredImage: "/img/gallery/gallery-11-chainlink-black-commercial.webp",
    featuredImageAlt:
      "Black vinyl-coated chain link fence ideal for containing dogs",
    content: `
      <p>Your dog's safety is the <strong>#1 reason Delaware homeowners call us about fencing.</strong> Whether you have a 10-pound escape artist or a 100-pound gentle giant, the right fence makes all the difference between peace of mind and a panicked search through the neighborhood.</p>

      <p>Here's how to choose the right fence for your pet — based on your dog's size, behavior, and your budget.</p>

      <h2>What Makes a Good Dog Fence?</h2>
      <p>Not all fences are created equal when it comes to containing dogs. Before choosing a material, think about your dog's specific behaviors:</p>

      <ul>
        <li><strong>Jumpers:</strong> Need a fence at least 6 feet tall — some athletic breeds can clear a 4-foot fence easily</li>
        <li><strong>Diggers:</strong> Need a fence with no gaps at the bottom, ideally with a ground board or buried base</li>
        <li><strong>Reactive dogs (barkers):</strong> Need a solid fence that blocks their view — if they can see it, they'll bark at it</li>
        <li><strong>Large/powerful breeds:</strong> Need durable materials that can withstand impact — a 90-pound dog hitting a weak fence panel at full speed will find the weak spot</li>
        <li><strong>Small dogs:</strong> Need tight spacing between pickets or boards — small breeds can squeeze through surprisingly narrow gaps</li>
      </ul>

      <h2>Wood Privacy Fencing for Dogs</h2>
      <p><strong>Best for:</strong> Reactive dogs, barkers, dogs that get overstimulated by seeing other animals or people.</p>

      <p>A 6-foot <a href="/services/wood-fencing">wood privacy fence</a> is one of the most popular choices for dog owners. The solid boards create a full visual barrier, which calms reactive dogs and prevents them from fence-running or barking at every passerby.</p>

      <p><strong>Pros:</strong></p>
      <ul>
        <li>Complete visual barrier — your dog can't see triggers on the other side</li>
        <li>6-foot height is standard, which contains most breeds</li>
        <li>Affordable compared to vinyl</li>
        <li>Can be built with minimal ground gaps</li>
      </ul>

      <p><strong>Watch out for:</strong></p>
      <ul>
        <li>Boards can warp over time, creating gaps that small dogs exploit</li>
        <li>Bottom gaps can develop as the ground settles or erodes</li>
        <li><strong>Solution:</strong> Add a kickboard (ground board) along the bottom — a horizontal board that sits flush with the ground, eliminating gaps</li>
      </ul>

      <h2>Vinyl Privacy Fencing for Dogs</h2>
      <p><strong>Best for:</strong> Dog owners who want zero maintenance and long-term durability.</p>

      <p><a href="/services/vinyl-fencing">Vinyl privacy fencing</a> offers the same visual barrier benefits as wood, with some significant advantages for pet owners:</p>

      <ul>
        <li>Smooth surface — no splinters if your dog rubs against or chews the fence</li>
        <li>Won't warp, rot, or create gaps over time the way wood can</li>
        <li>No staining or sealing needed — spend your weekends at the dog park instead</li>
        <li>Consistent panel dimensions mean uniform gaps (or no gaps) along the entire fence line</li>
      </ul>

      <p>Vinyl costs more upfront than wood, but for dog owners who want a "set it and forget it" solution, it's the best long-term investment.</p>

      <h2>Chain Link Fencing for Dogs</h2>
      <p><strong>Best for:</strong> Large yards, multiple dogs, budget-conscious pet owners with well-trained dogs.</p>

      <p><a href="/services/chain-link-fencing">Chain link fencing</a> is the most affordable fencing option, and it works well for many dog owners:</p>

      <ul>
        <li>Available in heights from 4 feet to 8 feet — plenty of options for jumpers</li>
        <li>Extremely durable — even large dogs can't damage the mesh</li>
        <li>Great for large properties where the cost of wood or vinyl would be prohibitive</li>
        <li>Can add privacy slats for dogs that are reactive to visual stimulation</li>
        <li>Vinyl-coated chain link (black or green) looks better than standard galvanized</li>
      </ul>

      <p><strong>The downside:</strong> Dogs can see through chain link, which means reactive dogs will still bark at everything. If your dog is a barker, consider adding privacy slats or choosing a solid fence material instead.</p>

      <h2>Aluminum Fencing for Dogs</h2>
      <p><strong>Best for:</strong> Front yards where aesthetics matter, large breeds only.</p>

      <p><a href="/services/aluminum-fencing">Aluminum ornamental fencing</a> looks beautiful, but it has limitations for pet owners:</p>

      <ul>
        <li>Gaps between pickets — <strong>NOT recommended for small dogs</strong> that can squeeze through</li>
        <li>Dogs can see through the fence, which triggers reactive behavior</li>
        <li>Works well for large breeds (60+ lbs) in front yard applications where you want curb appeal</li>
        <li>Some aluminum fence styles have closer picket spacing designed for pet containment — ask us about puppy-panel options</li>
      </ul>

      <h2>Our Recommendation by Dog Type</h2>

      <table>
        <thead>
          <tr><th>Dog Type</th><th>Best Fence</th><th>Recommended Height</th></tr>
        </thead>
        <tbody>
          <tr><td>Small dogs (under 30 lbs)</td><td>Vinyl or wood privacy</td><td>4–5 feet</td></tr>
          <tr><td>Medium dogs (30–60 lbs)</td><td>Wood or vinyl privacy</td><td>5–6 feet</td></tr>
          <tr><td>Large dogs (60+ lbs)</td><td>Wood privacy or chain link</td><td>6 feet</td></tr>
          <tr><td>Diggers (any size)</td><td>Any solid fence + ground board</td><td>5–6 feet</td></tr>
          <tr><td>Jumpers (any size)</td><td>6ft minimum, no horizontal rails to climb</td><td>6 feet</td></tr>
          <tr><td>Reactive / barkers</td><td>Wood or vinyl privacy (blocks view)</td><td>6 feet</td></tr>
        </tbody>
      </table>

      <h2>Dog Fence Add-Ons</h2>
      <p>Sometimes the fence itself isn't enough — here are add-ons that make any fence more dog-proof:</p>

      <ul>
        <li><strong>Ground boards / kickboards:</strong> A horizontal board at the base of the fence that sits flush with the ground. Prevents digging under the fence and eliminates bottom gaps. This is the #1 add-on we recommend for dog owners</li>
        <li><strong>Self-closing gate hardware:</strong> Gates that automatically swing shut and latch after someone walks through. This prevents the classic escape scenario — a guest or delivery person leaves the gate open, and your dog bolts. Self-closing hinges and magnetic latches are inexpensive insurance</li>
        <li><strong>Coyote rollers:</strong> For extreme jumpers or climbers, a rolling bar mounted along the top of the fence prevents dogs (and coyotes) from getting a grip to pull themselves over. Most common in rural areas of Sussex and Kent County where wildlife is a concern</li>
        <li><strong>Buried wire mesh:</strong> For persistent diggers, burying a section of wire mesh or hardware cloth along the base of the fence (extending 12–18 inches into the ground) makes digging nearly impossible</li>
      </ul>

      <h2>Get a Dog-Friendly Fence Quote</h2>
      <p>Every dog is different, and every yard is different. Tell us about your dog — breed, size, behavior — and we'll recommend the right fence setup to keep them safe and contained.</p>

      <p>We've installed hundreds of dog-friendly fences across Delaware. We know what works and what doesn't.</p>

      <p><strong>Call Oscar at (610) 212-7123 or Anna at (302) 803-0790</strong> for a free estimate on a fence that keeps your best friend safe.</p>
    `,
  },
  {
    slug: "pool-fence-requirements-delaware",
    title: "Pool Fence Requirements in Delaware",
    description:
      "Delaware pool fence safety codes, height requirements, gate specifications, and material options — everything homeowners need to know before installing a pool fence.",
    date: "2026-04-04",
    author: "TWO MEN Fence & Construction",
    category: "Permits & Regulations",
    featuredImage: "/img/gallery/gallery-15-aluminum-landscape.webp",
    featuredImageAlt:
      "Aluminum ornamental fence around residential property suitable for pool enclosure",
    content: `
      <p>If you're building a pool in Delaware, you need a fence around it. <strong>It's not optional — it's the law.</strong> Pool barrier requirements exist to prevent drowning, particularly among young children. Every year, preventable tragedies happen because pool areas weren't properly enclosed.</p>

      <p>Here's everything Delaware homeowners need to know about pool fence requirements, from height and gate specs to the best materials and permit processes.</p>

      <h2>Delaware Pool Fence Code Overview</h2>
      <p>Delaware follows the <strong>International Swimming Pool and Spa Code (ISPSC)</strong>, which sets minimum safety standards for residential pool barriers. These rules apply to:</p>

      <ul>
        <li><strong>In-ground swimming pools</strong> of any size</li>
        <li><strong>Above-ground pools</strong> with water depth greater than 24 inches</li>
        <li><strong>Hot tubs and spas</strong> that are not equipped with a locking safety cover meeting ASTM standards</li>
      </ul>

      <p>The code requires that all residential pools be completely enclosed by a <strong>barrier</strong> — meaning a fence, wall, or combination of both that prevents unsupervised access, especially by children under 5 years old.</p>

      <h2>Height Requirements</h2>
      <p>The minimum fence height for pool enclosures in Delaware is <strong>48 inches (4 feet)</strong> measured from the finished grade on the outside of the fence.</p>

      <p>Key details:</p>
      <ul>
        <li><strong>48 inches is the legal minimum</strong> — but many installers (including us) recommend 54–60 inches for additional safety</li>
        <li>The measurement is taken from the <strong>outside grade</strong>, not the pool deck side</li>
        <li>If the ground slopes, the fence must meet the 48-inch minimum at every point along its length</li>
        <li>The fence design must have <strong>no handholds or footholds</strong> that a child could use to climb. This means no horizontal rails on the outside of the fence, no decorative elements that create steps, and no attached structures (planters, benches) within 3 feet of the fence</li>
      </ul>

      <h2>Gate Requirements</h2>
      <p>Pool fence gates are where most code violations happen. Delaware requires all pool gates to meet these specifications:</p>

      <ul>
        <li><strong>Self-closing:</strong> Every gate must close and latch automatically from any open position. No propping open allowed</li>
        <li><strong>Self-latching:</strong> The latch must engage automatically without any action from the person walking through</li>
        <li><strong>Latch placement:</strong> The latch must be on the <strong>pool side</strong> of the gate, or if on the outside, it must be at least <strong>54 inches from the ground</strong> — out of reach for young children</li>
        <li><strong>Gate direction:</strong> Gates must <strong>open outward</strong>, away from the pool area</li>
        <li><strong>Latch mechanism:</strong> Must not be easily defeated by a child — simple lift latches at child height do not meet code</li>
      </ul>

      <p>We install self-closing, self-latching gate hardware on every pool fence. It's a non-negotiable safety feature.</p>

      <h2>Spacing Requirements</h2>
      <p>The gaps in your pool fence matter just as much as the height. Delaware code specifies:</p>

      <ul>
        <li><strong>Vertical members (pickets):</strong> Gaps cannot exceed <strong>4 inches</strong> — this prevents a small child's head from passing through</li>
        <li><strong>Bottom clearance:</strong> The space between the bottom of the fence and the ground cannot exceed <strong>4 inches</strong></li>
        <li><strong>Chain link mesh:</strong> If using chain link, the mesh openings must be no larger than <strong>1.75 inches</strong> (standard 2-inch chain link does NOT meet code — you need a smaller mesh size)</li>
        <li><strong>Decorative patterns:</strong> Any openings in the fence pattern that could serve as handholds or footholds are not permitted below 48 inches</li>
      </ul>

      <p>This is why standard residential picket fences (with 3.5-inch spacing) often don't meet pool code — you need a fence specifically designed for pool enclosures.</p>

      <h2>Best Materials for Pool Fences in Delaware</h2>
      <p>Not every fence material works well around a pool. Here's how the options compare:</p>

      <h3>Aluminum Ornamental Fencing</h3>
      <p><strong>The most popular choice for pool enclosures.</strong> <a href="/services/aluminum-fencing">Aluminum fencing</a> is specifically manufactured in pool-code-compliant configurations with the right picket spacing. It won't rust or corrode from pool chemicals or splash water. The ornamental look complements most pool landscapes, and it requires virtually zero maintenance.</p>

      <h3>Chain Link Fencing</h3>
      <p><a href="/services/chain-link-fencing">Chain link</a> is the most affordable pool fence option. However, you must use a <strong>smaller mesh size</strong> (1.75 inches or less) to meet code — standard residential chain link won't pass inspection. Vinyl-coated chain link in black or green looks better than standard galvanized around a pool area.</p>

      <h3>Vinyl Fencing</h3>
      <p><a href="/services/vinyl-fencing">Vinyl fencing</a> is an excellent choice if you want <strong>privacy around your pool</strong>. It handles moisture and pool chemicals without any degradation. No painting, staining, or rust. The downside is higher cost, but many homeowners consider the privacy worth it.</p>

      <h3>Wood Fencing</h3>
      <p>Wood works for pool fences but requires more maintenance in the splash zone. Constant exposure to moisture and pool chemicals accelerates rot and warping. If you go with wood, pressure-treated lumber is essential, and plan on more frequent staining/sealing.</p>

      <h2>What About the House Wall?</h2>
      <p>Many pool installations use the house wall as one side of the pool barrier. Delaware code allows this, but with important conditions:</p>

      <ul>
        <li><strong>Doors opening to the pool area:</strong> Any door from the house that opens directly to the pool enclosure must have a self-closing device, a self-latching lock, or an audible alarm that sounds when the door is opened</li>
        <li><strong>Sliding glass doors:</strong> Must be equipped with an alarm that triggers when the door is opened, or a self-closing/self-latching mechanism</li>
        <li><strong>Windows:</strong> Windows that open to the pool area and are within 48 inches of grade must not open more than 4 inches, or must have a screen that requires a tool to remove</li>
      </ul>

      <p>If you're planning to use your house as part of the pool barrier, make sure all entry points are properly equipped before your inspection.</p>

      <h2>Permit Requirements</h2>
      <p>Pool fences in Delaware typically require their own permit, separate from the pool construction permit itself:</p>

      <ul>
        <li><strong>Permit timing:</strong> The fence permit is often applied for at the same time as the pool permit, but the fence must be inspected and approved before the pool can be filled and used</li>
        <li><strong>Inspection required:</strong> A building inspector will verify fence height, gate operation, spacing, and overall code compliance</li>
        <li><strong>New Castle County:</strong> Permits through the Land Use Department — fence and pool inspections are coordinated</li>
        <li><strong>Kent County:</strong> Permits through the county or city (Dover) planning office</li>
        <li><strong>Sussex County:</strong> Permits required — coastal areas may have additional wind-load specifications for the fence</li>
      </ul>

      <p>Do not fill your pool before the fence inspection. An inspector who finds an unfenced, filled pool can issue a stop-work order and fines.</p>

      <h2>Common Pool Fence Violations</h2>
      <p>We've seen plenty of pool fence installations that fail inspection. The most common violations include:</p>

      <ul>
        <li><strong>Fence too short:</strong> Measured from the wrong side or on sloped ground</li>
        <li><strong>Gate doesn't self-close:</strong> The most frequent failure — hinges too loose, gate drags on the ground, or closer mechanism is missing</li>
        <li><strong>Latch too low:</strong> Exterior latches below 54 inches from grade</li>
        <li><strong>Gaps too wide:</strong> Picket spacing exceeds 4 inches, or bottom clearance is too large</li>
        <li><strong>Climbable horizontal rails:</strong> Fence has horizontal members on the outside that a child could use as a ladder</li>
        <li><strong>Objects near the fence:</strong> Outdoor furniture, planters, storage boxes, or play equipment within 3 feet of the pool fence that a child could use as a stepping stool to climb over</li>
      </ul>

      <p>Every one of these violations is preventable with proper installation from the start.</p>

      <h2>We Install Code-Compliant Pool Fences</h2>
      <p><strong>TWO MEN Fence & Construction</strong> installs pool fences that pass inspection the first time. We know Delaware's codes inside and out — from gate hardware specifications to picket spacing requirements.</p>

      <p>We'll help you choose the right material, handle the permit process, and install a fence that keeps your family safe and your property compliant.</p>

      <p>Check out our <a href="/services/aluminum-fencing">aluminum fencing</a>, <a href="/services/chain-link-fencing">chain link fencing</a>, and <a href="/services/vinyl-fencing">vinyl fencing</a> options for pool enclosures, or <a href="/contact">contact us</a> for a free consultation.</p>

      <p><strong>Call Oscar at (610) 212-7123 or Anna at (302) 803-0790</strong> to schedule your free pool fence estimate today.</p>
    `,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit = 2): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.slug !== currentSlug).slice(0, limit);
}
