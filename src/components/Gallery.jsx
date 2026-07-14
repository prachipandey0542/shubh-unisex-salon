import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight, FiZoomIn } from "react-icons/fi";
import { galleryImages } from "../data/galleryData";

function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex(
      (i) => (i - 1 + galleryImages.length) % galleryImages.length,
    );
  const nextImage = () =>
    setLightboxIndex((i) => (i + 1) % galleryImages.length);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "ArrowRight") nextImage();
  };

  return (
    <section id="gallery" className="py-24 bg-salon-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="gold-divider justify-center mb-4">
            <span />
            <em>Our Work</em>
            <span />
          </div>
          <h2 className="section-heading">
            Gallery of <span className="text-gold italic">Transformations</span>
          </h2>
          <p className="section-subheading">
            A glimpse into the artistry and atmosphere of Shubh Unisex Salon.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className={`relative overflow-hidden cursor-pointer group ${
                i === 0 || i === 5 ? "row-span-2" : ""
              }`}
              style={{ height: i === 0 || i === 5 ? undefined : "200px" }}
              onClick={() => openLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{ height: i === 0 || i === 5 ? "412px" : "200px" }}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-salon-black/0 group-hover:bg-salon-black/50 transition-all duration-300 flex items-center justify-center">
                <FiZoomIn className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100" />
              </div>
              {/* Gold border on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-gold text-3xl transition-colors z-10"
            >
              <FiX />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 md:left-8 text-white/70 hover:text-gold text-3xl transition-colors z-10 p-2"
            >
              <FiChevronLeft />
            </button>

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              src={galleryImages[lightboxIndex].src.replace("w=600", "w=1200")}
              alt={galleryImages[lightboxIndex].alt}
              className="max-w-4xl max-h-[80vh] w-full object-contain px-16"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 md:right-8 text-white/70 hover:text-gold text-3xl transition-colors z-10 p-2"
            >
              <FiChevronRight />
            </button>

            {/* Caption */}
            <p className="absolute bottom-8 left-1/2 -translate-x-1/2 font-poppins text-white/60 text-sm tracking-wide">
              {lightboxIndex + 1} / {galleryImages.length} —{" "}
              {galleryImages[lightboxIndex].alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Gallery;
