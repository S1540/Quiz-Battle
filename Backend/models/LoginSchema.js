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
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", loginSchema);
