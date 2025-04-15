import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  IconButton,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Add as AddIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { useVocabulary } from "../../context/VocabularyContext";

const AddVocabularyForm = ({ open, onClose }) => {
  const { addVocabulary } = useVocabulary();
  const [formData, setFormData] = useState({
    word: "",
    pronunciation: "",
    partOfSpeech: "kata benda",
    definition: "",
    indonesianDefinition: "",
    examples: [
      {
        english: "",
        indonesian: "",
      },
    ],
    category: "",
    level: "beginner",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleExampleChange = (index, field, value) => {
    const updatedExamples = [...formData.examples];
    updatedExamples[index] = {
      ...updatedExamples[index],
      [field]: value,
    };

    setFormData({
      ...formData,
      examples: updatedExamples,
    });

    // Clear error when field is edited
    if (errors[`examples.${index}.${field}`]) {
      setErrors({
        ...errors,
        [`examples.${index}.${field}`]: "",
      });
    }
  };

  const addExample = () => {
    setFormData({
      ...formData,
      examples: [
        ...formData.examples,
        {
          english: "",
          indonesian: "",
        },
      ],
    });
  };

  const removeExample = (index) => {
    if (formData.examples.length > 1) {
      const updatedExamples = [...formData.examples];
      updatedExamples.splice(index, 1);
      setFormData({
        ...formData,
        examples: updatedExamples,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.word.trim()) {
      newErrors.word = "Kata tidak boleh kosong";
    }

    if (!formData.pronunciation.trim()) {
      newErrors.pronunciation = "Fonetik tidak boleh kosong";
    }

    if (!formData.category) {
      newErrors.category = "Kategori tidak boleh kosong";
    }

    if (!formData.definition.trim()) {
      newErrors.definition = "Definisi bahasa Inggris tidak boleh kosong";
    }

    if (!formData.indonesianDefinition.trim()) {
      newErrors.indonesianDefinition =
        "Definisi bahasa Indonesia tidak boleh kosong";
    }

    formData.examples.forEach((example, index) => {
      if (!example.english.trim()) {
        newErrors[`examples.${index}.english`] =
          "Contoh bahasa Inggris tidak boleh kosong";
      }
      if (!example.indonesian.trim()) {
        newErrors[`examples.${index}.indonesian`] =
          "Terjemahan bahasa Indonesia tidak boleh kosong";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await addVocabulary(formData);
        setFormData({
          word: "",
          pronunciation: "",
          partOfSpeech: "kata benda",
          definition: "",
          indonesianDefinition: "",
          examples: [{ english: "", indonesian: "" }],
          category: "",
          level: "beginner",
        });
        setErrors({});
        onClose();
      } catch (error) {
        console.error("Error adding vocabulary:", error);
        setErrors({
          submit: "Failed to add vocabulary. Please try again.",
        });
      }
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          maxHeight: "90vh",
          overflowY: "auto",
        },
      }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Tambah Kosakata Baru
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Kata"
              name="word"
              value={formData.word}
              onChange={handleChange}
              error={!!errors.word}
              helperText={errors.word}
              margin="normal"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Fonetik (cara pengucapan)"
              name="pronunciation"
              value={formData.pronunciation}
              onChange={handleChange}
              placeholder="/ˈæp.əl/"
              error={!!errors.pronunciation}
              helperText={errors.pronunciation}
              margin="normal"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal">
              <InputLabel>Level</InputLabel>
              <Select
                name="level"
                value={formData.level}
                onChange={handleChange}
                label="Level">
                <MenuItem value="beginner">Beginner</MenuItem>
                <MenuItem value="intermediate">Intermediate</MenuItem>
                <MenuItem value="advanced">Advanced</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal">
              <InputLabel>Jenis Kata</InputLabel>
              <Select
                name="partOfSpeech"
                value={formData.partOfSpeech}
                onChange={handleChange}
                label="Jenis Kata">
                <MenuItem value="kata benda">Kata Benda (Noun)</MenuItem>
                <MenuItem value="kata kerja">Kata Kerja (Verb)</MenuItem>
                <MenuItem value="kata sifat">Kata Sifat (Adjective)</MenuItem>
                <MenuItem value="kata keterangan">
                  Kata Keterangan (Adverb)
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Definisi Bahasa Inggris"
              name="definition"
              value={formData.definition}
              onChange={handleChange}
              error={!!errors.definition}
              helperText={errors.definition}
              margin="normal"
              multiline
              rows={2}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Definisi Bahasa Indonesia"
              name="indonesianDefinition"
              value={formData.indonesianDefinition}
              onChange={handleChange}
              error={!!errors.indonesianDefinition}
              helperText={errors.indonesianDefinition}
              margin="normal"
              multiline
              rows={2}
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal">
              <InputLabel id="category-label">Kategori</InputLabel>
              <Select
                labelId="category-label"
                name="category"
                value={formData.category}
                onChange={handleChange}
                label="Kategori">
                {[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((letter) => (
                  <MenuItem key={letter} value={letter}>
                    {letter}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
              Contoh Kalimat:
            </Typography>

            {formData.examples.map((example, index) => (
              <Box
                key={index}
                sx={{
                  mb: 2,
                  p: 2,
                  bgcolor: "background.paper",
                  borderRadius: 1,
                }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 1,
                  }}>
                  <Typography variant="subtitle2">
                    Contoh {index + 1}
                  </Typography>
                  {formData.examples.length > 1 && (
                    <IconButton
                      size="small"
                      color="error"
                      onClick={() => removeExample(index)}
                      aria-label="hapus contoh">
                      <DeleteIcon />
                    </IconButton>
                  )}
                </Box>

                <TextField
                  fullWidth
                  label="Kalimat Bahasa Inggris"
                  value={example.english}
                  onChange={(e) =>
                    handleExampleChange(index, "english", e.target.value)
                  }
                  error={!!errors[`examples.${index}.english`]}
                  helperText={errors[`examples.${index}.english`]}
                  margin="normal"
                  required
                />

                <TextField
                  fullWidth
                  label="Terjemahan Bahasa Indonesia"
                  value={example.indonesian}
                  onChange={(e) =>
                    handleExampleChange(index, "indonesian", e.target.value)
                  }
                  error={!!errors[`examples.${index}.indonesian`]}
                  helperText={errors[`examples.${index}.indonesian`]}
                  margin="normal"
                  required
                />
              </Box>
            ))}

            <Button
              startIcon={<AddIcon />}
              onClick={addExample}
              variant="outlined"
              sx={{ mt: 1 }}>
              Tambah Contoh Lain
            </Button>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{ mt: 3, display: "flex", justifyContent: "flex-end", gap: 2 }}>
            <Button variant="outlined" onClick={onClose}>
              Batal
            </Button>
            <Button variant="contained" type="submit" color="primary">
              Simpan Kosakata
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
};

export default AddVocabularyForm;
