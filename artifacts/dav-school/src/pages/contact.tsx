import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Contact from "@/components/sections/Contact";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          label="Get In Touch"
          title="Contact Us"
          subtitle="We're here to help. Reach out to us for admissions, queries, or any information."
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
