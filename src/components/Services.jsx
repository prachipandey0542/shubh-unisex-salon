import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "../data/servicesData";

const categories = [
  { value: "all", label: "All Services" },
  { value: "hair", label: "Hair" },
  { value: "skin", label: "Skin & Beauty" },
  { value: "men", label: "Men's Grooming" },
  { value: "makeup", label: "Makeup" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.5 },
  }),
};

/**
 * Services section — filterable card grid.
 */
function Services() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-salon-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="gold-divider justify-center mb-4">
            <span />
            <em>What We Offer</em>
            <span />
          </div>
          <h2 className="section-heading">
            Our <span className="text-gold italic">Premium</span> Services
          </h2>
          <p className="section-subheading">
            Expert care for every grooming need — hair, skin, and beauty — all
            under one roof.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`font-poppins text-xs tracking-widest uppercase px-5 py-2 border transition-all duration-300 ${
                activeCategory === cat.value
                  ? "bg-salon-black text-gold border-salon-black"
                  : "bg-transparent text-salon-black border-salon-black/30 hover:border-gold hover:text-gold"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Service cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          layout
        >
          {filtered.map((service, i) => (
            <motion.div
              key={service.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(212,175,55,0.15)",
              }}
              className="bg-white group cursor-default overflow-hidden border border-transparent hover:border-gold/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-salon-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-playfair text-lg font-semibold text-salon-black mb-2 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-poppins text-salon-black/60 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a href="tel:07898831018" className="btn-primary inline-block">
            Book Your Service
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
