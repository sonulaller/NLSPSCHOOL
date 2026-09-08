import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Seo from "@root/SCO.md/Seo";
import PageHeader from "@/components/layout/PageHeader";
import Gallery from "@/components/sections/Gallery";

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Seo
        title="Photo Gallery | New Little Star Public School (NLSP School), Kasan, Kaithal"
        description="Photo gallery of New Little Star Public School (NLSP School), Kasan, District Kaithal, Haryana — campus life, events, celebrations and student achievements at our CBSE school."
      />
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
