"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen } from "lucide-react";

interface TeacherProfileProps {
  professor: {
    name: string;
    title: string;
    image: string;
    education: string;
    expertise: string[];
    bio: string;
  };
}

export default function TeacherProfile({ professor }: TeacherProfileProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-32 h-32 mx-auto mb-4"
          >
            <img
              src={professor.image}
              alt={professor.name}
              className="w-full h-full rounded-full object-cover"
            />
          </motion.div>
          <h3 className="text-xl font-bold">{professor.name}</h3>
          <p className="text-gray-600">{professor.title}</p>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex items-center mb-2">
              <Award className="h-5 w-5 mr-2 text-primary" />
              <span className="font-semibold">Education</span>
            </div>
            <p className="text-gray-600">{professor.education}</p>
          </div>

          <div>
            <div className="flex items-center mb-2">
              <BookOpen className="h-5 w-5 mr-2 text-primary" />
              <span className="font-semibold">Areas of Expertise</span>
            </div>
            <ul className="list-disc list-inside text-gray-600">
              {professor.expertise.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Biography</h4>
            <p className="text-gray-600">{professor.bio}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}