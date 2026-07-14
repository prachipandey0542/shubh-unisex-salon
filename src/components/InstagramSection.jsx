import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa6";

const INSTAGRAM_URL =
  "https://www.instagram.com/shubh_unisex_salon?igsh=cDNhMmYzcWJyeGdq&utm_source=qr";

// Mock Instagram grid images
const igImages = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=300&q=80",
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300&q=80",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&q=80",
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=300&q=80",
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=300&q=80",
  "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&q=80",
];

function InstagramSection() {
  return (
    <section className="py-24 bg-salon-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA block */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FaInstagram className="text-gold text-5xl mx-auto mb-5" />
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Follow Us on <span className="text-gold italic">Instagram</span>
          </h2>
          <p className="font-poppins text-white/50 text-base max-w-lg mx-auto mb-8 leading-relaxed">
            Stay updated with the latest hairstyles, beauty transformations,
            exclusive offers, and behind-the-scenes moments from Shubh Unisex
            Salon.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white px-8 py-4 font-poppins font-medium tracking-widest uppercase text-sm transition-all duration-300 hover:opacity-90 hover:scale-105"
          >
            <FaInstagram className="text-lg" />
            @shubh_unisex_salon
          </a>
        </motion.div>

        {/* Instagram grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {igImages.map((src, i) => (
            <motion.a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="relative overflow-hidden group aspect-square block"
            >
              <img
                src={src}
                alt={`Instagram post ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-salon-black/0 group-hover:bg-salon-black/50 transition-all duration-300 flex items-center justify-center">
                <FaInstagram className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InstagramSection;
