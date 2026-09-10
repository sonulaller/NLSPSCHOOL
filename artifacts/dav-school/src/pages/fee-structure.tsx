import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Seo from "@root/SCO.md/Seo";
import PageHeader from "@/components/layout/PageHeader";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Link } from "wouter";

const feeData = [
  { class: "1st",  admission: "4000", registration: "1000", monthly: "1100", bus: "400" },
  { class: "2nd",  admission: "NIL",  registration: "1000", monthly: "1100", bus: "400" },
  { class: "3rd",  admission: "NIL",  registration: "1000", monthly: "1100", bus: "400" },
  { class: "4th",  admission: "NIL",  registration: "1000", monthly: "1100", bus: "400" },
  { class: "5th",  admission: "NIL",  registration: "1000", monthly: "1100", bus: "400" },
  { class: "6th",  admission: "4500", registration: "1500", monthly: "1200", bus: "400" },
  { class: "7th",  admission: "NIL",  registration: "1500", monthly: "1200", bus: "400" },
  { class: "8th",  admission: "NIL",  registration: "1500", monthly: "1200", bus: "400" },
  { class: "9th",  admission: "5000", registration: "2000", monthly: "1400", bus: "400" },
  { class: "10th", admission: "NIL",  registration: "2000", monthly: "1500", bus: "400" },
  { class: "11th", admission: "6000", registration: "2500", monthly: "1775", bus: "400" },
  { class: "12th", admission: "NIL",  registration: "2500", monthly: "1875", bus: "400" },
];

export default function FeeStructurePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Seo
        title="Fee Structure | New Little Star Public School (NLSP School), Kasan, Kaithal"
        description="Fee structure of New Little Star Public School (NLSP School), Kasan, District Kaithal, Haryana — class-wise admission, registration, monthly fees and bus fare details for 2024-25."
      />
      <Navbar />
      <main className="flex-1">
        <PageHeader
          label="Transparency"
          title="Fee Structure"
          subtitle="New Little Star Public School Kasan — an affordable CBSE school in Haryana with clear fee details for Session 2024–25"
        />

        <section className="py-12 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">

            {/* Download Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12 bg-white rounded-2xl shadow-sm overflow-x-auto border border-gray-100"
            >
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-6 py-3 text-left font-semibold w-24">Sr. No.</th>
                    <th className="px-6 py-3 text-left font-semibold">Description</th>
                    <th className="px-6 py-3 text-left font-semibold">Upload Date</th>
                    <th className="px-6 py-3 text-left font-semibold">Download</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-100">
                    <td className="px-6 py-4 text-muted-foreground">1</td>
                    <td className="px-6 py-4 font-medium text-foreground">Fee Structure Download</td>
                    <td className="px-6 py-4 text-muted-foreground">1-April-2024</td>
                    <td className="px-6 py-4">
                      <a
                        href="/attached_assets/fees_structure__1785215521759.png"
                        download="Fee_Structure_2024.png"
                        className="inline-flex items-center gap-1.5 text-secondary font-semibold hover:underline"
                      >
                        <Download size={14} />
                        Download
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </motion.div>

            <div className="text-center mb-12">
              <span className="text-secondary font-bold uppercase tracking-widest text-sm block mb-3">Fee Structure</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Class-wise Fee Details</h2>
              <p className="text-muted-foreground mt-3 text-sm">Updated: April 1, 2024 &nbsp;|&nbsp; All amounts in ₹ (Indian Rupees)</p>
            </div>

            {/* Desktop Table */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="hidden md:block bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100"
            >
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-6 py-4 text-left font-semibold">Class</th>
                    <th className="px-6 py-4 text-center font-semibold">Admission Fee (₹)</th>
                    <th className="px-6 py-4 text-center font-semibold">Registration Fee (₹)</th>
                    <th className="px-6 py-4 text-center font-semibold">Monthly Fees (₹)</th>
                    <th className="px-6 py-4 text-center font-semibold">Bus Fare (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {feeData.map((row, idx) => (
                    <tr
                      key={idx}
                      className={`border-t border-gray-100 transition-colors hover:bg-secondary/5 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                    >
                      <td className="px-6 py-4 font-serif font-bold text-primary">Class {row.class}</td>
                      <td className={`px-6 py-4 text-center font-medium ${row.admission === "NIL" ? "text-muted-foreground" : "text-secondary"}`}>
                        {row.admission === "NIL" ? "—" : `₹ ${row.admission}`}
                      </td>
                      <td className="px-6 py-4 text-center text-muted-foreground">₹ {row.registration}</td>
                      <td className="px-6 py-4 text-center font-semibold text-primary">₹ {row.monthly}</td>
                      <td className="px-6 py-4 text-center text-muted-foreground">₹ {row.bus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {feeData.map((row, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
                >
                  <h3 className="font-serif font-bold text-lg text-primary mb-3">Class {row.class}</h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-muted-foreground text-xs mb-1">Admission Fee</p>
                      <p className="font-semibold text-secondary">{row.admission === "NIL" ? "—" : `₹ ${row.admission}`}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-muted-foreground text-xs mb-1">Registration Fee</p>
                      <p className="font-semibold text-primary">₹ {row.registration}</p>
                    </div>
                    <div className="bg-secondary/10 rounded-xl p-3">
                      <p className="text-muted-foreground text-xs mb-1">Monthly Fees</p>
                      <p className="font-bold text-primary">₹ {row.monthly}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-muted-foreground text-xs mb-1">Bus Fare</p>
                      <p className="font-semibold text-primary">₹ {row.bus}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-5 text-sm text-yellow-800"
            >
              <strong>Note:</strong> Admission fee is charged only at the time of <Link href="/admissions" className="text-yellow-900 font-semibold underline underline-offset-2">new admission</Link>. Bus fare is optional and applicable only for students availing the school bus facility. For more information, <Link href="/contact" className="text-yellow-900 font-semibold underline underline-offset-2">contact the school office</Link>.
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
