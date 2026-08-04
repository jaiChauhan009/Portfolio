"use client";

import { Box, Typography, Container, useTheme } from "@mui/material";
import { motion } from "framer-motion";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  bullets: string[];
  color: string;
}

export default function ExperienceSection() {
  const theme = useTheme();

  const experience: ExperienceItem[] = [
    {
      role: "Software Engineer",
      company: "Kosh (YC-backed Fintech, Lending Platform)",
      period: "Oct 2025 - Present",
      bullets: [
        "Architected and owned the core payments engine processing 10K+ daily transactions across loan disbursal, EMI scheduling, and repayment, with idempotent, fault-tolerant flows guaranteeing 100% financial consistency.",
        "Built a double-entry ledger reconciling 50K+ transactions/day with automated settlement sync, and integrated the Easebuzz payment gateway via webhook-driven status updates and retry handling.",
        "Engineered a real-time chat system on RabbitMQ over MQTT (5K+ messages/min, sub-200ms latency), plus a WhatsApp OTP login and notification system that raised onboarding completion 25%.",
        "Drove the monolith-to-microservices migration, executing zero-downtime migration of 2M+ records with no data loss and cutting average API latency from 800ms to 250ms.",
      ],
      color: "#FF6B6B",
    },
    {
      role: "Software Engineer",
      company: "Dugong Global Service (Blockchain / Fintech)",
      period: "Jan 2025 - Oct 2025",
      bullets: [
        "Secured backend authentication with email-password login, OTP verification, and PEM/passkey-based auth, validating 5K+ user identities with zero credential-related breaches.",
        "Built crypto wallet creation and a pluggable payment gateway abstraction using the Strategy and Factory patterns, cutting new-provider integration time by 60%.",
        "Published 5+ reusable npm and Python packages and blockchain SDKs across JavaScript, Node.js, Golang, and Python, adopted by 3+ internal teams and reducing cross-platform integration effort 40%.",
      ],
      color: "#4ECDC4",
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
        backgroundColor: theme.palette.background.default,
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
            Experience
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: { xs: 4, md: 6 },
              textAlign: "center",
              color: theme.palette.text.secondary,
              maxWidth: "800px",
              mx: "auto",
              px: 2,
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            Building fault-tolerant payments infrastructure and secure fintech
            systems in production.
          </Typography>
        </motion.div>

        <Box
          sx={{
            position: "relative",
            maxWidth: "900px",
            mx: "auto",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              bottom: 0,
              left: { xs: "18px", md: "50%" },
              width: "2px",
              background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              transform: { md: "translateX(-50%)" },
              opacity: 0.3,
            },
          }}
        >
          {experience.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              style={{ position: "relative", marginBottom: "48px" }}
            >
              <Box
                sx={{
                  position: "absolute",
                  left: { xs: "18px", md: "50%" },
                  top: "8px",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  backgroundColor: item.color,
                  border: `3px solid ${theme.palette.background.default}`,
                  transform: "translateX(-50%)",
                  zIndex: 2,
                  boxShadow: `0 0 0 3px ${item.color}40`,
                }}
              />

              <Box
                sx={{
                  ml: { xs: 5, md: index % 2 === 0 ? 0 : "auto" },
                  mr: { md: index % 2 === 0 ? "auto" : 0 },
                  width: { xs: "calc(100% - 40px)", md: "calc(50% - 40px)" },
                  p: 3,
                  borderRadius: "16px",
                  position: "relative",
                  background:
                    theme.palette.mode === "dark"
                      ? "linear-gradient(145deg, #1a1a1a 0%, #2a2a2a 100%)"
                      : "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
                  border: `1px solid ${theme.palette.divider}`,
                  borderLeft: { xs: `4px solid ${item.color}`, md: `1px solid ${theme.palette.divider}` },
                  borderTop: { md: `4px solid ${item.color}` },
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: `0 12px 40px ${item.color}30`,
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, color: item.color, mb: 0.5 }}
                >
                  {item.role}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: theme.palette.text.primary, fontWeight: 600 }}
                >
                  {item.company}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    color: theme.palette.text.secondary,
                    mb: 2,
                    fontWeight: 500,
                  }}
                >
                  {item.period}
                </Typography>
                <Box component="ul" sx={{ pl: 2.5, m: 0 }}>
                  {item.bullets.map((bullet, bulletIndex) => (
                    <Typography
                      key={bulletIndex}
                      component="li"
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        lineHeight: 1.6,
                        mb: 1,
                        fontSize: { xs: "0.85rem", sm: "0.9rem" },
                      }}
                    >
                      {bullet}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
