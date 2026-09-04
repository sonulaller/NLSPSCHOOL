import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    dropdown: [
      { name: "About Us", href: "/about" },
      { name: "Fee Structure", href: "/fee-structure" },
      { name: "SMC Members", href: "/smc" },
    ],
  },
  { name: "Teachers", href: "/teachers" },
  { name: "Admissions", href: "/admissions" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isHome = location === "/";
  const solidNav = !isHome || isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solidNav
          ? "bg-white/95 backdrop-blur-md shadow-md py-2 sm:py-3"
          : "bg-transparent py-3 sm:py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 z-50">
          <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full overflow-hidden flex items-center justify-center bg-white shadow">
            <img src="/school-logo.jpg" alt="NLSPS Kasan Logo" className="w-full h-full object-cover" />
          </div>
          <span className={`font-serif font-bold text-base sm:text-xl leading-tight transition-colors duration-300 ${solidNav ? "text-primary" : "text-white"}`}>
            NLSPS KASAN
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors hover:text-secondary ${
                    location === link.href || location === "/smc"
                      ? "text-secondary border-b-2 border-secondary pb-0.5"
                      : solidNav ? "text-foreground" : "text-white"
                  }`}
                >
                  {link.name}
                  <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 mt-3 w-44 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setDropdownOpen(false)}
                          className={`block px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary/10 hover:text-secondary ${
                            location === item.href ? "text-secondary bg-secondary/5" : "text-foreground"
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-secondary ${
                  location === link.href
                    ? "text-secondary border-b-2 border-secondary pb-0.5"
                    : solidNav ? "text-foreground" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            )
          )}
          <Link
            href="/admissions"
            className="bg-secondary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-secondary/90 transition-colors shadow-lg"
          >
            Apply Now
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="text-foreground" />
          ) : (
            <Menu className={solidNav ? "text-foreground" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full min-h-screen bg-white flex flex-col items-center justify-center gap-5 sm:gap-6 z-40 overflow-y-auto px-6 py-24"
          >
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="flex flex-col items-center gap-3">
                  <button
                    onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                    className="flex items-center gap-1 text-xl sm:text-2xl font-serif text-primary hover:text-secondary transition-colors"
                  >
                    {link.name}
                    <ChevronDown size={20} className={`transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {mobileAboutOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex flex-col items-center gap-2"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => { setMobileMenuOpen(false); setMobileAboutOpen(false); }}
                            className={`text-base sm:text-lg font-medium transition-colors ${
                              location === item.href ? "text-secondary" : "text-primary/70 hover:text-secondary"
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                    className={`text-xl sm:text-2xl font-serif transition-colors ${
                      location === link.href ? "text-secondary" : "text-primary hover:text-secondary"
                    }`}
                  >
                    {link.name}
                  </Link>
              )
            )}
            <Link
              href="/admissions"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-secondary text-white px-6 sm:px-8 py-3 rounded-full font-bold hover:bg-secondary/90 transition-colors text-sm sm:text-base"
            >
              Apply Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
