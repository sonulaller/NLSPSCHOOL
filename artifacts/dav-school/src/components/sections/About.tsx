import { motion, animate } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const stats = [
  { to: 1000, suffix: "+", label: "Students Enrolled" },
  { to: 50, suffix: "+", label: "Expert Teachers" },
  { to: 25, suffix: "+", label: "Years of Legacy" },
  { to: 100, suffix: "%", label: "CBSE Board Results" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const controls = animate(0, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value).toString() + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [to, suffix, isInView]);

  return <span ref={nodeRef}>0{suffix}</span>;
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block border-b-2 border-secondary pb-1 mb-2">
              <span className="text-sm font-bold uppercase tracking-widest text-primary">About Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">
              A Legacy of <br/>
              <span className="italic text-secondary">Vedic Tradition</span> & <br/>
              Modern Excellence
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              NLSPS Kasan is a premier institution affiliated with CBSE. We blend timeless values with contemporary pedagogical practices to nurture global citizens.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our motto, <strong className="text-primary">"Let Knowledge Illuminate Life"</strong>, guides every endeavor. We don't just teach; we inspire minds, build character, and shape the future leaders of India.
            </p>

            <div className="pt-6">
              <a href="#admissions" className="text-primary font-bold hover:text-secondary transition-colors inline-flex items-center gap-2 border-b border-primary/20 pb-1">
                Read our full vision & mission
              </a>
            </div>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="/images/gallery-1.jpg" 
                alt="Students studying" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </motion.div>
            
            {/* Stats Card overlapping */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl z-20 hidden md:block"
            >
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <h3 className="text-3xl font-serif font-bold text-primary">
                      <Counter to={stat.to} suffix={stat.suffix} />
                    </h3>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Mobile Stats */}
        <div className="grid grid-cols-2 gap-6 mt-16 md:hidden">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center"
            >
              <h3 className="text-3xl font-serif font-bold text-primary mb-1">
                <Counter to={stat.to} suffix={stat.suffix} />
              </h3>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
