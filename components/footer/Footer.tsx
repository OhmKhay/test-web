"use client";

import { motion } from "framer-motion";

import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";
import FooterNewsletter from "./FooterNewsletter";
import { LogoIcon } from "@/app/components/Icons";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Logo and Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-3">
              <LogoIcon />
              <span className="text-xl font-bold">Shan Community College</span>
            </div>
            <p className="text-gray-300 max-w-md">
              Empowering minds, fostering innovation, and building a better future through education and research excellence.
            </p>
            <FooterSocial />
          </motion.div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <FooterLinks />
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FooterNewsletter />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-sm text-gray-400 lg:text-right"
            >
              <p>© {new Date().getFullYear()} Shan Community College. All rights reserved.</p>
              <div className="mt-2 space-x-4">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}