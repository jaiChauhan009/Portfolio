"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "@mui/material/styles"
import { IconButton, Tooltip } from "@mui/material"
import { LightMode, DarkMode } from "@mui/icons-material"
import { useColorMode } from "./ThemeProvider"

export default function ThemeToggle() {
  const theme = useTheme()
  const { toggleColorMode } = useColorMode()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-4 z-50"
    >
      <Tooltip title={theme.palette.mode === "dark" ? "Light mode" : "Dark mode"}>
        <IconButton
          onClick={toggleColorMode}
          sx={{
            backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(10px)",
            color: theme.palette.mode === "dark" ? "#fff" : "#000",
            width: 40,
            height: 40,
            "&:hover": {
              backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
            },
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            border: `1px solid ${theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)"}`,
          }}
        >
          {theme.palette.mode === "dark" ? <LightMode sx={{ fontSize: 20 }} /> : <DarkMode sx={{ fontSize: 20 }} />}
        </IconButton>
      </Tooltip>
    </motion.div>
  )
}
