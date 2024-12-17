"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TeacherProfile from "@/components/lectures/TeacherProfile";
import LectureContent from "@/components/lectures/LectureContent";
import RelatedLectures from "@/components/lectures/RelatedLectures";

export default function LectureDetails({ params }: { params: { id: string } }) {
  // In a real app, fetch lecture details based on id
  const lecture = {
    title: "Introduction to Computer Science",
    professor: {
      name: "Dr. Sarah Johnson",
      title: "Professor of Computer Science",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      education: "Ph.D. in Computer Science, MIT",
      expertise: ["Artificial Intelligence", "Machine Learning", "Algorithm Design"],
      bio: "Dr. Johnson has over 15 years of experience in computer science research and education...",
    },
    duration: "1h 15m",
    level: "Beginner",
    description: "This comprehensive introduction covers fundamental concepts in computer science...",
    topics: [
      "Introduction to Programming Concepts",
      "Basic Data Structures",
      "Algorithm Analysis",
      "Object-Oriented Programming",
    ],
  };

  return (
    <main className="min-h-screen pt-16">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{lecture.title}</h1>
            <p className="text-xl text-gray-200 mb-8">{lecture.description}</p>
            <Button size="lg" className="bg-white text-blue-900 hover:bg-white/90">
              Start Learning
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="content" className="mb-8">
              <TabsList>
                <TabsTrigger value="content">Lecture Content</TabsTrigger>
                <TabsTrigger value="materials">Materials</TabsTrigger>
                <TabsTrigger value="discussion">Discussion</TabsTrigger>
              </TabsList>
              <TabsContent value="content">
                <LectureContent lecture={lecture} />
              </TabsContent>
              <TabsContent value="materials">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Course Materials</h3>
                    {/* Add materials content */}
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="discussion">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Discussion Forum</h3>
                    {/* Add discussion content */}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          <div className="space-y-6">
            <TeacherProfile professor={lecture.professor} />
            <RelatedLectures />
          </div>
        </div>
      </div>
    </main>
  );
}