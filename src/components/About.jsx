import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 52, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: ".0★", label: "Star Rating" },
  { value: 7, suffix: "+", label: "Years Experience" },
  { value: 200, suffix: "+", label: "Transformations" },
];

function useCounter(target, duration = 1800) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return { count, setStarted };
}

function StatCounter({ value, suffix, label }) {
  const { count, setStarted } = useCounter(value);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [setStarted]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-playfair text-3xl md:text-4xl font-bold text-gold">
        {count}
        {suffix}
      </p>
      <p className="font-poppins text-salon-black/60 text-sm mt-1 tracking-wide">
        {label}
      </p>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function About() {
  return (
    <section id="about" className="py-24 bg-salon-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold/40 z-0" />
            <div className="relative z-10 overflow-hidden">
              <motion.img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
                alt="Professional stylist at Shubh Unisex Salon"
                className="w-full h-[500px] object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
              />

              <div className="absolute bottom-6 right-6 bg-salon-black text-white px-5 py-4 text-center shadow-xl">
                <p className="font-playfair text-2xl text-gold font-bold">
                  5.0
                </p>
                <p className="font-poppins text-xs text-white/70 tracking-widest uppercase mt-1">
                  Google Rating
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.div
              className="gold-divider justify-start mb-6"
              variants={fadeUp}
            >
              <span />
              <em>About Us</em>
            </motion.div>

            <motion.h2
              className="section-heading mb-6 leading-tight"
              variants={fadeUp}
            >
              Indore's Finest
              <br />
              <span className="text-gold italic">Unisex Salon</span>
            </motion.h2>

            <motion.p
              className="font-poppins text-salon-black/70 text-base leading-relaxed mb-5"
              variants={fadeUp}
            >
              At Shubh Unisex Salon, we believe grooming is an art. Since
              opening our doors, we have been dedicated to delivering premium
              hair, skin, and beauty services that leave you looking and feeling
              your absolute best.
            </motion.p>

            <motion.p
              className="font-poppins text-salon-black/70 text-base leading-relaxed mb-8"
              variants={fadeUp}
            >
              Our team of experienced professionals uses only the finest
              products and stays ahead of the latest styling trends. Whether you
              are here for a quick trim or a complete transformation, we treat
              every visit as a luxury experience.
            </motion.p>

            {/* Feature list */}
            <motion.div
              className="grid grid-cols-2 gap-3 mb-10"
              variants={fadeUp}
            >
              {[
                "Experienced Professionals",
                "Premium Quality Products",
                "Modern Styling Techniques",
                "Comfortable Environment",
                "Hygienic Standards",
                "Affordable Pricing",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  <span className="font-poppins text-sm text-salon-black/70">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.a
              href="tel:07898831018"
              className="btn-primary inline-block"
              variants={fadeUp}
            >
              Book a Session
            </motion.a>
          </motion.div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-b border-gold/20">
          {stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
