import React from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { VolumeUp, ExpandMore } from "@mui/icons-material";
import { useSpeechSynthesis } from "react-speech-kit";

const GrammarCard = ({ title, description, rules, examples }) => {
  const { speak } = useSpeechSynthesis();

  const handleSpeak = (text) => {
    speak({ text });
  };

  return (
    <Card sx={{ mb: 3, boxShadow: 3 }}>
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold", mb: 2 }}>
          {title}
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          {description}
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <Typography variant="h6" sx={{ mb: 2 }}>
          Aturan:
        </Typography>

        {rules.map((rule, index) => (
          <Accordion key={index} sx={{ mb: 1 }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="subtitle1">{rule.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" sx={{ mb: 2 }}>
                {rule.explanation}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}

        <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
          Contoh:
        </Typography>

        {examples.map((example, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 2,
              p: 1,
              bgcolor: "background.paper",
              borderRadius: 1,
            }}>
            <Typography variant="body2" sx={{ flex: 1 }}>
              {example}
            </Typography>
            <IconButton
              size="small"
              color="primary"
              onClick={() => handleSpeak(example)}
              aria-label="ucapkan contoh">
              <VolumeUp fontSize="small" />
            </IconButton>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default GrammarCard;
