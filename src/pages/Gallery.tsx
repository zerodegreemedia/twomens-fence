import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";

export default function Gallery() {
  return (
    <Layout>
      <SEO
        title="Fence Project Gallery"
        description="Browse our fence installation projects across Delaware, Pennsylvania, and Maryland. Wood, vinyl, aluminum, and chain link."
      />
      <div className="py-32 text-center">
        <h1 className="text-4xl font-bold">Project Gallery</h1>
      </div>
    </Layout>
  );
}
