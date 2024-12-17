"use client";

import ImageSlider from "./hero/ImageSlider";
import HeroContent from "./hero/HeroContent";

const Hero = () => {
  return (
    <div className="relative  mt-[3.6rem]  min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
      <ImageSlider />
      <HeroContent />
    </div>
  );
};

export default Hero;