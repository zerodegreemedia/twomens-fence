import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { NAV_LINKS, SERVICES, SERVICE_AREAS } from "@/lib/constants";

export default function SitemapPage() {
  return (
    <Layout>
      <SEO title="Sitemap" description="TWOMENS Fence sitemap — all pages." />
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-8">Sitemap</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-3">Pages</h2>
            <ul className="space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-trust hover:underline">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-3">Services</h2>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to={s.href} className="text-trust hover:underline">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-3">Service Areas</h2>
            <ul className="space-y-2">
              {SERVICE_AREAS.map((a) => (
                <li key={a.slug}>
                  <Link to={a.href} className="text-trust hover:underline">{a.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
