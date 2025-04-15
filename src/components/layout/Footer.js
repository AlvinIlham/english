import React from "react";
import { Box, Typography, Container, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "primary.light", py: 3, mt: "auto" }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          {"© "}
          {new Date().getFullYear()}{" "}
          <Link color="inherit" href="#">
            English Learning AI
          </Link>
          {" - Modern English Learning Platform"}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
