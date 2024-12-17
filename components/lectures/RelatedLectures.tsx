"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Video } from "lucide-react";

const relatedLectures = [
  {
    title: "Data Structures Fundamentals",
    duration: "1h 30m",
    professor: "Dr. Michael Chen",
  },
  {
    title: "Algorithm Design Basics",
    duration: "1h 45m",
    professor: "Prof. Lisa Anderson",
  },
  {
    title: "Object-Oriented Programming",
    duration: "2h",
    professor: "Dr. James Wilson",
  },
];

export default function RelatedLectures() {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4">Related Lectures</h3>
        <div className="space-y-4">
          {relatedLectures.map((lecture, index) => (
            <motion.div
              key={lecture.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
            >
              <Video className="h-5 w-5 text-primary mt-1" />
              <div>
                <h4 className="font-semibold">{lecture.title}</h4>
                <p className="text-sm text-gray-600">
                  {lecture.professor} • {lecture.duration}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}