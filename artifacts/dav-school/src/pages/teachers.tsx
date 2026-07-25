import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import { motion } from "framer-motion";

const teachers = [
  {
    name: "Mr. Angrej Singh",
    subject: "Principal",
    qualification: "Principal, NLSPS Kasan",
    photo: "/principal.jpg",
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

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
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
