"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const links = {
  academics: [
    { name: "Programs", href: "/programs" },
    { name: "Academic Calendar", href: "#" },
    { name: "Library", href: "#" },
    { name: "Research", href: "/research" },
  ],
  campus: [
    { name: "Campus Life", href: "/campus" },
    { name: "Housing", href: "#" },
    { name: "Athletics", href: "#" },
    { name: "Events", href: "#" },
  ],
  admissions: [
    { name: "Apply", href: "/admissions" },
    { name: "Financial Aid", href: "#" },
    { name: "Visit Campus", href: "#" },
    { name: "International Students", href: "#" },
  ],
  connect: [
    { name: "Contact Us", href: "#" },
    { name: "News", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Alumni", href: "#" },
  ],
};

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {Object.entries(links).map(([category, items], index) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            {category}
          </h3>
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-base text-gray-300 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}