"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface SkillCategory {
  title: string;
  skills: string[];
  color: string;
}

export default function SkillsSection() {
  const theme = useTheme();

  const categories: SkillCategory[] = [
    {
      title: "Languages",
      skills: ["C++", "Java", "Python", "JavaScript", "Golang", "SQL"],
      color: "#FF6B6B",
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js",
        "Express",
        "FastAPI",
        "Django",
        "REST APIs",
        "Microservices",
        "Sockets",
        "WebSockets",
      ],
      color: "#4ECDC4",
    },
    {
      title: "Messaging & Streaming",
      skills: ["Kafka", "RabbitMQ", "MQTT"],
      color: "#FFD166",
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
      color: "#06D6A0",
    },
    {
      title: "Infrastructure & DevOps",
      skills: ["AWS", "Docker", "Linux", "Git", "GitHub", "CI/CD Pipelines"],
      color: "#9B5DE5",
    },
    {
      title: "Core Concepts",
      skills: [
        "DSA",
        "Competitive Programming",
        "OOPS",
        "System Design",
        "DBMS",
        "Computer Networking",
        "Operating Systems",
        "Payment Systems",
      ],
      color: "#F4A261",
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 md:py-24 relative"
      style={{
        backgroundColor: theme.palette.mode === "dark" ? "#111111" : "#f8f9fa",
        color: theme.palette.text.primary,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23${theme.palette.primary.main.replace(
            "#",
            ""
          )}' fillOpacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          zIndex: 0,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="relative inline-block">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-md">
                Skills
              </h2>
              <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></span>
            </div>
          </motion.div>
          <p
            style={{ color: theme.palette.text.secondary }}
            className="max-w-2xl mx-auto pt-3"
          >
            The languages, frameworks, and systems I use to build fault-tolerant
            backend and payments infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card
                className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:border-primary/50 relative"
                style={{
                  backgroundColor: theme.palette.background.paper,
                  borderColor: theme.palette.divider,
                }}
              >
                <div
                  className="h-2 absolute top-0 left-0 right-0"
                  style={{
                    background: `linear-gradient(90deg, ${category.color}, ${theme.palette.primary.main})`,
                  }}
                />
                <CardContent className="p-6 mt-2">
                  <h3
                    className="text-lg font-semibold mb-4"
                    style={{ color: category.color }}
                  >
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="border-primary/20"
                        style={{
                          backgroundColor: `${category.color}20`,
                          color: category.color,
                          borderColor: `${category.color}40`,
                        }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
