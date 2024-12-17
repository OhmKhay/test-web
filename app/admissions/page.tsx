"use client";

import { motion } from "framer-motion";
import { Calendar, GraduationCap, FileText, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const steps = [
  {
    title: "Submit Application",
    icon: <FileText className="h-8 w-8" />,
    description: "Complete the online application form with required documents",
  },
  {
    title: "Academic Review",
    icon: <GraduationCap className="h-8 w-8" />,
    description: "Your application will be reviewed by our admissions committee",
  },
  {
    title: "Interview",
    icon: <Users className="h-8 w-8" />,
    description: "Selected candidates will be invited for an interview",
  },
  {
    title: "Decision",
    icon: <Calendar className="h-8 w-8" />,
    description: "Receive your admissions decision within 4-6 weeks",
  },
];

export default function Admissions() {
  return (
    <main className="min-h-screen pt-16">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-br from-blue-400 to-primary text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Join Our Community
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-100 max-w-2xl mx-auto mb-8"
          >
            Take the first step towards your future at Shan 
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm">
              Start Your Application
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4 text-primary">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
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