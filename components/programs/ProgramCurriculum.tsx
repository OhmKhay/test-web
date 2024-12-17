"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const years = [
  {
    year: "Year 1",
    courses: [
      "Introduction to Programming",
      "Calculus I & II",
      "Digital Logic Design",
      "Physics for Computing",
    ],
  },
  {
    year: "Year 2",
    courses: [
      "Data Structures and Algorithms",
      "Computer Architecture",
      "Database Systems",
      "Web Development",
    ],
  },
  {
    year: "Year 3",
    courses: [
      "Software Engineering",
      "Operating Systems",
      "Artificial Intelligence",
      "Computer Networks",
    ],
  },
  {
    year: "Year 4",
    courses: [
      "Machine Learning",
      "Cloud Computing",
      "Cybersecurity",
      "Capstone Project",
    ],
  },
];

export default function ProgramCurriculum() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Curriculum Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {years.map((year, index) => (
          <motion.div
            key={year.year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-primary" />
                  {year.year}
                </h3>
                <ul className="space-y-2">
                  {year.courses.map((course) => (
                    <li key={course} className="text-gray-600">
                      {course}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}