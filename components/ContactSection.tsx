"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function ContactSection() {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      console.log("Message sent!");
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      console.error("Failed to send message");
      alert("Something went wrong. Try again later.");
    }
  } catch (err) {
    console.error("Error:", err);
    alert("Failed to submit the form.");
  }
};


  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      url: "https://github.com/jaiChauhan009",
      color: "#FF6B6B",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/jai-chauhan-15b0a5238/",
      color: "#4ECDC4",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      url: "mailto:jaichauhn091@gmail.com",
      color: "#FFD166",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 md:py-24 relative"
      style={{
        backgroundColor: theme.palette.mode === "dark" ? "#111111" : "#f8f9fa",
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
                Get In Touch
              </h2>
              <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></span>
            </div>
          </motion.div>

          <p
            style={{ color: theme.palette.text.secondary }}
            className="max-w-2xl mx-auto pt-3"
          >
            Always eager to collaborate on innovative projects or connect over 
            shared interests in web and app development,Software development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card
              className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50 relative"
              style={{
                backgroundColor: theme.palette.background.paper,
                borderColor: theme.palette.divider,
              }}
            >
              {/* Colorful top border - Mandana art inspired */}
              <div
                className="h-2 absolute top-0 left-0 right-0"
                style={{
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                }}
              />

              {/* Mandana art inspired decorative element */}
              <div
                className="absolute top-4 right-4 w-12 h-12 rounded-full opacity-10"
                style={{ backgroundColor: theme.palette.primary.main }}
              >
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2"
                  style={{ borderColor: theme.palette.background.paper }}
                />
              </div>

              <CardContent className="p-6 md:p-8 mt-2">
                <h3
                  className="text-xl font-semibold mb-6 relative inline-block"
                  style={{ color: theme.palette.primary.main }}
                >
                  Send me a message
                  {/* <span
                    className="absolute bottom-0 left-0 w-12 h-0.5 transform -translate-y-2"
                    style={{ backgroundColor: theme.palette.primary.main }}
                  ></span> */}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium"
                      style={{ color: theme.palette.text.primary }}
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full focus:border-primary"
                      style={{
                        backgroundColor: theme.palette.background.default,
                        borderColor: theme.palette.divider,
                        color: theme.palette.text.primary,
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium"
                      style={{ color: theme.palette.text.primary }}
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                      className="w-full focus:border-primary"
                      style={{
                        backgroundColor: theme.palette.background.default,
                        borderColor: theme.palette.divider,
                        color: theme.palette.text.primary,
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium"
                      style={{ color: theme.palette.text.primary }}
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      required
                      className="w-full min-h-[120px] focus:border-primary"
                      style={{
                        backgroundColor: theme.palette.background.default,
                        borderColor: theme.palette.divider,
                        color: theme.palette.text.primary,
                      }}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full transition-colors"
                    style={{
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.primary.contrastText,
                    }}
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Connect Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card
              className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50 relative"
              style={{
                backgroundColor: theme.palette.background.paper,
                borderColor: theme.palette.divider,
              }}
            >
              {/* Colorful top border - Mandana art inspired */}
              <div
                className="h-2 absolute top-0 left-0 right-0"
                style={{
                  background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                }}
              />

              {/* Mandana art inspired decorative element */}
              <div
                className="absolute top-4 right-4 w-12 h-12 rounded-full opacity-10"
                style={{ backgroundColor: theme.palette.secondary.main }}
              >
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2"
                  style={{ borderColor: theme.palette.background.paper }}
                />
              </div>

              <CardContent className="p-6 md:p-8 flex flex-col h-[calc(100%-8px)] mt-2">
                <h3
                  className="text-xl font-semibold mb-6 text-center relative inline-block self-center"
                  style={{ color: theme.palette.primary.main }}
                >
                  Connect with me
                  {/* <span
                    className="absolute bottom-0 left-1/2 w-12 h-0.5 transform -translate-x-1/2 -translate-y-2"
                    style={{ backgroundColor: theme.palette.primary.main }}
                  ></span> */}
                </h3>

                <p
                  style={{ color: theme.palette.text.secondary }}
                  className="text-center mb-8"
                >
                  Feel free to reach out through any of these platforms. I'm
                  always excited to connect with fellow developers and discuss
                  the latest in Web and App dev and Cybersecurity.
                </p>

                {/* Decorative element */}
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-20 pointer-events-none"
                  style={{
                    border: `4px solid ${theme.palette.primary.main}20`,
                  }}
                >
                  <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full"
                    style={{
                      border: `4px solid ${theme.palette.primary.main}40`,
                    }}
                  ></div>
                  <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full"
                    style={{
                      border: `4px solid ${theme.palette.primary.main}60`,
                    }}
                  ></div>
                </div>

                <div className="flex justify-center gap-8 mt-auto relative z-10">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div
                        className="p-4 rounded-full transition-colors"
                        style={{
                          backgroundColor: `${link.color}20`,
                          color: link.color,
                          border: `1px solid ${link.color}40`,
                        }}
                      >
                        {link.icon}
                      </div>
                      <span
                        className="mt-2 text-sm font-medium"
                        style={{ color: theme.palette.text.primary }}
                      >
                        {link.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Footer */}
        <div
          className="mt-16 pt-8 text-center"
          style={{
            borderTopColor: theme.palette.divider,
            borderTopWidth: "1px",
            borderTopStyle: "solid",
          }}
        >
          
          <p style={{ color: theme.palette.text.secondary }}>
            © {new Date().getFullYear()} Jai Kishan. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
