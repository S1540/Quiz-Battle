const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    questionText: {
      type: String,
      required: true,
    },
    options: [
      {
        id: {
          type: String,
          required: true,
        },
        text: {
          type: String,
          required: true,
        },
      },
    ],
    correctAnswer: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      default: "General Knowledge",
    },
    difficulty: {
      type: String,
      default: "Easy",
    },
    maxStars: {
      type: Number,
      default: 3,
    },
    points: {
      type: Number,
      default: 10,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt automatic
  }
);

// Export with collection name 'quizData'
module.exports = mongoose.model("Question", questionSchema, "quizData");
