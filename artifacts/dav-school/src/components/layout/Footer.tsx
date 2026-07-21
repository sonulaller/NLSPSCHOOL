import { BookOpen, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0c27] text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
          
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center">
                 <BookOpen size={20} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg leading-tight">
                  NLSPS KASAN
                </span>
                <span className="text-[10px] tracking-widest uppercase text-white/60">
                  New Little Star Public School
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              Empowering students with knowledge, character, and values. Affiliated to CBSE, New Delhi.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-white/10 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li><a href="#about" className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#academics" className="hover:text-secondary transition-colors">Academics</a></li>
              <li><a href="#admissions" className="hover:text-secondary transition-colors">Admission Process</a></li>
              <li><a href="#facilities" className="hover:text-secondary transition-colors">Facilities</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Fee Structure</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-white/10 pb-2 inline-block">Important Links</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">CBSE Mandatory Disclosure</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Transfer Certificates</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">School Rules & Regulations</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Alumni Network</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-white/10 pb-2 inline-block">Newsletter</h4>
            <p className="text-white/60 text-sm mb-4">Subscribe to get the latest updates and newsletters.</p>
            <form className="flex gap-2">
              <input type="email" placeholder="Your email" className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-sm text-white focus:outline-none focus:border-secondary" />
              <button className="bg-secondary text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-secondary/90 transition-colors">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-white/40 text-xs">
          <p>&copy; {new Date().getFullYear()} NLSPS Kasan. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
