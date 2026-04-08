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
  {
    slug: "hoa-fence-rules-new-castle-county-delaware",
    title: "HOA Fence Rules in New Castle County, DE",
    description:
      "A homeowner's guide to HOA fence rules in New Castle County, Delaware — approved materials, height limits, color restrictions, and the ARB approval process.",
    date: "2026-04-08",
    author: "TWO MEN Fence & Construction",
    category: "Permits & Regulations",
    featuredImage: "/img/gallery/gallery-06-vinyl-privacy-long.webp",
    featuredImageAlt:
      "White vinyl privacy fence in a Delaware HOA community",
    content: `
      <p>If you live in a planned community in New Castle County, your homeowners association probably has rules about fencing. <strong>HOA fence rules are separate from county permit requirements</strong> — you may need approval from both before you can start building.</p>

      <p>We've installed fences in dozens of HOA communities across Bear, Middletown, Hockessin, Newark, and the greater New Castle County area. Here's what you need to know before you submit your application.</p>

      <h2>Common HOA Fence Restrictions in New Castle County</h2>
      <p>Every HOA is different, but most communities in New Castle County share these common rules:</p>

      <h3>Approved Materials</h3>
      <p>Many HOAs restrict which fence materials you can use. The most commonly approved materials in New Castle County communities are:</p>
      <ul>
        <li><strong><a href="/services/vinyl-fencing">Vinyl (PVC)</a>:</strong> The most universally accepted material — nearly every HOA allows white or tan vinyl</li>
        <li><strong><a href="/services/aluminum-fencing">Aluminum ornamental</a>:</strong> Widely accepted, especially in communities that want an open, decorative look</li>
        <li><strong><a href="/services/wood-fencing">Wood</a>:</strong> Allowed in some communities but often with restrictions on stain color, board style, or species</li>
        <li><strong><a href="/services/chain-link-fencing">Chain link</a>:</strong> Frequently prohibited in HOA communities — if allowed, it's usually limited to backyards with vinyl coating required</li>
      </ul>

      <p>Before you fall in love with a fence style, check your community's CC&Rs (Covenants, Conditions & Restrictions) to see what's actually allowed.</p>

      <h3>Height Limits</h3>
      <p>HOA height limits are often more restrictive than New Castle County's 6-foot maximum:</p>
      <ul>
        <li><strong>Backyard fences:</strong> Usually 4–6 feet, depending on the community</li>
        <li><strong>Side yard fences:</strong> Often limited to 4 feet, especially in the front half of the lot</li>
        <li><strong>Front yard fences:</strong> Most HOAs prohibit front yard fencing entirely. Some allow 3–4 foot decorative or picket-style fences</li>
        <li><strong>Corner lots:</strong> May have additional restrictions to maintain visibility for traffic</li>
      </ul>

      <h3>Color Requirements</h3>
      <p>Expect your HOA to have strong opinions about color:</p>
      <ul>
        <li><strong>White</strong> is the most universally accepted vinyl fence color</li>
        <li><strong>Tan / almond / khaki</strong> are accepted in most communities</li>
        <li><strong>Gray and wood-grain textures</strong> are gaining acceptance but check first</li>
        <li><strong>Black aluminum</strong> is standard for ornamental styles</li>
        <li><strong>Natural wood</strong> may require a specific stain color — some HOAs mandate a uniform tone across all homes</li>
      </ul>

      <h3>Placement and Setback Rules</h3>
      <ul>
        <li>Fences typically cannot extend past the front plane of the house</li>
        <li>Some communities require fences to be set back 1–3 feet from the property line</li>
        <li>Corner lots often have stricter setback requirements on the street-facing side</li>
        <li>Fences near common areas, open spaces, or community paths may have special rules</li>
      </ul>

      <h2>The ARB Approval Process</h2>
      <p>Most HOAs require you to submit a request to the <strong>Architectural Review Board (ARB)</strong> before installing a fence. Here's how the process typically works:</p>

      <ol>
        <li><strong>Get your property survey.</strong> Most ARBs require a recent survey showing property boundaries. If you don't have one, expect to pay $300–$800 for a new survey</li>
        <li><strong>Complete the ARB application.</strong> Include fence material, color, height, style, and a site plan showing exactly where the fence will go on your property</li>
        <li><strong>Submit and wait.</strong> Most ARBs meet monthly. Processing times range from 2–6 weeks depending on the community. Plan ahead — don't wait until spring to submit if you want a fence installed before summer</li>
        <li><strong>Get written approval.</strong> Keep the approval letter — you'll need it when applying for your New Castle County fence permit</li>
      </ol>

      <p>Some communities have an expedited review process for standard fence requests. Ask your property management company if this is an option.</p>

      <h2>HOA vs. County: Which Rules Apply?</h2>
      <p>Both. You need to comply with <strong>both your HOA rules and New Castle County code</strong>. If there's a conflict, the more restrictive rule applies.</p>

      <p>For example: if New Castle County allows a 6-foot fence but your HOA only allows 4 feet in the backyard, you're limited to 4 feet. If your HOA allows a fence on the property line but the county requires a 1-foot setback, you need the setback.</p>

      <p>Always get HOA approval first, then apply for your county permit. The county may ask to see your HOA approval letter as part of the permit application.</p>

      <p>For a full breakdown of county permit requirements, read our guide: <a href="/blog/do-i-need-a-permit-for-a-fence-in-delaware">Do I Need a Permit for a Fence in Delaware?</a></p>

      <h2>Popular HOA Communities We've Worked In</h2>
      <p>We've installed fences in HOA communities throughout New Castle County, including neighborhoods in:</p>
      <ul>
        <li><a href="/service-areas/bear-de">Bear</a> — Governor's Square, Fox Run, Brennan Estates</li>
        <li><a href="/service-areas/middletown-de">Middletown</a> — Westown, Parkside, Village of Bayberry</li>
        <li><a href="/service-areas/hockessin-de">Hockessin</a> — Lancaster Pike communities</li>
        <li><a href="/service-areas/newark-de">Newark</a> — Elkton Road developments, University area</li>
        <li><a href="/service-areas/new-castle-de">New Castle</a> — Route 9 corridor communities</li>
      </ul>

      <p>We know which materials and styles get approved in these communities because we've been through the process many times.</p>

      <h2>Tips for Getting Your HOA Application Approved</h2>
      <ul>
        <li><strong>Read the CC&Rs before choosing your fence.</strong> Don't pick a style and then hope it's allowed</li>
        <li><strong>Match what's already in the neighborhood.</strong> If every fence in your community is white vinyl, that's what the ARB expects</li>
        <li><strong>Get a survey.</strong> A property survey eliminates disputes about fence placement</li>
        <li><strong>Submit a complete application.</strong> Incomplete applications get delayed. Include material samples or product spec sheets if possible</li>
        <li><strong>Ask us for help.</strong> We provide product specifications, site plans, and material details that make your ARB application stronger</li>
      </ul>

      <h2>We Handle HOA Fence Projects Every Week</h2>
      <p><strong>TWO MEN Fence & Construction</strong> installs fences in HOA communities across New Castle County. We know the common rules, the materials that get approved, and the paperwork that speeds up the process.</p>

      <p>Need help choosing an HOA-approved fence? <a href="/contact">Contact us</a> for a free estimate and we'll walk you through the process from application to installation.</p>

      <p><strong>Call Oscar at (610) 212-7123 or Anna at (302) 803-0790</strong> to get started.</p>
    `,
  },
  {
    slug: "how-to-choose-a-fence-contractor-checklist",
    title: "How to Choose a Fence Contractor — Checklist",
    description:
      "A step-by-step checklist for hiring a fence contractor in Delaware — licensing, insurance, references, red flags, and what to look for in a written estimate.",
    date: "2026-04-08",
    author: "TWO MEN Fence & Construction",
    category: "Buying Guides",
    featuredImage: "/img/gallery/gallery-03-wood-privacy-backyard.webp",
    featuredImageAlt:
      "Professional fence installation by licensed contractor in Delaware",
    content: `
      <p>Hiring the wrong fence contractor is one of the most expensive mistakes a homeowner can make. You end up with a fence that leans, gaps that grow, posts that rot early — and a company that won't return your calls when something goes wrong.</p>

      <p>We've seen it all. Homeowners call us every month to fix fences installed by unlicensed contractors, Craigslist handymen, and out-of-state crews passing through. The money they "saved" upfront ends up costing double.</p>

      <p>Use this checklist before you hire anyone to install your fence.</p>

      <h2>The Fence Contractor Checklist</h2>

      <h3>1. Verify Licensing</h3>
      <p>Delaware requires contractors to be licensed through the <strong>Division of Revenue</strong>. Any legitimate fence contractor should be able to provide their license number on request.</p>
      <ul>
        <li>Ask for their Delaware business license number</li>
        <li>If they work in Pennsylvania too, verify their PA Home Improvement Contractor (HIC) registration</li>
        <li>Don't accept "we're working on it" or "it's being renewed" — if they're not licensed today, don't hire them today</li>
      </ul>

      <h3>2. Confirm Insurance</h3>
      <p>This is non-negotiable. Your fence contractor must carry:</p>
      <ul>
        <li><strong>General liability insurance:</strong> Protects you if the crew damages your property, your neighbor's property, or underground utilities during installation</li>
        <li><strong>Workers' compensation:</strong> Covers the crew if someone gets injured on your property. Without it, <em>you</em> could be liable for medical bills</li>
      </ul>
      <p>Ask for a <strong>Certificate of Insurance (COI)</strong> — a one-page document from their insurance company. If they can't produce it, walk away.</p>

      <h3>3. Check Reviews and References</h3>
      <ul>
        <li>Look at Google reviews — focus on the <em>negative</em> reviews and how the company responded</li>
        <li>Check Facebook reviews if they have a business page</li>
        <li>Ask for 2–3 references from recent jobs in your area</li>
        <li>Actually call the references. Ask: Was the crew on time? Did they clean up? Would you hire them again?</li>
      </ul>

      <h3>4. Get a Written Estimate (Not a Verbal Quote)</h3>
      <p>A professional contractor provides a written estimate that includes:</p>
      <ul>
        <li><strong>Total linear footage</strong> being installed</li>
        <li><strong>Materials:</strong> Specific type (cedar, pressure-treated pine, vinyl brand/color, aluminum style)</li>
        <li><strong>Fence height and style</strong></li>
        <li><strong>Number and type of gates</strong></li>
        <li><strong>Old fence removal</strong> (if applicable) — as a separate line item</li>
        <li><strong>Post depth and spacing</strong></li>
        <li><strong>Total price</strong> — including labor, materials, and any extras</li>
        <li><strong>Payment terms</strong> — when payment is due, deposit amount, accepted methods</li>
        <li><strong>Timeline</strong> — estimated start date and completion date</li>
        <li><strong>Warranty</strong> — what's covered, for how long</li>
      </ul>
      <p>If someone gives you a price on a napkin or over the phone without measuring, that's not an estimate — that's a guess.</p>

      <h3>5. Ask About Permits</h3>
      <p>A good contractor knows the local permit requirements and can guide you through the process. Ask:</p>
      <ul>
        <li>Does my area require a fence permit?</li>
        <li>Who pulls the permit — me or you?</li>
        <li>Is the permit fee included in the estimate?</li>
      </ul>
      <p>If the contractor says "you don't need a permit" without asking where you live, that's a red flag. Permit requirements vary by municipality — anyone who gives a blanket answer isn't doing their homework. Read our <a href="/blog/do-i-need-a-permit-for-a-fence-in-delaware">Delaware fence permit guide</a> so you know what's required in your area.</p>

      <h3>6. Understand the Warranty</h3>
      <ul>
        <li>What does the warranty cover? Labor only? Materials only? Both?</li>
        <li>How long does it last?</li>
        <li>What voids the warranty?</li>
        <li>Is it in writing? (Verbal warranties are worthless)</li>
      </ul>

      <h3>7. Watch for Red Flags</h3>
      <p>Walk away if you see any of these:</p>
      <ul>
        <li><strong>Cash-only, no receipt:</strong> Legitimate businesses accept multiple payment methods and provide receipts</li>
        <li><strong>No physical address or website:</strong> They should have an established business presence</li>
        <li><strong>Pressure to sign immediately:</strong> "This price is only good today" is a sales tactic, not a business practice</li>
        <li><strong>Huge deposit upfront:</strong> A reasonable deposit is 10–30%. Asking for 50%+ before starting is risky</li>
        <li><strong>No contract or agreement:</strong> Everything should be in writing before work begins</li>
        <li><strong>Can't show previous work:</strong> Any established contractor has a portfolio of completed projects</li>
        <li><strong>Won't discuss the timeline:</strong> You deserve a clear start date and estimated completion date</li>
      </ul>

      <h2>What to Expect From a Professional Fence Company</h2>
      <p>Here's what a professional fence installation looks like from start to finish:</p>
      <ol>
        <li><strong>Free on-site estimate</strong> — not a phone quote, but an in-person visit where the contractor measures your property and discusses options</li>
        <li><strong>Written proposal</strong> — a detailed, itemized estimate you can review at home</li>
        <li><strong>Permit guidance</strong> — help navigating local permit requirements</li>
        <li><strong>Scheduled start date</strong> — a commitment, not "we'll get to you when we can"</li>
        <li><strong>Professional installation</strong> — a crew that shows up on time, treats your property with respect, and builds to code</li>
        <li><strong>Cleanup</strong> — all debris, old materials, and packaging removed from your property</li>
        <li><strong>Final walkthrough</strong> — a review of the finished fence with the homeowner before final payment</li>
        <li><strong>Written warranty</strong> — your protection after the crew leaves</li>
      </ol>

      <p>For more on what the installation process looks like, read our guide: <a href="/blog/fence-installation-timeline-what-to-expect">Fence Installation Timeline — What to Expect</a>.</p>

      <h2>Why Delaware Homeowners Choose TWO MEN</h2>
      <p><strong>TWO MEN Fence & Construction</strong> checks every box on this list — and has for over 18 years. We're licensed, insured, and the owners (Oscar and Anna) are involved in every project.</p>

      <ul>
        <li>Licensed in Delaware and Pennsylvania</li>
        <li>Fully insured — liability and workers' comp</li>
        <li>5-star Google reviews from real customers</li>
        <li>Written estimates with itemized pricing</li>
        <li>Satisfaction guaranteed on every job</li>
      </ul>

      <p>Browse our <a href="/services/wood-fencing">wood</a>, <a href="/services/vinyl-fencing">vinyl</a>, <a href="/services/aluminum-fencing">aluminum</a>, and <a href="/services/chain-link-fencing">chain link</a> fencing options, or <a href="/contact">contact us</a> for a free estimate.</p>

      <p><strong>Call Oscar at (610) 212-7123 or Anna at (302) 803-0790</strong> to schedule your free consultation.</p>
    `,
  },
  {
    slug: "fence-installation-timeline-what-to-expect",
    title: "Fence Installation Timeline — What to Expect",
    description:
      "A week-by-week timeline of fence installation in Delaware — from the first estimate through permit, materials, build day, and final walkthrough.",
    date: "2026-04-08",
    author: "TWO MEN Fence & Construction",
    category: "How It Works",
    featuredImage: "/img/gallery/gallery-01-cedar-privacy-fence.webp",
    featuredImageAlt:
      "Cedar privacy fence installation in progress in Delaware",
    content: `
      <p>One of the most common questions we hear is: <strong>"How long does it take to get a fence installed?"</strong> The honest answer depends on your specific situation — but most residential fence projects in Delaware take <strong>2 to 4 weeks from first call to finished fence.</strong></p>

      <p>Here's what the timeline actually looks like, step by step.</p>

      <h2>Week 1: Estimate and Planning</h2>

      <h3>Day 1–3: Schedule Your Free Estimate</h3>
      <p>Call us or <a href="/contact">fill out our contact form</a> and we'll schedule a time to visit your property. In most cases, we can come out within a few days. During the visit, we'll:</p>
      <ul>
        <li>Measure your property and discuss fence placement</li>
        <li>Talk through material options — <a href="/services/wood-fencing">wood</a>, <a href="/services/vinyl-fencing">vinyl</a>, <a href="/services/aluminum-fencing">aluminum</a>, or <a href="/services/chain-link-fencing">chain link</a></li>
        <li>Identify any challenges (slopes, tree roots, rocky soil, tight access)</li>
        <li>Discuss <a href="/services/gate-installation">gate options</a> — walk-through, driveway, double gates</li>
        <li>Answer your questions about permits, HOA rules, and timelines</li>
      </ul>

      <h3>Day 3–5: Receive Your Written Estimate</h3>
      <p>After the site visit, we'll provide a written estimate with itemized pricing — materials, labor, gates, old fence removal (if needed), and any extras. No hidden fees. You review it at home on your own time — no pressure.</p>

      <h2>Week 1–2: Permits and Preparation</h2>

      <h3>Permit Application</h3>
      <p>If your municipality requires a fence permit (most areas in New Castle County do), we'll guide you through the application process. Typical permit timelines:</p>
      <ul>
        <li><strong>New Castle County:</strong> 1–2 weeks for approval</li>
        <li><strong>City of Wilmington:</strong> 1–2 weeks (longer for historic districts)</li>
        <li><strong>City of Newark:</strong> 1–2 weeks</li>
        <li><strong>Kent County / Dover:</strong> 1–2 weeks</li>
        <li><strong>Sussex County:</strong> Often faster — some unincorporated areas may not require a permit</li>
      </ul>
      <p>For a full breakdown, read our <a href="/blog/do-i-need-a-permit-for-a-fence-in-delaware">Delaware fence permit guide</a>.</p>

      <p>If you live in an HOA community, you'll also need Architectural Review Board approval. That adds 2–6 weeks depending on the community — so <strong>submit your HOA application as early as possible.</strong> See our <a href="/blog/hoa-fence-rules-new-castle-county-delaware">HOA fence rules guide</a> for details.</p>

      <h3>Property Survey</h3>
      <p>If you don't have a recent survey showing your property boundaries, we strongly recommend getting one before the fence goes in. A boundary survey costs $300–$800 and prevents expensive disputes later. If you have an existing survey, we'll use it to confirm fence placement.</p>

      <h3>Utility Marking (Miss Utility / PA One Call)</h3>
      <p>Before we dig post holes, underground utilities must be marked. We call <strong>Miss Utility (Delaware)</strong> or <strong>PA One Call (Pennsylvania)</strong> to schedule a marking. This is required by law and typically takes 2–3 business days.</p>

      <h2>Week 2–3: Materials and Scheduling</h2>

      <h3>Material Ordering</h3>
      <p>Once you approve the estimate and the permit is in process, we order materials. Standard materials (pressure-treated pine, common vinyl colors, standard chain link) are usually in stock. Custom orders (specific cedar grades, specialty vinyl colors, tall aluminum panels) may add a few days.</p>

      <h3>Installation Scheduling</h3>
      <p>We'll schedule your installation date based on material availability, permit status, and weather. During busy season (spring and summer), our schedule books out faster — <strong>early booking gets you an earlier installation date.</strong></p>

      <h2>Week 3–4: Installation Day(s)</h2>
      <p>This is the part most people are curious about. Here's what happens on build day:</p>

      <h3>How Long Does Installation Take?</h3>
      <ul>
        <li><strong>Small yard (under 150 linear feet):</strong> Usually 1 day</li>
        <li><strong>Average yard (150–300 linear feet):</strong> 1–2 days</li>
        <li><strong>Large property (300+ linear feet):</strong> 2–3 days</li>
        <li><strong>Old fence removal:</strong> Adds half a day to a full day depending on the size and material</li>
      </ul>

      <h3>What to Expect on Build Day</h3>
      <ol>
        <li><strong>Crew arrives early.</strong> Our crews typically arrive between 7:00–8:00 AM. We'll confirm the schedule with you in advance</li>
        <li><strong>Layout and marking.</strong> We mark the fence line and post locations with spray paint or stakes so you can see exactly where everything goes before we dig</li>
        <li><strong>Post holes.</strong> We dig post holes using a power auger. Posts are set in concrete for maximum stability. In Delaware's clay-heavy soil, this step can take a bit longer</li>
        <li><strong>Concrete cure time.</strong> Posts need time to set. Depending on the method, we may continue framing the same day or return the next morning</li>
        <li><strong>Rail and panel installation.</strong> Rails, boards, or panels go up once the posts are secure. This is the fastest part of the job</li>
        <li><strong>Gates.</strong> <a href="/services/gate-installation">Gates are installed</a> last — hung, leveled, and adjusted for smooth operation</li>
        <li><strong>Cleanup.</strong> We remove all debris, packaging, old fence materials (if we did removal), and leave your yard clean</li>
        <li><strong>Final walkthrough.</strong> We walk the fence with you to make sure everything looks right and you're satisfied</li>
      </ol>

      <h2>After Installation</h2>

      <h3>Wood Fence Care</h3>
      <p>If you chose a <a href="/services/wood-fencing">wood fence</a>, wait 2–4 weeks before applying stain or sealant. The wood needs time to dry and acclimate to the environment. After that, stain or seal every 2–3 years to maximize the fence's lifespan.</p>

      <h3>Vinyl and Aluminum</h3>
      <p><a href="/services/vinyl-fencing">Vinyl</a> and <a href="/services/aluminum-fencing">aluminum</a> fences require virtually no maintenance. An occasional rinse with a garden hose keeps them looking new.</p>

      <h3>Warranty</h3>
      <p>Your fence is backed by our satisfaction guarantee and warranty. If something isn't right, call us and we'll make it right.</p>

      <h2>What Can Delay Your Timeline?</h2>
      <p>Some things are outside anyone's control:</p>
      <ul>
        <li><strong>Weather:</strong> Heavy rain, frozen ground, or extreme heat can delay installation by a day or two</li>
        <li><strong>Permit delays:</strong> Some municipalities take longer than expected, especially during busy building season</li>
        <li><strong>HOA approval:</strong> ARB reviews can take 2–6 weeks. Submit early</li>
        <li><strong>Material availability:</strong> Custom orders or supply chain issues can add time. We'll communicate any delays immediately</li>
        <li><strong>Utility conflicts:</strong> If Miss Utility marks underground lines in your fence path, we may need to adjust the layout</li>
      </ul>

      <h2>Ready to Start Your Timeline?</h2>
      <p>The sooner you call, the sooner your fence goes up. Spring and summer are our busiest seasons — homeowners who book early get the best scheduling options.</p>

      <p><a href="/contact">Request your free estimate</a> or <a href="/book">book online</a> and we'll get the process started.</p>

      <p><strong>Call Oscar at (610) 212-7123 or Anna at (302) 803-0790</strong> to schedule your free on-site estimate today.</p>
    `,
  },
  {
    slug: "cedar-vs-composite-deck-which-is-better-for-delaware",
    title: "Cedar vs Composite Deck — Which Is Better for Delaware?",
    description:
      "Comparing cedar and composite decking for Delaware homeowners — cost, maintenance, lifespan, appearance, and which material makes the most sense for your property.",
    date: "2026-04-08",
    author: "TWO MEN Fence & Construction",
    category: "Buying Guides",
    featuredImage: "/img/gallery/gallery-03-wood-privacy-backyard.webp",
    featuredImageAlt:
      "Custom deck and fence project in Delaware by TWO MEN",
    content: `
      <p>If you're planning a <a href="/services/deck-building">new deck</a> in Delaware, the biggest decision you'll face is the material: <strong>natural cedar or composite decking?</strong> Both are popular choices, and both have real advantages — but they're very different in terms of cost, maintenance, longevity, and the experience of using them day to day.</p>

      <p>Here's an honest comparison based on what we see from building decks across New Castle County and the surrounding area.</p>

      <h2>Cost Comparison</h2>
      <p>Cost is usually the first question — and it's where cedar has a clear advantage upfront.</p>

      <table>
        <thead>
          <tr><th>Material</th><th>Cost Per Sq Ft (Installed)</th><th>200 Sq Ft Deck Estimate</th></tr>
        </thead>
        <tbody>
          <tr><td>Cedar</td><td>$25 – $40</td><td>$5,000 – $8,000</td></tr>
          <tr><td>Composite (mid-range)</td><td>$35 – $55</td><td>$7,000 – $11,000</td></tr>
          <tr><td>Composite (premium)</td><td>$50 – $75</td><td>$10,000 – $15,000</td></tr>
        </tbody>
      </table>

      <p><strong>Cedar costs 30–50% less upfront.</strong> But like the <a href="/blog/wood-vs-vinyl-fence-which-is-right-for-you">wood vs. vinyl fence comparison</a>, the lifetime cost is a different story. Cedar needs regular maintenance that adds up over the years.</p>

      <h2>Maintenance</h2>
      <p>This is where the two materials diverge the most — and it's often the deciding factor for Delaware homeowners.</p>

      <h3>Cedar Maintenance</h3>
      <ul>
        <li><strong>Staining/sealing:</strong> Every 1–2 years to maintain color and protect against moisture</li>
        <li><strong>Power washing:</strong> Annually to prevent mildew and algae (Delaware's humidity accelerates this)</li>
        <li><strong>Board inspection:</strong> Check for warping, splitting, or soft spots annually</li>
        <li><strong>Board replacement:</strong> Individual boards can be replaced as needed</li>
        <li><strong>Cost:</strong> Expect to spend $1–$3 per square foot every 1–2 years on stain/seal — that's $200–$600 per treatment for a 200 sq ft deck</li>
      </ul>

      <h3>Composite Maintenance</h3>
      <ul>
        <li><strong>Cleaning:</strong> Rinse with a hose or light power wash once or twice a year</li>
        <li><strong>Staining:</strong> Never. Composite doesn't need staining or sealing</li>
        <li><strong>Mildew:</strong> Modern composite boards resist mold and mildew, though shaded areas may need occasional cleaning</li>
        <li><strong>Cost:</strong> Essentially $0 beyond a garden hose</li>
      </ul>

      <p>Over 20 years, maintenance costs for cedar can add $4,000–$12,000 to the original build cost. That often closes or reverses the upfront price gap with composite.</p>

      <h2>Durability and Lifespan</h2>
      <p>Delaware's climate — hot summers, wet springs, occasional nor'easters — tests every outdoor material.</p>

      <h3>Cedar</h3>
      <ul>
        <li>Naturally resistant to rot, insects, and decay</li>
        <li>Lifespan: <strong>15–25 years</strong> with consistent maintenance</li>
        <li>Without maintenance, cedar deteriorates faster — warping, graying, and soft spots develop within 3–5 years</li>
        <li>Delaware's humidity is harder on wood than drier climates</li>
      </ul>

      <h3>Composite</h3>
      <ul>
        <li>Made from a blend of wood fibers and recycled plastic — won't rot, warp, split, or attract insects</li>
        <li>Lifespan: <strong>25–50 years</strong> depending on the brand and quality</li>
        <li>Most premium brands include a 25-year structural warranty</li>
        <li>Handles Delaware's moisture and freeze-thaw cycles without degradation</li>
      </ul>

      <h2>Appearance and Feel</h2>
      <p>This is where personal preference matters most.</p>

      <p><strong>Cedar</strong> has a warm, natural look that many homeowners love. The grain patterns, the scent of fresh cedar, and the feel of real wood underfoot are hard to replicate. You can stain it any color, and it ages gracefully into a silver-gray if left natural. The downside: maintaining that fresh-cedar look requires regular work.</p>

      <p><strong>Composite</strong> has improved dramatically in recent years. Modern composite boards come in realistic wood-grain textures and a range of earth-tone colors. High-end brands like Trex, TimberTech, and Fiberon are nearly indistinguishable from real wood at a glance. The downside: composite gets hotter underfoot in direct sun than natural wood.</p>

      <h2>Environmental Impact</h2>
      <ul>
        <li><strong>Cedar</strong> is a natural, renewable resource — but it requires harvesting mature trees and needs chemical stains/sealants over its life</li>
        <li><strong>Composite</strong> is made from recycled materials (wood scraps and plastic) — keeping waste out of landfills. It requires no chemical treatments after installation</li>
      </ul>

      <h2>Resale Value</h2>
      <p>Both materials add value to your home. According to national remodeling data:</p>
      <ul>
        <li>A composite deck recoups roughly <strong>60–70%</strong> of its cost at resale</li>
        <li>A wood deck recoups roughly <strong>55–65%</strong> of its cost — but only if it's been well maintained</li>
      </ul>
      <p>A neglected wood deck actually <em>hurts</em> resale value. If you're not committed to ongoing maintenance, composite is the safer investment.</p>

      <h2>Our Recommendation</h2>
      <p><strong>Choose cedar if:</strong> You love the look and feel of natural wood, you're on a tighter budget, and you're willing to invest time in annual maintenance. Cedar is also a great choice for smaller decks where maintenance is quick and easy.</p>

      <p><strong>Choose composite if:</strong> You want a low-maintenance outdoor living space, you're planning to stay in your home long-term, or you want a deck that looks the same in 15 years as it does today. Composite is the better long-term investment for most Delaware homeowners.</p>

      <h2>Pair Your Deck With a New Fence</h2>
      <p>Building a deck? Many of our customers add a <a href="/services/wood-fencing">wood fence</a> or <a href="/services/vinyl-fencing">vinyl fence</a> at the same time to create a complete backyard living space. Bundling projects saves on mobilization costs and gets everything done in one visit.</p>

      <p>Need <a href="/services/tree-trimming">tree trimming</a> to clear space for your new deck? We handle that too.</p>

      <h2>Get a Free Deck Estimate</h2>
      <p>Not sure which material is right for your property? We'll give you quotes for both cedar and composite so you can compare real numbers for your specific deck size and layout.</p>

      <p><a href="/contact">Request your free estimate</a> or <a href="/book">book your consultation online</a>.</p>

      <p><strong>Call Oscar at (610) 212-7123 or Anna at (302) 803-0790</strong> to schedule your free deck consultation today.</p>
    `,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit = 2): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.slug !== currentSlug).slice(0, limit);
}
