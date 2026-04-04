/**
 * Process remaining unmapped images
 * Converts all JPGs not already in the IMAGE_MAP to WebP
 * and adds them to the gallery as additional photos
 */
import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "public/images");
const DEST = path.join(ROOT, "public/img/gallery");

// Images already mapped in the main process-images.mjs
const ALREADY_MAPPED = new Set([
  "7219075925793801452.jpg","1213496465129788900.jpg","4356925715202470799.jpg","3448552490744273331.jpg",
  "7219075925793801452-1.jpg","6507458058882885325.jpg","562288724756616722.jpg","8774008406157118005.jpg",
  "6401256356823858652.jpg","3600198914167457107.jpg","5488201957738622866.jpg",
  "224739108043400563.jpg","1152951830025017509.jpg","1086276730035716279.jpg","666705480764547225.jpg",
  "4894515508852316654.jpg","5629965034812446670.jpg","1133974889572732127.jpg","7572893635724183403.jpg",
  "5503358196609049198.jpg","913203073037774360.jpg","3340101701489341477.jpg",
  "4861444425216285696.jpg","989640492833327377.jpg",
  "3317188126782189646.jpg","6823152521563684015.jpg","195527111802850561.jpg","4631260795907971000.jpg",
  "8624906970442287421.jpg","199305005927435005.jpg","840109252383107774.jpg",
  "7767757755632986920.jpg","1244428628869672127.jpg",
]);

async function processRemaining() {
  fs.mkdirSync(DEST, { recursive: true });

  const allFiles = fs.readdirSync(SRC)
    .filter(f => f.endsWith(".jpg") && !ALREADY_MAPPED.has(f))
    .sort();

  console.log(`[images] Found ${allFiles.length} unmapped images to process\n`);

  let totalSaved = 0;
  let processed = 0;
  const newGalleryEntries = [];

  // Start numbering after existing gallery images (gallery-20 is the last)
  let galleryIndex = 21;

  for (const file of allFiles) {
    const srcPath = path.join(SRC, file);
    const originalSize = fs.statSync(srcPath).size;

    // Detect orientation to guess content type
    const meta = await sharp(srcPath).metadata();
    const isPortrait = meta.height > meta.width;

    const outName = `gallery-${String(galleryIndex).padStart(2, "0")}-fence-project.webp`;
    const outPath = path.join(DEST, outName);

    try {
      await sharp(srcPath)
        .resize({ width: 1200, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outPath);

      const newSize = fs.statSync(outPath).size;
      const savings = ((1 - newSize / originalSize) * 100).toFixed(0);
      totalSaved += originalSize - newSize;
      processed++;

      newGalleryEntries.push({
        path: `/img/gallery/${outName}`,
        alt: `Fence installation project by TWOMENS Fence in Delaware — photo ${galleryIndex}`,
        name: `gallery-${String(galleryIndex).padStart(2, "0")}-fence-project`,
        type: "All",
        orientation: isPortrait ? "portrait" : "landscape",
      });

      console.log(`  [OK] ${file} → ${outName} (${savings}% smaller, ${isPortrait ? "portrait" : "landscape"})`);
      galleryIndex++;
    } catch (err) {
      console.error(`  [ERR] ${file}: ${err.message}`);
    }
  }

  // Write the new entries as a JSON file for manual review
  const manifestPath = path.join(ROOT, "scripts/new-gallery-entries.json");
  fs.writeFileSync(manifestPath, JSON.stringify(newGalleryEntries, null, 2));

  console.log(`\n[images] Done! ${processed} additional images processed.`);
  console.log(`[images] Total savings: ${(totalSaved / 1024 / 1024).toFixed(1)} MB`);
  console.log(`[images] New entries written to scripts/new-gallery-entries.json`);
  console.log(`[images] Total gallery images: 20 (existing) + ${processed} (new) = ${20 + processed}`);
}

processRemaining().catch(console.error);
