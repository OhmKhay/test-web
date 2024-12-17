'use client';
import React from "react";
import { Newsletter } from "../components/Newsletter";
import { Academics } from "../components/Academics";
import { motion } from "framer-motion";

function faqPage() {
  return (
    <>
         <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-br mt-[3.5rem] from-blue-400 to-primary text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
           News & Events
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-100 max-w-2xl mx-auto mb-8"
          >
           Stay informed about the latest updates and happenings.
          </motion.p>
         
        </div>
      </motion.section>

      <Academics />
      <Newsletter />
    </>
  );
}

export default faqPage;
