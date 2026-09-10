import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Seo from "@root/SCO.md/Seo";
import PageHeader from "@/components/layout/PageHeader";
import Academics from "@/components/sections/Academics";

export default function AcademicsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Seo
        title="Academics & Curriculum | New Little Star Public School (NLSP School), Kasan"
        description="Academics at New Little Star Public School (NLSP School), Kasan, District Kaithal, Haryana — CBSE curriculum with Science, Commerce and Humanities streams, from Nursery to Class XII."
      />
      <Navbar />
      <main className="flex-1">
        <PageHeader
          label="Academic Excellence"
          title="Academics"
          subtitle="A CBSE school in Kaithal nurturing intellect, character, and creativity from Nursery to Class XII."
        />
        <Academics />
      </main>
      <Footer />
    </div>
  );
}
