"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  color: string;
}

export default function ProjectsSection() {
  const theme = useTheme();

  const projects: Project[] = [
    {
      title: "Trip Booking System",
      description:
        "Engineered a full-stack trip booking platform with optimized backend APIs, secure JWT authentication, and a dynamic user-friendly frontend.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "ReactJS"],
      image: "/trip_planner.png?height=200&width=400",  // You can replace this with your actual image path
      liveUrl: "https://trip-booking-pi.vercel.app/home", // Update if different
      color: "#4ECDC4",
    },
    {
      title: "Movie Hub Platform",
      description:
        "Developed a secure and responsive movie streaming web app with Spring Boot and React, offering smooth media playback and protected user access.",
      technologies: ["Spring Boot", "MongoDB", "ReactJS", "MUI", "Axios"],
      image: "/movie_hub.webp?height=200&width=400",  // Replace with the actual image path if needed
      githubUrl: "https://github.com/jaiChauhan009/movie-hub", // Update as necessary
      color: "#9B5DE5",
    },
    {
      title: "Dharitri.org Blockchain Portal",
      description:
        "Frontend and backend for Dharitri blockchain ecosystem with wallet integration, validator onboarding, and AWS-backed Python backend.",
      technologies: ["Next.js", "Tailwind CSS", "Python", "AWS"],
      image: "/dharitri.png?height=200&width=400",
      // githubUrl: "https://github.com/TerraDharitri/drt-website", // Or your frontend repo
      liveUrl: "https://dharitri.org", // Replace with actual if different
      color: "#FFD166",
    },
    {
      title: "Voting Server – Real-Time Secure Voting Platform",
      description:
        "Built a secure and scalable online voting system with real-time vote updates, JWT-based authentication, and integrated candidate transparency.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Socket.io", "Redis", "Docker"],
      image: "/voting.webp?height=200&width=400",  // Replace with your actual image path
      githubUrl: "https://github.com/jaiChauhan009/voting_server",  // Update if different
      // liveUrl: "https://your-live-demo-link.com",  // Optional: Replace if hosted
      color: "#06D6A0",
    },
    {
      title: "Book Store API – Secure RESTful Backend",
      description:
        "Developed a modular and scalable backend using Golang, with JWT authentication, MySQL integration, and clean architecture principles.",
      technologies: ["Golang", "Fiber", "GORM", "MySQL", "JWT", "godotenv"],
      image: "/bookstore.webp?height=200&width=400",  // Replace with your actual image path if needed
      githubUrl: "https://github.com/jaiChauhan009/book-store",  // Update if different
      liveUrl: "https://your-live-demo-link.com",  // Optional: Add live API/docs link if available
      color: "#FF6B6B",
    },
    {
      title: "ChitChat App – Real-Time Chat Application",
      description:
        "Built a sleek, responsive chat interface using Jetpack Compose, Material3, and Accompanist for animations, gestures, and navigation. Implemented real-time messaging, media sharing, and secure authentication with Firebase Auth, Firestore, Realtime Database, and Storage. Architected the app using ViewModel, LiveData, Hilt, and DataStore for persistent state, while enhancing UX with Coil, Gson, Timber, and OneSignal notifications.",
      technologies: [
        "Jetpack Compose",
        "Firebase",
        "Hilt",
        "Accompanist",
        "Coil",
        "Gson",
        "Timber",
        "OneSignal"
      ],
      image: "/chit-chat.webp?height=200&width=300",
      githubUrl: "https://github.com/jaiChauhan009/ChitChat-app",
      liveUrl: "https://your-live-demo-link.com", // Optional
      color: "#F4A261"
    }, {
      title: "Trip Planner App with Integrated AI",
      description:
        "Developed a visually rich, AI-powered trip planning app using Jetpack Compose with swipeable screens via Horizontal Pager. Integrated Firebase for authentication and data sync, used Room for local caching, and Retrofit with Gson for API communication. Leveraged ViewModel, LiveData, and Coroutines for performance, and used DataStore Preferences for seamless login state. Images loaded efficiently via Coil.",
      technologies: [
        "Jetpack Compose",
        "Room",
        "Firebase",
        "Retrofit",
        "Gson",
        "Coroutines",
        "DataStore",
        "Serialization",
        "Coil"
      ],
      image: "/trip_ai.png?height=200&width=400",
      githubUrl: "https://github.com/jaiChauhan009/Trip_Planer",
      liveUrl: "https://your-live-demo-link.com", // Optional
      color: "#2A9D8F"
    }, {
      title: "Book & Quotes Hub – Offline First Reading App",
      description:
        "Fetched quotes using Retrofit and Paging and enabled offline access by storing content in Room. Integrated HorizontalPager for swipeable UI and used local db.json for full offline book reading support. Designed for a smooth, consistent user experience even without internet access.",
      technologies: [
        "Retrofit",
        "Paging",
        "Room",
        "Jetpack Compose",
        "HorizontalPager",
        "Hilt"
      ],
      image: "/book_quotes.png?height=200&width=400",
      githubUrl: "https://github.com/jaiChauhan009/Book_Quotes_Hub",
      liveUrl: "https://your-live-demo-link.com", // Optional
      color: "#E76F51"
    }

  ];

  return (
    <section
      id="projects"
      className="py-16 md:py-24 relative"
      style={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      {/* Mandana art inspired background pattern */}
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
                Featured Projects
              </h2>
              <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></span>
            </div>
          </motion.div>

          <p
            style={{ color: theme.palette.text.secondary }}
            className="max-w-2xl mx-auto pt-3"
          >
            A collection of my Full Stack, Golang, Spring Boot, and Android app 
            development projects, showcasing real-world solutions in scalable 
            APIs, secure architectures, interactive UIs, and mobile-first experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
                {/* Colorful top border - Mandana art inspired */}
                <div
                  className="h-2 absolute top-0 left-0 right-0"
                  style={{
                    background: `linear-gradient(90deg, ${project.color}, ${theme.palette.primary.main})`,
                  }}
                />

                {/* Mandana art inspired decorative element */}
                <div
                  className="absolute top-4 right-4 w-12 h-12 rounded-full opacity-10"
                  style={{ backgroundColor: project.color }}
                >
                  <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2"
                    style={{ borderColor: theme.palette.background.paper }}
                  />
                </div>

                <div className="h-48 overflow-hidden mt-2">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 flex-grow">
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: project.color }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{ color: theme.palette.text.secondary }}
                    className="mb-4 line-clamp-3"
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="border-primary/20"
                        style={{
                          backgroundColor: `${project.color}20`,
                          color: project.color,
                          borderColor: `${project.color}40`,
                        }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter
                  className="p-6 pt-0 flex gap-3"
                  style={{ borderTopColor: theme.palette.divider }}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="hover:text-primary-foreground"
                    style={{
                      borderColor: project.color,
                      color: project.color,
                    }}
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      asChild
                      style={{ backgroundColor: project.color }}
                      className="hover:opacity-90"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
