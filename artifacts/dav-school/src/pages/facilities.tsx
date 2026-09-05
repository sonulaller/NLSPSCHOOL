import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Seo from "@/SCO.md/Seo";
import PageHeader from "@/components/layout/PageHeader";
import Facilities from "@/components/sections/Facilities";

export default function FacilitiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Seo
        title="School Facilities & Infrastructure | NLSP School, Kasan, Kaithal"
        description="Explore modern facilities at New Little Star Public School (NLSP School), Kasan, District Kaithal, Haryana — science labs, computer center, library, sports complex, smart classrooms and auditorium."
      />
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
