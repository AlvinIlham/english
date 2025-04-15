import React from "react";
import { Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      startIcon={<ArrowBack />}
      onClick={() => navigate(-1)}
      sx={{
        mb: 3,
        color: "text.secondary",
        "&:hover": {
          color: "primary.main",
          backgroundColor: "action.hover",
        },
      }}>
      Back
    </Button>
  );
};

export default BackButton;
