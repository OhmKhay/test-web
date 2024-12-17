"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, BarChart, List } from "lucide-react";

interface LectureContentProps {
  lecture: {
    duration: string;
    level: string;
    topics: string[];
  };
}

export default function LectureContent({ lecture }: LectureContentProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center space-x-6 mb-6">
          <div className="flex items-center">
            <Clock className="h-5 w-5 mr-2 text-primary" />
            <span>{lecture.duration}</span>
          </div>
          <div className="flex items-center">
            <BarChart className="h-5 w-5 mr-2 text-primary" />
            <span>{lecture.level}</span>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center mb-4">
            <List className="h-5 w-5 mr-2 text-primary" />
            <h3 className="text-xl font-bold">Topics Covered</h3>
          </div>
          <ul className="space-y-3">
            {lecture.topics.map((topic, index) => (
              <motion.li
                key={topic}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center"
              >
                <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 text-sm">
                  {index + 1}
                </div>
                <span>{topic}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}