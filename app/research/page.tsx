"use client";

import { motion } from "framer-motion";
import { Microscope, Brain, Atom, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const researchAreas = [
  {
    title: "Artificial Intelligence",
    icon: <Brain className="h-8 w-8" />,
    description: "Advancing machine learning and neural networks",
    publications: 156,
  },
  {
    title: "Quantum Computing",
    icon: <Atom className="h-8 w-8" />,
    description: "Exploring quantum algorithms and applications",
    publications: 89,
  },
  {
    title: "Biotechnology",
    icon: <Microscope className="h-8 w-8" />,
    description: "Developing innovative medical solutions",
    publications: 234,
  },
  {
    title: "Environmental Science",
    icon: <Leaf className="h-8 w-8" />,
    description: "Studying climate change and sustainability",
    publications: 178,
  },
];

export default function Research() {
  return (
    <main className="min-h-screen pt-16">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Research & Innovation
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl"
          >
            Pushing the boundaries of knowledge through groundbreaking research and innovation
          </motion.p>
        </div>
      </motion.section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4 text-primary">
                      {area.icon}
                      <h3 className="text-xl font-bold ml-3">{area.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{area.description}</p>
                    <div className="text-sm text-gray-500">
                      {area.publications} Publications
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}