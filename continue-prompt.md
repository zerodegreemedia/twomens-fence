## Continue From Previous Session

**Task:** Build TWOMENS Fence & Construction website (client of Zero Degree Media)
**Repo:** github.com/zerodegreemedia/twomens-fence
**Stack:** Vite 8 + React 18 + TypeScript + Tailwind CSS v4 + shadcn/ui (base-ui) + Framer Motion + react-router-dom + react-helmet-async
**Location:** /c/Users/Pixel/Desktop/Claude Cowork/ZeroDegree Media/Clients/Two Mens Fence/twomens-fence

**Status:** Site is ~93% complete. All pages built, real images wired, logo integrated, SEO layer done, prerendering working.

**Completed:**
- 22-page site with full content, animations, SEO meta tags, JSON-LD schema
- Pages: Home, About, Services (hub + 4 detail: Wood/Vinyl/Aluminum/Chain Link), Gallery (filterable 20 real photos), FAQ (accordion 12 Q&As), Contact, 11 dynamic service area pages, Privacy, Terms, Sitemap, 404
- Design system: forest green / sage / amber-gold tokens, DM Sans typography
- Client SVG logo → 5 variants created: full-color, all-white, all-black, icon-only-color, icon-only-white at /img/logo/
- Logo wired into Header (white), Footer (white), favicon (color icon)
- 127 client photos → 61 selected → converted to WebP via sharp (42.7 MB saved, avg 65% smaller)
- Images organized: /img/hero/, /img/services/, /img/gallery/, /img/crew/, /img/commercial/
- Real images on: Home hero bg, gallery preview, Gallery page (filter tabs), Services overview cards, all 4 service page heroes, About crew photo
- Prerendering via Puppeteer (scripts/prerender.mjs) — 24 routes → static HTML
- SEO: robots.txt, sitemap.xml, FAQPage schema, BreadcrumbList schema, Organization schema, Service schema, LocalBusiness schema
- Title tags <60 chars, meta descriptions <155 chars, canonical URLs, OG/Twitter tags, og-image.webp
- Button uses @base-ui/react (no asChild) — use buttonVariants() + cn() for Link/a elements
- Build: `npm run build` = tsc → vite build → prerender

**Remaining (approved by user, not yet built):**
1. **Formspree integration** — ContactForm at src/components/shared/ContactForm.tsx currently logs to console. Wire to Formspree POST endpoint. User needs to create form and provide ID.
2. **Sticky mobile CTA bar** — Fixed bottom bar on mobile: "Get Your Free Estimate →" always visible. Link to /contact.
3. **Thank you page** — /thank-you route after form submit. Confirmation, "what happens next" steps, phone backup, tracking pixel support. Add to App.tsx routes.
4. **Fence Repair page** — /services/fence-repair. Same template as WoodFencing.tsx (hero+bg image, benefits, styles/options, FAQ accordion, bottom form). High-intent keyword.
5. **Gate Installation page** — /services/gate-installation. Same template.
6. **Exit-intent form modal** — Scroll 60%+ triggers slide-up prompt. Once per session, dismissable. sessionStorage flag.
7. **Swap placeholder contact info** — (302) 555-0180 and info@twomensfence.com in src/lib/constants.ts COMPANY object are PLACEHOLDERS.
8. **Deploy** to hosting.
9. **Google Search Console** — submit sitemap.xml after deploy.

**Key files:**
- `src/lib/constants.ts` — COMPANY, NAV_LINKS, SERVICES, SERVICE_AREAS, LOCAL_BUSINESS_SCHEMA
- `src/lib/images.ts` — Auto-generated image manifest (regenerate: `node scripts/process-images.mjs`)
- `src/components/shared/ContactForm.tsx` — 2-step form, logs to console
- `src/components/layout/Header.tsx` — Sticky nav with logo SVG, mobile Sheet
- `src/components/layout/Footer.tsx` — Pre-CTA band, 4-col footer with logo SVG
- `src/components/shared/CTAButton.tsx` — Uses buttonVariants() not Button asChild
- `src/App.tsx` — All routes with lazy loading
- `scripts/prerender.mjs` — Puppeteer postbuild prerender for 24 routes
- `scripts/process-images.mjs` — Sharp JPG→WebP converter
- `public/img/logo/` — 5 logo variants (full-color, white, black, icon-color, icon-white)

**Next step:** Build items 1-6 from remaining list. Start with Formspree + sticky mobile CTA + thank you page, then fence repair + gate installation pages, then exit-intent modal.

Please read this file and the key files listed above, then continue building.
