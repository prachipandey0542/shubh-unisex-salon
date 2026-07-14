import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-salon-black flex flex-col items-center justify-center z-50">
      {/* Spinning gold ring */}
      <motion.div
        className="w-20 h-20 rounded-full border-4 border-gold/20 border-t-gold mb-8"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />

      {/* Brand name */}
      <motion.h1
        className="font-playfair text-3xl text-salon-white tracking-widest mb-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Shubh <span className="text-gold italic">Unisex</span> Salon
      </motion.h1>

      {/* Tagline */}
      <motion.p
        className="font-poppins text-salon-white/50 text-xs tracking-[0.35em] uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Where Style Meets Perfection
      </motion.p>

      {/* Progress bar */}
      <motion.div className="absolute bottom-0 left-0 h-0.5 bg-gold loading-bar" />
    </div>
  );
}

export default LoadingScreen;
