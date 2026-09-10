import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0c27] text-white pt-12 sm:pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12 border-b border-white/10 pb-10 sm:pb-12">

          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white shadow flex items-center justify-center">
                <img src="/school-logo.jpg" alt="New Little Star Public School (NLSPS) Logo" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-base sm:text-lg leading-tight">NLSPS KASAN</span>
                <span className="text-[10px] tracking-widest uppercase text-white/60">New Little Star Public School</span>
              </div>
            </div>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              Empowering students in Kaithal, Haryana with knowledge, character, and values. New Little Star Public School is affiliated to CBSE, New Delhi.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"><Facebook size={16} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"><Instagram size={16} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"><Twitter size={16} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"><Youtube size={16} /></a>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-base sm:text-lg mb-6 border-b border-white/10 pb-2 inline-block">Quick Links</h2>
            <ul className="space-y-3 text-white/70 text-sm">
              <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/teachers" className="hover:text-secondary transition-colors">Teachers</Link></li>
             <li><Link href="/smc-members" className="hover:text-secondary transition-colors">SMC Members</Link></li>
              <li><Link href="/admissions" className="hover:text-secondary transition-colors">Admission Process</Link></li>
              <li><Link href="/facilities" className="hover:text-secondary transition-colors">Facilities</Link></li>
              <li><Link href="/academics" className="hover:text-secondary transition-colors">Academics</Link></li>
              <li><Link href="/fee-structure" className="hover:text-secondary transition-colors">Fee Structure</Link></li>
              <li><Link href="/notice-board" className="hover:text-secondary transition-colors">Notice Board</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-base sm:text-lg mb-6 border-b border-white/10 pb-2 inline-block">Important Links</h2>
            <ul className="space-y-3 text-white/70 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">CBSE Mandatory Disclosure</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Transfer Certificates</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">School Rules & Regulations</a></li>
              <li><Link href="/gallery" className="hover:text-secondary transition-colors">Photo Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="font-bold text-base sm:text-lg mb-6 border-b border-white/10 pb-2 inline-block">Newsletter</h2>
            <p className="text-white/60 text-sm mb-4">Subscribe to get the latest updates and newsletters.</p>
            <form className="flex gap-2">
              <input type="email" placeholder="Your email" className="w-full min-w-0 px-3 py-2 bg-white/10 border border-white/20 rounded-md text-sm text-white focus:outline-none focus:border-secondary" />
              <button className="bg-secondary text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-secondary/90 transition-colors shrink-0">Go</button>
            </form>
            <div className="mt-6 text-white/60 text-sm space-y-1">
              <p>📍 Kichhana Road, Kasan</p>
              <p>Kaithal, Haryana 136044</p>
              <p>✉️ newlittlestarkasan@gmail.com</p>
              <p>🕐 Mon–Sat: Open · Closes 2 PM</p>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-white/40 text-xs gap-3">
          <p>&copy; {new Date().getFullYear()} NLSPS Kasan. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
