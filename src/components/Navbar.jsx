import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-salon-black/95 backdrop-blur-md shadow-lg shadow-black/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={() => handleNavClick("#home")}
          className="font-playfair text-xl md:text-2xl text-white tracking-wide cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Shubh <span className="text-gold italic">Unisex</span> Salon
        </motion.a>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="font-poppins text-sm text-white/80 hover:text-gold tracking-widest uppercase transition-colors duration-300 relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>

        {/* CTA button */}
        <motion.a
          href="tel:07898831018"
          className="hidden lg:inline-flex items-center gap-2 border border-gold text-gold px-5 py-2 text-xs font-poppins font-medium tracking-widest uppercase transition-all duration-300 hover:bg-gold hover:text-salon-black"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Book Appointment
        </motion.a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="lg:hidden bg-salon-black/98 backdrop-blur-md border-t border-gold/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="font-poppins text-sm text-white/80 hover:text-gold tracking-widest uppercase transition-colors duration-300 py-2 border-b border-white/10"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:07898831018"
                className="inline-flex justify-center items-center gap-2 border border-gold text-gold px-5 py-3 text-xs font-poppins font-medium tracking-widest uppercase mt-2 hover:bg-gold hover:text-salon-black transition-all duration-300"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
