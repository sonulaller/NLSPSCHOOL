import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Seo from "@root/SCO.md/Seo";
import PageHeader from "@/components/layout/PageHeader";
import Admissions from "@/components/sections/Admissions";

export default function AdmissionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Seo
        title="Admissions Open | New Little Star Public School (NLSP School), Kasan, Kaithal"
        description="Admissions at New Little Star Public School (NLSP School), Kasan, District Kaithal, Haryana — registrations open Nursery to Class XII. Simple admission process and fee details for 2025-26."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "School Admissions",
          name: "Admissions at New Little Star Public School (NLSP School), Kasan",
          description:
            "Admissions open at New Little Star Public School (NLSP School), Kasan, District Kaithal, Haryana — registrations from Nursery to Class XII. Simple admission process: registration, assessment, interaction and enrollment.",
          url: "https://www.nlspschool.example.com/admissions",
          provider: {
            "@type": "School",
            name: "New Little Star Public School",
            url: "https://www.nlspschool.example.com",
          },
          areaServed: {
            "@type": "City",
            name: "Kasan, Kaithal, Haryana",
          },
        }}
      />
      <Navbar />
      <main className="flex-1">
        <PageHeader
          label="Join Us"
          title="Admissions 2025–26"
          subtitle="Begin your child's journey of excellence — school admission at NLSPS Kasan is open from Nursery to Class 12."
        />
        <Admissions />
      </main>
      <Footer />
    </div>
  );
}
