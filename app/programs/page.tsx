"use client";

import { motion } from "framer-motion";
import { BookOpen, Clock, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const programs = [
  {
    title: "Computer Science",
    type: "Bachelor of Science",
    duration: "4 years",
    icon: <BookOpen className="h-6 w-6" />,
    description: "Learn programming, algorithms, and software development.",
  },
  {
    title: "Business Administration",
    type: "Bachelor of Business",
    duration: "4 years",
    icon: <Users className="h-6 w-6" />,
    description: "Study management, marketing, and entrepreneurship.",
  },
  {
    title: "Data Science",
    type: "Master of Science",
    duration: "2 years",
    icon: <Award className="h-6 w-6" />,
    description: "Master big data analytics and machine learning.",
  },
  // Add more programs as needed
];

export default function Programs() {
  return (
    <main className="min-h-screen bg-gray-50 pt-16">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20 bg-gradient-to-br from-blue-300 to-primary text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Academic Programs
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-100 max-w-2xl"
          >
            Discover our comprehensive range of undergraduate and graduate programs designed to prepare you for success.
          </motion.p>
        </div>
      </motion.section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4 text-primary">
                    {program.icon}
                    <span className="ml-2 font-semibold">{program.type}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{program.duration}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <Button className="w-full">Learn More</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}