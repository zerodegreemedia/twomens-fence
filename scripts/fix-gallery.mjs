/**
 * Fix the GALLERY_IMAGES entries in images.ts
 * Replaces broken ${e.path} template entries with properly categorized gallery data
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesPath = path.join(__dirname, "..", "src", "lib", "images.ts");

const content = fs.readFileSync(imagesPath, "utf-8");

// Gallery entries 21-114 with correct types and alt text from visual categorization
const newEntries = [
  { n: 21, type: "Wood", alt: "Wood deck railing demolition and replacement project" },
  { n: 22, type: "Chain Link", alt: "TWOMENS crew installing chain link fence on commercial property" },
  { n: 23, type: "Chain Link", alt: "Chain link dumpster enclosure at commercial building" },
  { n: 24, type: "Wood", alt: "Pressure-treated wood deck stairs and railing installation" },
  { n: 25, type: "Chain Link", alt: "Chain link dumpster enclosure in commercial parking lot" },
  { n: 26, type: "Chain Link", alt: "Chain link gate installation at commercial building" },
  { n: 27, type: "Chain Link", alt: "Galvanized chain link fence along large property in Delaware" },
  { n: 28, type: "Vinyl", alt: "Vinyl fence posts being set in snowy winter conditions" },
  { n: 29, type: "Vinyl", alt: "Vinyl dumpster enclosure at commercial property" },
  { n: 30, type: "Chain Link", alt: "TWOMENS crew installing chain link fence in parking lot" },
  { n: 31, type: "Wood", alt: "Composite deck build with railing in progress" },
  { n: 32, type: "Chain Link", alt: "Chain link gate near commercial bus depot" },
  { n: 33, type: "Chain Link", alt: "Chain link dumpster enclosure installation" },
  { n: 34, type: "Vinyl", alt: "White vinyl picket fence in residential front yard" },
  { n: 35, type: "Chain Link", alt: "Black vinyl-coated chain link fence in winter" },
  { n: 36, type: "Chain Link", alt: "Chain link fence posts being set in open field" },
  { n: 37, type: "Vinyl", alt: "White vinyl privacy fence installed in backyard" },
  { n: 38, type: "Wood", alt: "Deck footings and foundation preparation" },
  { n: 39, type: "Wood", alt: "Old wood deck before renovation and removal" },
  { n: 40, type: "Wood", alt: "Wood deck demolition in progress by TWOMENS crew" },
  { n: 41, type: "Chain Link", alt: "Galvanized chain link dumpster enclosure with privacy slats" },
  { n: 42, type: "Aluminum", alt: "Black aluminum ornamental fence along sloped residential yard" },
  { n: 43, type: "Chain Link", alt: "Galvanized chain link enclosure panel in commercial parking lot" },
  { n: 44, type: "Chain Link", alt: "Black vinyl-coated chain link fence posts in snowy conditions" },
  { n: 45, type: "Chain Link", alt: "Commercial site preparation along parking lot wall" },
  { n: 46, type: "Chain Link", alt: "Chain link framework being installed at commercial building in winter" },
  { n: 47, type: "Chain Link", alt: "Galvanized chain link fence along overgrown property line" },
  { n: 48, type: "Vinyl", alt: "White vinyl privacy fence installed at beachfront property in Delaware" },
  { n: 49, type: "Vinyl", alt: "White vinyl privacy fence with gate at residential backyard" },
  { n: 50, type: "Vinyl", alt: "White vinyl privacy fence along residential property in winter" },
  { n: 51, type: "Chain Link", alt: "Galvanized chain link dumpster enclosure with privacy slats" },
  { n: 52, type: "Chain Link", alt: "Crew installing chain link dumpster enclosure at commercial property" },
  { n: 53, type: "Chain Link", alt: "Black vinyl-coated chain link fence along snowy property line" },
  { n: 54, type: "Wood", alt: "Elevated pressure-treated wood deck with stairs and railing" },
  { n: 55, type: "Wood", alt: "Composite deck with white vinyl railing nearing completion" },
  { n: 56, type: "Chain Link", alt: "Commercial bollard installation at restaurant parking lot" },
  { n: 57, type: "Chain Link", alt: "Fence posts being set along residential property with pool" },
  { n: 58, type: "Chain Link", alt: "Galvanized chain link dumpster enclosure in commercial lot" },
  { n: 59, type: "Wood", alt: "Deck planner design blueprint for custom deck project" },
  { n: 60, type: "Chain Link", alt: "Galvanized chain link rolling gate at commercial property" },
  { n: 61, type: "Chain Link", alt: "Galvanized chain link fence being installed along rural property" },
  { n: 62, type: "Chain Link", alt: "Commercial fence post installation along brick wall in parking lot" },
  { n: 63, type: "Wood", alt: "Horizontal wood-look composite privacy fence with dark metal posts" },
  { n: 64, type: "Chain Link", alt: "Galvanized chain link dumpster enclosure completed at night in winter" },
  { n: 65, type: "Vinyl", alt: "White vinyl privacy fence being installed along residential property" },
  { n: 66, type: "Chain Link", alt: "Galvanized chain link rolling cantilever gate at commercial lot" },
  { n: 67, type: "Chain Link", alt: "Chain link backstop installation at sports field in Delaware" },
  { n: 68, type: "Chain Link", alt: "Galvanized chain link fence along road and property line" },
  { n: 69, type: "Chain Link", alt: "Post hole being measured for fence installation" },
  { n: 70, type: "Chain Link", alt: "Commercial fence posts installed along brick building wall" },
  { n: 71, type: "Vinyl", alt: "White vinyl privacy fence with gate along side of house" },
  { n: 72, type: "Chain Link", alt: "Galvanized chain link dumpster enclosure with privacy slats in urban lot" },
  { n: 73, type: "Chain Link", alt: "Chain link fence materials staged along commercial building" },
  { n: 74, type: "Wood", alt: "Elevated deck with railing under construction by TWOMENS crew" },
  { n: 75, type: "Aluminum", alt: "Black aluminum ornamental fence on retaining wall at commercial property" },
  { n: 76, type: "Vinyl", alt: "White vinyl privacy fence with gate installed in winter" },
  { n: 77, type: "Chain Link", alt: "Chain link fence installation near wind turbine on rural property" },
  { n: 78, type: "Vinyl", alt: "Crew digging fence line in snow for vinyl fence installation" },
  { n: 79, type: "Vinyl", alt: "White vinyl privacy fence installed along large property" },
  { n: 80, type: "Wood", alt: "Pressure-treated wood privacy fence in residential backyard" },
  { n: 81, type: "Aluminum", alt: "Black aluminum ornamental fence with gate at commercial property" },
  { n: 82, type: "Chain Link", alt: "Galvanized chain link fence along road near historic building" },
  { n: 83, type: "Chain Link", alt: "Fence posts being set at commercial bus depot property" },
  { n: 84, type: "Vinyl", alt: "Vinyl fence posts being set at beachfront property" },
  { n: 85, type: "Vinyl", alt: "Long white vinyl privacy fence along residential property in winter" },
  { n: 86, type: "Chain Link", alt: "Galvanized chain link dumpster enclosure with privacy slats in urban alley" },
  { n: 87, type: "Vinyl", alt: "White vinyl privacy fence with gate between houses with landscaping" },
  { n: 88, type: "Wood", alt: "TWOMENS crew demolishing old wooden deck and stairs" },
  { n: 89, type: "Chain Link", alt: "Black vinyl-coated chain link fence around sports court in new development" },
  { n: 90, type: "Chain Link", alt: "Galvanized chain link dumpster enclosure being installed in winter" },
  { n: 91, type: "Vinyl", alt: "White vinyl privacy fence enclosing large backyard with shed" },
  { n: 92, type: "Chain Link", alt: "Galvanized chain link dumpster enclosure with gates in parking lot" },
  { n: 93, type: "Wood", alt: "Pressure-treated wood deck joists and framing under construction" },
  { n: 94, type: "Chain Link", alt: "Chain link fence framework being installed at commercial lot in winter" },
  { n: 95, type: "Vinyl", alt: "Tan and white vinyl privacy fence along side of residential house" },
  { n: 96, type: "Chain Link", alt: "Crew installing galvanized chain link dumpster enclosure" },
  { n: 97, type: "Wood", alt: "Deck ledger board and ZIP System flashing being installed" },
  { n: 98, type: "Vinyl", alt: "White vinyl dumpster enclosure at school district building" },
  { n: 99, type: "Chain Link", alt: "Chain link backstop being installed at baseball field" },
  { n: 100, type: "Chain Link", alt: "Commercial fence posts being set along building wall" },
  { n: 101, type: "Chain Link", alt: "Black vinyl-coated chain link fence along commercial property" },
  { n: 102, type: "Chain Link", alt: "Black vinyl-coated chain link fence running along snowy hillside" },
  { n: 103, type: "Vinyl", alt: "White vinyl privacy fence with double gate and black hardware" },
  { n: 104, type: "Vinyl", alt: "White vinyl privacy fence installed along backyard in winter" },
  { n: 105, type: "Chain Link", alt: "Green vinyl-coated chain link fence being installed at commercial lot" },
  { n: 106, type: "Vinyl", alt: "White vinyl privacy fence in residential backyard with workers" },
  { n: 107, type: "Wood", alt: "Horizontal wood-look composite privacy fence with dark metal posts" },
  { n: 108, type: "Vinyl", alt: "White vinyl privacy fence along sandy beachfront property" },
  { n: 109, type: "Vinyl", alt: "White vinyl privacy fence enclosing small residential backyard" },
  { n: 110, type: "Vinyl", alt: "White vinyl picket fence around front yard" },
  { n: 111, type: "Vinyl", alt: "White vinyl picket fence transitioning to privacy fence" },
  { n: 112, type: "Wood", alt: "Pressure-treated wood deck frame under construction" },
  { n: 113, type: "Chain Link", alt: "Galvanized chain link dumpster enclosure at commercial property" },
  { n: 114, type: "Chain Link", alt: "Black vinyl-coated chain link fence in snowy conditions" },
];

// Build the new gallery entry strings
const entryStrings = newEntries.map(e => {
  const padded = String(e.n).padStart(2, "0");
  return `  { "path": "/img/gallery/gallery-${padded}-fence-project.webp", "alt": "${e.alt}", "name": "gallery-${padded}-fence-project", "type": "${e.type}" }`;
}).join(",\n");

// Find the gallery-20 entry and everything after it until the closing ];
const marker = `    "type": "Wood"\n  },\n  {\n    "path": "\${e.path}"`;
const gallery20End = content.indexOf('"gallery-20-crew-digging-posts"');
const afterGallery20 = content.indexOf("type", gallery20End + 30);
const typeWoodLine = content.indexOf('"Wood"', afterGallery20);
const closingBracket = content.indexOf("];", typeWoodLine);

// Get everything up to and including gallery-20's closing brace
const lines = content.split("\n");
let gallery20EndLine = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes("gallery-20-crew-digging-posts")) {
    // Find the closing } of this entry (should be 3 lines after the name)
    for (let j = i; j < i + 6; j++) {
      if (lines[j].trim() === "},") {
        gallery20EndLine = j;
        break;
      }
    }
    break;
  }
}

// Find the line with ]; that closes GALLERY_IMAGES
let closingLine = -1;
for (let i = gallery20EndLine + 1; i < lines.length; i++) {
  if (lines[i].trim() === "];") {
    closingLine = i;
    break;
  }
}

if (gallery20EndLine === -1 || closingLine === -1) {
  console.error("Could not find gallery-20 end or closing bracket");
  process.exit(1);
}

// Rebuild the file
const top = lines.slice(0, gallery20EndLine + 1).join("\n");
const bottom = lines.slice(closingLine).join("\n");
const newContent = top + "\n" + entryStrings + "\n" + bottom;

fs.writeFileSync(imagesPath, newContent, "utf-8");
console.log(`[fix-gallery] Updated images.ts with ${newEntries.length} categorized gallery entries (21-114)`);
console.log(`[fix-gallery] File size: ${(newContent.length / 1024).toFixed(1)} KB`);
