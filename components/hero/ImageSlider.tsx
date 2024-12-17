"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    url: "/assets/scc-banner-03.jpg'",
    alt: "University Campus",
  },
  {
    url: "/assets/scc-banner-02.jpg'",
    alt: "Library Interior",
  },
  {
    url: "/assets/scc-banner-01.jpg'",
    alt: "Research Laboratory",
  },

];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-all  duration-1000 filter blur-sm"
            style={{ backgroundImage: `url(${images[currentIndex].url.replace(/'/g, '')})` }}
          />
          <div className="absolute inset-0 bg-black/40 filter blur-sm mix-blend-multiply" />
        </motion.div>
      </AnimatePresence>
      
      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white w-4" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;