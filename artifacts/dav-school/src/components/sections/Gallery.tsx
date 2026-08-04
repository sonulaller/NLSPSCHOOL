import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-bold uppercase tracking-widest text-sm block mb-3">Moments</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Life at NLSPS Kasan</h2>
          </motion.div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
          {[
            { src: "/gallery-1.jpg", alt: "Physical Activity Class", label: "Physical Activity & Fitness", delay: 0.1 },
            { src: "/gallery-2.jpg", alt: "Student Achievement", label: "Student Achievement", delay: 0.2 },
            { src: "/gallery-3.jpg", alt: "Independence Day Celebration", label: "Independence Day Celebration", delay: 0.3 },
            { src: "/gallery-4.jpg", alt: "Republic Day Parade", label: "Republic Day Parade", delay: 0.4 },
            { src: "/gallery-5.jpg", alt: "School Celebration", label: "School Celebration", delay: 0.5 },
            { src: "/gallery-6.jpg", alt: "Shaheed Diwas Celebration", label: "Shaheed Diwas — Patriotic Tribute", delay: 0.6 },
            { src: "/gallery-7.jpg", alt: "Flag Rally", label: "Flag Rally", delay: 0.7 },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: item.delay }}
              className="break-inside-avoid mb-4 rounded-2xl overflow-hidden relative group"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="font-serif font-bold text-lg">{item.label}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
