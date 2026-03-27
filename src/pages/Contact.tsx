import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";

export default function Contact() {
  return (
    <Layout>
      <SEO
        title="Get a Free Fence Estimate"
        description="Contact TWOMENS Fence for a free, no-obligation fence estimate. Call (302) 555-0180 or fill out our online form."
      />
      <div className="py-32 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </div>
    </Layout>
  );
}
