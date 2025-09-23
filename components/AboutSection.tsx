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
import { School, Work, Cloud, Code } from "@mui/icons-material";
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
      title: "Full Stack Developer",
      subtitle: "Dugong Global Services",
      description:
        "Contributed to the development of Dharitri.org with a focus on frontend architecture, multi-method authentication, and cross-team collaboration across Go, Python, and JavaScript stacks.",
      details: `Dugong Global Services, Hyderabad  
Full Stack Developer | JAN-2024 – Present

At Dugong Global Services, I am actively contributing to the frontend development of our main blockchain platform website: [https://www.dharitri.org](https://www.dharitri.org).

🔹 **Frontend Development**  
I built core pages and user interfaces using **Next.js 14**, **React 18**, and **Tailwind CSS**, focusing on clean UX and performance optimization. I developed secure and responsive wallet onboarding flows, integrated animations for modern UI/UX, and contributed reusable **TypeScript components** for consistency and scalability.

🔹 **Authentication System**  
I implemented a robust authentication system using **two methods**:
- **Email & Password login with OTP verification**
- **Key-based login using JSON file generation at signup and parsing at login**

This dual approach improved both security and developer flexibility.

🔹 **Backend & DevOps Contributions**  
- Created **Go (Golang) APIs** for transaction data fetching and handling.
- Participated in backend architecture and API design discussions.
- Worked on event-driven pipelines and automation using **Python** and **Go**.
- Collaborated with DevOps to containerize services using **Docker**, scale with **Kubernetes**, and provision infrastructure via **Terraform** and **Helm**.

🔹 **Cross-Team Testing & QA**  
Actively contributed to testing and validation efforts across the **JavaScript**, **Python**, and **Go** teams, ensuring smooth cross-service communication and stability.

🔹 **CI/CD and Observability**  
Enhanced the CI/CD process with **GitHub Actions**, and implemented logging and monitoring via **AWS CloudWatch**.

My work at Dugong blends frontend innovation with secure backend engineering and infrastructure scaling, contributing directly to a cutting-edge blockchain ecosystem.`,
      color: "#FF6B6B",
    },
    {
      icon: <School />,
      title: "Student",
      subtitle: "NIT Kurukshetra (2021–2025)",
      description:
        "B.Tech in Electronics and Communication Engineering with strong foundations in CS fundamentals and hands-on experience in full-stack and mobile app development.",
      details: `I graduated with a B.Tech in **Electronics and Communication Engineering** from **NIT Kurukshetra (2021–2025)**. While my core curriculum focused on ECE, I extensively pursued computer science subjects and self-driven development projects alongside academics.

🔹 **Academic Learning & CS Foundations**  
Throughout my degree, I built a strong foundation in key Computer Science areas, including:
- **Data Structures & Algorithms (DSA)**
- **Operating Systems**
- **Computer Networks**
- **Database Management Systems (DBMS)**
- Programming in **Java** and **C**

I actively practiced **competitive programming**, gaining expertise in algorithmic problem-solving.

🔹 **Web Development**  
I independently mastered **full-stack web development**, becoming proficient in both frontend and backend:
- **Frontend:** React.js, Next.js, Tailwind CSS
- **Backend:** Node.js, Express, REST APIs, MongoDB, PostgreSQL
I’ve worked on multiple projects, delivering production-ready applications with authentication, API integrations, and responsive design.

🔹 **App Development**  
I also specialized in Android and cross-platform mobile development using:
- **Kotlin**, **Jetpack Compose**, **MVVM architecture**
- **KMP (Kotlin Multiplatform)**
- **Retrofit**, **Room**, and modern Android toolkits

🔹 **DSA & Competitive Programming**  
I have a strong command over DSA and regularly engage in competitive programming challenges, helping sharpen both speed and logic.

My time at NIT Kurukshetra reflects a unique blend of formal engineering education and self-driven growth in computer science, software engineering, and real-world development practices.`,
      color: "#4ECDC4",
    },
    // {
    //   icon: <Cloud />,
    //   title: "Software Engineer Intern",
    //   subtitle: "Averlon Technologies",
    //   description:
    //     "Worked on detection of AWS misconfigurations using Rego and Golang. Focused on EC2, IAM, and Lambda security policies.",
    //   details: `During my internship at Averlon Technologies (Jan 2023 – Jun 2023), I worked on automating the detection of AWS misconfigurations using Rego and Golang. I began by researching common cloud security pitfalls—such as public S3 buckets, overly permissive IAM policies, and exposed RDS snapshots—and then developed a suite of policy-as-code rules using Open Policy Agent (OPA) and Rego. These rules were designed to scan AWS resource configurations and flag violations such as lack of encryption, excessive permissions, or missing security best practices. I integrated these rules into the backend scanning engine using Golang, building RESTful APIs to run evaluations and process results. This project significantly improved the organization's ability to monitor cloud security posture in real time, reduced manual effort, and laid a solid foundation for scalable security automation.`,
    //   color: "#FFD166",
    // },
    // {
    //   icon: <Code />,
    //   title: "Full Stack AI/ML Intern",
    //   subtitle: "Wezenite Technologies",
    //   description:
    //     "Built a stock prediction web app using Scikit-learn and deployed it using AWS and MongoDB. Integrated frontend with React.",
    //   details: `From October to December 2024, I worked as a Full-Stack Developer at Wezenite Technologies, where I contributed to the development of a sentiment-driven stock analysis platform. I was actively involved in refining the frontend using React.js and Tailwind CSS, where I implemented and enhanced UI components based on Figma designs to create a seamless user experience. On the backend, I developed and tested RESTful APIs using Python, which were deployed as AWS Lambda functions and integrated via AWS API Gateway. These functions processed stock-related textual data using sentiment analysis—to generate real-time sentiment scores for individual stocks. I also handled deployment and hosting using AWS services, setting up serverless pipelines and configuring monitoring with CloudWatch. This end-to-end role gave me hands-on experience in designing UI, integrating backend logic, and deploying scalable serverless applications, while reinforcing my skills in cloud computing, API testing, and NLP-based analytics.`,
    //   color: "#06D6A0",
    // },
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
            I'm a passionate Full Stack Developer and App Developer with a strong foundation in software engineering, 
            cybersecurity, and system design. A graduate of NIT Kurukshetra (ECE, 2021–2025), I’ve honed my skills in 
            web development (frontend & backend), mobile app development (Kotlin, KMP, MVVM), and cloud infrastructure. 
            From building secure, scalable applications to detecting AWS misconfigurations and contributing across tech 
            stacks in JavaScript, Go, and Python, I strive to deliver performant and intelligent solutions. With a keen 
            interest in AI/ML and competitive programming, I'm always exploring the intersection of innovation, 
            performance, and security.
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
