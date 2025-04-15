import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  InputAdornment,
  Tabs,
  Tab,
  Button,
  Fab,
} from "@mui/material";
import { Search, Add } from "@mui/icons-material";
import { useVocabulary } from "../../context/VocabularyContext";
import VocabularyCard from "./VocabularyCard";
import AddVocabularyForm from "./AddVocabularyForm";

const VocabularyList = () => {
  const {
    vocabulary,
    categories,
    levels,
    letters,
    selectedCategory,
    setSelectedCategory,
    selectedLevel,
    setSelectedLevel,
    selectedLetter,
    setSelectedLetter,
    searchQuery,
    setSearchQuery,
  } = useVocabulary();

  const [addFormOpen, setAddFormOpen] = useState(false);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 0 }}>
          Vocabulary List
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
          onClick={() => setAddFormOpen(true)}>
          Add New Word
        </Button>
      </Box>

      <Box sx={{ width: "100%", mb: 3, overflowX: "auto" }}>
        <Tabs
          value={selectedLetter}
          onChange={(e, newValue) => setSelectedLetter(newValue)}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="letter tabs">
          {letters.map((letter) => (
            <Tab
              key={letter}
              label={letter === "all" ? "All" : letter}
              value={letter}
            />
          ))}
        </Tabs>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel id="category-select-label">Category</InputLabel>
              <Select
                labelId="category-select-label"
                value={selectedCategory}
                label="Category"
                onChange={(e) => setSelectedCategory(e.target.value)}>
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel id="level-select-label">Level</InputLabel>
              <Select
                labelId="level-select-label"
                value={selectedLevel}
                label="Level"
                onChange={(e) => setSelectedLevel(e.target.value)}>
                {levels.map((level) => (
                  <MenuItem key={level} value={level}>
                    {level === "all" ? "All Levels" : level}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={3}>
        {vocabulary.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id || item.word}>
            <VocabularyCard item={item} />
          </Grid>
        ))}
      </Grid>

      {/* Floating Add Button for Mobile */}
      <Box sx={{ display: { sm: "none" } }}>
        <Fab
          color="primary"
          aria-label="add"
          sx={{ position: "fixed", bottom: 16, right: 16 }}
          onClick={() => setAddFormOpen(true)}>
          <Add />
        </Fab>
      </Box>

      {/* Add Vocabulary Form Dialog */}
      <AddVocabularyForm
        open={addFormOpen}
        onClose={() => setAddFormOpen(false)}
      />
    </Container>
  );
};

export default VocabularyList;
