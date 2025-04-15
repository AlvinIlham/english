import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import {
  PlayArrow,
  Pause,
  ArrowForward,
  CheckCircle,
} from "@mui/icons-material";
import BackButton from "../common/BackButton";

const ListeningExercise = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio());

  // Sample listening exercise (in real app, this would come from an API)
  const exercise = {
    questions: [
      {
        id: 1,
        audioUrl: "https://example.com/audio1.mp3",
        question: "What is the main topic of the conversation?",
        options: [
          "Planning a vacation",
          "Discussing work project",
          "Making dinner plans",
          "Shopping for clothes",
        ],
        correctAnswer: 0,
      },
      {
        id: 2,
        audioUrl: "https://example.com/audio2.mp3",
        question: "What did the speaker suggest?",
        options: [
          "Going to the movies",
          "Staying at home",
          "Meeting tomorrow",
          "Calling later",
        ],
        correctAnswer: 2,
      },
      {
        id: 3,
        audioUrl: "https://example.com/audio3.mp3",
        question: "How did the speaker feel about the situation?",
        options: ["Excited", "Worried", "Indifferent", "Frustrated"],
        correctAnswer: 0,
      },
    ],
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        audio.src = exercise.questions[currentQuestion].audioUrl;
        audio.onerror = () => {
          setIsPlaying(false);
          alert("Error loading audio. Please try again.");
        };
        audio.onended = () => setIsPlaying(false);
        audio.play().catch((error) => {
          console.error("Error playing audio:", error);
          setIsPlaying(false);
          alert("Error playing audio. Please try again.");
        });
        setIsPlaying(true);
      } catch (error) {
        console.error("Error setting up audio:", error);
        alert("Error setting up audio. Please try again.");
      }
    }
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

    audio.pause();
    setIsPlaying(false);

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
        Listening Comprehension Exercise
      </Typography>

      {!showResult ? (
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <IconButton
                size="large"
                onClick={handlePlayPause}
                color="primary"
                sx={{ mr: 2 }}>
                {isPlaying ? <Pause /> : <PlayArrow />}
              </IconButton>
              <Typography variant="body1">
                Listen to the audio and answer the question
              </Typography>
            </Box>

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
                disabled={!selectedAnswer}>
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
              }}>
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
                }}>
                Try Again
              </Button>
            </Box>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default ListeningExercise;
