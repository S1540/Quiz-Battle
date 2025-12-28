const express = require("express");
const cors = require("cors");
const questionRoutes = require("./routes/offlineRoutes");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = express();

// Middlewares
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/", questionRoutes);

app.get("/", (req, res) => {
  res.send("Server is running successfully 😎");
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
