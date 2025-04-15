import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Box,
} from "@mui/material";
import { Mic, Headphones, MenuBook, Create } from "@mui/icons-material";

const ExerciseList = () => {
  const navigate = useNavigate();
  const exercises = [
    {
      id: 1,
      title: "Latihan Membaca",
      description:
        "Tingkatkan pemahaman membaca Anda dengan teks dan pertanyaan yang dibuat oleh AI.",
      icon: <MenuBook fontSize="large" />,
      color: "#4caf50",
    },
    {
      id: 2,
      title: "Latihan Mendengarkan",
      description:
        "Tingkatkan kemampuan mendengarkan Anda dengan latihan audio dan pertanyaan pemahaman.",
      icon: <Headphones fontSize="large" />,
      color: "#2196f3",
    },
    {
      id: 3,
      title: "Latihan Menulis",
      description:
        "Kembangkan keterampilan menulis Anda dengan umpan balik dan saran dari AI.",
      icon: <Create fontSize="large" />,
      color: "#ff9800",
    },
    {
      id: 4,
      title: "Latihan Berbicara",
      description:
        "Latih pengucapan dan keterampilan percakapan Anda dengan evaluasi AI.",
      icon: <Mic fontSize="large" />,
      color: "#f44336",
    },
  ];

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        Latihan Praktik
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        Tingkatkan kemampuan bahasa Inggris Anda dengan latihan berbasis AI
        kami. Pilih jenis latihan di bawah ini untuk mulai berlatih.
      </Typography>

      <Grid container spacing={3}>
        {exercises.map((exercise) => (
          <Grid item xs={12} sm={6} md={6} key={exercise.id}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardActionArea
                onClick={() => {
                  switch (exercise.id) {
                    case 1:
                      navigate("/exercises/reading");
                      break;
                    case 2:
                      navigate("/exercises/listening");
                      break;
                    case 3:
                      navigate("/exercises/writing");
                      break;
                    case 4:
                      navigate("/exercises/speaking");
                      break;
                    default:
                      break;
                  }
                }}
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "stretch",
                }}>
                <Box
                  sx={{
                    bgcolor: exercise.color,
                    py: 3,
                    display: "flex",
                    justifyContent: "center",
                    color: "white",
                  }}>
                  {exercise.icon}
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {exercise.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {exercise.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          mt: 6,
          p: 3,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 1,
        }}>
        <Typography variant="h6" gutterBottom>
          Pembelajaran Berbasis AI
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Latihan kami menggunakan teknologi AI canggih untuk memberikan umpan
          balik yang dipersonalisasi dan beradaptasi dengan kecepatan belajar
          Anda. Berlatihlah secara teratur untuk meningkatkan kemampuan bahasa
          Inggris Anda di semua bidang keterampilan.
        </Typography>
      </Box>
    </Container>
  );
};

export default ExerciseList;
