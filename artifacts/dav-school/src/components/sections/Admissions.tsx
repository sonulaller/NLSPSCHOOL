import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CheckCircle2, FileText, Users, Calculator } from "lucide-react";

export default function Admissions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({
    parentName: "",
    email: "",
    phone: "",
    childClass: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}api/admission-enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setForm({ parentName: "", email: "", phone: "", childClass: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection.");
    }
  };

  const steps = [
    {
      icon: <FileText size={24} />,
      title: "Registration",
      desc: "Fill out the online application form or visit the school reception."
    },
    {
      icon: <Calculator size={24} />,
      title: "Assessment",
      desc: "An informal interaction for primary, and a basic aptitude test for higher classes."
    },
    {
      icon: <Users size={24} />,
      title: "Interaction",
      desc: "A brief meeting between the parents, student, and the Principal."
    },
    {
      icon: <CheckCircle2 size={24} />,
      title: "Enrollment",
      desc: "Submission of documents and fee payment to confirm admission."
    }
  ];

  return (
    <section id="admissions" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-bold uppercase tracking-widest text-sm block mb-3">Join Us</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Admissions 2025-26</h2>
            <p className="text-muted-foreground text-lg">
              Begin your child's journey of excellence. We welcome students who are eager to learn and grow in a nurturing environment.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-serif font-bold text-primary mb-8">Admission Process</h3>
            
            <div className="space-y-8">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-4 relative">
                  {idx !== steps.length - 1 && (
                    <div className="absolute left-6 top-14 bottom-[-2rem] w-px bg-gray-200" />
                  )}
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shrink-0 shadow-md z-10">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary">{step.title}</h4>
                    <p className="text-muted-foreground mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 pt-8 border-t border-gray-100">
              <p className="text-sm text-muted-foreground mb-4">
                <strong className="text-primary">Note:</strong> Age criteria for Nursery is 3+ years as of March 31st of the academic year.
              </p>
              <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 transition-colors">
                Download Prospectus
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-primary p-8 md:p-10 rounded-3xl shadow-xl text-white"
          >
            <h3 className="text-2xl font-serif font-bold mb-2">Admission Enquiry</h3>
            <p className="text-white/70 mb-8 text-sm">Leave your details and our admission counselor will get back to you.</p>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 size={56} className="text-secondary mb-4" />
                <h4 className="text-xl font-bold mb-2">Enquiry Submitted!</h4>
                <p className="text-white/70 text-sm">We have received your enquiry and will contact you soon.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 px-6 py-2 bg-secondary rounded-xl font-bold hover:bg-secondary/90 transition-colors text-sm"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium mb-1 text-white/80">Parent's Name *</label>
                  <input
                    type="text"
                    name="parentName"
                    value={form.parentName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary text-white placeholder-white/40"
                    placeholder="Enter full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-white/80">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary text-white placeholder-white/40"
                    placeholder="Enter email address"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-white/80">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary text-white placeholder-white/40"
                      placeholder="+91"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-white/80">Child's Class</label>
                    <select
                      name="childClass"
                      value={form.childClass}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary text-white appearance-none"
                    >
                      <option value="" className="text-black">Select Class</option>
                      <option value="nursery" className="text-black">Nursery</option>
                      <option value="kg" className="text-black">KG</option>
                      <option value="1" className="text-black">Class I</option>
                      <option value="11" className="text-black">Class XI</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-white/80">Message (Optional)</label>
                  <textarea
                    rows={3}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary text-white placeholder-white/40"
                    placeholder="Any specific queries?"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-300 text-sm">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-secondary text-white py-4 rounded-xl font-bold hover:bg-secondary/90 transition-colors mt-4 disabled:opacity-60"
                >
                  {status === "loading" ? "Sending..." : "Submit Enquiry"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
