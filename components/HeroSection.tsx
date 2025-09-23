"use client";

import {
  Box,
  Typography,
  Button,
  Container,
  useTheme,
  IconButton,
} from "@mui/material";
import { Download, GitHub, LinkedIn, Email } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function HeroSection() {
  const theme = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeInOut",
      },
    }),
  };

  // Letter animation for name
  const nameLetters = "JAI KISHAN".split("");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)"
            : "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        position: "relative",
        overflow: "hidden",
        pt: { xs: 8, md: 0 }, // Add padding top on mobile
      }}
    >
      {/* Animated background elements - Mandana art inspired patterns */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23${theme.palette.primary.main.replace(
            "#",
            ""
          )}' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          zIndex: 0,
        }}
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: "300px",
          height: "300px",
          background: `radial-gradient(circle, ${theme.palette.primary.main}30, ${theme.palette.secondary.main}20)`,
          borderRadius: "50%",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          bottom: "10%",
          left: "10%",
          width: "250px",
          height: "250px",
          background: `radial-gradient(circle, ${theme.palette.secondary.main}30, ${theme.palette.primary.main}20)`,
          borderRadius: "50%",
          filter: "blur(50px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center" }}>
          {/* Animated name with letter-by-letter animation */}
          <Box sx={{ overflow: "hidden", mb: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {nameLetters.map((letter, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  }}
                >
                  <Typography
                    component="span"
                    variant="h1"
                    sx={{
                      display: "inline-block",
                      fontWeight: 700,
                      background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                      letterSpacing: "0.02em",
                      mx: letter === " " ? 2 : 0,
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </Typography>
                </motion.div>
              ))}
            </Box>
          </Box>

          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 4,
                textAlign: "center",
                color: theme.palette.text.secondary,
                fontWeight: 400,
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                position: "relative",
                display: "inline-block",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "60%",
                  height: "4px",
                  bottom: "-10px",
                  left: "20%",
                  background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, transparent)`,
                  borderRadius: "2px",
                },
              }}
            >
              Full Stack & App Developer | DSA/CP | AI/ML Enthusiast
            </Typography>
          </motion.div>

          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: { xs: 1, sm: 2 },
                flexWrap: "wrap",
                mb: 4,
                px: { xs: 2, sm: 0 },
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => scrollToSection("projects")}
                  sx={{
                    px: { xs: 3, sm: 4 },
                    py: 1.5,
                    borderRadius: "50px",
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    boxShadow: `0 4px 20px ${theme.palette.primary.main}40`,
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: `0 8px 25px ${theme.palette.primary.main}60`,
                      background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                    },
                    transition: "all 0.3s ease",
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                  }}
                >
                  View Projects
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="https://drive.google.com/file/d/1YftJRVXp_vKj5TCktRCeajBsge2oJF_7/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<Download />}
                    sx={{
                      px: { xs: 3, sm: 4 },
                      py: 1.5,
                      borderRadius: "50px",
                      borderWidth: "2px",
                      borderColor: theme.palette.primary.main,
                      "&:hover": {
                        transform: "translateY(-3px)",
                        backgroundColor: theme.palette.primary.main + "10",
                        borderWidth: "2px",
                      },
                      transition: "all 0.3s ease",
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                    }}
                  >
                    Download Resume
                  </Button>
                </a>
              </motion.div>


              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => scrollToSection("contact")}
                  sx={{
                    px: { xs: 3, sm: 4 },
                    py: 1.5,
                    borderRadius: "50px",
                    borderWidth: "2px",
                    borderColor: theme.palette.secondary.main,
                    "&:hover": {
                      transform: "translateY(-3px)",
                      backgroundColor: theme.palette.secondary.main + "10",
                      borderWidth: "2px",
                    },
                    transition: "all 0.3s ease",
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                  }}
                >
                  Contact Me
                </Button>
              </motion.div>
            </Box>
          </motion.div>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              {[
                {
                  icon: <GitHub fontSize="large" />,
                  url: "https://github.com/jaiChauhan009",
                  color: "#333",
                },
                {
                  icon: <LinkedIn fontSize="large" />,
                  url: "https://www.linkedin.com/in/jai-chauhan-15b0a5238/",
                  color: "#0077B5",
                },
                {
                  icon: <Email fontSize="large" />,
                  url: "mailto:jaichauhan091@gmail.com",
                  color: "#EA4335",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconButton
                    href={item.url}
                    target="_blank"
                    sx={{
                      width: { xs: 50, sm: 60 },
                      height: { xs: 50, sm: 60 },
                      background:
                        theme.palette.mode === "dark"
                          ? "rgba(255,255,255,0.05)"
                          : "rgba(0,0,0,0.05)",
                      backdropFilter: "blur(10px)",
                      "&:hover": {
                        color: item.color,
                        background:
                          theme.palette.mode === "dark"
                            ? "rgba(255,255,255,0.1)"
                            : "rgba(0,0,0,0.1)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    {item.icon}
                  </IconButton>
                </motion.div>
              ))}
            </Box>
          </motion.div>

          {/* Scroll down indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            style={{
              position: "absolute",
              bottom: 30,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {/* <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            >
              <Box
                sx={{
                  width: "30px",
                  height: "50px",
                  border: `2px solid ${theme.palette.text.secondary}`,
                  borderRadius: "20px",
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    width: "8px",
                    height: "8px",
                    top: "8px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: theme.palette.text.secondary,
                    borderRadius: "50%",
                  },
                }}
              />
            </motion.div> */}
            {/* <Typography
              variant="caption"
              sx={{
                display: "block",
                textAlign: "center",
                mt: 1,
                color: theme.palette.text.secondary,
              }}
            >
              Scroll Down
            </Typography> */}
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
