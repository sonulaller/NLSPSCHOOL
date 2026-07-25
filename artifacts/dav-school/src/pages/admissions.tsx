import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Admissions from "@/components/sections/Admissions";

export default function AdmissionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
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
