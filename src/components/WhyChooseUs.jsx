import { motion } from "framer-motion";
import { FaRupeeSign } from "react-icons/fa";
import {
  FiAward,
  FiStar,
  FiTrendingUp,
  FiShield,
  FiSmile,
  FiHeart,
  FiThumbsUp,
} from "react-icons/fi";

const reasons = [
  {
    icon: FiAward,
    title: "Experienced Professionals",
    desc: "Skilled stylists trained in the latest techniques with years of hands-on expertise.",
  },
  {
    icon: FiStar,
    title: "Premium Products",
    desc: "We use only top-tier, internationally trusted products for every treatment.",
  },
  {
    icon: FaRupeeSign,
    title: "Affordable Pricing",
    desc: "Luxury results without the luxury price tag — quality grooming for everyone.",
  },
  {
    icon: FiTrendingUp,
    title: "Latest Styling Trends",
    desc: "Always up to date with global trends so you always look contemporary and fresh.",
  },
  {
    icon: FiShield,
    title: "Clean & Hygienic",
    desc: "Rigorous sanitation standards maintained after every client, every time.",
  },
  {
    icon: FiSmile,
    title: "Comfortable Environment",
    desc: "Relax in our calm, welcoming salon designed for your complete comfort.",
  },
  {
    icon: FiHeart,
    title: "Excellent Satisfaction",
    desc: "We are not done until you love the result. Your satisfaction is our priority.",
  },
  {
    icon: FiThumbsUp,
    title: "52+ Five-Star Reviews",
    desc: "A consistent 5.0 Google rating backed by over 52 verified happy customers.",
  },
];

function WhyChooseUs() {
  return (
    <section className="py-24 bg-salon-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="gold-divider justify-center mb-4">
            <span />
            <em className="text-gold/80">Our Difference</em>
            <span />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white">
            Why Choose <span className="text-gold italic">Shubh Salon</span>
          </h2>
          <p className="font-poppins text-white/50 text-base mt-4 max-w-xl mx-auto">
            Eight reasons our clients keep coming back — and send their friends.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6, borderColor: "#D4AF37" }}
              className="border border-white/10 p-7 group cursor-pointer transition-all duration-300"
            >
              <div className="w-12 h-12 border border-gold/40 flex items-center justify-center mb-5 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                <reason.icon className="text-gold text-xl group-hover:text-salon-black transition-colors duration-300" />
              </div>
              <h3 className="font-playfair text-lg text-white font-semibold mb-3 group-hover:text-gold transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="font-poppins text-white/50 text-sm leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
