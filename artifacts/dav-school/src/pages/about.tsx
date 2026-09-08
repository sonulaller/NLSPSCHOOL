import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Seo from "@root/SCO.md/Seo";
import PageHeader from "@/components/layout/PageHeader";
import About from "@/components/sections/About";
import Leadership from "@/components/sections/Leadership";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Seo
        title="About Us | New Little Star Public School (NLSP School), Kasan, Kaithal"
        description="About New Little Star Public School (NLSP School), Kasan, District Kaithal, Haryana — a CBSE-affiliated institution blending Vedic tradition with modern excellence, values, leadership and academic brilliance."
      />
      <Navbar />
      <main className="flex-1">
        <PageHeader
          label="Who We Are"
          title="About NLSPS Kasan"
          subtitle="A premier institution built on values, legacy, and academic brilliance."
        />
        <About />
        <Leadership />
      </main>
      <Footer />
    </div>
  );
}
