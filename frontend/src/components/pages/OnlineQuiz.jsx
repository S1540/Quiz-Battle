import React, { useState, useEffect } from "react";
import {
  Star,
  Trophy,
  Award,
  Clock,
  SkipForward,
  Cpu,
  User,
} from "lucide-react";

const OnlineQuiz = () => {
  const [timer, setTimer] = useState(15);
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const maxTime = 15;

  // Timer countdown
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  // Fetch Quiz Question
  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/get-questions");
        const data = await response.json();

        console.log("Full response:", data);

        if (data.success && data.question) {
          setQuestion(data.question);
          console.log("Question set:", data.question);
          console.log("Options:", data.question.options);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestion();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-900">
        <div className="text-white text-2xl">Loading question...</div>
      </div>
    );
  }

  // No question state
  if (!question) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-900">
        <div className="text-white text-2xl">No question found!</div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-zinc-900 via-purple-900/10 to-zinc-900">
      {/* Top Progress Line */}
      <div className="fixed top-0 left-0 right-0 h-1.5 bg-zinc-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-all duration-1000 ease-linear"
          style={{ width: `${(timer / maxTime) * 100}%` }}
        />
      </div>

      {/* Stats Bar */}
      <div className="pt-6 pb-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {/* Score Badge */}
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-md p-4 flex items-center gap-3 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 rounded-md bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center shrink-0">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium mb-0.5">
                  Score
                </div>
                <div className="text-2xl font-black text-white">0</div>
              </div>
            </div>

            {/* Questions Badge */}
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-md p-4 flex items-center gap-3 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 rounded-md bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium mb-0.5">
                  Questions
                </div>
                <div className="text-2xl font-black text-white">1/50</div>
              </div>
            </div>

            {/* Stars Badge */}
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-md p-4 flex items-center gap-3 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 rounded-md bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0">
                <Star className="w-6 h-6 text-white fill-white" />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium mb-0.5">
                  Stars
                </div>
                <div className="text-2xl font-black text-white">
                  0/{question.maxStars}
                </div>
              </div>
            </div>

            {/* Timer Circle */}
            <div className="bg-gradient-to-br from-pink-500/20 to-red-500/20 backdrop-blur-sm border border-pink-500/30 rounded-md p-4 flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <div className="relative w-20 h-20">
                {/* Background Circle */}
                <svg className="w-20 h-20 transform -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    className="text-zinc-700"
                  />
                  {/* Progress Circle */}
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    stroke="url(#gradient)"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 34}`}
                    strokeDashoffset={`${
                      2 * Math.PI * 34 * (1 - timer / maxTime)
                    }`}
                    className="transition-all duration-1000 ease-linear"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#ef4444" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Timer Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Clock
                    className={`w-5 h-5 mb-1 ${
                      timer <= 5 ? "text-red-500 animate-pulse" : "text-white"
                    }`}
                  />
                  <span
                    className={`text-xl font-black ${
                      timer <= 5 ? "text-red-500 animate-pulse" : "text-white"
                    }`}
                  >
                    {timer}s
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-2">
        {/* Warning Banner */}
        <div className="bg-red-700/30 border border-red-700/30 rounded-tl-md rounded-tr-md p-4 md:p-8 text-center">
          <h2 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-4">
            {question.category} - {question.difficulty}
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Local Version 1.0 | Points: {question.points}
          </p>
        </div>

        {/* Quiz Content */}
        <div className="bg-zinc-800 border border-zinc-700 rounded-bl-md rounded-br-md px-4 md:px-6 py-4 md:py-6 relative">
          <div className="grid md:grid-cols-2 gap-6">
            {/* User Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white">Your Answer</h3>
              </div>

              <p className="tracking-wide text-xl md:text-2xl font-medium mb-4 text-white">
                {question.questionText}
              </p>

              {/* User Options */}
              <div className="space-y-2">
                {question.options && question.options.length > 0 ? (
                  question.options.map((option) => (
                    <label
                      key={option.id}
                      className="flex items-center py-3 px-4 bg-zinc-700/50 hover:bg-zinc-700 rounded-lg cursor-pointer transition-all duration-200 border border-transparent hover:border-purple-500"
                    >
                      <input
                        type="radio"
                        name="userOption"
                        value={option.id}
                        className="mr-3 w-4 h-4"
                      />
                      <span className="text-gray-300">{option.text}</span>
                    </label>
                  ))
                ) : (
                  <p className="text-gray-400">Loading options...</p>
                )}
              </div>
            </div>

            {/* System Section */}
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white">System Answer</h3>
              </div>

              <p className="tracking-wide text-lg md:text-xl font-medium mb-4 text-transparent select-none">
                {question.questionText}
              </p>

              {/* System Options */}
              <div className="space-y-2">
                {question.options && question.options.length > 0 ? (
                  question.options.map((option) => (
                    <label
                      key={option.id}
                      className="flex items-center py-3 px-4 bg-zinc-700/50 rounded-lg cursor-not-allowed transition-all duration-200 border border-transparent"
                    >
                      <input
                        type="radio"
                        name="systemOption"
                        className="mr-3 w-4 h-4"
                        disabled
                      />
                      <span className="text-gray-500">{option.text}</span>
                    </label>
                  ))
                ) : (
                  <p className="text-gray-400">Loading options...</p>
                )}
              </div>

              {/* System Thinking Overlay */}
              <div className="absolute inset-0 bg-zinc-800/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white font-semibold">AI is thinking...</p>
                  <p className="text-gray-400 text-sm mt-1">
                    Waiting for your answer
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skip Button */}
          <div className="mt-6 flex justify-end">
            <button className="bg-zinc-700/50 hover:bg-zinc-700 border border-zinc-600 rounded-full p-3 cursor-pointer active:scale-90 transition-all duration-300 group">
              <SkipForward className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineQuiz;
