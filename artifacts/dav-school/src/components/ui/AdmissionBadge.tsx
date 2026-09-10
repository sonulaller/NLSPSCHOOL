import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, Award } from "lucide-react";
import { Link } from "wouter";

export default function AdmissionBadge() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          className="fixed bottom-6 right-6 z-50 flex items-center"
        >
          <div className="relative group">
            <Link 
              href="/admissions"
              className="flex items-center gap-3 bg-secondary text-white px-5 py-3 rounded-full font-bold shadow-[0_4px_20px_rgba(212,160,23,0.4)] hover:scale-105 transition-transform"
            >
              <Award className="animate-pulse" />
              <span>Admissions Open 2025</span>
            </Link>
            
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute -top-2 -right-2 bg-white text-primary rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Close"
            >
              <X size={14} />
            </button>
            
            {/* Ripple effect */}
            <div className="absolute inset-0 rounded-full border-2 border-secondary animate-ping opacity-20 pointer-events-none" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
