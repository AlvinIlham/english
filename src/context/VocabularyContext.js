import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";
import vocabularyData from "../data/vocabularyData";

const VocabularyContext = createContext();
const LOCAL_STORAGE_KEY = "vocabulary_data";

export const useVocabulary = () => {
  const context = useContext(VocabularyContext);
  if (!context) {
    throw new Error("useVocabulary must be used within a VocabularyProvider");
  }
  return context;
};

export const VocabularyProvider = ({ children }) => {
  const [vocabulary, setVocabulary] = useState(() => {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedData ? JSON.parse(storedData) : vocabularyData;
  });
  const [selectedLetter, setSelectedLetter] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(vocabulary));
  }, [vocabulary]);

  const filteredVocabulary = useMemo(() => {
    return vocabulary.filter((item) => {
      const matchesLetter =
        selectedLetter === "all" ||
        item.word.charAt(0).toUpperCase() === selectedLetter;
      const matchesLevel =
        selectedLevel === "all" || item.level === selectedLevel;
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        item.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.definition.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesLetter && matchesLevel && matchesCategory && matchesSearch;
    });
  }, [
    selectedLetter,
    selectedLevel,
    selectedCategory,
    searchQuery,
    vocabulary,
  ]);

  const letters = useMemo(() => {
    // Get all unique first letters from vocabulary words
    const uniqueLetters = new Set(
      vocabulary.map((item) => item.word.charAt(0).toUpperCase())
    );
    // Create an array with all alphabet letters
    const allLetters = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    // Filter to only include letters that have vocabulary items
    const availableLetters = allLetters.filter((letter) =>
      uniqueLetters.has(letter)
    );
    return ["all", ...availableLetters];
  }, [vocabulary]);

  const levels = useMemo(() => {
    const uniqueLevels = new Set(vocabulary.map((item) => item.level));
    return ["all", ...Array.from(uniqueLevels).sort()];
  }, [vocabulary]);

  const categories = useMemo(() => {
    const uniqueCategories = new Set(vocabulary.map((item) => item.category));
    return ["all", ...Array.from(uniqueCategories).sort()];
  }, [vocabulary]);

  const addVocabulary = (newVocab) => {
    const newId = Math.max(...vocabulary.map((item) => item.id), 0) + 1;
    setVocabulary([...vocabulary, { ...newVocab, id: newId }]);
  };

  const deleteVocabulary = (vocabToDelete) => {
    setVocabulary(vocabulary.filter((item) => item.id !== vocabToDelete.id));
  };

  const value = {
    vocabulary: filteredVocabulary,
    letters,
    levels,
    categories,
    selectedLetter,
    setSelectedLetter,
    selectedLevel,
    setSelectedLevel,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    addVocabulary,
    deleteVocabulary,
  };

  return (
    <VocabularyContext.Provider value={value}>
      {children}
    </VocabularyContext.Provider>
  );
};
