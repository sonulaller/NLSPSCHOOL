import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const facilities = [
  {
    title: "Science Laboratories",
    image: "/images/science-lab.jpg",
    desc: "Fully equipped Physics, Chemistry, and Biology labs fostering hands-on scientific inquiry."
  },
  {
    title: "Computer Center",
    image: "/images/computer-lab.jpg",
    desc: "State-of-the-art tech labs with high-speed internet and modern software learning."
  },
  {
    title: "Central Library",
    image: "/images/library.jpg",
    desc: "A vast collection of academic books, journals, and digital resources in a serene environment."
  },
  {
    title: "Sports Complex",
    image: "/images/sports-ground.jpg",
    desc: "Expansive grounds for cricket, football, athletics, and indoor sports facilities."
  },
  {
    title: "Smart Classrooms",
    image: "/images/smart-classroom.jpg",
    desc: "Digital boards and modern audio-visual aids to make learning interactive and engaging."
  },
  {
    title: "Grand Auditorium",
    image: "/images/auditorium.jpg",
    desc: "A prestigious venue for cultural events, seminars, and morning assemblies."
  }
];

export default function Facilities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="facilities" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-secondary font-bold uppercase tracking-widest text-sm block mb-3">Campus Life</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">World-Class Infrastructure</h2>
            <p className="text-muted-foreground text-lg">
              Our campus is designed to provide an inspiring environment that supports academic rigor, athletic prowess, and creative exploration.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
