import React from "react";
import { Link } from "react-router-dom";
import {
  Trophy,
  Zap,
  Users,
  Crown,
  Play,
  CheckCircle,
  Star,
  TrendingUp,
} from "lucide-react";

const HomePage = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Battles",
      description: "Challenge players worldwide in real-time quiz battles",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Win Rewards",
      description: "Compete for prizes, badges, and climb the leaderboard",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multi-player Mode",
      description: "Play with friends or match with random opponents",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Premium Content",
      description: "Access exclusive quizzes and unlock special features",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const stats = [
    { number: "50K+", label: "Active Players" },
    { number: "1M+", label: "Quizzes Played" },
    { number: "500+", label: "Quiz Categories" },
    { number: "₹10L+", label: "Prizes Won" },
  ];

  const benefits = [
    "100+ New Quizzes Every Week",
    "Real-Time Multiplayer Battles",
    "Instant Prize Redemption",
    "AI-Powered Difficulty Matching",
    "Cross-Platform Support",
    "24/7 Customer Support",
  ];

  return (
    <section className="bg-zinc-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-linear-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djhoOHYtOGgtOHptMCA4djhoOHYtOGgtOHptOCA4djhoOHYtOGgtOHptLTggMHY4aDh2LThoLTh6bS04LTh2OGg4di04aC04em0wLTh2OGg4di04aC04em04IDB2OGg4di04aC04eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 animate-fade-in">
              Ready to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Battle?
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Join millions of players in the ultimate quiz showdown. Test your
              knowledge, compete for prizes, and become a legend!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to={"/onlineQuiz"}>
                <button className="group relative px-8 py-4 bg-linear-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-md text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/50 flex items-center gap-2 cursor-pointer">
                  <Play className="w-5 h-5" />
                  Start Playing Now
                  <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </button>
              </Link>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-md text-lg hover:bg-white/20 transition-all duration-300 border border-white/20 cursor-pointer">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/10 backdrop-blur-md rounded-md p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl font-black text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">
              QuizBattle?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the most engaging and rewarding quiz platform ever
            created
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-zinc-800 rounded-md p-8 hover:scale-102 transition-all duration-300 border border-zinc-700 hover:border-transparent overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>
              <div
                className={`w-16 h-16 rounded-xl bg-linear-to-br ${feature.color} flex items-center justify-center text-white mb-6 group-hover:scale-105 transition-transform duration-300`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-zinc-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              How It{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
                Works
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Start your journey in 3 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Sign Up Free",
                desc: "Create your account in seconds and start exploring",
              },
              {
                step: "02",
                title: "Choose Quiz",
                desc: "Pick from 500+ categories or join random battles",
              },
              {
                step: "03",
                title: "Win & Earn",
                desc: "Answer correctly, defeat opponents, claim rewards",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-zinc-900 rounded-md p-8 border border-zinc-700 hover:border-purple-500 transition-all duration-300">
                  <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-400 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trial Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative overflow-hidden bg-linear-to-br from-purple-600 via-pink-600 to-orange-500 rounded-md p-12 md:p-16">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold mb-6">
                <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                Limited Time Offer
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
                Start Your Free Trial Today!
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Get 30 days of premium access absolutely free. No credit card
                required. Cancel anytime.
              </p>

              <div className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-white"
                  >
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                    <span className="font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <button className="group relative px-10 py-5 bg-white text-purple-600 font-bold rounded-md text-lg hover:scale-102 transition-all duration-300 shadow-2xl flex items-center gap-3 cursor-pointer">
                <TrendingUp className="w-6 h-6" />
                Claim Free Trial Now
                <div className="absolute inset-0 rounded-xl bg-yellow-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </button>
            </div>

            <div className="relative hidden md:block">
              <div className="relative bg-white/10 backdrop-blur-md rounded-md p-8 border border-white/20">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-400 rounded-full blur-3xl opacity-50"></div>

                <div className="relative space-y-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-md p-6 border border-white/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-bold">
                        Premium Features
                      </span>
                      <Crown className="w-6 h-6 text-yellow-300" />
                    </div>
                    <div className="text-3xl font-black text-white">
                      Unlocked!
                    </div>
                  </div>

                  <div className="bg-white/20 backdrop-blur-sm rounded-md p-6 border border-white/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-bold">Trial Period</span>
                      <Zap className="w-6 h-6 text-yellow-300" />
                    </div>
                    <div className="text-3xl font-black text-white">
                      30 Days
                    </div>
                  </div>

                  <div className="bg-white/20 backdrop-blur-sm rounded-md p-6 border border-white/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-bold">Price</span>
                      <Trophy className="w-6 h-6 text-yellow-300" />
                    </div>
                    <div className="text-3xl font-black text-white">₹0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-zinc-800 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Ready to Dominate?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Join the community of quiz champions and start your winning streak
            today
          </p>
          <button className="px-12 py-5 bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold rounded-md text-xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50">
            Get Started for Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
