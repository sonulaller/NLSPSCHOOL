import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Facilities from "@/components/sections/Facilities";

export default function FacilitiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          label="Campus Life"
          title="Our Facilities"
          subtitle="World-class infrastructure designed to inspire academic rigor, athletic prowess, and creative exploration."
        />
        <Facilities />
      </main>
      <Footer />
    </div>
  );
}
