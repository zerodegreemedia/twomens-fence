import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { CTAButton } from "@/components/shared/CTAButton";

export default function NotFound() {
  return (
    <Layout>
      <div className="py-32 text-center max-w-xl mx-auto px-6">
        <h1 className="text-6xl font-extrabold text-action mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Page not found. Let&apos;s get you back on track.
        </p>
        <div className="flex justify-center gap-4">
          <CTAButton href="/">Go Home</CTAButton>
          <CTAButton href="/contact" variant="ghost">Contact Us</CTAButton>
        </div>
      </div>
    </Layout>
  );
}
