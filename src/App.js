import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as CustomThemeProvider } from "./context/ThemeContext";
import { VocabularyProvider } from "./context/VocabularyContext";
import "./App.css";

// Layout
import Layout from "./components/layout/Layout";

// Pages
import VocabularyList from "./components/vocabulary/VocabularyList";
import GrammarList from "./components/grammar/GrammarList";
import ExerciseList from "./components/exercises/ExerciseList";
import ReadingExercise from "./components/exercises/ReadingExercise";
import ListeningExercise from "./components/exercises/ListeningExercise";
import WritingExercise from "./components/exercises/WritingExercise";
import SpeakingExercise from "./components/exercises/SpeakingExercise";

// Create a theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#e3f2fd",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
      marginBottom: "1rem",
    },
  },
});

function App() {
  return (
    <CustomThemeProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <VocabularyProvider>
          <Router>
            <Layout>
              <Routes>
                <Route path="/vocabulary" element={<VocabularyList />} />
                <Route path="/grammar" element={<GrammarList />} />
                <Route path="/exercises" element={<ExerciseList />} />
                <Route
                  path="/exercises/reading"
                  element={<ReadingExercise />}
                />
                <Route
                  path="/exercises/listening"
                  element={<ListeningExercise />}
                />
                <Route
                  path="/exercises/writing"
                  element={<WritingExercise />}
                />
                <Route
                  path="/exercises/speaking"
                  element={<SpeakingExercise />}
                />
                <Route
                  path="/"
                  element={<Navigate to="/vocabulary" replace />}
                />
              </Routes>
            </Layout>
          </Router>
        </VocabularyProvider>
      </ThemeProvider>
    </CustomThemeProvider>
  );
}

export default App;
