import React, { useState, useEffect } from "react";
import {
  Star,
  Trophy,
  Award,
  Clock,
  SkipForward,
  Cpu,
  User,
  XCircle,
} from "lucide-react";

const OnlineQuiz = () => {
  const [timer, setTimer] = useState(15);
  const [question, setQuestion] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [result, setResult] = useState({});
  const [totalScore, setTotalScore] = useState(0);
  const [totalStars, setTotalStars] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [skippedQuestions, setSkippedQuestions] = useState(0);
  const [loading, setLoading] = useState(true);
  const maxTime = 15;

  // Timer countdown
  useEffect(() => {
    if (timer > 0 && !selectedOption) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer, selectedOption]);

  // Fetch Quiz Question
  const fetchQuestion = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/get-questions");
      const data = await response.json();

      if (data.success && data.question) {
        setQuestion(data.question);
        setSelectedOption(null);
        setResult({});
        setTimer(15);
        setTotalQuestions((prev) => prev + 1);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchQuestion();
  }, []);

  // Check Answer Handler
  const checkAnswer = async (selectedOption) => {
    setSelectedOption(selectedOption);
    try {
      const response = await fetch("http://localhost:5000/api/check-answer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          questionId: question._id,
          selectedOption: selectedOption,
        }),
      });
      const data = await response.json();
      setResult(data);
      if (data.isCorrect) {
        setTotalScore((prev) => prev + data.earnedPoints);
        setTotalStars((prev) => prev + data.earnedStars);
        setTimeout(() => {
          fetchQuestion();
        }, 1000);
      }
    } catch (error) {
      console.error("Error checking answer:", error);
    }
  };

  // Skip Question Handler
  const handleSkip = () => {
    setSkippedQuestions((prev) => prev + 1);
    fetchQuestion();
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-zinc-900 via-purple-900/10 to-zinc-900">
        <div className="bg-zinc-800/70 border border-zinc-700 rounded-xl p-8 w-full max-w-md text-center shadow-xl">
          <div className="relative w-20 h-20 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full border-4 border-zinc-700"></div>
            <div className="absolute inset-0 rounded-full border-4 border-purple-500 border-t-transparent animate-spin"></div>
          </div>
          <h2 className="text-xl font-bold text-white mb-2">
            Loading Question
          </h2>
          <p className="text-sm text-gray-400">
            Please wait while we prepare your next challenge…
          </p>
          <div className="mt-6 space-y-3">
            <div className="h-4 bg-zinc-700/70 rounded animate-pulse"></div>
            <div className="h-4 bg-zinc-700/70 rounded animate-pulse w-5/6 mx-auto"></div>
            <div className="h-4 bg-zinc-700/70 rounded animate-pulse w-4/6 mx-auto"></div>
          </div>
        </div>
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
    <section className="min-h-screen bg-linear-to-br from-zinc-900 via-purple-900/10 to-zinc-900">
      {/* Top Progress Line */}
      <div className="fixed top-0 left-0 right-0 h-1.5 bg-zinc-800 z-50">
        <div
          className="h-full bg-linear-to-r from-purple-500 via-pink-500 to-orange-500 transition-all duration-1000 ease-linear"
          style={{ width: `${(timer / maxTime) * 100}%` }}
        />
      </div>

      {/* Stats Bar - Improved */}
      <div className="pt-6 pb-4">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-3">
            {/* Score Badge */}
            <div className="bg-linear-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-md p-3 sm:p-4 hover:scale-105 transition-transform duration-300 shadow-lg">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-linear-to-br from-yellow-500 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-md">
                  <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs text-gray-400 font-medium uppercase tracking-wide">
                    Score
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-white truncate">
                    {totalScore}
                  </div>
                </div>
              </div>
            </div>

            {/* Questions Badge */}
            <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-md p-3 sm:p-4 hover:scale-105 transition-transform duration-300 shadow-lg">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-md">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs text-gray-400 font-medium uppercase tracking-wide">
                    Questions
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-white truncate">
                    {totalQuestions}/50
                  </div>
                </div>
              </div>
            </div>

            {/* Stars Badge */}
            <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-md p-3 sm:p-4 hover:scale-105 transition-transform duration-300 shadow-lg">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-md">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs text-gray-400 font-medium uppercase tracking-wide">
                    Stars
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-white truncate">
                    {totalStars}/150
                  </div>
                </div>
              </div>
            </div>

            {/* Skipped Badge */}
            <div className="bg-linear-to-br from-red-500/20 to-rose-500/20 backdrop-blur-sm border border-red-500/30 rounded-md p-3 sm:p-4 hover:scale-105 transition-transform duration-300 shadow-lg">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-linear-to-br from-red-500 to-rose-500 flex items-center justify-center flex-shrink-0 shadow-md">
                  <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs text-gray-400 font-medium uppercase tracking-wide">
                    Skipped
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-white truncate">
                    {skippedQuestions}
                  </div>
                </div>
              </div>
            </div>

            {/* Timer Circle */}
            <div className="bg-linear-to-br from-pink-500/20 to-orange-500/20 backdrop-blur-sm border border-pink-500/30 rounded-md p-3 sm:p-4 flex items-center justify-center hover:scale-105 transition-transform duration-300 shadow-lg col-span-2 lg:col-span-1">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="30"
                    stroke="currentColor"
                    strokeWidth="5"
                    fill="none"
                    className="text-zinc-700"
                  />
                  <circle
                    cx="50%"
                    cy="50%"
                    r="30"
                    stroke="url(#linear)"
                    strokeWidth="5"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 30}`}
                    strokeDashoffset={`${
                      2 * Math.PI * 30 * (1 - timer / maxTime)
                    }`}
                    className="transition-all duration-1000 ease-linear"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearlinear
                      id="linear"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearlinear>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Clock
                    className={`w-4 h-4 sm:w-5 sm:h-5 mb-1 ${
                      timer <= 5 ? "text-red-500 animate-pulse" : "text-white"
                    }`}
                  />
                  <span
                    className={`text-lg sm:text-xl font-black ${
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

      {/* Quiz Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-2">
        {/* Warning Banner */}
        <div className="bg-linear-to-r from-red-700/30 to-orange-700/30 border border-red-700/30 rounded-tl-md rounded-tr-xl p-4 md:p-6 text-center backdrop-blur-sm">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
            {question.category} • {question.difficulty}
          </h2>
          <p className="text-xs sm:text-sm text-gray-300">
            Points:{" "}
            <span className="font-bold text-yellow-300">{question.points}</span>{" "}
            | Max Stars:{" "}
            <span className="font-bold text-blue-300">{question.maxStars}</span>
          </p>
        </div>

        {/* Quiz Content */}
        <div className="bg-zinc-800 border border-zinc-700 rounded-bl-xl rounded-br-md px-4 md:px-6 py-4 md:py-6 relative shadow-2xl">
          <div className="grid md:grid-cols-2 gap-6">
            {/* User Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-md">
                  <User className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Your Answer
                </h3>
              </div>

              <p className="tracking-wide text-lg sm:text-xl md:text-2xl font-medium mb-4 text-white leading-relaxed">
                {question.questionText}
              </p>

              {/* User Options */}
              <div className="space-y-2">
                {question.options && question.options.length > 0 ? (
                  question.options.map((option) => (
                    <label
                      key={option.id}
                      className={`flex items-center py-3 px-4 rounded-md cursor-pointer transition-all duration-200 border-2 ${
                        result.correctAnswer === option.id
                          ? "border-green-500 bg-green-600/30 shadow-lg shadow-green-500/20"
                          : selectedOption === option.id &&
                            result.correctAnswer !== option.id
                          ? "border-red-500 bg-red-600/30 shadow-lg shadow-red-500/20"
                          : selectedOption === option.id
                          ? "border-purple-500 bg-purple-600/20"
                          : "border-zinc-700 bg-zinc-700/50 hover:bg-zinc-700 hover:border-purple-500/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="userOption"
                        value={option.id}
                        checked={selectedOption === option.id}
                        onChange={() => checkAnswer(option.id)}
                        disabled={!!selectedOption}
                        className="mr-3 w-4 h-4 accent-purple-500"
                      />
                      <span
                        className={`flex-1 text-sm sm:text-base ${
                          result.correctAnswer === option.id
                            ? "text-white font-bold"
                            : "text-gray-300"
                        }`}
                      >
                        {option.text}
                      </span>
                      {result.correctAnswer === option.id && (
                        <span className="text-green-400 font-bold text-xs sm:text-sm">
                          ✓ Correct
                        </span>
                      )}
                      {selectedOption === option.id &&
                        result.correctAnswer !== option.id &&
                        result.correctAnswer && (
                          <span className="text-red-400 font-bold text-xs sm:text-sm">
                            ✗ Wrong
                          </span>
                        )}
                    </label>
                  ))
                ) : (
                  <p className="text-gray-400">Loading options...</p>
                )}
              </div>

              {/* Result Message */}
              {result.message && (
                <div
                  className={`mt-4 p-4 rounded-xl border-2 ${
                    result.isCorrect
                      ? "bg-green-600/20 border-green-500"
                      : "bg-red-600/20 border-red-500"
                  }`}
                >
                  <p
                    className={`font-bold text-center ${
                      result.isCorrect ? "text-green-300" : "text-red-300"
                    }`}
                  >
                    {result.message}
                  </p>
                  {result.isCorrect && (
                    <p className="text-center text-sm text-white mt-2">
                      +{result.earnedPoints} points | +{result.earnedStars}{" "}
                      stars
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* System Section */}
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-md bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-md">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  System Answer
                </h3>
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
                      className="flex items-center py-3 px-4 bg-zinc-700/50 rounded-md cursor-not-allowed transition-all duration-200 border-2 border-zinc-700"
                    >
                      <input
                        type="radio"
                        name="systemOption"
                        className="mr-3 w-4 h-4"
                        disabled
                      />
                      <span className="text-gray-500 text-sm sm:text-base">
                        {option.text}
                      </span>
                    </label>
                  ))
                ) : (
                  <p className="text-gray-400">Loading options...</p>
                )}
              </div>

              {/* System Thinking Overlay */}
              <div className="absolute inset-0 bg-zinc-800/90 backdrop-blur-[1px] rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4 animate-pulse shadow-lg">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white font-semibold text-base sm:text-lg">
                    AI is thinking...
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">
                    Waiting for your answer
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex justify-between items-center gap-3">
            {selectedOption && (
              <button
                onClick={fetchQuestion}
                className="flex-1 sm:flex-none px-6 py-3 bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold rounded-md hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
              >
                Next Question →
              </button>
            )}
            <button
              onClick={handleSkip}
              disabled={!!selectedOption}
              className="flex items-center gap-2 px-4 sm:px-6 py-3 bg-zinc-700/50 hover:bg-zinc-700 border border-zinc-600 rounded-md cursor-pointer active:scale-95 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <SkipForward className="w-5 h-5 text-gray-400 group-hover:text-white" />
              <span className="text-gray-400 group-hover:text-white font-medium text-sm sm:text-base hidden sm:inline">
                Skip
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineQuiz;
