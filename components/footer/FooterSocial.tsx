"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
];

export default function FooterSocial() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
      className="flex space-x-6"
    >
      {socialLinks.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.name}
            href={item.href}
            className="text-gray-400 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">{item.name}</span>
            <Icon className="h-6 w-6" />
          </a>
        );
      })}
    </motion.div>
  );
}