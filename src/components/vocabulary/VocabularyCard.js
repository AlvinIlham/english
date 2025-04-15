import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  Divider,
  Chip,
  styled,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Alert,
} from "@mui/material";
import { useVocabulary } from "../../context/VocabularyContext";
import { VolumeUp, Delete } from "@mui/icons-material";
import { alpha } from "@mui/material/styles";
import { useSpeechSynthesis } from "react-speech-kit";
import { keyframes } from "@emotion/react";
import { useTheme } from "@mui/material/styles";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const AnimatedIconButton = styled(IconButton)(({ theme }) => ({
  transition: "all 0.3s ease",
  "&:hover": {
    animation: `${spin} 0.5s linear`,
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  animation: `${fadeIn} 0.5s ease-out`,
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: theme.shadows[4],
  },
}));

const VocabularyCard = ({ item }) => {
  const {
    word,
    pronunciation,
    partOfSpeech,
    definition,
    indonesianDefinition,
    examples = [],
    category,
    level,
  } = item;

  const [speakError, setSpeakError] = useState(null);
  const [deleteError, setDeleteError] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const { deleteVocabulary } = useVocabulary();
  const { speak } = useSpeechSynthesis();
  const theme = useTheme();

  const handleSpeak = (text) => {
    try {
      if (!window.speechSynthesis) {
        throw new Error("Speech synthesis not supported in this browser");
      }
      speak({ text });
      setSpeakError(null);
    } catch (error) {
      console.error("Error in speech synthesis:", error);
      setSpeakError(
        "Sorry, text-to-speech is not available. Please try a different browser."
      );
    }
  };

  const handleDelete = async () => {
    try {
      await deleteVocabulary(item);
      setDeleteDialogOpen(false);
      setDeleteError(null);
    } catch (error) {
      console.error("Error deleting vocabulary:", error);
      setDeleteError("Failed to delete vocabulary. Please try again.");
    }
  };

  return (
    <StyledCard
      sx={{
        mb: 2,
        boxShadow: 3,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        borderRadius: 2,
        overflow: "hidden",
        width: "100%",
        "@media (max-width: 600px)": {
          "& .MuiBox-root": {
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 1,
          },
          "& .MuiChip-root": {
            marginBottom: 1,
          },
        },
      }}>
      <CardContent>
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              {word}
            </Typography>
            <AnimatedIconButton
              color="primary"
              onClick={() => handleSpeak(word)}
              aria-label="pronounce word">
              <VolumeUp />
            </AnimatedIconButton>
          </Box>

          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
            <Chip
              label={pronunciation}
              size="small"
              variant="outlined"
              sx={{
                borderColor: "transparent",
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
              }}
            />
            <Chip label={partOfSpeech} color="primary" size="small" />
            <Chip
              label={category}
              size="small"
              color="primary"
              variant="outlined"
            />
            <Chip
              label={level}
              size="small"
              color="secondary"
              variant="outlined"
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box
                sx={{
                  bgcolor: alpha(theme.palette.primary.main, 0.05),
                  p: 2,
                  borderRadius: 1,
                }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "medium",
                    color: theme.palette.primary.main,
                    mb: 1,
                  }}>
                  Terjemahan:
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>
                  {indonesianDefinition}
                </Typography>
              </Box>
              <Box
                sx={{
                  bgcolor: alpha(theme.palette.secondary.main, 0.05),
                  p: 2,
                  borderRadius: 1,
                }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "medium",
                    color: theme.palette.secondary.main,
                    mb: 1,
                  }}>
                  Penjelasan:
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {definition}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ mb: 2 }} />

        <Typography
          variant="subtitle1"
          sx={{ mb: 2, fontWeight: "bold", color: theme.palette.primary.main }}>
          Contoh Kalimat:
        </Typography>

        {examples.map((example, index) => (
          <Box
            key={index}
            sx={{
              mb: 2,
              bgcolor: alpha(theme.palette.background.paper, 0.6),
              p: 2,
              borderRadius: 1,
              border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
              "&:hover": {
                bgcolor: alpha(theme.palette.background.paper, 0.9),
                transform: "translateX(4px)",
                transition: "all 0.3s ease",
              },
            }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "medium",
                    color: theme.palette.primary.main,
                  }}>
                  {example.english}
                </Typography>
                <IconButton
                  size="small"
                  color="primary"
                  onClick={() => handleSpeak(example.english)}
                  aria-label="speak example">
                  <VolumeUp fontSize="small" />
                </IconButton>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  pl: 2,
                  borderLeft: `2px solid ${alpha(
                    theme.palette.primary.main,
                    0.3
                  )}`,
                }}>
                {example.indonesian}
              </Typography>
            </Box>
          </Box>
        ))}

        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
          <Button
            variant="outlined"
            color="error"
            size="small"
            startIcon={<Delete />}
            onClick={() => setDeleteDialogOpen(true)}>
            Hapus
          </Button>
        </Box>

        {(speakError || deleteError) && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {speakError || deleteError}
          </Alert>
        )}
      </CardContent>

      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        aria-labelledby="delete-dialog-title">
        <DialogTitle id="delete-dialog-title">Delete Vocabulary</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete "{word}"? This action cannot be
            undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleDelete} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </StyledCard>
  );
};

export default VocabularyCard;
