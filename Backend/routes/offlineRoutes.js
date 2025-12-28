const express = require("express");
const router = express.Router();
const Question = require("../models/QuestionSchema");

router.get("/get-questions", async (req, res) => {
  try {
    const questions = await Question.find();
    const data = res.json(questions);
    console.log(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
