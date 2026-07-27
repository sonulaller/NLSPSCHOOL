import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import { motion } from "framer-motion";

const smcMembers = [
  { name: "Virender Kumar", designation: "President", occupation: "Teacher", address: "VPO. Kasan, Distt. Kaithal", contact: "9416901537" },
  { name: "Angrej Singh", designation: "Cashier", occupation: "Principal", address: "VPO. Kasan, Distt. Kaithal", contact: "9034441290" },
  { name: "Balwinder", designation: "Member", occupation: "Pvt. Job", address: "VPO. Kasan, Distt. Kaithal", contact: "7206657767" },
  { name: "Nand Lal", designation: "Secretary", occupation: "Teacher", address: "VPO. Kasan, Distt. Kaithal", contact: "7404285036" },
  { name: "Punam Rani", designation: "Staff Member", occupation: "Teacher", address: "Shakti Nagar, Kaithal", contact: "8708180942" },
  { name: "Manju", designation: "Staff Member", occupation: "Teacher", address: "VPO. Kasan, Distt. Kaithal", contact: "9466032078" },
  { name: "Rajesh", designation: "Staff Member", occupation: "Teacher", address: "VPO. Kasan, Distt. Kaithal", contact: "9991184558" },
  { name: "Anita", designation: "PTA Member", occupation: "House Wife", address: "VPO. Kasan, Distt. Kaithal", contact: "7404887707" },
  { name: "Sonia", designation: "PTA Member", occupation: "Pvt. Job", address: "VPO. Kichhana, Distt. Kaithal", contact: "9068681591" },
  { name: "Priyanka", designation: "PTA Member", occupation: "Pvt. Job", address: "VPO. Kichhana, Distt. Kaithal", contact: "8529007858" },
  { name: "Sonia Sharma", designation: "Educationist", occupation: "Principal, Shri Krishna Public School, Deohra", address: "VPO. Deohra, Distt. Kaithal", contact: "9416228120" },
  { name: "Satist Malik", designation: "Educationist", occupation: "Principal, Jai Hind Public School, Jind", address: "Jind", contact: "9416292657" },
];

const designationColors: Record<string, string> = {
  "President": "bg-yellow-100 text-yellow-800",
  "Cashier": "bg-blue-100 text-blue-800",
  "Secretary": "bg-green-100 text-green-800",
  "Member": "bg-gray-100 text-gray-700",
  "Staff Member": "bg-purple-100 text-purple-800",
  "PTA Member": "bg-pink-100 text-pink-800",
  "Educationist": "bg-orange-100 text-orange-800",
};

export default function SMCPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          label="Governance"
          title="SMC Members"
          subtitle="School Management Committee — New Little Star Public School Kasan, Kaithal (Haryana)"
        />

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-secondary font-bold uppercase tracking-widest text-sm block mb-3">SMC Member List</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">School Management Committee</h2>
              <p className="text-muted-foreground mt-3 text-sm">Updated: April 1, 2021</p>
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
                    <th className="px-5 py-4 text-left font-semibold">Sr.</th>
                    <th className="px-5 py-4 text-left font-semibold">Name</th>
                    <th className="px-5 py-4 text-left font-semibold">Designation</th>
                    <th className="px-5 py-4 text-left font-semibold">Occupation</th>
                    <th className="px-5 py-4 text-left font-semibold">Address</th>
                    <th className="px-5 py-4 text-left font-semibold">Contact No.</th>
                  </tr>
                </thead>
                <tbody>
                  {smcMembers.map((member, idx) => (
                    <tr
                      key={idx}
                      className={`border-t border-gray-100 transition-colors hover:bg-secondary/5 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                    >
                      <td className="px-5 py-4 text-muted-foreground font-medium">{idx + 1}</td>
                      <td className="px-5 py-4 font-serif font-bold text-primary">{member.name}</td>
                      <td className="px-5 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${designationColors[member.designation] || "bg-gray-100 text-gray-700"}`}>
                          {member.designation}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-muted-foreground">{member.occupation}</td>
                      <td className="px-5 py-4 text-muted-foreground">{member.address}</td>
                      <td className="px-5 py-4 font-medium text-primary">{member.contact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {smcMembers.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="text-xs text-muted-foreground font-medium">#{idx + 1}</span>
                      <h3 className="font-serif font-bold text-lg text-primary">{member.name}</h3>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${designationColors[member.designation] || "bg-gray-100 text-gray-700"}`}>
                      {member.designation}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">📋 {member.occupation}</p>
                  <p className="text-sm text-muted-foreground mb-1">📍 {member.address}</p>
                  <p className="text-sm font-semibold text-primary">📞 {member.contact}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
