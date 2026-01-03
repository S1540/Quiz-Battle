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
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", loginSchema);
