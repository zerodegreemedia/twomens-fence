/**
 * Image processing script for TWOMENS Fence website
 * - Converts all JPGs to WebP (80% quality)
 * - Renames with SEO-friendly names
 * - Organizes into categorized folders
 * - Generates an image manifest for the site
 */
import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "public/images");
const DEST = path.join(ROOT, "public/img");

// ──────────────────────────────────────────────
// IMAGE CATEGORIZATION
// Based on visual review of all 127 images
// ──────────────────────────────────────────────

const IMAGE_MAP = {
  // ═══ HERO IMAGES (best wide/landscape shots for hero backgrounds) ═══
  hero: [
    { src: "7219075925793801452.jpg", name: "hero-cedar-privacy-fence-twomens-crew", alt: "TWOMENS crew member inspecting tall cedar privacy fence installation in Delaware" },
    { src: "1213496465129788900.jpg", name: "hero-aluminum-ornamental-fence-green-lawn", alt: "Black aluminum ornamental fence installation on lush green property in Delaware" },
    { src: "4356925715202470799.jpg", name: "hero-chain-link-fence-installation-field", alt: "TWOMENS crew installing galvanized chain link fence on large commercial property" },
    { src: "3448552490744273331.jpg", name: "hero-vinyl-privacy-fence-long-run", alt: "Long run of white vinyl privacy fence installation with blue sky in Delaware" },
  ],

  // ═══ OG IMAGE (social sharing) ═══
  og: [
    { src: "7219075925793801452.jpg", name: "og-image", alt: "TWOMENS Fence & Construction — professional fence installation in Delaware" },
  ],

  // ═══ WOOD FENCE PROJECTS ═══
  wood: [
    { src: "7219075925793801452.jpg", name: "wood-cedar-privacy-fence-tall", alt: "Tall cedar privacy fence installation by TWOMENS Fence in Delaware" },
    { src: "6507458058882885325.jpg", name: "wood-privacy-fence-with-gate", alt: "Pressure-treated wood privacy fence with gate installation in residential backyard" },
    { src: "562288724756616722.jpg", name: "wood-privacy-fence-backyard", alt: "New wood privacy fence installed along residential backyard property line" },
    { src: "8774008406157118005.jpg", name: "wood-porch-railing-front", alt: "Custom wood porch railing installation on residential front porch" },
    { src: "6401256356823858652.jpg", name: "wood-porch-railing-complete", alt: "Completed wood porch railing with wood privacy fence in background" },
    { src: "3600198914167457107.jpg", name: "wood-porch-railing-crew-working", alt: "TWOMENS crew installing custom wood porch railing on Delaware home" },
    { src: "5488201957738622866.jpg", name: "wood-porch-railing-crew-action", alt: "Fence installation crew building wood railing on residential porch" },
  ],

  // ═══ VINYL FENCE PROJECTS ═══
  vinyl: [
    { src: "3448552490744273331.jpg", name: "vinyl-white-privacy-fence-long", alt: "Long white vinyl privacy fence installation on open property in Delaware" },
    { src: "224739108043400563.jpg", name: "vinyl-white-privacy-fence-residential", alt: "White vinyl privacy fence installed along residential property line" },
    { src: "1152951830025017509.jpg", name: "vinyl-white-privacy-fence-house", alt: "White vinyl privacy fence installation alongside Delaware home" },
    { src: "1086276730035716279.jpg", name: "vinyl-white-picket-fence-house", alt: "White vinyl picket fence installation around residential property with yard" },
    { src: "666705480764547225.jpg", name: "vinyl-fence-materials-prep", alt: "Vinyl fence materials being prepared for installation on job site" },
  ],

  // ═══ CHAIN LINK FENCE PROJECTS ═══
  chainlink: [
    { src: "4356925715202470799.jpg", name: "chainlink-galvanized-crew-install", alt: "Crew installing galvanized chain link fence on large property in Delaware" },
    { src: "4894515508852316654.jpg", name: "chainlink-black-vinyl-coated-commercial", alt: "Black vinyl-coated chain link fence with materials staged for commercial installation" },
    { src: "5629965034812446670.jpg", name: "chainlink-black-commercial-sports", alt: "Black chain link fence installation at commercial sports facility in Delaware" },
    { src: "1133974889572732127.jpg", name: "chainlink-black-vinyl-coated-long", alt: "Long run of black vinyl-coated chain link fence around commercial property" },
    { src: "7572893635724183403.jpg", name: "chainlink-black-winter-snow", alt: "Black vinyl-coated chain link fence installation in winter conditions" },
    { src: "5503358196609049198.jpg", name: "chainlink-commercial-fence-property", alt: "Commercial chain link fence with barbed wire on business property" },
    { src: "913203073037774360.jpg", name: "chainlink-posts-setting", alt: "Metal fence posts being set for chain link fence installation" },
    { src: "3340101701489341477.jpg", name: "chainlink-galvanized-field-long", alt: "Galvanized chain link fence stretching across large open field" },
  ],

  // ═══ ALUMINUM / ORNAMENTAL FENCE PROJECTS ═══
  aluminum: [
    { src: "4861444425216285696.jpg", name: "aluminum-black-ornamental-spear-top", alt: "Black aluminum ornamental spear top fence installation in Delaware" },
    { src: "1213496465129788900.jpg", name: "aluminum-ornamental-fence-landscape", alt: "Black aluminum ornamental fence on beautifully landscaped property" },
    { src: "989640492833327377.jpg", name: "aluminum-black-fence-posts-install", alt: "Black aluminum fence posts being installed with equipment on site" },
  ],

  // ═══ COMMERCIAL / DUMPSTER ENCLOSURE PROJECTS ═══
  commercial: [
    { src: "3317188126782189646.jpg", name: "commercial-dumpster-enclosure-chainlink", alt: "Commercial chain link dumpster enclosure installation in parking lot" },
    { src: "6823152521563684015.jpg", name: "commercial-dumpster-enclosure-winter", alt: "Commercial chain link enclosure installed at business property in winter" },
    { src: "195527111802850561.jpg", name: "commercial-chainlink-enclosure-nighttime", alt: "Completed commercial chain link enclosure at night" },
    { src: "4631260795907971000.jpg", name: "commercial-fence-posts-concrete", alt: "Commercial fence post installation with concrete footings along building" },
    { src: "8624906970442287421.jpg", name: "commercial-fence-posts-alley", alt: "Commercial fence post setting in alley with concrete base" },
    { src: "199305005927435005.jpg", name: "commercial-posts-bracing-alley", alt: "Commercial fence posts with bracing along brick building" },
    { src: "840109252383107774.jpg", name: "commercial-post-install-ladder", alt: "Commercial fence post installation with work truck and equipment" },
  ],

  // ═══ CREW / TEAM AT WORK ═══
  crew: [
    { src: "7767757755632986920.jpg", name: "crew-digging-post-holes", alt: "TWOMENS fence crew digging post holes for new fence installation" },
    { src: "3600198914167457107.jpg", name: "crew-building-porch-railing", alt: "TWOMENS construction crew building custom porch railing" },
    { src: "5488201957738622866.jpg", name: "crew-working-railing", alt: "Two crew members working together on porch railing installation" },
    { src: "1244428628869672127.jpg", name: "crew-deck-demolition", alt: "TWOMENS crew performing deck demolition and removal" },
  ],

  // ═══ GALLERY — ALL BEST FINISHED PROJECT PHOTOS ═══
  gallery: [
    // Wood projects
    { src: "7219075925793801452.jpg", name: "gallery-01-cedar-privacy-fence", alt: "Cedar privacy fence installation by TWOMENS Fence in Delaware", type: "Wood" },
    { src: "6507458058882885325.jpg", name: "gallery-02-wood-fence-with-gate", alt: "Wood privacy fence with custom gate installation", type: "Wood" },
    { src: "562288724756616722.jpg", name: "gallery-03-wood-privacy-backyard", alt: "Wood privacy fence along residential backyard property", type: "Wood" },
    { src: "6401256356823858652.jpg", name: "gallery-04-porch-railing-complete", alt: "Custom wood porch railing with fence in background", type: "Wood" },
    { src: "8774008406157118005.jpg", name: "gallery-05-porch-railing-front", alt: "Wood porch railing installation on Delaware home", type: "Wood" },
    // Vinyl projects
    { src: "3448552490744273331.jpg", name: "gallery-06-vinyl-privacy-long", alt: "White vinyl privacy fence long installation run", type: "Vinyl" },
    { src: "224739108043400563.jpg", name: "gallery-07-vinyl-privacy-residential", alt: "White vinyl privacy fence on residential property", type: "Vinyl" },
    { src: "1152951830025017509.jpg", name: "gallery-08-vinyl-privacy-house", alt: "Vinyl privacy fence alongside Delaware home", type: "Vinyl" },
    { src: "1086276730035716279.jpg", name: "gallery-09-vinyl-picket-house", alt: "White vinyl picket fence around residential yard", type: "Vinyl" },
    // Chain link projects
    { src: "5629965034812446670.jpg", name: "gallery-10-chainlink-commercial-sports", alt: "Black chain link fence at sports facility", type: "Chain Link" },
    { src: "1133974889572732127.jpg", name: "gallery-11-chainlink-black-commercial", alt: "Black vinyl-coated chain link fence commercial installation", type: "Chain Link" },
    { src: "4356925715202470799.jpg", name: "gallery-12-chainlink-galvanized-field", alt: "Galvanized chain link fence installation on large property", type: "Chain Link" },
    { src: "7572893635724183403.jpg", name: "gallery-13-chainlink-winter", alt: "Chain link fence in winter conditions", type: "Chain Link" },
    // Aluminum projects
    { src: "4861444425216285696.jpg", name: "gallery-14-aluminum-ornamental", alt: "Black aluminum ornamental spear top fence", type: "Aluminum" },
    { src: "1213496465129788900.jpg", name: "gallery-15-aluminum-landscape", alt: "Aluminum ornamental fence on landscaped property", type: "Aluminum" },
    // Commercial
    { src: "3317188126782189646.jpg", name: "gallery-16-commercial-enclosure", alt: "Commercial dumpster enclosure installation", type: "Chain Link" },
    { src: "6823152521563684015.jpg", name: "gallery-17-commercial-enclosure-winter", alt: "Commercial chain link enclosure at business", type: "Chain Link" },
    { src: "195527111802850561.jpg", name: "gallery-18-commercial-enclosure-night", alt: "Completed commercial enclosure at night", type: "Chain Link" },
    // Crew at work
    { src: "3600198914167457107.jpg", name: "gallery-19-crew-building-railing", alt: "TWOMENS crew building custom porch railing", type: "Wood" },
    { src: "7767757755632986920.jpg", name: "gallery-20-crew-digging-posts", alt: "Crew setting post holes for fence installation", type: "Wood" },
  ],
};

