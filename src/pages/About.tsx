import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";

export default function About() {
  return (
    <Layout>
      <SEO
        title="About TWOMENS Fence"
        description="Licensed Delaware fence contractor serving DE, PA, and MD since 2008. Learn about our story, values, and commitment to quality."
      />
      <div className="py-32 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
      </div>
    </Layout>
  );
}
