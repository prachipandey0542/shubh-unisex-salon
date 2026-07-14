import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { testimonials } from "../data/testimonialsData";

function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };
  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: (dir) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      transition: { duration: 0.3 },
    }),
  };

  const t = testimonials[current];

  return (
    <section id="reviews" className="py-24 bg-salon-beige overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="gold-divider justify-center mb-4">
            <span />
            <em>Testimonials</em>
            <span />
          </div>
          <h2 className="section-heading">
            What Our <span className="text-gold italic">Clients Say</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="text-gold text-lg">{"★".repeat(5)}</span>
            <span className="font-poppins text-salon-black/60 text-sm">
              52+ Happy Customers · 5.0 Rating
            </span>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="bg-white shadow-lg shadow-black/5 p-10 md:p-14 text-center relative"
            >
              {/* Opening quote */}
              <span className="absolute top-6 left-8 font-playfair text-8xl text-gold/20 leading-none select-none">
                "
              </span>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-gold text-xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Review text */}
              <p className="font-poppins text-salon-black/70 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto relative z-10">
                {t.review}
              </p>

              {/* Avatar + name */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-full bg-salon-black flex items-center justify-center text-gold font-playfair font-bold text-lg border-2 border-gold">
                  {t.avatar}
                </div>
                <p className="font-playfair font-semibold text-salon-black text-lg">
                  {t.name}
                </p>
                <p className="font-poppins text-salon-black/50 text-xs tracking-widest uppercase">
                  {t.location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Prev / Next */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 w-10 h-10 border border-gold/40 hover:bg-gold hover:border-gold text-salon-black hover:text-salon-black flex items-center justify-center transition-all duration-300"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 w-10 h-10 border border-gold/40 hover:bg-gold hover:border-gold text-salon-black hover:text-salon-black flex items-center justify-center transition-all duration-300"
          >
            <FiChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-gold" : "w-3 bg-gold/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
