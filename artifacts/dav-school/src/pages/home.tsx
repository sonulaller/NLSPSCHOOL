import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Building2, Users, Image, Bell, Phone } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import AdmissionBadge from "@/components/ui/AdmissionBadge";

const quickLinks = [
  {
    title: "About Us",
    desc: "Know our legacy, values, and the leadership behind NLSPS Kasan.",
    href: "/about",
    icon: <Users size={28} className="text-secondary" />,
  },
  {
    title: "Academics",
    desc: "CBSE curriculum from Nursery to Class XII — Science, Commerce & Humanities.",
    href: "/academics",
    icon: <BookOpen size={28} className="text-secondary" />,
  },
  {
    title: "Facilities",
    desc: "Labs, library, sports complex, smart classrooms and more.",
    href: "/facilities",
    icon: <Building2 size={28} className="text-secondary" />,
  },
  {
    title: "Admissions",
    desc: "Enrol your child for 2025–26. Seats filling fast!",
    href: "/admissions",
    icon: <ArrowRight size={28} className="text-secondary" />,
  },
  {
    title: "Gallery",
    desc: "Glimpses of campus life, events, and student moments.",
    href: "/gallery",
    icon: <Image size={28} className="text-secondary" />,
  },
  {
    title: "Notice Board",
    desc: "Latest circulars, events, and important announcements.",
    href: "/notice-board",
    icon: <Bell size={28} className="text-secondary" />,
  },
  {
    title: "Contact Us",
    desc: "Kichhana Road, Kasan, Kaithal, Haryana 136044.",
    href: "/contact",
    icon: <Phone size={28} className="text-secondary" />,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <AdmissionBadge />
      <main className="flex-1">
        <Hero />

        {/* Quick Links Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-secondary font-bold uppercase tracking-widest text-sm block mb-3">Explore</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">Everything About NLSPS</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {quickLinks.map((item, idx) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.07 }}
                >
                  <Link
                    href={item.href}
                    className="group flex flex-col h-full bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl border border-gray-100 hover:border-secondary/30 transition-all duration-300"
                  >
                    <div className="mb-5 w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-serif font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">{item.desc}</p>
                    <div className="mt-4 flex items-center gap-1 text-secondary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ArrowRight size={14} />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
