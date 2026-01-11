import React from "react";
import {
  Gem,
  Crown,
  Trophy,
  Award,
  Star,
  Zap,
  MapPin,
  Truck,
  Shield,
} from "lucide-react";
import Banner from "../../../assets/QuizBanner.png";

const PremiumQuiz = () => {
  const rewards = [
    {
      tier: "Bronze",
      icon: <Award className="w-12 h-12" />,
      color: "from-orange-600 to-amber-700",
      borderColor: "border-orange-500/50",
      bgColor: "bg-orange-500/10",
      requirement: "100 Points",
      prize: "₹250 Amazon Voucher",
      description: "Start your journey",
    },
    {
      tier: "Silver",
      icon: <Star className="w-12 h-12" />,
      color: "from-gray-400 to-gray-600",
      borderColor: "border-gray-400/50",
      bgColor: "bg-gray-400/10",
      requirement: "500 Points",
      prize: "₹500 Cash Prize",
      description: "Rising champion",
    },
    {
      tier: "Gold",
      icon: <Trophy className="w-12 h-12" />,
      color: "from-yellow-400 to-yellow-600",
      borderColor: "border-yellow-500/50",
      bgColor: "bg-yellow-500/10",
      requirement: "1,000 Points",
      prize: "₹1,000 + Swag Kit",
      description: "Elite performer",
    },
    {
      tier: "Crown",
      icon: <Crown className="w-12 h-12" />,
      color: "from-purple-400 to-purple-600",
      borderColor: "border-purple-500/50",
      bgColor: "bg-purple-500/10",
      requirement: "2,500 Points",
      prize: "₹5,500 + Gadgets",
      description: "Royal achiever",
    },
    {
      tier: "Ace",
      icon: <Zap className="w-12 h-12" />,
      color: "from-blue-400 to-cyan-500",
      borderColor: "border-blue-500/50",
      bgColor: "bg-blue-500/10",
      requirement: "5,000 Points",
      prize: "₹10,000 + iPhone 15",
      description: "Legendary player",
    },
    {
      tier: "Master Quiz",
      icon: <Gem className="w-12 h-12" />,
      color: "from-pink-500 to-rose-600",
      borderColor: "border-pink-500/50",
      bgColor: "bg-pink-500/10",
      requirement: "10,000 Points",
      prize: "₹25,000 + MacBook",
      description: "Ultimate champion",
    },
  ];

  return (
    <section className="bg-zinc-900">
      {/* Background Banner */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <img
          src={Banner}
          alt="Premium Quiz Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-zinc-900"></div>

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
            <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
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
            <button className="px-8 py-3 rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold hover:scale-105 transition-all shadow-lg hover:shadow-yellow-500/50">
              Create Custom Quiz
            </button>

            <button className="px-8 py-3 rounded-md border border-yellow-500/50 text-yellow-400 font-semibold hover:bg-yellow-500/10 transition-all">
              Premium Rules
            </button>
          </div>

          {/* Bottom Badge */}
          <div className="mt-8 flex items-center gap-2 text-sm text-gray-400">
            <Crown className="w-4 h-4 text-yellow-400" />
            <span>Exclusive for Premium Users</span>
          </div>
        </div>
      </div>

      {/* Rewards Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent mb-2 inline-block">
            Premium Rewards
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-500/40 via-pink-500 to-yellow-500/40 mx-auto rounded-full"></div>
        </div>

        {/* Trust Building Info */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-zinc-800 border border-zinc-700 rounded-md p-6 text-center">
            <div className="flex flex-wrap justify-center gap-6 mb-4">
              <div className="flex items-center gap-2 text-green-400">
                <Truck className="w-5 h-5" />
                <span className="text-sm font-semibold">
                  Free Delivery Across India
                </span>
              </div>
              <div className="flex items-center gap-2 text-blue-400">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-semibold">
                  100% Genuine Rewards
                </span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <MapPin className="w-5 h-5" />
                <span className="text-sm font-semibold">
                  Delivered to Your Location
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              All rewards are delivered directly to your registered address
              within 7-14 business days. We partner with trusted courier
              services to ensure safe and timely delivery. Track your reward
              shipment in real-time from your profile dashboard.
              <span className="text-yellow-400 font-semibold">
                {" "}
                Over 10,000+ rewards delivered successfully!
              </span>
            </p>
          </div>
        </div>

        {/* Rewards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rewards.map((reward, index) => (
            <div
              key={index}
              className={`bg-zinc-800 border ${reward.borderColor} rounded-md p-6 transition-all duration-300 relative overflow-hidden group`}
            >
              {/* Background Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${reward.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-20 h-20 mx-auto mb-4 rounded-md bg-gradient-to-br ${reward.color} flex items-center justify-center shadow-lg`}
                >
                  <div className="text-white">{reward.icon}</div>
                </div>

                {/* Tier Name */}
                <h3 className="text-xl font-black text-white text-center mb-2">
                  {reward.tier}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-400 text-center mb-4">
                  {reward.description}
                </p>

                {/* Requirement */}
                <div
                  className={`${reward.bgColor} border ${reward.borderColor} rounded-md px-3 py-2 mb-3 text-center`}
                >
                  <p className="text-xs text-gray-400 mb-1">Requirement</p>
                  <p
                    className={`text-sm font-bold bg-gradient-to-r ${reward.color} bg-clip-text text-transparent`}
                  >
                    {reward.requirement}
                  </p>
                </div>

                {/* Prize */}
                <div className="bg-zinc-700/50 border border-zinc-600 rounded-md px-3 py-3 text-center">
                  <p className="text-xs text-gray-400 mb-1">Win</p>
                  <p className="text-base font-black text-white">
                    {reward.prize}
                  </p>
                </div>

                {/* Claim Button */}
                <button
                  className={`w-full mt-4 py-2.5 rounded-md bg-gradient-to-r ${reward.color} text-white font-bold text-sm hover:shadow-lg transition-all cursor-pointer`}
                >
                  Claim Reward
                </button>
              </div>

              {/* Corner Badge */}
              <div className="absolute top-2 right-2">
                <div
                  className={`w-8 h-8 rounded-md bg-gradient-to-br ${reward.color} flex items-center justify-center`}
                >
                  <Star className="w-4 h-4 text-white fill-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Start earning points today and unlock exclusive rewards!
          </p>
          <button className="px-10 py-4 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
            Start Playing Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default PremiumQuiz;
