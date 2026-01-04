const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: null,
      minlength: 6,
    },
    provider: {
      type: String,
      default: "local",
      enum: ["local", "google", "facebook", "github"],
    },
    picture: {
      type: String,
    },
    stats: {
      totalScore: {
        type: Number,
        default: 0,
      },
      totalStars: {
        type: Number,
        default: 0,
      },
      questionsAnswered: {
        type: Number,
        default: 0,
      },
      correctAnswers: {
        type: Number,
        default: 0,
      },
      wrongAnswers: {
        type: Number,
        default: 0,
      },
      accuracy: {
        type: Number,
        default: 0,
      },
      totalScore: {
        type: Number,
        default: 0,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", loginSchema);
