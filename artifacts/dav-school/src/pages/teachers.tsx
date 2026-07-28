import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import { motion } from "framer-motion";

const teachers = [
  {
    name: "Mr. Virender Singh",
    subject: "Managing Director",
    qualification: "Managing Director, NLSPS Kasan",
    photo: "/managing-director.jpg",
  },
  {
    name: "Mr. Angrej Singh",
    subject: "Principal",
    qualification: "Principal, NLSPS Kasan",
    photo: "/principal.jpg",
  },
  {
    name: "Mrs. Dimple",
    subject: "Teacher",
    qualification: "NLSPS Kasan",
    photo: "/mrs-dimple.png",
  },
  {
    name: "Mr. Nand Lal",
    subject: "Teacher",
    qualification: "NLSPS Kasan",
    photo: "/mr-nand-lal.png",
  },
];

export default function TeachersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          label="Our Faculty"
          title="Meet Our Teachers"
          subtitle="Dedicated educators committed to shaping the future of every student at NLSPS Kasan."
        />

        {/* Group Photo */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-secondary font-bold uppercase tracking-widest text-sm block mb-3">Our Team</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Our Teaching Staff</h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl overflow-hidden shadow-xl max-w-5xl mx-auto"
            >
              <img
                src="/teachers-group.jpg"
                alt="NLSPS Kasan Teaching Staff"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-secondary font-bold uppercase tracking-widest text-sm block mb-3">Faculty</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Meet the Team</h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {teachers.map((teacher, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-secondary/30 transition-all duration-300 group"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                    <img
                      src={teacher.photo}
                      alt={teacher.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif font-bold text-lg text-primary group-hover:text-secondary transition-colors">
                      {teacher.name}
                    </h3>
                    <p className="text-secondary font-semibold text-sm mt-1">{teacher.subject}</p>
                    <p className="text-muted-foreground text-xs mt-1">{teacher.qualification}</p>
                  </div>
                </motion.div>
              ))}

              {/* Add More Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: teachers.length * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-dashed border-gray-300 flex flex-col items-center justify-center p-8 text-center min-h-[280px]"
              >
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <span className="text-3xl text-secondary font-bold">+</span>
                </div>
                <p className="text-muted-foreground text-sm">More teachers coming soon</p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
