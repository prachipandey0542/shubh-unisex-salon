import { motion } from 'framer-motion'
import { FiChevronDown, FiPhone } from 'react-icons/fi'

/**
 * Full-viewport hero section with background image and animated text.
 */
function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />

      {/* Animated gold particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold/50"
            style={{
              left: `${15 + i * 14}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{ y: [-10, 10, -10], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Overline */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="block h-px w-16 bg-gold" />
          <span className="font-poppins text-gold text-xs tracking-[0.4em] uppercase">
            Premium Grooming
          </span>
          <span className="block h-px w-16 bg-gold" />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Where Style Meets{' '}
          <em className="text-gold not-italic">Perfection</em>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="font-poppins text-white/75 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Experience the ultimate in hair, skin, and beauty care. Shubh Unisex Salon
          brings world-class grooming to Indore with premium products and expert hands.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <button
            onClick={() => handleScroll('#contact')}
            className="btn-gold px-10 py-4 text-sm tracking-widest"
          >
            Book Appointment
          </button>
          <a
            href="tel:07898831018"
            className="flex items-center gap-2 border border-white/60 text-white px-10 py-4 font-poppins font-medium tracking-widest uppercase text-sm transition-all duration-300 hover:border-gold hover:text-gold"
          >
            <FiPhone className="text-base" /> Call Now
          </a>
          <button
            onClick={() => handleScroll('#services')}
            className="font-poppins text-white/70 text-sm tracking-widest uppercase underline underline-offset-4 decoration-gold/50 hover:text-gold transition-colors duration-300"
          >
            View Services
          </button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          className="flex items-center justify-center gap-8 mt-16 pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {[
            { value: '52+', label: 'Happy Clients' },
            { value: '5.0', label: 'Star Rating' },
            { value: '7+', label: 'Years Experience' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-playfair text-2xl text-gold font-bold">{stat.value}</p>
              <p className="font-poppins text-white/50 text-xs tracking-widest uppercase mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => handleScroll('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-gold transition-colors duration-300 flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="font-poppins text-xs tracking-widest uppercase">Scroll</span>
        <FiChevronDown className="text-xl" />
      </motion.button>
    </section>
  )
}

export default Hero
