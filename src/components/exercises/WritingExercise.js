import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  TextField,
  Card,
  CardContent,
  CircularProgress,
  Alert,
  Chip,
  Stack,
} from "@mui/material";
import { Send, Refresh } from "@mui/icons-material";
import BackButton from "../common/BackButton";

const WritingExercise = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [prompt, setPrompt] = useState(null);

  // Sample writing prompts (in real app, this would come from an API)
  const writingPrompts = [
    "Describe your ideal vacation destination and explain why you would like to visit there.",
    "Write about a challenging experience in your life and what you learned from it.",
    "Explain the importance of learning a foreign language in today's globalized world.",
    "Compare and contrast the advantages and disadvantages of living in a big city versus a small town.",
  ];

  const generateNewPrompt = () => {
    const randomPrompt =
      writingPrompts[Math.floor(Math.random() * writingPrompts.length)];
    setPrompt(randomPrompt);
    setText("");
    setFeedback(null);
  };

  const handleSubmit = async () => {
    setLoading(true);
    // Simulate AI feedback (in real app, this would be an API call)
    setTimeout(() => {
      const sampleFeedback = {
        overall: "Your writing shows good organization and clear ideas.",
        grammar: [
          "Consider using more varied sentence structures.",
          "Watch out for subject-verb agreement in complex sentences.",
        ],
        vocabulary: [
          "Good use of descriptive words.",
          "Consider using more academic vocabulary where appropriate.",
        ],
        suggestions: [
          "Try to provide more specific examples to support your points.",
          "Consider adding a stronger conclusion to summarize your main ideas.",
        ],
      };
      setFeedback(sampleFeedback);
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    generateNewPrompt();
  }, []);

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <BackButton />

      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Writing Exercise
      </Typography>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Writing Prompt:
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {prompt}
            </Typography>
            <Button
              variant="outlined"
              startIcon={<Refresh />}
              onClick={generateNewPrompt}
              size="small"
            >
              New Prompt
            </Button>
          </Box>

          <TextField
            fullWidth
            multiline
            rows={8}
            variant="outlined"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write your response here..."
            sx={{ mb: 3 }}
          />

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              endIcon={<Send />}
              onClick={handleSubmit}
              disabled={!text.trim() || loading}
            >
              Get Feedback
            </Button>
          </Box>
        </CardContent>
      </Card>

      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {feedback && (
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              AI Feedback
            </Typography>

            <Alert severity="info" sx={{ mb: 3 }}>
              {feedback.overall}
            </Alert>

            <Stack spacing={3}>
              <Box>
                <Typography variant="subtitle1" gutterBottom>
                  Grammar:
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {feedback.grammar.map((item, index) => (
                    <Chip
                      key={index}
                      label={item}
                      color="primary"
                      variant="outlined"
                      sx={{ mb: 1 }}
                    />
                  ))}
                </Stack>
              </Box>

              <Box>
                <Typography variant="subtitle1" gutterBottom>
                  Vocabulary:
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {feedback.vocabulary.map((item, index) => (
                    <Chip
                      key={index}
                      label={item}
                      color="secondary"
                      variant="outlined"
                      sx={{ mb: 1 }}
                    />
                  ))}
                </Stack>
              </Box>

              <Box>
                <Typography variant="subtitle1" gutterBottom>
                  Suggestions for Improvement:
                </Typography>
                <Stack spacing={1}>
                  {feedback.suggestions.map((suggestion, index) => (
                    <Alert key={index} severity="success">
                      {suggestion}
                    </Alert>
                  ))}
                </Stack>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default WritingExercise;
