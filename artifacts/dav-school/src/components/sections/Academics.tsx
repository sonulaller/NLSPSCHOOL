import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Users, Lightbulb, FlaskConical, Briefcase, Palette } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const streams = [
  {
    title: "Science",
    icon: <FlaskConical size={32} className="text-secondary" />,
    desc: "Rigorous curriculum covering Physics, Chemistry, Biology/Math. Preparing students for medical, engineering, and research fields."
  },
  {
    title: "Commerce",
    icon: <Briefcase size={32} className="text-secondary" />,
    desc: "Comprehensive study of Accountancy, Business Studies, and Economics. Building foundations for corporate leadership."
  },
  {
    title: "Humanities (Arts)",
    icon: <Palette size={32} className="text-secondary" />,
    desc: "Deep dive into History, Political Science, Geography, and languages. Cultivating critical thinking and social awareness."
  }
];

export default function Academics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="academics" className="py-16 sm:py-20 lg:py-24 bg-primary text-white relative">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-bold uppercase tracking-widest text-sm block mb-3">Academic Excellence</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6">Comprehensive Curriculum</h2>
            <p className="text-white/70 text-base sm:text-lg">
              As a leading CBSE school in Kaithal, we follow a holistic curriculum from Nursery to Class 12, ensuring students excel intellectually, emotionally, and socially.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {streams.map((stream, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1) }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 sm:p-8 rounded-2xl hover:bg-white/15 transition-colors group"
            >
              <div className="mb-6 p-4 bg-white/5 inline-block rounded-xl group-hover:scale-110 transition-transform">
                {stream.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4">{stream.title}</h3>
              <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                {stream.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Journey */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 text-primary shadow-2xl"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4">The Learning Journey</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Nursery - KG", desc: "Play-way method, foundational literacy, and motor skills.", icon: <BookOpen /> },
              { title: "Classes I - V", desc: "Interactive learning, environment awareness, and basic sciences.", icon: <Users /> },
              { title: "Classes VI - X", desc: "Structured CBSE syllabus, conceptual clarity, and critical thinking.", icon: <Lightbulb /> },
              { title: "Classes XI - XII", desc: "Specialized streams, career counseling, and board preparation.", icon: <GraduationCap /> },
            ].map((stage, idx) => (
              <div key={idx} className="text-center space-y-4">
                <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {stage.icon}
                </div>
                <h4 className="font-bold text-base sm:text-lg">{stage.title}</h4>
                <p className="text-sm text-muted-foreground">{stage.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
