import React from "react";
import { Gem, Crown } from "lucide-react";
import Banner from "../../../assets/QuizBanner.png";

const PremiumQuiz = () => {
  return (
    <section className="">
      {/* Background Banner */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <img
          src={Banner}
          alt="Premium Quiz Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-zinc-900"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          {/* Premium Icon */}
          <div className="mb-4 flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/40 px-4 py-2 rounded-full backdrop-blur-sm">
            <Gem className="text-yellow-400" size={22} />
            <span className="text-yellow-400 font-semibold tracking-wide">
              PREMIUM ACCESS
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
            Create Your Own <br />
            <span className="bg-linear-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
              Quiz Battle
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl text-gray-300 text-base md:text-lg mb-8">
            Design custom questions from your own lessons, challenge yourself,
            earn bonus stars and unlock premium rewards.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 rounded-md bg-linear-to-r from-yellow-400 to-orange-500 text-black font-bold hover:scale-105 transition-all">
              Create Custom Quiz
            </button>

            <button className="px-8 py-3 rounded-md border border-yellow-500/50 text-yellow-400 font-semibold hover:bg-yellow-500/10 transition-all">
              Premium Rule
            </button>
          </div>

          {/* Bottom Badge */}
          <div className="mt-8 flex items-center gap-2 text-sm text-gray-400">
            <Crown className="w-4 h-4 text-yellow-400" />
            <span>Exclusive for Premium Users</span>
          </div>
        </div>
      </div>

      {/* Rewards */}
      <div>
        {/* heading */}
        <div className="relative">
          <span className="bg-linear-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent text-2xl md:text-3xl font-bold">
            Rewards
          </span>
          <div className="absolute  left-5 transform -translate-x-1/2 -translate-y-1/2 w-24 h-1 bg-linear-to-r from-yellow-500/40 via-pink-500 to-yellow-500/40"></div>
        </div>
      </div>
    </section>
  );
};

export default PremiumQuiz;
