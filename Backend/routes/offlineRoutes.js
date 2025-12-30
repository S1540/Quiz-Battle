const express = require("express");
const router = express.Router();
const Question = require("../models/QuestionSchema");

router.get("/get-questions", async (req, res) => {
  try {
    const count = await Question.countDocuments();
    const randomQuestion = Math.floor(Math.random() * count);
    const questions = await Question.findOne().skip(randomQuestion);
    res.status(200).json({
      success: true,
      question: questions,
    });
    // console.log(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Check Answer
router.post("/check-answer", async (req, res) => {
  try {
    const { questionId, selectedOption } = req.body;
    const question = await Question.findById(questionId);
    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    const isCorrect = question.correctAnswer === selectedOption;
    return res.status(200).json({
      success: true,
      isCorrect: isCorrect,
      correctAnswer: question.correctAnswer,
      userAnswer: selectedOption,
      message: isCorrect ? "Correct Answer" : "Wrong Answer",
      earnedStars: isCorrect ? question.maxStars : 0,
      earnedPoints: isCorrect ? question.points : 0,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
