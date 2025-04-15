import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  useTheme,
  alpha,
  Tooltip,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { Translate, Menu as MenuIcon } from "@mui/icons-material";

const Header = () => {
  const theme = useTheme();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname.startsWith(path);
  };

  const NavButton = ({ to, children }) => (
    <Button
      color="inherit"
      component={Link}
      to={to}
      sx={{
        px: 2,
        py: 1,
        borderRadius: 1,
        textTransform: "none",
        fontSize: "1rem",
        fontWeight: 500,
        letterSpacing: 0.5,
        transition: "all 0.2s ease-in-out",
        backgroundColor: isActive(to)
          ? alpha(theme.palette.primary.main, 0.1)
          : "transparent",
        "&:hover": {
          backgroundColor: alpha(theme.palette.primary.main, 0.15),
          transform: "translateY(-1px)",
        },
      }}>
      {children}
    </Button>
  );

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      elevation={2}
      sx={{
        backgroundColor: alpha(theme.palette.background.paper, 0.8),
        backdropFilter: "blur(8px)",
        borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        color: theme.palette.text.primary,
        transition: "all 0.3s ease-in-out",
      }}>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          py: 1,
          maxWidth: "1440px",
          width: "100%",
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4 },
        }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            color="inherit"
            sx={{
              mr: 2,
              "&:hover": { color: theme.palette.primary.main },
            }}>
            <Translate />
          </IconButton>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: 700,
              letterSpacing: 0.8,
              fontSize: "1.25rem",
              transition: "all 0.2s ease-in-out",
              "&:hover": {
                color: theme.palette.primary.main,
                transform: "scale(1.02)",
              },
            }}>
            English Learning AI
          </Typography>
        </Box>

        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={handleMenuOpen} sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  backgroundColor: alpha(theme.palette.background.paper, 0.95),
                  backdropFilter: "blur(8px)",
                },
              }}>
              <MenuItem
                component={Link}
                to="/vocabulary"
                onClick={handleMenuClose}>
                Vocabulary
              </MenuItem>
              <MenuItem
                component={Link}
                to="/grammar"
                onClick={handleMenuClose}>
                Grammar
              </MenuItem>
              <MenuItem
                component={Link}
                to="/exercises"
                onClick={handleMenuClose}>
                Exercises
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              gap: 1,
              mx: 4,
              flex: 1,
              justifyContent: "center",
            }}>
            <NavButton to="/vocabulary">Vocabulary</NavButton>
            <NavButton to="/grammar">Grammar</NavButton>
            <NavButton to="/exercises">Exercises</NavButton>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
