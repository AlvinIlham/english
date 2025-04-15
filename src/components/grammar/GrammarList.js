import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Box,
  Pagination,
} from "@mui/material";
import GrammarCard from "./GrammarCard";

// Data tata bahasa - dalam aplikasi nyata, ini akan berasal dari API
const sampleGrammar = [
  {
    id: 1,
    title: "Present Simple Tense",
    description:
      "Present simple tense digunakan untuk menggambarkan kebiasaan, situasi yang tidak berubah, kebenaran umum, dan pengaturan tetap.",
    rules: [
      {
        title: "Kalimat Positif",
        explanation:
          "Subjek + kata kerja (bentuk dasar) + objek. Untuk orang ketiga tunggal (he/she/it), tambahkan -s atau -es pada kata kerja.",
      },
      {
        title: "Kalimat Negatif",
        explanation:
          "Subjek + do/does + not + kata kerja (bentuk dasar) + objek.",
      },
      {
        title: "Bentuk Pertanyaan",
        explanation: "Do/Does + subjek + kata kerja (bentuk dasar) + objek?",
      },
    ],
    examples: [
      "I play tennis every weekend.",
      "She doesn't like coffee.",
      "Do they live in London?",
      "He works in a bank.",
    ],
  },
  {
    id: 2,
    title: "Present Continuous Tense",
    description:
      "Present continuous tense digunakan untuk menggambarkan tindakan yang terjadi sekarang atau sekitar sekarang, dan situasi yang sedang berkembang atau sementara.",
    rules: [
      {
        title: "Kalimat Positif",
        explanation: "Subjek + am/is/are + kata kerja-ing + objek.",
      },
      {
        title: "Kalimat Negatif",
        explanation: "Subjek + am/is/are + not + kata kerja-ing + objek.",
      },
      {
        title: "Bentuk Pertanyaan",
        explanation: "Am/Is/Are + subjek + kata kerja-ing + objek?",
      },
    ],
    examples: [
      "I am studying English right now.",
      "They are not working today.",
      "Is she coming to the party?",
      "We are staying at a hotel this week.",
    ],
  },
  {
    id: 3,
    title: "Past Simple Tense",
    description:
      "Past simple tense digunakan untuk menggambarkan tindakan yang telah selesai di masa lalu, kebiasaan di masa lalu, dan narasi.",
    rules: [
      {
        title: "Kata Kerja Beraturan",
        explanation: "Subjek + kata kerja-ed + objek.",
      },
      {
        title: "Kata Kerja Tidak Beraturan",
        explanation: "Subjek + bentuk lampau kata kerja + objek.",
      },
      {
        title: "Negatif & Pertanyaan",
        explanation:
          "Subjek + did + not + kata kerja (bentuk dasar) + objek. / Did + subjek + kata kerja (bentuk dasar) + objek?",
      },
    ],
    examples: [
      "I visited Paris last summer.",
      "She didn't call me yesterday.",
      "Did you finish your homework?",
      "They went to the cinema last night.",
    ],
  },
  {
    id: 4,
    title: "Future Simple Tense",
    description:
      "Future simple tense digunakan untuk menyatakan prediksi, keputusan spontan, janji, atau tindakan yang akan terjadi di masa depan.",
    rules: [
      {
        title: "Kalimat Positif",
        explanation: "Subjek + will + kata kerja (bentuk dasar) + objek.",
      },
      {
        title: "Kalimat Negatif",
        explanation: "Subjek + will + not + kata kerja (bentuk dasar) + objek.",
      },
      {
        title: "Bentuk Pertanyaan",
        explanation: "Will + subjek + kata kerja (bentuk dasar) + objek?",
      },
    ],
    examples: [
      "I will call you tomorrow.",
      "She won't attend the meeting.",
      "Will they arrive on time?",
      "The train will depart at 9 PM.",
    ],
  },
  {
    id: 5,
    title: "Present Perfect Tense",
    description:
      "Present perfect tense digunakan untuk menghubungkan masa lalu dengan masa sekarang, menggambarkan pengalaman, perubahan, atau tindakan yang baru saja selesai.",
    rules: [
      {
        title: "Kalimat Positif",
        explanation: "Subjek + have/has + past participle + objek.",
      },
      {
        title: "Kalimat Negatif",
        explanation: "Subjek + have/has + not + past participle + objek.",
      },
      {
        title: "Bentuk Pertanyaan",
        explanation: "Have/Has + subjek + past participle + objek?",
      },
    ],
    examples: [
      "I have visited Paris three times.",
      "She hasn't finished her homework yet.",
      "Have you ever tried sushi?",
      "They have lived here since 2010.",
    ],
  },
];

const GrammarList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 2;

  // Filter grammar based on search term
  const filteredGrammar = sampleGrammar.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredGrammar.length / itemsPerPage);
  const displayedGrammar = filteredGrammar.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(1); // Reset to first page when searching
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 3 }}>
        Pembelajaran Tata Bahasa
      </Typography>

      <TextField
        fullWidth
        label="Cari topik tata bahasa"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
        sx={{ mb: 4 }}
      />

      {displayedGrammar.length > 0 ? (
        <>
          {displayedGrammar.map((grammar) => (
            <GrammarCard
              key={grammar.id}
              title={grammar.title}
              description={grammar.description}
              rules={grammar.rules}
              examples={grammar.examples}
            />
          ))}

          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              color="primary"
            />
          </Box>
        </>
      ) : (
        <Typography variant="body1">
          Tidak ada topik tata bahasa yang sesuai dengan pencarian Anda.
        </Typography>
      )}
    </Container>
  );
};

export default GrammarList;
