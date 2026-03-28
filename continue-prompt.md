## Continue From Previous Session

**Task:** Build TWOMENS Fence & Construction website (client of Zero Degree Media)
**Repo:** github.com/zerodegreemedia/twomens-fence
**Stack:** Vite 8 + React 18 + TypeScript + Tailwind CSS v4 + shadcn/ui (base-ui) + Framer Motion + react-router-dom + react-helmet-async
**Location:** /c/Users/Pixel/Desktop/Claude Cowork/ZeroDegree Media/Clients/Two Mens Fence/twomens-fence

**Status:** Site is 90% complete. All pages built, images wired, SEO layer done, prerendering working.

**Completed:**
- 22-page site with full content, animations, SEO meta tags, JSON-LD schema
- Pages: Home, About, Services (hub + 4 detail: Wood/Vinyl/Aluminum/Chain Link), Gallery (filterable), FAQ (accordion), Contact, 11 dynamic service area pages, Privacy, Terms, Sitemap, 404
- Design system: forest green (#1a2e1a) / sage (#5a8a5a) / amber-gold (#e8a020) tokens, DM Sans typography
- Shared components: Layout, Header (sticky, mobile sheet), Footer (4-col + pre-CTA), ContactForm (2-step), SEO, SectionHeading, SectionBadge, CTAButton, StatCounter
- 127 client photos → 61 selected → converted to WebP (42.7 MB saved) → organized into /img/hero/, /img/services/, /img/gallery/, /img/crew/, /img/commercial/
- Image manifest at src/lib/images.ts with typed exports (HERO_IMAGES, GALLERY_IMAGES, SERVICE_IMAGES, CREW_IMAGES, etc.)
- Real images wired into: Home hero, Home gallery preview, Gallery page (with filter tabs), Services overview cards, all 4 service page heroes, About page crew photo
- Prerendering via Puppeteer (scripts/prerender.mjs) — 24 routes generate static HTML at build time
- SEO: robots.txt, sitemap.xml, FAQPage schema (FAQ + 4 service pages), BreadcrumbList schema, Organization schema, Service schema, LocalBusiness schema
- Title tags <60 chars, meta descriptions <155 chars, canonical URLs, OG/Twitter tags
- Header always visible (bg-authority), trust badges visible on mobile, ghost CTA improved contrast
- Button component uses @base-ui/react (NOT Radix) — no asChild prop, use buttonVariants() + cn() for Link/a elements
- Build: `npm run build` runs tsc → vite build → prerender (produces dist/ with 24 index.html files)

**Remaining (approved by user, not yet built):**
1. **Formspree integration** — ContactForm currently logs to console. Need to wire to Formspree endpoint (POST to https://formspree.io/f/{form_id}). User needs to create a Formspree form and provide the ID.
2. **Sticky mobile CTA bar** — Fixed bottom bar on mobile: "Get Your Free Estimate →" button always visible. Should link to /contact or open scroll-to-form.
3. **Thank you page** — /thank-you route after form submit: confirmation, "what happens next" steps, phone backup CTA, tracking pixel support.
4. **Fence Repair page** — /services/fence-repair. Same template as other service pages (hero, benefits, styles, FAQ, bottom form). High-intent keyword missing from site.
5. **Gate Installation page** — /services/gate-installation. Same template.
6. **Exit-intent form modal** — When user scrolls 60%+ and hasn't interacted with form, show slide-up prompt. Once per session, dismissable.
7. **Swap placeholder contact info** — Phone (302) 555-0180 and email info@twomensfence.com are PLACEHOLDERS. Client needs to provide real ones. These are in src/lib/constants.ts COMPANY object.
8. **Deploy** — Ready to push to Vercel or other host.
9. **Submit to Google Search Console** — After deploy, submit sitemap.xml.

**Key files to know:**
- `src/lib/constants.ts` — COMPANY data, NAV_LINKS, SERVICES, SERVICE_AREAS, LOCAL_BUSINESS_SCHEMA
- `src/lib/images.ts` — Auto-generated image manifest (run `node scripts/process-images.mjs` to regenerate)
- `src/components/shared/ContactForm.tsx` — 2-step form, currently logs to console
- `src/components/layout/Header.tsx` — Sticky nav, mobile Sheet
- `src/components/layout/Footer.tsx` — Pre-CTA band + 4-column footer
- `src/components/shared/CTAButton.tsx` — Uses buttonVariants() not Button asChild
- `src/App.tsx` — All routes with lazy loading
- `scripts/prerender.mjs` — Puppeteer postbuild prerender
- `scripts/process-images.mjs` — Sharp-based JPG→WebP converter with categorization

**Next step:** Build items 1-6 from the remaining list above. Start with Formspree integration and sticky mobile CTA bar, then fence repair page, gate installation page, thank you page, and exit-intent modal.

Please read continue-prompt.md and the key files listed above, then continue building.
