const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");
const router = express.Router();
router.use(cookieParser());
const Question = require("../models/QuestionSchema");
const User = require("../models/LoginSchema");

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
    // jwt logic for each user
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ email: decoded.email });

    const isCorrect = question.correctAnswer === selectedOption;
    user.stats.questionsAnswered += 1;
    if (isCorrect) {
      user.stats.correctAnswers += 1;
      user.stats.totalScore += question.points;
      user.stats.totalStars += question.maxStars;
      user.stats.accuracy = Math.round(
        (user.stats.correctAnswers / user.stats.questionsAnswered) * 100
      );
    } else {
      user.stats.wrongAnswers += 1;
    }
    await user.save();

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
