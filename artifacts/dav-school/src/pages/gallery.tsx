import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Gallery from "@/components/sections/Gallery";

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          label="Moments"
          title="Life at NLSPS Kasan"
          subtitle="Glimpses of the vibrant campus life, events, and achievements of our students."
        />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
