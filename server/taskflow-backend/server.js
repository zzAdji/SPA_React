const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";
const MONGODB_URI = process.env.MONGODB_URI;

const taskRoutes = require("./routes/taskRoutes");

if (!MONGODB_URI) {
  console.error("MONGODB_URI est manquant dans le fichier .env");
  process.exit(1);
}

app.use(express.json());

app.use(cors({
  origin: CLIENT_URL
}));

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log("MongoDB connecte");
  })
  .catch((err) => {
    console.error("Erreur MongoDB :", err);
  });

app.get("/api/ping", (req, res) => {
  res.json({
    message: "Serveur TaskFlow operationnel"
  });
});

app.use("/api/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Le serveur tourne sur http://localhost:${PORT}`);
});
