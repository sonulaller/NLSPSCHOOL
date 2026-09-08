import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "wouter";

export default function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100dvh] w-full overflow-hidden bg-primary">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img 
          src="/school-bg.jpg" 
          alt="" 
          className="w-full h-full object-cover object-center"
          style={{ minWidth: "100%", minHeight: "100%" }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 h-full container mx-auto px-4 sm:px-6 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-white font-bold leading-tight mb-4 sm:mb-6">
            NLSP <span className="text-secondary italic">School</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mb-8 sm:mb-10 leading-relaxed">
            NLSPS Kasan shapes future leaders through values-driven education, <Link href="/facilities" className="text-secondary underline decoration-secondary/50 underline-offset-4">state-of-the-art facilities</Link>, and a legacy of academic brilliance.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
            <Link 
              href="/admissions"
              className="bg-secondary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-secondary/90 transition-all hover:scale-105 shadow-[0_0_20px_rgba(212,160,23,0.3)] flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Apply Now <ArrowRight size={18} className="hidden sm:block" />
            </Link>
            <Link 
              href="/about"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white/20 transition-all w-full sm:w-auto justify-center text-center"
            >
              Discover Our Legacy
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/60"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-white/30 overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-full h-1/3 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
