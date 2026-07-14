import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'

/**
 * Scroll-to-top button — appears after scrolling 400px.
 */
function ScrollTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-5 md:bottom-8 md:right-8 z-40 w-12 h-12 bg-gold text-salon-black flex items-center justify-center shadow-lg hover:bg-gold-dark transition-colors duration-300"
          aria-label="Scroll to top"
        >
          <FiArrowUp className="text-xl font-bold" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollTop
