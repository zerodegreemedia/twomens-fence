import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";

export default function Services() {
  return (
    <Layout>
      <SEO
        title="Fence Installation Services"
        description="Professional wood, vinyl, aluminum, and chain link fence installation in Delaware, Pennsylvania, and Maryland."
      />
      <div className="py-32 text-center">
        <h1 className="text-4xl font-bold">Our Services</h1>
      </div>
    </Layout>
  );
}
