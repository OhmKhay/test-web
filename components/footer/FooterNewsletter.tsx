"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function FooterNewsletter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
      className="max-w-md"
    >
      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
        Subscribe to our newsletter
      </h3>
      <p className="text-base text-gray-300 mb-4">
        Stay updated with the latest news, events, and opportunities.
      </p>
      <form className="flex gap-x-3">
        <Input
          type="email"
          placeholder="Enter your email"
          className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-primary"
        />
        <Button>Subscribe</Button>
      </form>
    </motion.div>
  );
}