"use client";

import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  useTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import { School, Work } from "@mui/icons-material";
import { motion } from "framer-motion";
import { JSX, useState } from "react";

// Type for highlight items
type HighlightItem = {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  description: string;
  details?: string;
  color: string;
};

export default function AboutSection() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<HighlightItem | null>(null);

  const highlights: HighlightItem[] = [
    {
      icon: <Work />,
      title: "Software Engineer",
      subtitle: "Kosh — YC-backed Fintech, Lending Platform",
      description:
        "Own the core payments engine processing 10K+ daily transactions, a double-entry ledger reconciling 50K+ transactions/day, and drove a zero-downtime monolith-to-microservices migration of 2M+ records.",
      details: `Kosh (YC-backed Fintech, Lending Platform)
Software Engineer | Oct 2025 – Present

🔹 **Payments Engine**
Architected and own the core payments engine processing **10K+ daily transactions** across loan disbursal, EMI scheduling, and repayment, built with idempotent, fault-tolerant flows that guarantee **100% financial consistency**.

🔹 **Ledger & Settlements**
Built a **double-entry ledger** reconciling **50K+ transactions/day** with automated settlement sync, and integrated the **Easebuzz** payment gateway via webhook-driven status updates and retry handling.

🔹 **Real-Time Systems**
Engineered a real-time chat system on **RabbitMQ over MQTT** (5K+ messages/min, sub-200ms latency), plus a **WhatsApp OTP login and notification system** that raised onboarding completion by **25%**.

🔹 **Microservices Migration**
Drove the monolith-to-microservices migration, executing a **zero-downtime migration of 2M+ records** with no data loss and cutting average API latency from **800ms to 250ms**.`,
      color: "#FF6B6B",
    },
    {
      icon: <School />,
      title: "Student",
      subtitle: "NIT Kurukshetra (2021–2025)",
      description:
        "B.Tech in Electronics and Communication Engineering with strong foundations in CS fundamentals and hands-on experience in full-stack and mobile app development.",
      details: `I graduated with a B.Tech in **Electronics and Communication Engineering** from **NIT Kurukshetra (Dec 2021 – Jun 2025)**, CGPA 7.2. While my core curriculum focused on ECE, I extensively pursued computer science subjects and self-driven development projects alongside academics.

🔹 **Academic Learning & CS Foundations**
Throughout my degree, I built a strong foundation in key Computer Science areas, including:
- **Data Structures & Algorithms (DSA)**
- **Operating Systems**
- **Computer Networks**
- **Database Management Systems (DBMS)**
- Programming in **C++, Java, Python, Golang**

I actively practiced **competitive programming**, solving **500+ DSA problems** across LeetCode, CodeChef, and GeeksforGeeks, and scored **98.76 percentile in JEE Mains 2021** among 1M+ candidates.

🔹 **Web Development**
I independently mastered **full-stack web development**, becoming proficient in both frontend and backend:
- **Frontend:** React.js, Next.js, Tailwind CSS
- **Backend:** Node.js, Express, FastAPI, Django, REST APIs, Microservices
I've worked on multiple projects, delivering production-ready applications with authentication, API integrations, and responsive design.

🔹 **Beyond Academics**
Served as **Technical Team Vice-Captain** at the Industry and Entrepreneurship Cell, and volunteered as a **teacher at Siksha club**, providing free education and support to students.

My time at NIT Kurukshetra reflects a blend of formal engineering education and self-driven growth in computer science and real-world development practices.`,
      color: "#4ECDC4",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
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
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23${theme.palette.primary.main.replace(
            "#",
            ""
          )}' fillOpacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={titleVariants}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 2,
              textAlign: "center",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              fontWeight: 700,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              position: "relative",
              display: "inline-block",
              left: "50%",
              transform: "translateX(-50%)",
              "&::after": {
                content: '""',
                position: "absolute",
                width: "80px",
                height: "4px",
                bottom: "-10px",
                left: "calc(50% - 40px)",
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                borderRadius: "2px",
              },
            }}
          >
            About Me
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: { xs: 4, md: 6 },
              textAlign: "center",
              color: theme.palette.text.secondary,
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.6,
              px: 2,
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            I'm a Software Engineer at Kosh, a YC-backed fintech lending platform, where I build the core payments
            engine, ledger, and real-time systems that keep money moving reliably. A graduate of NIT Kurukshetra
            (ECE, 2021–2025), I've built my career around backend systems, payments infrastructure, and full-stack
            development — from fault-tolerant transaction pipelines and microservices migrations at Kosh, to
            authentication and blockchain SDKs at Dugong Global Service. With a strong DSA/CP foundation (500+
            problems solved) and a growing interest in AI/ML, I focus on building performant, secure, and
            production-grade systems.
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {highlights.map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  onClick={() => {
                    setSelectedItem(item);
                    setOpen(true);
                  }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "16px",
                      background:
                        theme.palette.mode === "dark"
                          ? "linear-gradient(145deg, #1a1a1a 0%, #2a2a2a 100%)"
                          : "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
                      border: `1px solid ${theme.palette.divider}`,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        boxShadow: `0 12px 40px ${item.color}30`,
                      },
                    }}
                  >
                    {/* Colorful left border - Mandana art inspired */}
                    <Box
                      sx={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: "6px",
                        background: `linear-gradient(to bottom, ${item.color}, ${theme.palette.primary.main})`,
                      }}
                    />

                    {/* Mandana art inspired decorative element */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 20,
                        right: 20,
                        width: "60px",
                        height: "60px",
                        opacity: 0.05,
                        borderRadius: "50%",
                        background: item.color,
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          border: `2px solid ${theme.palette.background.paper}`,
                        },
                      }}
                    />

                    <CardContent sx={{ p: 3, pl: 4 }}>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 2 }}
                      >
                        <Box
                          sx={{
                            p: 1.5,
                            borderRadius: "12px",
                            backgroundColor: item.color + "20",
                            color: item.color,
                            mr: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {item.icon}
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            component="h3"
                            sx={{
                              fontWeight: 700,
                              fontSize: { xs: "1.1rem", sm: "1.25rem" },
                              color: item.color,
                            }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              color: theme.palette.text.secondary,
                              fontWeight: 500,
                            }}
                          >
                            {item.subtitle}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.875rem", sm: "0.9rem" },
                        }}
                      >
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
        <Dialog
          open={open}
          onClose={() => {
            setOpen(false);
            setSelectedItem(null);
          }}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle sx={{ fontWeight: 600, color: selectedItem?.color }}>
            {selectedItem?.title} @ {selectedItem?.subtitle}
          </DialogTitle>
          <DialogContent dividers>
            <Typography
              variant="body1"
              sx={{
                whiteSpace: "pre-line",
                fontSize: "0.95rem",
                lineHeight: 1.7,
              }}
            >
              {selectedItem?.details === "to be updated"
                ? "Full description will be added soon."
                : selectedItem?.details}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setOpen(false);
                setSelectedItem(null);
              }}
              color="primary"
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
}
