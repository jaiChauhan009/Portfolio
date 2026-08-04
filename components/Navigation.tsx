"use client"

import React, { useState } from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  useTheme,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material"
import { Brightness4, Brightness7, MoreVert } from "@mui/icons-material"
import { useColorMode } from "./ThemeProvider"
import { motion } from "framer-motion"

export default function Navigation() {
  const theme = useTheme()
  const { toggleColorMode } = useColorMode()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    handleMenuClose()
  }

  const navItems = ["About", "Experience", "Skills", "Projects", "Achievements", "Contact"]

  return (
    <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: theme.palette.mode === "dark" ? "rgba(10, 10, 10, 0.9)" : "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(10px)",
          boxShadow:
            theme.palette.mode === "dark" ? "0 2px 10px rgba(100, 255, 218, 0.1)" : "0 2px 10px rgba(0, 0, 0, 0.1)",
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              color: theme.palette.text.primary,
              whiteSpace: "nowrap", // prevent vertical stacking
            }}
          >
            JAI KISHAN
          </Typography>

          {/* Desktop navigation buttons */}
          {!isMobile &&
            navItems.map((item) => (
              <Button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                sx={{
                  mx: 1,
                  color: theme.palette.text.primary,
                  "&:hover": {
                    backgroundColor:
                      theme.palette.mode === "dark" ? "rgba(100, 255, 218, 0.1)" : "rgba(25, 118, 210, 0.1)",
                    color: theme.palette.primary.main,
                  },
                  fontWeight: 500,
                  textTransform: "none",
                }}
              >
                {item}
              </Button>
            ))}

          {/* Mobile menu icon */}
          {isMobile && (
            <>
              <IconButton
                aria-label="more"
                aria-controls="nav-menu"
                aria-haspopup="true"
                onClick={handleMenuOpen}
                sx={{
                  color: theme.palette.text.primary,
                  "&:hover": {
                    backgroundColor:
                      theme.palette.mode === "dark" ? "rgba(100, 255, 218, 0.1)" : "rgba(25, 118, 210, 0.1)",
                  },
                }}
              >
                <MoreVert />
              </IconButton>

              <Menu
                id="nav-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                {navItems.map((item) => (
                  <MenuItem key={item} onClick={() => scrollToSection(item.toLowerCase())}>
                    {item}
                  </MenuItem>
                ))}
              </Menu>
            </>
          )}

          {/* Theme toggle always visible */}
          <IconButton
            onClick={toggleColorMode}
            sx={{
              ml: 1,
              color: theme.palette.text.primary,
              "&:hover": {
                backgroundColor: theme.palette.mode === "dark" ? "rgba(100, 255, 218, 0.1)" : "rgba(25, 118, 210, 0.1)",
              },
            }}
          >
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </motion.div>
  )
}
