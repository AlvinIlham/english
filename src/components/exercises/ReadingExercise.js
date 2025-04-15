import React, { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Box,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Card,
  CardContent,
} from "@mui/material";
import { ArrowForward, CheckCircle } from "@mui/icons-material";
import BackButton from "../common/BackButton";

const ReadingExercise = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const exercise = {
    passage: `The Rise of Artificial Intelligence

Artificial Intelligence (AI) has become an integral part of our daily lives. From virtual assistants like Siri and Alexa to recommendation systems on streaming platforms, AI technology is everywhere. This rapid advancement has brought both opportunities and challenges.

One of the main benefits of AI is its ability to process vast amounts of data quickly and accurately. This has led to breakthroughs in healthcare, where AI systems can help diagnose diseases and develop treatment plans. In education, AI-powered platforms can provide personalized learning experiences for students.

However, the widespread adoption of AI also raises concerns about privacy, job displacement, and ethical considerations. As AI continues to evolve, it's crucial to establish guidelines and regulations to ensure its responsible development and use.`,
    questions: [
      {
        id: 1,
        question: "What is one of the main benefits of AI mentioned in the passage?",
        options: [
          "Its ability to replace human workers",
          "Its ability to process vast amounts of data quickly",
          "Its ability to solve all world problems",
          "Its ability to think like humans",
        ],
        correctAnswer: 1,
      },
      {
        id: 2,
        question: "According to the passage, what is a concern about AI?",
        options: [
          "Its slow processing speed",
          "Its inability to learn",
          "Privacy issues",
          "Its high cost",
        ],
        correctAnswer: 2,
      },
      {
        id: 3,
        question: "How is AI being used in healthcare according to the passage?",
        options: [
          "To replace doctors",
          "To help diagnose diseases",
          "To build hospitals",
          "To train medical students",
        ],
        correctAnswer: 1,
      },
    ],
  };

  const handleAnswerSelect = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleNextQuestion = () => {
    if (
      parseInt(selectedAnswer) ===
      exercise.questions[currentQuestion].correctAnswer
    ) {
      setScore(score + 1);
    }

    if (currentQuestion < exercise.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      setShowResult(true);
    }
  };

  const currentQuestionData = exercise.questions[currentQuestion];

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <BackButton />

      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Reading Comprehension Exercise
      </Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Passage:
        </Typography>
        <Typography variant="body1" paragraph sx={{ whiteSpace: "pre-line" }}>
          {exercise.passage}
        </Typography>
      </Paper>

      {!showResult ? (
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Question {currentQuestion + 1} of {exercise.questions.length}
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              {currentQuestionData.question}
            </Typography>

            <FormControl component="fieldset">
              <RadioGroup value={selectedAnswer} onChange={handleAnswerSelect}>
                {currentQuestionData.options.map((option, index) => (
                  <FormControlLabel
                    key={index}
                    value={index.toString()}
                    control={<Radio />}
                    label={option}
                  />
                ))}
              </RadioGroup>
            </FormControl>

            <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                onClick={handleNextQuestion}
                disabled={!selectedAnswer}
              >
                {currentQuestion === exercise.questions.length - 1
                  ? "Finish"
                  : "Next Question"}
              </Button>
            </Box>
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
              <Typography variant="h6">
                Your Score: {score} out of {exercise.questions.length}
              </Typography>
              <Button
                variant="contained"
                onClick={() => {
                  setCurrentQuestion(0);
                  setSelectedAnswer("");
                  setScore(0);
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

export default ReadingExercise;
