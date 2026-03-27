import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";

export default function Privacy() {
  return (
    <Layout>
      <SEO title="Privacy Policy" description="TWOMENS Fence privacy policy." />
      <div className="py-32 text-center">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
      </div>
    </Layout>
  );
}
