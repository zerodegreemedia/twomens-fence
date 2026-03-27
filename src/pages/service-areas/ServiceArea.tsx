import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { SERVICE_AREAS } from "@/lib/constants";

export default function ServiceArea() {
  const { slug } = useParams<{ slug: string }>();
  const area = SERVICE_AREAS.find((a) => a.slug === slug);

  if (!area) {
    return (
      <Layout>
        <div className="py-32 text-center">
          <h1 className="text-4xl font-bold">Area Not Found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title={`Fence Installation ${area.city}, ${area.stateAbbr}`}
        description={`Professional fence installation in ${area.city}, ${area.stateAbbr}. Wood, vinyl, aluminum, and chain link fencing. Free estimates.`}
      />
      <div className="py-32 text-center">
        <h1 className="text-4xl font-bold">
          Fence Installation in {area.city}, {area.stateAbbr}
        </h1>
      </div>
    </Layout>
  );
}
