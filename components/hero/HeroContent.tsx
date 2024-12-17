
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroContent = () => {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-xl md:text-3xl font-bold text-white mb-6"
      >
        Shape Your Future at
        <span className="text-primary-20"> Shan Community College</span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
      >
        Discover world-class education, groundbreaking research, and endless opportunities
        to make your mark on the world.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Button size="lg" className="text-lg">
          Explore Programs
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button size="lg" variant="outline" className="text-lg bg-white/10 backdrop-blur-sm">
          Schedule a Visit
        </Button>
      </motion.div>
    </div>
  );
}

export default HeroContent;