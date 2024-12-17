"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Building, TrendingUp } from "lucide-react";

const careers = [
  {
    title: "Software Engineer",
    companies: ["Google", "Microsoft", "Amazon"],
    salary: "$80,000 - $150,000",
    growth: "22% growth expected",
  },
  {
    title: "Data Scientist",
    companies: ["Facebook", "Netflix", "IBM"],
    salary: "$90,000 - $160,000",
    growth: "28% growth expected",
  },
  {
    title: "AI/ML Engineer",
    companies: ["Apple", "Tesla", "OpenAI"],
    salary: "$100,000 - $180,000",
    growth: "32% growth expected",
  },
];

export default function CareerOutlook() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Career Outlook</h2>
      <div className="space-y-6">
        {careers.map((career, index) => (
          <motion.div
            key={career.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2 flex items-center">
                      <Briefcase className="h-5 w-5 mr-2 text-primary" />
                      {career.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Building className="h-4 w-4 mr-2" />
                      <span>Top employers: {career.companies.join(", ")}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      <span>{career.growth}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg">{career.salary}</div>
                    <div className="text-sm text-gray-600">Annual Salary Range</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}