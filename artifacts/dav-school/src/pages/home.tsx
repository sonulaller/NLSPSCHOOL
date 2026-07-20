import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Academics from "@/components/sections/Academics";
import Facilities from "@/components/sections/Facilities";
import Gallery from "@/components/sections/Gallery";
import NoticeBoard from "@/components/sections/NoticeBoard";
import Leadership from "@/components/sections/Leadership";
import Admissions from "@/components/sections/Admissions";
import Contact from "@/components/sections/Contact";
import AdmissionBadge from "@/components/ui/AdmissionBadge";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <AdmissionBadge />
      <main className="flex-1">
        <Hero />
        <About />
        <Academics />
        <Facilities />
        <Leadership />
        <Gallery />
        <NoticeBoard />
        <Admissions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
