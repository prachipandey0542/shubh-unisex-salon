import { motion } from "framer-motion";
import { FiPhone, FiMapPin, FiClock } from "react-icons/fi";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=172+Bholaram+Ustad+Marg+Indore+Madhya+Pradesh+452001";

const contactCards = [
  {
    icon: FiPhone,
    title: "Call Us",
    lines: ["07898831018"],
    action: { href: "tel:07898831018", label: "Call Now" },
  },
  {
    icon: FiMapPin,
    title: "Our Location",
    lines: [
      "172, Bholaram Ustad Marg,",
      "Near Shivam Puri, Bholaram Ustad Market,",
      "Sector A Gate, Pipliya Rao,",
      "Indore, Madhya Pradesh - 452001",
    ],
    action: { href: MAPS_URL, label: "Get Directions", external: true },
  },
  {
    icon: FiClock,
    title: "Working Hours",
    lines: ["Monday - Sunday", "9:00 AM - 9:00 PM", "Open All Days"],
    action: { href: "tel:07898831018", label: "Book Appointment" },
  },
];

function Contact() {
  return (
    <section id="contact" className="py-24 bg-salon-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="gold-divider justify-center mb-4">
            <span />
            <em>Get In Touch</em>
            <span />
          </div>
          <h2 className="section-heading">
            Visit or <span className="text-gold italic">Contact Us</span>
          </h2>
          <p className="section-subheading">
            We would love to hear from you. Walk in or call to book your
            appointment.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {contactCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-gray-800  p-8 flex flex-col items-center text-center group transition-all duration-300 border-2 border-transparent hover:border-gold"
            >
              <div className="w-14 h-14 border border-gold/40 flex items-center justify-center mb-5 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                <card.icon className="text-gold text-xl group-hover:text-salon-black transition-colors duration-300" />
              </div>

              <h3 className="font-playfair text-xl text-white font-semibold mb-4">
                {card.title}
              </h3>

              <div className="mb-6 flex-1">
                {card.lines.map((line, j) => (
                  <p
                    key={j}
                    className="font-poppins text-white/60 text-sm leading-relaxed"
                  >
                    {line}
                  </p>
                ))}
              </div>

              <a
                href={card.action.href}
                {...(card.action.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="btn-gold text-xs px-6 py-2.5 inline-block"
              >
                {card.action.label}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Google Map embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-gold/20 overflow-hidden"
        >
          <iframe
            title="Shubh Unisex Salon Location"
            src="https://maps.google.com/maps?q=172+Bholaram+Ustad+Marg+Indore+Madhya+Pradesh+452001&output=embed"
            width="100%"
            height="420"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
