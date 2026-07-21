import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

export default function Leadership() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 max-w-5xl mx-auto shadow-2xl"
        >
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative">
                <img 
                  src="/images/principal-avatar.jpg" 
                  alt="Principal" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-serif text-2xl font-bold">Dr. Rajesh Sharma</h3>
                  <p className="text-secondary font-medium">Principal</p>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 text-secondary/30">
                <Quote size={80} fill="currentColor" />
              </div>
            </div>
            
            <div className="md:col-span-7 space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">From the Principal's Desk</h2>
              
              <div className="space-y-4 text-white/80 text-lg leading-relaxed italic">
                <p>
                  "Education is not merely the accumulation of facts, but the preparation of life itself. At NLSPS Kasan, we strive to create an environment where strong values harmonize with modern scientific thought."
                </p>
                <p>
                  "Our goal is to nurture well-rounded individuals who are intellectually competent, morally upright, and socially committed. We believe in empowering every child to discover their true potential and shine brightly in this rapidly changing world."
                </p>
              </div>
              
              <div className="pt-6">
                <img src="/images/signature-placeholder.png" alt="Signature" className="h-12 opacity-80 grayscale invert" onError={(e) => e.currentTarget.style.display = 'none'} />
                <p className="font-serif font-bold text-xl mt-4">Dr. Rajesh Sharma</p>
                <p className="text-sm text-white/60">M.Sc., B.Ed., Ph.D.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
