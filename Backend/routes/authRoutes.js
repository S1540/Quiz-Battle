const express = require("express");
const router = express.Router();
const User = require("../models/LoginSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// User Registration
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const haspassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: haspassword,
    });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
