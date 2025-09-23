"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ExternalLink } from "lucide-react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface Blog {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  categories: string[];
  image: string;
  url: string;
  color: string;
}

export default function BlogsSection() {
  const theme = useTheme();

  const blogs: Blog[] = [
    {
      title: "Getting Started with Smart Contracts on Rust",
      excerpt:
        "An easy-to-follow tutorial on writing your first smart contract using Rust and deploying it on a MultiversX-based blockchain.",
      date: "June 20, 2025",
      readTime: "5 min read",
      categories: ["Blockchain", "Rust", "Smart Contracts"],
      image:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1726384950091/faad326b-a463-4a90-93a1-cecb00c0731b.jpeg?w=1600",
      url: "https://tejaswaroop.hashnode.dev/getting-started-with-smart-contracts-on-rust",
      color: "#4ECDC4",
    },
    {
      title: "Building AI Models with Python: A Beginner’s Guide",
      excerpt:
        "A concise guide for students and freshers looking to break into AI/ML using Python, scikit-learn, and real-world datasets.",
      date: "May 10, 2025",
      readTime: "6 min read",
      categories: ["AI", "Python", "Machine Learning"],
      image:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1723577566402/2d416d52-3adf-424e-88bc-2d5fd63d3151.jpeg?w=1600",
      url: "https://tejaswaroop.hashnode.dev/building-ai-models-with-python",
      color: "#06D6A0",
    },
    {
      title: "Understanding Rego and OPA for Cloud Security",
      excerpt:
        "Explore how to write policies in Rego and use Open Policy Agent (OPA) to detect cloud misconfigurations in real-time.",
      date: "April 25, 2025",
      readTime: "4 min read",
      categories: ["Cybersecurity", "OPA", "Cloud Security"],
      image:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1722876117271/939bd1bf-6c36-478d-88f6-e70d9d460d90.png?w=1600",
      url: "https://tejaswaroop.hashnode.dev/understanding-opa-and-rego-for-cloud-security",
      color: "#FF6B6B",
    },
    {
      title: "Deploying a Full-Stack dApp on MultiversX",
      excerpt:
        "From writing smart contracts to integrating with React and Tailwind—this post covers the complete dApp deployment lifecycle.",
      date: "April 5, 2025",
      readTime: "7 min read",
      categories: ["dApp", "MultiversX", "Web3"],
      image:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1723123107740/585489fc-fc92-4cae-9b76-f6539d6b1d51.png?w=1600",
      url: "https://tejaswaroop.hashnode.dev/deploying-a-fullstack-dapp-on-multiversx",
      color: "#9B5DE5",
    },
    {
      title: "How I Cracked CEH v12: Tips for Aspiring Ethical Hackers",
      excerpt:
        "I share my experience preparing for the CEH v12 certification—resources used, labs practiced, and what to expect in the exam.",
      date: "March 22, 2025",
      readTime: "6 min read",
      categories: ["CEH", "Ethical Hacking", "Cybersecurity"],
      image:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1725009276324/f2686ef5-cbde-4ae6-bdb1-dba465193568.png?w=1600",
      url: "https://tejaswaroop.hashnode.dev/how-i-cracked-ceh-v12",
      color: "#118AB2",
    },
    {
      title: "Intro to Secure Authentication in Web3 Apps",
      excerpt:
        "Walkthrough of native signature-based authentication in decentralized apps, with MultiversX as a case study.",
      date: "March 1, 2025",
      readTime: "5 min read",
      categories: ["Web3", "Security", "Authentication"],
      image:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1726384950091/faad326b-a463-4a90-93a1-cecb00c0731b.jpeg?w=1600",
      url: "https://tejaswaroop.hashnode.dev/secure-authentication-in-web3-apps",
      color: "#FFD166",
    },
  ];

  return (
    <section
      id="blogs"
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
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23${theme.palette.secondary.main.replace(
            "#",
            ""
          )}' fillOpacity='0.5'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
                Latest Blog Posts
              </h2>
              <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></span>
            </div>
          </motion.div>

          <p
            style={{ color: theme.palette.text.secondary }}
            className="max-w-2xl mx-auto pt-3"
          >
            I write about blockchain development, cybersecurity practices, AI/ML
            workflows, and real-world dApp deployment — sharing what I learn as
            I build.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
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
                    background: `linear-gradient(90deg, ${blog.color}, ${theme.palette.primary.main})`,
                  }}
                />

                {/* Mandana art inspired decorative element */}
                <div
                  className="absolute top-4 right-4 w-12 h-12 rounded-full opacity-10"
                  style={{ backgroundColor: blog.color }}
                >
                  <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2"
                    style={{ borderColor: theme.palette.background.paper }}
                  />
                </div>

                <div className="h-48 overflow-hidden mt-2">
                  <img
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 flex-grow">
                  <div className="flex items-center justify-between mb-3 text-sm">
                    <div className="flex items-center">
                      <Calendar
                        className="h-4 w-4 mr-1"
                        style={{ color: blog.color }}
                      />
                      <span style={{ color: theme.palette.text.secondary }}>
                        {blog.date}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock
                        className="h-4 w-4 mr-1"
                        style={{ color: blog.color }}
                      />
                      <span style={{ color: theme.palette.text.secondary }}>
                        {blog.readTime}
                      </span>
                    </div>
                  </div>

                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: blog.color }}
                  >
                    {blog.title}
                  </h3>
                  <p
                    style={{ color: theme.palette.text.secondary }}
                    className="mb-4 line-clamp-3"
                  >
                    {blog.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {blog.categories.map((category, catIndex) => (
                      <Badge
                        key={catIndex}
                        variant="secondary"
                        className="border-primary/20"
                        style={{
                          backgroundColor: `${blog.color}20`,
                          color: blog.color,
                          borderColor: `${blog.color}40`,
                        }}
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter
                  className="p-6 pt-0"
                  style={{ borderTopColor: theme.palette.divider }}
                >
                  <Button
                    asChild
                    className="w-full hover:opacity-90"
                    style={{ backgroundColor: blog.color }}
                  >
                    <a
                      href={blog.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read Article
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
