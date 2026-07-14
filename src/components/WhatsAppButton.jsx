import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa6'
import { FiPhone } from 'react-icons/fi'

/**
 * Floating WhatsApp button (desktop) + sticky Call button (mobile).
 */
function WhatsAppButton() {
  return (
    <>
      {/* WhatsApp floating button — all screen sizes */}
      <motion.a
        href="https://wa.me/917898831018?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment%20at%20Shubh%20Unisex%20Salon."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-24 left-5 md:bottom-8 md:left-8 z-40 w-14 h-14 bg-green-500 text-white flex items-center justify-center rounded-full shadow-lg shadow-green-500/40 hover:bg-green-600 transition-colors duration-300"
      >
        {/* Pulse ring */}
        <motion.span
          className="absolute inset-0 rounded-full bg-green-500"
          animate={{ scale: [1, 1.4, 1], opacity: [0.7, 0, 0.7] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <FaWhatsapp className="text-2xl relative z-10" />
      </motion.a>

      {/* Sticky call bar — mobile only */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        <a
          href="tel:07898831018"
          className="flex items-center justify-center gap-3 bg-gold text-salon-black font-poppins font-semibold text-sm tracking-widest uppercase py-4 w-full hover:bg-gold-dark transition-colors duration-300"
        >
          <FiPhone className="text-base" />
          Call Now — 07898831018
        </a>
      </div>
    </>
  )
}

export default WhatsAppButton
