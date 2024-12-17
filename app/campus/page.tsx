"use client";

import { motion } from "framer-motion";
import { Coffee, Book, Dumbbell, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const facilities = [
  {
    title: "Modern Libraries",
    icon: <Book className="h-8 w-8" />,
    description: "24/7 access to extensive digital and physical collections",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
  },
  {
    title: "Student Housing",
    icon: <Home className="h-8 w-8" />,
    description: "Comfortable on-campus accommodation options",
    image: "https://images.unsplash.com/photo-1555540022-c5f286d12417",
  },
  {
    title: "Sports Complex",
    icon: <Dumbbell className="h-8 w-8" />,
    description: "State-of-the-art fitness centers and sports facilities",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
  },
  {
    title: "Dining Halls",
    icon: <Coffee className="h-8 w-8" />,
    description: "Multiple dining options with diverse cuisine choices",
    image: "https://images.unsplash.com/photo-1567521464027-f127ff144326",
  },
];

export default function Campus() {
  return (
    <main className="min-h-screen pt-16">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[60vh] flex items-center justify-center"
      >
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1498243691581-b145c3f54a5a)",
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative text-center text-white px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Campus Life
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Experience a vibrant community with world-class facilities and endless opportunities
          </motion.p>
        </div>
      </motion.section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${facility.image})` }}
                  />
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4 text-primary">
                      {facility.icon}
                      <h3 className="text-xl font-bold ml-3">{facility.title}</h3>
                    </div>
                    <p className="text-gray-600">{facility.description}</p>
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