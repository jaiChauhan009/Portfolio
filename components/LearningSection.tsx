"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Award, Clock } from "lucide-react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface Course {
  title: string;
  provider: string;
  progress: number;
  completionDate?: string;
  skills: string[];
  status: "completed" | "in-progress" | "planned";
  color: string;
}

export default function LearningSection() {
  const theme = useTheme();

  const courses: Course[] = [
    {
      title: "AWS Certified",
      provider: "Scaler",
      progress: 100,
      completionDate: "June 2023",
      skills: ["AWS", "IAM", "Security Automation"],
      status: "completed",
      color: "#4ECDC4",
    },
    {
      title: "React Certification",
      provider: "Dugong global service",
      progress: 100,
      completionDate: "Mar 2024",
      skills: ["React", "UI/UX", "Front-End"],
      status: "completed",
      color: "#61DBFB",
    },
    {
      title: "Next.js Advanced Frontend",
      provider: "Self-Learning / Projects",
      progress: 60,
      skills: ["Next.js", "SSR", "API Routes"],
      status: "in-progress",
      color: "#34b11bff",
    },
    {
      title: "Spring Boot Expert Track",
      provider: "Spring Academy / Projects",
      progress: 70,
      skills: ["Spring Boot", "REST APIs", "JWT Auth"],
      status: "in-progress",
      color: "#6C47FF",
    },
    {
      title: "Golang for Systems (Fiber, Gin, GORM)",
      provider: "Self-Learning",
      progress: 70,
      skills: ["Golang", "Fiber", "Gin", "GORM"],
      status: "in-progress",
      color: "#06D6A0",
    },
    {
      title: "Django & Flask Web Dev",
      provider: "Self-Learning / Python Projects",
      progress: 70,
      skills: ["Django", "Flask", "Backend APIs"],
      status: "in-progress",
      color: "#3572A5",
    },
    {
      title: "AI and GenAI Specialization",
      provider: "Future / Udemy",
      progress: 20,
      skills: ["AI Fundamentals", "GenAI", "ML"],
      status: "planned",
      color: "#FFD23F",
    },
    {
      title: "Android (KMP, MVVM, Kotlin, Optimization)",
      provider: "Ongoing / Self-Learning / Projects",
      progress: 85,
      skills: ["KMP", "MVVM", "Kotlin", "Android"],
      status: "in-progress",
      color: "#018786",
    }
  ];

  const getStatusIcon = (status: Course["status"]) => {
    switch (status) {
      case "completed":
        return <Award className="h-5 w-5" style={{ color: theme.palette.primary.main }} />;
      case "in-progress":
        return <Clock className="h-5 w-5" style={{ color: theme.palette.primary.main }} />;
      case "planned":
        return <BookOpen className="h-5 w-5" style={{ color: theme.palette.primary.main }} />;
    }
  };

  const getStatusText = (status: Course["status"]) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      case "planned":
        return "Planned";
    }
  };

  return (
    <section
      id="learning"
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
        {/* Bold/italic about-me intro */}
        <div className="text-center mb-8">
          <p className="max-w-2xl mx-auto text-lg">
            <b>
              <i>
                Relentlessly curious, I'm certified in AWS and React, with strong command in Node.js, React.js, DSA, and competitive programming built through real-world projects.
                <br /><br />
                Currently mastering Next.js for frontend, and Spring Boot, Golang (Fiber, Gin, GORM), Django, and Flask for backend/API apps.
                <br /><br />
                Already explored AI and cybersecurity, and always leveling up in Android (KMP, MVVM, Kotlin), my focus now is optimization and advancing into GenAI, scalable architecture, and mobile innovation.
              </i>
            </b>
          </p>
        </div>

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
                Learning & Certifications
              </h2>
              <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></span>
            </div>
          </motion.div>
          <p
            style={{ color: theme.palette.text.secondary }}
            className="max-w-2xl mx-auto pt-3"
          >
            Staying ahead through hands-on projects, powerful frameworks, and recognized certifications—exploring, mastering, and building for what's next!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
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
                    background: `linear-gradient(90deg, ${course.color}, ${theme.palette.primary.main})`,
                  }}
                />
                <div
                  className="absolute top-4 right-4 w-10 h-10 rounded-full opacity-10"
                  style={{ backgroundColor: course.color }}
                >
                  <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2"
                    style={{ borderColor: theme.palette.background.paper }}
                  />
                </div>
                <CardContent className="p-6 flex flex-col h-full mt-2">
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1"
                      style={{ borderColor: course.color, color: course.color }}
                    >
                      {getStatusIcon(course.status)}
                      <span>{getStatusText(course.status)}</span>
                    </Badge>
                    {course.completionDate && (
                      <span
                        className="text-xs"
                        style={{ color: theme.palette.text.secondary }}
                      >
                        {course.completionDate}
                      </span>
                    )}
                  </div>
                  <h3
                    className="text-xl font-semibold mb-1"
                    style={{ color: course.color }}
                  >
                    {course.title}
                  </h3>
                  <p
                    style={{ color: theme.palette.text.secondary }}
                    className="mb-4"
                  >
                    {course.provider}
                  </p>
                  <div className="mt-auto">
                    <div className="flex justify-between text-sm mb-1">
                      <span style={{ color: theme.palette.text.primary }}>
                        Progress
                      </span>
                      <span
                        className="font-medium"
                        style={{ color: course.color }}
                      >
                        {course.progress}%
                      </span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                    <div className="flex flex-wrap gap-2 mt-4">
                      {course.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="border-primary/20"
                          style={{
                            backgroundColor: `${course.color}20`,
                            color: course.color,
                            borderColor: `${course.color}40`,
                          }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
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
