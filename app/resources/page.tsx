"use client";

import { motion } from "framer-motion";
import { Book, FileText, Video, Download, ExternalLink, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const resources = {
  books: [
    {
      title: "Introduction to Psychology",
      author: "Dr. Robert Smith",
      type: "Textbook",
      format: "PDF",
      size: "25MB",
    },
    {
      title: "Organic Chemistry",
      author: "Prof. Lisa Anderson",
      type: "Reference Book",
      format: "PDF",
      size: "30MB",
    },
  ],
  articles: [
    {
      title: "Modern Art Movements",
      author: "Sarah Williams",
      journal: "Art History Review",
      year: "2023",
    },
    {
      title: "Climate Change Impact",
      author: "Dr. James Brown",
      journal: "Environmental Science",
      year: "2024",
    },
  ],
  multimedia: [
    {
      title: "Cell Biology Visualization",
      type: "Interactive Animation",
      duration: "15 min",
    },
    {
      title: "World War II Documentary",
      type: "Video",
      duration: "45 min",
    },
  ],
};

export default function Resources() {
  return (
    <main className="min-h-screen pt-16">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-br from-blue-400 to-primary text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Academic Resources
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-100 max-w-2xl mb-8"
          >
            Access our comprehensive collection of academic materials and resources
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-300" />
            <Input
              placeholder="Search resources..."
              className="w-full max-w-xl pl-10 bg-white/10 border-white/20 text-white placeholder-gray-300"
            />
          </motion.div>
        </div>
      </motion.section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="books" className="space-y-8">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="books" className="flex items-center">
              <Book className="h-4 w-4 mr-2" />
              Books
            </TabsTrigger>
            <TabsTrigger value="articles" className="flex items-center">
              <FileText className="h-4 w-4 mr-2" />
              Articles
            </TabsTrigger>
            <TabsTrigger value="multimedia" className="flex items-center">
              <Video className="h-4 w-4 mr-2" />
              Multimedia
            </TabsTrigger>
          </TabsList>

          <TabsContent value="books" className="space-y-6">
            {resources.books.map((book, index) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{book.title}</h3>
                        <p className="text-gray-600 mb-1">By {book.author}</p>
                        <div className="flex items-center text-sm text-gray-500 space-x-4">
                          <span>{book.type}</span>
                          <span>{book.format}</span>
                          <span>{book.size}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="articles" className="space-y-6">
            {resources.articles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                        <p className="text-gray-600 mb-1">By {article.author}</p>
                        <div className="flex items-center text-sm text-gray-500 space-x-4">
                          <span>{article.journal}</span>
                          <span>{article.year}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="icon">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="multimedia" className="space-y-6">
            {resources.multimedia.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <div className="flex items-center text-sm text-gray-500 space-x-4">
                          <span>{item.type}</span>
                          <span>{item.duration}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="icon">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
}