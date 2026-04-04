import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense, useEffect } from "react";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Services = lazy(() => import("@/pages/services/Services"));
const WoodFencing = lazy(() => import("@/pages/services/WoodFencing"));
const VinylFencing = lazy(() => import("@/pages/services/VinylFencing"));
const AluminumFencing = lazy(() => import("@/pages/services/AluminumFencing"));
const ChainLinkFencing = lazy(() => import("@/pages/services/ChainLinkFencing"));
const FenceRepair = lazy(() => import("@/pages/services/FenceRepair"));
const GateInstallation = lazy(() => import("@/pages/services/GateInstallation"));
const DeckBuilding = lazy(() => import("@/pages/services/DeckBuilding"));
const TreeTrimming = lazy(() => import("@/pages/services/TreeTrimming"));
const ThankYou = lazy(() => import("@/pages/ThankYou"));
const Gallery = lazy(() => import("@/pages/Gallery"));
const FAQ = lazy(() => import("@/pages/FAQ"));
const Contact = lazy(() => import("@/pages/Contact"));
const Privacy = lazy(() => import("@/pages/Privacy"));
const Terms = lazy(() => import("@/pages/Terms"));
const SitemapPage = lazy(() => import("@/pages/Sitemap"));
const ServiceArea = lazy(() => import("@/pages/service-areas/ServiceArea"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const Book = lazy(() => import("@/pages/Book"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-action border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/wood-fencing" element={<WoodFencing />} />
            <Route path="/services/vinyl-fencing" element={<VinylFencing />} />
            <Route path="/services/aluminum-fencing" element={<AluminumFencing />} />
            <Route path="/services/chain-link-fencing" element={<ChainLinkFencing />} />
            <Route path="/services/fence-repair" element={<FenceRepair />} />
            <Route path="/services/gate-installation" element={<GateInstallation />} />
            <Route path="/services/deck-building" element={<DeckBuilding />} />
            <Route path="/services/tree-trimming" element={<TreeTrimming />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book" element={<Book />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/service-areas/:slug" element={<ServiceArea />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}
