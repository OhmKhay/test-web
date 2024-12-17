"use client";

import { motion } from "framer-motion";
import { Filter, Video, FileText, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const lectures = [
  {
    title: "Introduction to Computer Science",
    professor: "Dr. Sarah Johnson",
    type: "Video Lecture",
    duration: "1h 15m",
    icon: <Video className="h-5 w-5" />,
    department: "Computer Science",
  },
  {
    title: "Advanced Mathematics Concepts",
    professor: "Prof. Michael Chen",
    type: "Recorded Lecture",
    duration: "1h 45m",
    icon: <Video className="h-5 w-5" />,
    department: "Mathematics",
  },
  {
    title: "Business Ethics",
    professor: "Dr. Emily Rodriguez",
    type: "Lecture Notes",
    icon: <FileText className="h-5 w-5" />,
    department: "Business",
  },
  {
    title: "Quantum Physics Fundamentals",
    professor: "Prof. David Wilson",
    type: "Video Lecture",
    duration: "2h",
    icon: <Video className="h-5 w-5" />,
    department: "Physics",
  },
];

export default function Lectures() {
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
            Online Lectures
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mb-8"
          >
            Access our comprehensive collection of lectures and educational materials
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <div className="flex-1">
              <Input
                placeholder="Search lectures..."
                className="w-full bg-white/10 border-white/20 text-white placeholder-gray-300"
              />
            </div>
            <Button variant="outline" className="bg-white/10">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lectures.map((lecture, index) => (
            <motion.div
              key={lecture.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center text-primary mb-2">
                        {lecture.icon}
                        <span className="ml-2 text-sm">{lecture.type}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{lecture.title}</h3>
                      <p className="text-gray-600 mb-1">{lecture.professor}</p>
                      {lecture.duration && (
                        <p className="text-sm text-gray-500">{lecture.duration}</p>
                      )}
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}