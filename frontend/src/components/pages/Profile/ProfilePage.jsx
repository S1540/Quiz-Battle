import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import LoginSignup from "../LoginSignup";
import {
  User,
  Mail,
  Trophy,
  Star,
  Award,
  Clock,
  TrendingUp,
  Calendar,
  Zap,
  Target,
  Crown,
  Edit,
  LogOut,
  Settings,
  BarChart3,
  Flame,
  Shield,
  CheckCircle,
} from "lucide-react";

const ProfilePage = () => {
  const { isAuth, user } = useContext(AuthContext);

  if (isAuth === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!isAuth) {
    return <LoginSignup />;
  }

  // Mock data (replace with real data from backend)
  const stats = {
    totalScore: user.stats.totalScore,
    totalStars: user.stats.totalStars,
    questionsAnswered: user.stats.questionsAnswered,
    correctAnswers: user.stats.correctAnswers,
    wrongAnswers: user.stats.wrongAnswers,
    accuracy: user.stats.accuracy,
    streak: 7,
    rank: 142,
    totalPlayers: 5000,
    joinDate: "Jan 2024",
    lastPlayed: "2 hours ago",
    level: 12,
    nextLevel: 2800,
  };

  const badges = [
    {
      name: "Speed Runner",
      icon: <Zap className="w-6 h-6" />,
      color: "bg-yellow-500",
    },
    {
      name: "Ace Player",
      icon: <Crown className="w-6 h-6" />,
      color: "bg-purple-500",
    },
    {
      name: "Quiz Master",
      icon: <Trophy className="w-6 h-6" />,
      color: "bg-blue-500",
    },
    {
      name: "Streak King",
      icon: <Flame className="w-6 h-6" />,
      color: "bg-orange-500",
    },
  ];

  return (
    <section className="min-h-screen bg-zinc-900 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">My Profile</h1>
          <div className="flex gap-2">
            <button className="p-2.5 bg-zinc-800 border border-zinc-700 rounded-md hover:bg-zinc-700 transition-colors">
              <Settings className="w-5 h-5 text-gray-400" />
            </button>
            <button className="p-2.5 bg-zinc-800 border border-zinc-700 rounded-md hover:bg-red-500/20 hover:border-red-500/50 transition-colors group">
              <LogOut className="w-5 h-5 text-gray-400 group-hover:text-red-400" />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <div className="bg-zinc-800 border border-zinc-700 rounded-md p-6">
              <div className="flex flex-col items-center">
                {/* Avatar */}
                <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-md bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <img
                      src={
                        user?.picture ||
                        `https://ui-avatars.com/api/?name=${user.username}&background=7c3aed&color=fff`
                      }
                      alt="profile-picture "
                      className="w-24 h-24 object-cover rounded-full"
                    />
                  </div>
                  <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center hover:bg-purple-600 transition-colors">
                    <Edit className="w-4 h-4 text-white" />
                  </button>
                  {/* Level Badge */}
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-yellow-500 rounded-md flex items-center justify-center border-2 border-zinc-800">
                    <span className="text-xs font-black text-zinc-900">
                      {stats.level}
                    </span>
                  </div>
                </div>

                {/* User Info */}
                <h2 className="text-xl font-bold text-white mb-1">
                  {user?.username || "Quiz Master"}
                </h2>
                <p className="text-sm text-gray-400 mb-4 flex items-center gap-1">
                  <Mail className="w-3 h-3" />
                  {user?.email}
                </p>

                {/* Level Progress */}
                <div className="w-full mb-4">
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Level {stats.level}</span>
                    <span>Level {stats.level + 1}</span>
                  </div>
                  <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-purple-500 to-pink-500"
                      style={{
                        width: `${(stats.totalScore / stats.nextLevel) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 text-center">
                    {stats.nextLevel - stats.totalScore} XP to next level
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="w-full grid grid-cols-2 gap-3">
                  <div className="bg-zinc-700/50 rounded-md p-3 text-center">
                    <p className="text-xs text-gray-400 mb-1">Rank</p>
                    <p className="text-lg font-bold text-white">
                      #{stats.rank}
                    </p>
                  </div>
                  <div className="bg-zinc-700/50 rounded-md p-3 text-center">
                    <p className="text-xs text-gray-400 mb-1">Streak</p>
                    <p className="text-lg font-bold text-orange-400 flex items-center justify-center gap-1">
                      <Flame className="w-4 h-4" />
                      {stats.streak}
                    </p>
                  </div>
                </div>

                {/* Account Info */}
                <div className="w-full mt-4 pt-4 border-t border-zinc-700 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Provider</span>
                    <span className="text-white font-medium capitalize">
                      {user?.provider || "local"}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Joined</span>
                    <span className="text-white font-medium">
                      {stats.joinDate}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Last Played</span>
                    <span className="text-white font-medium">
                      {stats.lastPlayed}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="bg-zinc-800 border border-zinc-700 rounded-md p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-400" />
                Rewards and Badges
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {badges.map((badge, index) => (
                  <div
                    key={index}
                    className="bg-zinc-700/50 rounded-md p-4 text-center hover:bg-zinc-700 transition-colors"
                  >
                    <div
                      className={`w-12 h-12 ${badge.color} rounded-md mx-auto mb-2 flex items-center justify-center`}
                    >
                      {badge.icon}
                    </div>
                    <p className="text-xs font-medium text-white">
                      {badge.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Total Score */}
              <div className="bg-zinc-800 border border-zinc-700 rounded-md p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-md flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase">Score</p>
                    <p className="text-2xl font-bold text-white">
                      {stats.totalScore}
                    </p>
                  </div>
                </div>
              </div>

              {/* Total Stars */}
              <div className="bg-zinc-800 border border-zinc-700 rounded-md p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-md flex items-center justify-center">
                    <Star className="w-5 h-5 text-blue-500 fill-blue-500" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase">Stars</p>
                    <p className="text-2xl font-bold text-white">
                      {stats.totalStars}
                    </p>
                  </div>
                </div>
              </div>

              {/* Accuracy */}
              <div className="bg-zinc-800 border border-zinc-700 rounded-md p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-md flex items-center justify-center">
                    <Target className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase">Accuracy</p>
                    <p className="text-2xl font-bold text-white">
                      {stats.accuracy}%
                    </p>
                  </div>
                </div>
              </div>

              {/* Questions */}
              <div className="bg-zinc-800 border border-zinc-700 rounded-md p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-md flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase">Questions</p>
                    <p className="text-2xl font-bold text-white">
                      {stats.questionsAnswered}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Overview */}
            <div className="bg-zinc-800 border border-zinc-700 rounded-md p-6">
              <h3 className="text-lg font-bold text-white mb-6">
                Performance Overview
              </h3>

              <div className="space-y-5">
                {/* Correct Answers */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-400 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Correct Answers
                    </span>
                    <span className="text-sm font-bold text-white">
                      {stats.correctAnswers}/{stats.questionsAnswered}
                    </span>
                  </div>
                  <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500"
                      style={{
                        width: `${
                          (stats.correctAnswers / stats.questionsAnswered) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>

                {/* Wrong Answers */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-400 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-red-500" />
                      Wrong Answers
                    </span>
                    <span className="text-sm font-bold text-white">
                      {stats.wrongAnswers}/{stats.questionsAnswered}
                    </span>
                  </div>
                  <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-red-500"
                      style={{
                        width: `${
                          (stats.wrongAnswers / stats.questionsAnswered) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>

                {/* Win Rate */}
                <div className="mt-6 p-4 bg-zinc-700/50 rounded-md border border-zinc-600">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Win Rate</p>
                      <p className="text-3xl font-bold text-white">
                        {stats.accuracy}%
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400 mb-1">Global Rank</p>
                      <p className="text-xl font-bold text-purple-400">
                        #{stats.rank}
                      </p>
                      <p className="text-xs text-gray-500">
                        Top{" "}
                        {Math.round((stats.rank / stats.totalPlayers) * 100)}%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payout Star to Win Real Cash */}
            <div className="bg-zinc-800 border border-zinc-700 rounded-md p-6">
              <h3 className="text-lg font-bold text-white">
                Sale Star to Win Real Cash
              </h3>
              <p className="text-sm text-red-500 animate-pulse mb-6">
                Note: 10 Stars = 1 Rupee
              </p>
              <div>
                <h3>Choose Payment Method</h3>
                <label className="font-medium" htmlFor="">
                  UPI ID
                </label>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="XXXXXXXX@upi"
                    className="px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-md w-full mt-2 outline-0"
                  />
                  <button className="px-4 py-2 bg-green-500 rounded-md font-medium text-black border border-zinc-600 mt-2 hover:bg-green-600 active:scale-90 transition-all duration-200 ease-in-out cursor-pointer">
                    Verify
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
