"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, GraduationCap, BookOpen, TrendingUp } from "lucide-react";

interface ProgramStatsProps {
  stats: {
    students: number;
    professors: number;
    courses: number;
    jobPlacement: string;
  };
}

export default function ProgramStats({ stats }: ProgramStatsProps) {
  const statItems = [
    { icon: Users, label: "Students", value: stats.students },
    { icon: GraduationCap, label: "Professors", value: stats.professors },
    { icon: BookOpen, label: "Courses", value: stats.courses },
    { icon: TrendingUp, label: "Job Placement", value: stats.jobPlacement },
  ];

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-6">Program Statistics</h3>
        <div className="grid grid-cols-2 gap-4">
          {statItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <Icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="font-bold text-xl mb-1">{item.value}</div>
                <div className="text-sm text-gray-600">{item.label}</div>
              </motion.div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}