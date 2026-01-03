const express = require("express");
const router = express.Router();
const User = require("../models/LoginSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv").config();
const passport = require("../config/passport");
router.use(cookieParser());

// User Registration
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const exitingUser = await User.findOne({ email });
    if (exitingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      provider: "local",
    });
    await newUser.save();
    res.status(201).json({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// User Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.cookie("token", token, {
      httpOnly: true,
      // secure: process.env.NODE_ENV === "production",
      // sameSite: "strict",
      // maxAge: 3600000, // 1 hour
    });
    res.status(200).json({
      success: true,
      message: "Login successful",
      user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Authentication Check
router.get("/me", async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized",
        authenticated: false,
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ email: decoded.email }).select(
      "-password"
    );
    res.status(200).json({
      message: "Authenticated",
      authenticated: true,
      user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/*=====================
Google OAuth Routes
=====================*/
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "http://localhost:5173/profile",
  }),
  (req, res) => {
    try {
      const token = jwt.sign(
        { email: req.user.email },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );
      res.cookie("token", token, {
        httpOnly: true,
        // secure: process.env.NODE_ENV === "production",
        // sameSite: "strict",
        // maxAge: 3600000, // 1 hour
      });
      res.redirect("http://localhost:5173/onlineQuiz");
    } catch (error) {
      res.status(500).json({ message: error.message });
      res.redirect("http://localhost:5000/profile");
    }
  }
);

// Github OAuth Routes
router.get(
  "/github",
  passport.authenticate("github", (scope = ["user:email"]))
);

router.get(
  "/github/callback",
  passport.authenticate("github", {
    session: false,
    failureRedirect: "http://localhost:5173/profile",
  }),
  (req, res) => {
    try {
      const token = jwt.sign(
        { email: req.user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      res.cookie("token", token, {
        httpOnly: true,
        // secure: process.env.NODE_ENV === "production",
        // sameSite: "strict",
      });
      res.redirect("http://localhost:5173/onlineQuiz");
    } catch (error) {
      res.status(500).json({ message: error.message });
      res.redirect("http://localhost:5173/profile");
    }
  }
);

module.exports = router;
