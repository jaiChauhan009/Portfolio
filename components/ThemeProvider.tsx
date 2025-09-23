"use client"

import type React from "react"

import { createTheme, ThemeProvider as MUIThemeProvider, CssBaseline } from "@mui/material"
import { createContext, useContext, useEffect, useState } from "react"

const ColorModeContext = createContext({ toggleColorMode: () => {} })

export const useColorMode = () => useContext(ColorModeContext)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("dark")

  useEffect(() => {
    const savedMode = localStorage.getItem("theme") as "light" | "dark"
    if (savedMode) {
      setMode(savedMode)
    } else {
      // Check system preference
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setMode(systemPrefersDark ? "dark" : "light")
    }
  }, [])

  // Apply theme to document body
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode)
    document.body.className = mode

    // Update CSS custom properties for the theme
    const root = document.documentElement
    if (mode === "dark") {
      root.style.setProperty("--background-color", "#0a0a0a")
      root.style.setProperty("--text-color", "#ffffff")
      root.style.setProperty("--card-background", "#1a1a1a")
      root.style.setProperty("--border-color", "rgba(255, 255, 255, 0.1)")
    } else {
      root.style.setProperty("--background-color", "#ffffff")
      root.style.setProperty("--text-color", "#000000")
      root.style.setProperty("--card-background", "#f8f9fa")
      root.style.setProperty("--border-color", "rgba(0, 0, 0, 0.1)")
    }
  }, [mode])

  const colorMode = {
    toggleColorMode: () => {
      const newMode = mode === "light" ? "dark" : "light"
      setMode(newMode)
      localStorage.setItem("theme", newMode)
    },
  }

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "dark" ? "#64ffda" : "#1976d2",
      },
      secondary: {
        main: mode === "dark" ? "#ff6b6b" : "#dc004e",
      },
      background: {
        default: mode === "dark" ? "#0a0a0a" : "#ffffff",
        paper: mode === "dark" ? "#1a1a1a" : "#f5f5f5",
      },
      text: {
        primary: mode === "dark" ? "#ffffff" : "#000000",
        secondary: mode === "dark" ? "#b0b0b0" : "#666666",
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: "3.5rem",
        fontWeight: 700,
        lineHeight: 1.2,
      },
      h2: {
        fontSize: "2.5rem",
        fontWeight: 600,
        lineHeight: 1.3,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: "none",
            fontWeight: 600,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            boxShadow: mode === "dark" ? "0 4px 20px rgba(100, 255, 218, 0.1)" : "0 4px 20px rgba(0, 0, 0, 0.1)",
            backgroundColor: mode === "dark" ? "#1a1a1a" : "#ffffff",
          },
        },
      },
    },
  })

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <div
          style={{
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
            minHeight: "100vh",
            transition: "background-color 0.3s ease, color 0.3s ease",
          }}
        >
          {children}
        </div>
      </MUIThemeProvider>
    </ColorModeContext.Provider>
  )
}
