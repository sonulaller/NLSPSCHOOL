import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Seo from "@/SCO.md/Seo";
import PageHeader from "@/components/layout/PageHeader";
import Admissions from "@/components/sections/Admissions";

export default function AdmissionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Seo
        title="Admissions Open | New Little Star Public School (NLSP School), Kasan, Kaithal"
        description="Admissions at New Little Star Public School (NLSP School), Kasan, District Kaithal, Haryana — registrations open Nursery to Class XII. Simple admission process and fee details for 2025-26."
      />
      <Navbar />
      <main className="flex-1">
        <PageHeader
          label="Join Us"
          title="Admissions 2025–26"
          subtitle="Begin your child's journey of excellence. Registrations are now open."
        />
        <Admissions />
      </main>
      <Footer />
    </div>
  );
}
