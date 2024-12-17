"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Trophy, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "200+ Programs",
    description: "Diverse range of undergraduate and graduate programs across multiple disciplines",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Expert Faculty",
    description: "Learn from world-renowned professors and industry experts",
  },
  {
    icon: <Trophy className="h-10 w-10 text-primary" />,
    title: "Research Excellence",
    description: "Leading research institution with state-of-the-art facilities",
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Global Community",
    description: "Join a diverse community of students from over 100 countries",
  },
];

const Features = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
            Why Choose Shan Community College?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience excellence in education, research, and innovation at one of the world's leading institutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;