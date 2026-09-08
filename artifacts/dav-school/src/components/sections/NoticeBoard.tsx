import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";

const notices = [
  {
    date: "15 Oct",
    title: "Admissions Open for 2025-26",
    desc: "Registration forms for Nursery to Class IX are now available online and at the school reception.",
    type: "Admission"
  },
  {
    date: "20 Oct",
    title: "Diwali Holidays Announcement",
    desc: "School will remain closed from 22nd Oct to 26th Oct for Diwali celebrations.",
    type: "Holiday"
  },
  {
    date: "05 Nov",
    title: "Annual Sports Meet",
    desc: "All students are requested to submit their names for track and field events to their class teachers.",
    type: "Event"
  }
];

export default function NoticeBoard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="lg:sticky lg:top-32">
              <span className="text-secondary font-bold uppercase tracking-widest text-sm block mb-3">Updates</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-6">Notice Board</h2>
              <p className="text-muted-foreground mb-8">
                Stay updated with the latest announcements, events, and important circulars from the school administration.
              </p>
              <Link href="/notice-board" className="text-primary font-bold hover:text-secondary transition-colors inline-flex items-center gap-2 border-b border-primary/20 pb-1">
                View all notices
              </Link>
            </div>
          </motion.div>

          <div className="lg:col-span-8">
            <div className="space-y-6">
              {notices.map((notice, idx) => (
                <motion.article
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                  className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-5 sm:gap-6 items-start"
                >
                  <div className="flex flex-col items-center justify-center bg-primary/5 rounded-xl min-w-[90px] sm:min-w-[100px] h-24 p-4 text-center border border-primary/10 shrink-0">
                    <span className="text-2xl font-serif font-bold text-primary">{notice.date.split(' ')[0]}</span>
                    <span className="text-sm font-semibold uppercase text-primary/70">{notice.date.split(' ')[1]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-2 py-1 rounded-md">
                        {notice.type}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">
                      {notice.type === "Admission" ? (
                        <Link href="/admissions" className="hover:text-secondary transition-colors">{notice.title}</Link>
                      ) : (
                        notice.title
                      )}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{notice.desc}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
