import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Academics from "@/components/sections/Academics";

export default function AcademicsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          label="Academic Excellence"
          title="Academics"
          subtitle="CBSE curriculum with a holistic approach — nurturing intellect, character, and creativity."
        />
        <Academics />
      </main>
      <Footer />
    </div>
  );
}
