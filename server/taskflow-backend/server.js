const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

const taskRoutes = require("./routes/taskRoutes");

app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173"
}));

mongoose.connect(
  "mongodb://maserieamoi_db_user:jnlfY0jcMddiQrLX@ac-taihkzs-shard-00-00.ppf8wb3.mongodb.net:27017,ac-taihkzs-shard-00-01.ppf8wb3.mongodb.net:27017,ac-taihkzs-shard-00-02.ppf8wb3.mongodb.net:27017/taskdb?ssl=true&replicaSet=atlas-10bdy6-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => {
  console.log("MongoDB connecté");
})
.catch((err) => {
  console.error("Erreur MongoDB :", err);
});

app.get("/api/ping", (req, res) => {
  res.json({
    message: "Serveur TaskFlow opérationnel"
  });
});

app.use("/api/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Le serveur tourne sur http://localhost:${PORT}`);
});