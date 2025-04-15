import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  CircularProgress,
  Alert,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import {
  Mic,
  MicOff,
  VolumeUp,
  CheckCircle,
  Cancel,
  ArrowForward,
} from "@mui/icons-material";
import BackButton from "../common/BackButton";

const SpeakingExercise = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const phrases = [
    {
      text: "The quick brown fox jumps over the lazy dog",
      difficulty: "Medium",
      focusPoints: ["Quick consonant transitions", "Clear vowel sounds"],
    },
    {
      text: "She sells seashells by the seashore",
      difficulty: "Hard",
      focusPoints: ["S sound repetition", "Rhythm and flow"],
    },
    {
      text: "How much wood would a woodchuck chuck",
      difficulty: "Hard",
      focusPoints: ["W sound consistency", "Word stress patterns"],
    },
  ];

  const currentPhraseData = phrases[currentPhrase];

  const startRecording = () => {
    setIsRecording(true);
    setFeedback(null);
    // Real implementation: Start microphone and record
  };

  const stopRecording = () => {
    setIsRecording(false);
    setLoading(true);

    // Simulated AI feedback
    setTimeout(() => {
      const sampleFeedback = {
        accuracy: 85,
        pronunciation: [
          { word: "quick", correct: true },
          { word: "brown", correct: true },
          { word: "jumps", correct: false },
        ],
        suggestions: [
          "Pay attention to the 'j' sound in 'jumps'",
          "Maintain consistent speed throughout the phrase",
        ],
      };
      setFeedback(sampleFeedback);
      setLoading(false);
    }, 1500);
  };

  const handleNext = () => {
    if (currentPhrase < phrases.length - 1) {
      setCurrentPhrase(currentPhrase + 1);
      setFeedback(null);
    } else {
      setShowResult(true);
    }
  };

  const speakPhrase = (text) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <BackButton />

      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Speaking Exercise
      </Typography>

      {!showResult ? (
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Phrase to Practice:
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mb: 2,
                }}
              >
                <Typography variant="body1">{currentPhraseData.text}</Typography>
                <IconButton
                  color="primary"
                  onClick={() => speakPhrase(currentPhraseData.text)}
                >
                  <VolumeUp />
                </IconButton>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Difficulty: {currentPhraseData.difficulty}
              </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                Focus Points:
              </Typography>
              <List dense>
                {currentPhraseData.focusPoints.map((point, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckCircle color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={point} />
                  </ListItem>
                ))}
              </List>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
                mb: 3,
              }}
            >
              <Button
                variant="contained"
                color={isRecording ? "error" : "primary"}
                startIcon={isRecording ? <MicOff /> : <Mic />}
                onClick={isRecording ? stopRecording : startRecording}
                disabled={loading}
              >
                {isRecording ? "Stop Recording" : "Start Recording"}
              </Button>
            </Box>

            {loading && (
              <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
                <CircularProgress />
              </Box>
            )}

            {feedback && (
              <Box sx={{ mt: 3 }}>
                <Alert
                  severity={feedback.accuracy >= 80 ? "success" : "info"}
                  sx={{ mb: 2 }}
                >
                  Pronunciation Accuracy: {feedback.accuracy}%
                </Alert>

                <Typography variant="subtitle1" gutterBottom>
                  Word-by-Word Analysis:
                </Typography>
                <List dense>
                  {feedback.pronunciation.map((item, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        {item.correct ? (
                          <CheckCircle color="success" />
                        ) : (
                          <Cancel color="error" />
                        )}
                      </ListItemIcon>
                      <ListItemText primary={item.word} />
                    </ListItem>
                  ))}
                </List>

                <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                  Suggestions:
                </Typography>
                <List dense>
                  {feedback.suggestions.map((suggestion, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <ArrowForward color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={suggestion} />
                    </ListItem>
                  ))}
                </List>

                <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    endIcon={<ArrowForward />}
                  >
                    {currentPhrase === phrases.length - 1
                      ? "Finish"
                      : "Next Phrase"}
                  </Button>
                </Box>
              </Box>
            )}
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
            >
              <CheckCircle color="success" sx={{ fontSize: 60 }} />
              <Typography variant="h5" gutterBottom>
                Exercise Complete!
              </Typography>
              <Button
                variant="contained"
                onClick={() => {
                  setCurrentPhrase(0);
                  setFeedback(null);
                  setShowResult(false);
                }}
              >
                Try Again
              </Button>
            </Box>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default SpeakingExercise;
