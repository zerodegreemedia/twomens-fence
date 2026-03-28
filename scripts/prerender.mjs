/**
 * Prerender script for Two Mens Fence SPA
 *
 * After `vite build` produces dist/, this script:
 * 1. Spins up a static file server pointing at dist/
 * 2. Uses Puppeteer to visit each route
 * 3. Waits for the page to fully render (lazy-loaded chunks included)
 * 4. Saves the resulting HTML into dist/<route>/index.html
 *
 * This gives Google real HTML content instead of an empty <div id="root">.
 */

import { createServer } from "http";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, extname } from "path";
import { fileURLToPath } from "url";
import puppeteer from "puppeteer";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const DIST_DIR = join(__dirname, "..", "dist");
const PORT = 4173;

const ROUTES = [
  "/",
  "/about",
  "/services",
  "/services/wood-fencing",
  "/services/vinyl-fencing",
  "/services/aluminum-fencing",
  "/services/chain-link-fencing",
  "/gallery",
  "/faq",
  "/contact",
  "/privacy",
  "/terms",
  "/sitemap",
  "/service-areas/new-castle-de",
  "/service-areas/wilmington-de",
  "/service-areas/newark-de",
  "/service-areas/bear-de",
  "/service-areas/hockessin-de",
  "/service-areas/middletown-de",
  "/service-areas/smyrna-de",
  "/service-areas/dover-de",
  "/service-areas/west-chester-pa",
  "/service-areas/kennett-square-pa",
  "/service-areas/elkton-md",
];

// Simple MIME type lookup
const MIME_TYPES = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".webp": "image/webp",
};

/**
 * Serve dist/ as a static file server.
 * For any path that doesn't match a real file, serve index.html (SPA fallback).
 */
function startServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let filePath = join(DIST_DIR, req.url === "/" ? "index.html" : req.url);

      // If the path has no extension or the file doesn't exist, serve index.html (SPA fallback)
      if (!extname(filePath) || !existsSync(filePath)) {
        filePath = join(DIST_DIR, "index.html");
      }

      try {
        const content = readFileSync(filePath);
        const ext = extname(filePath);
        res.writeHead(200, { "Content-Type": MIME_TYPES[ext] || "application/octet-stream" });
        res.end(content);
      } catch {
        res.writeHead(404);
        res.end("Not found");
      }
    });

    server.listen(PORT, () => {
      console.log(`[prerender] Static server running on http://localhost:${PORT}`);
      resolve(server);
    });
  });
}

async function prerender() {
  console.log(`[prerender] Starting prerender of ${ROUTES.length} routes...`);

  // 1. Start static server
  const server = await startServer();

  // 2. Launch Puppeteer
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  let successCount = 0;
  let errorCount = 0;

  for (const route of ROUTES) {
    try {
      const page = await browser.newPage();
      const url = `http://localhost:${PORT}${route}`;

      console.log(`[prerender] Rendering: ${route}`);

      await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });

      // Wait a bit extra for any animations/lazy content to settle
      await page.waitForSelector("#root > *", { timeout: 10000 });

      // Force all framer-motion elements to their visible state before capturing
      // This prevents Google from seeing opacity:0 text
      await page.evaluate(() => {
        document.querySelectorAll('[style]').forEach((el) => {
          const style = el.getAttribute('style') || '';
          if (style.includes('opacity: 0') || style.includes('opacity:0')) {
            el.style.opacity = '1';
            el.style.transform = 'none';
          }
        });
      });

      // Get the full rendered HTML
      let html = await page.content();

      // Remove framer-motion inline styles that hide content (opacity:0, transforms)
      // This is a safety net in case the evaluate above missed anything
      html = html.replace(/style="[^"]*opacity:\s*0[^"]*"/g, 'style=""');

      // Add a marker so we know the page was prerendered
      html = html.replace(
        "</head>",
        '  <meta name="prerender-status" content="prerendered">\n  </head>'
      );

      // Determine output path
      const outputDir =
        route === "/"
          ? DIST_DIR
          : join(DIST_DIR, ...route.split("/").filter(Boolean));

      mkdirSync(outputDir, { recursive: true });
      writeFileSync(join(outputDir, "index.html"), html, "utf-8");

      successCount++;
      await page.close();
    } catch (err) {
      console.error(`[prerender] ERROR on ${route}:`, err.message);
      errorCount++;
    }
  }

  await browser.close();
  server.close();

  console.log(
    `\n[prerender] Done! ${successCount} routes prerendered, ${errorCount} errors.`
  );

  if (errorCount > 0) {
    process.exit(1);
  }
}

prerender().catch((err) => {
  console.error("[prerender] Fatal error:", err);
  process.exit(1);
});
