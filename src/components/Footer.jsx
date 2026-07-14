import { FaInstagram } from "react-icons/fa6";
import { FiPhone, FiMapPin } from "react-icons/fi";

const INSTAGRAM_URL =
  "https://www.instagram.com/shubh_unisex_salon?igsh=cDNhMmYzcWJyeGdq&utm_source=qr";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Hair Cut & Styling",
  "Hair Coloring",
  "Hair Spa & Keratin",
  "Beard Grooming",
  "Facial & Cleanup",
  "Bridal Makeup",
  "Waxing & Threading",
  "Smoothening",
];

function scrollTo(href) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function Footer() {
  return (
    <footer className="bg-salon-black text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <h3 className="font-playfair text-2xl text-white mb-2">
              Shubh <span className="text-gold italic">Unisex</span> Salon
            </h3>
            <p className="font-poppins text-white/50 text-sm leading-relaxed mb-6">
              Where Style Meets Perfection. Indore's premier unisex salon
              offering expert grooming and beauty services.
            </p>
            {/* Rating badge */}
            <div className="inline-flex items-center gap-2 border border-gold/30 px-4 py-2">
              <span className="text-gold">{"★".repeat(5)}</span>
              <span className="font-poppins text-white/60 text-xs">
                5.0 · 52+ Reviews
              </span>
            </div>
            {/* Instagram */}
            <div className="mt-5">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/50 hover:text-gold transition-colors duration-300 font-poppins text-sm"
              >
                <FaInstagram className="text-lg" /> @shubh_unisex_salon
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg text-white mb-5 relative">
              Quick Links
              <span className="block h-px w-8 bg-gold mt-2" />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="font-poppins text-sm text-white/50 hover:text-gold transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/50" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair text-lg text-white mb-5 relative">
              Services
              <span className="block h-px w-8 bg-gold mt-2" />
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo("#services");
                    }}
                    className="font-poppins text-sm text-white/50 hover:text-gold transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/50" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-lg text-white mb-5 relative">
              Contact Info
              <span className="block h-px w-8 bg-gold mt-2" />
            </h4>
            <div className="space-y-4">
              <a
                href="tel:07898831018"
                className="flex items-center gap-3 text-white/50 hover:text-gold transition-colors duration-300 group"
              >
                <FiPhone className="text-gold text-sm flex-shrink-0" />
                <span className="font-poppins text-sm">07898831018</span>
              </a>
              <div className="flex items-start gap-3">
                <FiMapPin className="text-gold text-sm flex-shrink-0 mt-0.5" />
                <p className="font-poppins text-sm text-white/50 leading-relaxed">
                  172, Bholaram Ustad Marg,
                  <br />
                  Pipliya Rao, Indore – 452001
                </p>
              </div>
              <div className="pt-2">
                <p className="font-poppins text-xs text-gold/70 tracking-widest uppercase mb-1">
                  Hours
                </p>
                <p className="font-poppins text-sm text-white/50">
                  Mon–Sun: 9:00 AM – 9:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-poppins text-white/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Shubh Unisex Salon. All Rights
            Reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-poppins text-xs text-white/40 hover:text-gold transition-colors duration-300 tracking-widest uppercase border border-white/10 hover:border-gold px-4 py-2"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
