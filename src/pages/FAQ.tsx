import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";

export default function FAQ() {
  return (
    <Layout>
      <SEO
        title="Fence Installation FAQ"
        description="Answers to common questions about fence installation in Delaware — permits, costs, materials, timelines, and more."
      />
      <div className="py-32 text-center">
        <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
      </div>
    </Layout>
  );
}
