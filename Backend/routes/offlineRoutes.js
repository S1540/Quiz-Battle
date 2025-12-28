const express = require("express");
const router = express.Router();
const Question = require("../models/QuestionSchema");

router.get("/get-questions", async (req, res) => {
  try {
    const count = await Question.countDocuments();
    const randomQuestion = Math.floor(Math.random() * count);
    const questions = await Question.findOne().skip(randomQuestion);
    res.status(200).json(questions);
    // console.log(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
