import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import About from "@/components/sections/About";
import Leadership from "@/components/sections/Leadership";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
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