// ──────────────────────────────────────────────
// PROCESSING
// ──────────────────────────────────────────────

async function processImages() {
  // Create output directories
  const dirs = ["hero", "services", "gallery", "crew", "commercial"];
  for (const dir of dirs) {
    fs.mkdirSync(path.join(DEST, dir), { recursive: true });
  }

  const manifest = {};
  let totalSaved = 0;
  let processed = 0;
  let deduped = 0;

  // Track already-processed source files → their webp path (keyed by "src+width")
  const processedSources = new Map();

  // Process each category
  for (const [category, images] of Object.entries(IMAGE_MAP)) {
    manifest[category] = [];

    for (const img of images) {
      const srcPath = path.join(SRC, img.src);
      if (!fs.existsSync(srcPath)) {
        console.warn(`  [SKIP] ${img.src} not found`);
        continue;
      }

      // Determine resize width based on category
      let width;
      if (category === "hero" || category === "og") width = 1920;
      else width = 1200;

      // Dedup key: same source file produces identical output
      // (withoutEnlargement means smaller sources won't upscale regardless of target width)
      const dedupKey = img.src;

      if (processedSources.has(dedupKey)) {
        // Reuse the already-converted webp path instead of creating a duplicate
        const existingPath = processedSources.get(dedupKey);
        manifest[category].push({
          path: existingPath,
          alt: img.alt,
          name: img.name,
          type: img.type || category,
        });
        deduped++;
        console.log(`  [DEDUP] ${img.src} → reusing ${existingPath}`);
        continue;
      }

      // Determine output folder
      let folder = category;
      if (["wood", "vinyl", "chainlink", "aluminum"].includes(category)) folder = "services";
      if (category === "og") folder = "";

      const outName = `${img.name}.webp`;
      const outPath = folder
        ? path.join(DEST, folder, outName)
        : path.join(DEST, outName);

      // Get original size
      const originalSize = fs.statSync(srcPath).size;

      try {
        await sharp(srcPath)
          .resize({ width, withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(outPath);

        const newSize = fs.statSync(outPath).size;
        const savings = ((1 - newSize / originalSize) * 100).toFixed(0);
        totalSaved += originalSize - newSize;
        processed++;

        const webPath = folder ? `/img/${folder}/${outName}` : `/img/${outName}`;

        // Register this source+width so future duplicates reuse it
        processedSources.set(dedupKey, webPath);

        manifest[category].push({
          path: webPath,
          alt: img.alt,
          name: img.name,
          type: img.type || category,
          originalKB: Math.round(originalSize / 1024),
          webpKB: Math.round(newSize / 1024),
          savings: `${savings}%`,
        });

        console.log(`  [OK] ${img.src} → ${webPath} (${savings}% smaller)`);
      } catch (err) {
        console.error(`  [ERR] ${img.src}: ${err.message}`);
      }
    }
  }

  // Clean up duplicate webp files that are no longer generated
  cleanupOrphanedWebp(manifest);

  // Write manifest
  const manifestPath = path.join(ROOT, "src/lib/images.ts");
  const tsContent = generateImageTS(manifest);
  fs.writeFileSync(manifestPath, tsContent);

  console.log(`\n[images] Done! ${processed} images converted, ${deduped} duplicates eliminated.`);
  console.log(`[images] Total savings: ${(totalSaved / 1024 / 1024).toFixed(1)} MB`);
  console.log(`[images] Manifest written to src/lib/images.ts`);
}

function cleanupOrphanedWebp(manifest) {
  // Collect all webp paths that are still in use
  const usedPaths = new Set();
  for (const images of Object.values(manifest)) {
    for (const img of images) {
      usedPaths.add(img.path);
    }
  }

  // Scan output directories and remove any webp files not in the manifest
  const dirs = ["hero", "services", "gallery", "crew", "commercial"];
  let removed = 0;
  for (const dir of dirs) {
    const dirPath = path.join(DEST, dir);
    if (!fs.existsSync(dirPath)) continue;
    for (const file of fs.readdirSync(dirPath)) {
      if (!file.endsWith(".webp")) continue;
      const webPath = `/img/${dir}/${file}`;
      if (!usedPaths.has(webPath)) {
        fs.unlinkSync(path.join(dirPath, file));
        console.log(`  [CLEANUP] Removed orphaned ${webPath}`);
        removed++;
      }
    }
  }
  // Also check root-level webp (og-image)
  for (const file of fs.readdirSync(DEST)) {
    if (!file.endsWith(".webp")) continue;
    const webPath = `/img/${file}`;
    if (!usedPaths.has(webPath)) {
      fs.unlinkSync(path.join(DEST, file));
      console.log(`  [CLEANUP] Removed orphaned ${webPath}`);
      removed++;
    }
  }
  if (removed > 0) console.log(`  [CLEANUP] Removed ${removed} orphaned files.`);
}

function generateImageTS(manifest) {
  const heroImages = manifest.hero || [];
  const galleryImages = manifest.gallery || [];
  const woodImages = manifest.wood || [];
  const vinylImages = manifest.vinyl || [];
  const chainlinkImages = manifest.chainlink || [];
  const aluminumImages = manifest.aluminum || [];
  const commercialImages = manifest.commercial || [];
  const crewImages = manifest.crew || [];
  const ogImages = manifest.og || [];

  return `// Auto-generated by scripts/process-images.mjs
// Do not edit manually — re-run: node scripts/process-images.mjs

export interface SiteImage {
  path: string;
  alt: string;
  name: string;
  type?: string;
}

export const HERO_IMAGES: SiteImage[] = ${JSON.stringify(heroImages.map(i => ({ path: i.path, alt: i.alt, name: i.name })), null, 2)};

export const OG_IMAGE = ${JSON.stringify(ogImages[0]?.path || "/img/og-image.webp")};

export const GALLERY_IMAGES: (SiteImage & { type: string })[] = ${JSON.stringify(galleryImages.map(i => ({ path: i.path, alt: i.alt, name: i.name, type: i.type })), null, 2)};

export const SERVICE_IMAGES = {
  wood: ${JSON.stringify(woodImages.map(i => ({ path: i.path, alt: i.alt, name: i.name })), null, 2)},
  vinyl: ${JSON.stringify(vinylImages.map(i => ({ path: i.path, alt: i.alt, name: i.name })), null, 2)},
  chainlink: ${JSON.stringify(chainlinkImages.map(i => ({ path: i.path, alt: i.alt, name: i.name })), null, 2)},
  aluminum: ${JSON.stringify(aluminumImages.map(i => ({ path: i.path, alt: i.alt, name: i.name })), null, 2)},
} as const;

export const COMMERCIAL_IMAGES: SiteImage[] = ${JSON.stringify(commercialImages.map(i => ({ path: i.path, alt: i.alt, name: i.name })), null, 2)};

export const CREW_IMAGES: SiteImage[] = ${JSON.stringify(crewImages.map(i => ({ path: i.path, alt: i.alt, name: i.name })), null, 2)};
`;
}

processImages().catch(console.error);
