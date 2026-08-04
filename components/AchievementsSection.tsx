"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  Trophy,
  BadgeCheck,
  Medal,
  Users,
  Award,
  GraduationCap,
} from "lucide-react";
import type { ReactNode } from "react";

interface Achievement {
  icon: ReactNode;
  title: string;
  description: string;
  link?: string;
  color: string;
}

export default function AchievementsSection() {
  const theme = useTheme();

  const achievements: Achievement[] = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "98.76 Percentile — JEE Mains 2021",
      description: "Ranked among 1M+ candidates nationwide.",
      color: "#FF6B6B",
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "500+ DSA Problems Solved",
      description: "Across LeetCode, CodeChef, and GeeksforGeeks.",
      link: "https://leetcode.com/u/jai_099/",
      color: "#4ECDC4",
    },
    {
      icon: <BadgeCheck className="h-6 w-6" />,
      title: "AWS Certified",
      description: "Certified in Amazon Web Services fundamentals.",
      link: "https://drive.google.com/file/d/1VyayjNTmvFNuktVDemZZhQT9fC4fWtle/view?usp=sharing",
      color: "#FFD166",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "99.8 Percentile — Naukri Campus Contest",
      description: "Top performer in the Naukri Campus coding contest.",
      link: "https://drive.google.com/file/d/1p0gT3za0MLxZXkg-T8zgNJJCHXx-cCSV/view?usp=drivesdk",
      color: "#06D6A0",
    },
    {
      icon: <Medal className="h-6 w-6" />,
      title: "Top 10 District — Science & Math Olympiad",
      description: "Secured a top 10 rank at the district level in both olympiads.",
      color: "#9B5DE5",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "State-Level Kho Kho",
      description: "Represented at the state level in Kho Kho.",
      color: "#F4A261",
    },
  ];

  const extras = [
    "Technical Team Vice-Captain at the Industry and Entrepreneurship Cell club",
    "Volunteer teacher at Siksha club, providing free education and support to students",
  ];

  return (
    <section
      id="achievements"
      className="py-16 md:py-24 relative"
      style={{
        backgroundColor: theme.palette.background.default,
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
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23${theme.palette.primary.main.replace(
            "#",
            ""
          )}' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
                Achievements
              </h2>
              <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></span>
            </div>
          </motion.div>
          <p
            style={{ color: theme.palette.text.secondary }}
            className="max-w-2xl mx-auto pt-3"
          >
            Milestones from academics, competitive programming, and beyond the
            classroom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => {
            const CardInner = (
              <Card
                className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50 relative"
                style={{
                  backgroundColor: theme.palette.background.paper,
                  borderColor: theme.palette.divider,
                }}
              >
                <div
                  className="h-2 absolute top-0 left-0 right-0"
                  style={{
                    background: `linear-gradient(90deg, ${item.color}, ${theme.palette.primary.main})`,
                  }}
                />
                <CardContent className="p-6 mt-2 flex gap-4 items-start">
                  <div
                    className="p-3 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${item.color}20`, color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3
                      className="text-base font-semibold mb-1"
                      style={{ color: item.color }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{ color: theme.palette.text.secondary }}
                      className="text-sm"
                    >
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {CardInner}
                  </a>
                ) : (
                  CardInner
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 max-w-3xl mx-auto"
        >
          <Card
            className="overflow-hidden relative"
            style={{
              backgroundColor: theme.palette.background.paper,
              borderColor: theme.palette.divider,
            }}
          >
            <div
              className="h-2 absolute top-0 left-0 right-0"
              style={{
                background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
              }}
            />
            <CardContent className="p-6 mt-2">
              <h3
                className="text-lg font-semibold mb-3"
                style={{ color: theme.palette.primary.main }}
              >
                Extra-Curricular Activities
              </h3>
              <ul className="space-y-2">
                {extras.map((extra, index) => (
                  <li
                    key={index}
                    className="text-sm"
                    style={{ color: theme.palette.text.secondary }}
                  >
                    • {extra}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
