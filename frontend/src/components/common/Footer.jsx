import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Send,
  Heart,
  Zap,
  Trophy,
  Shield,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", link: "/" },
    { name: "Online Quiz", link: "/onlineQuiz" },
    { name: "Premium Quiz", link: "/premiumQuiz" },
    { name: "Leaderboard", link: "/leaderboard" },
    { name: "History", link: "/history" },
    { name: "Help Center", link: "/help" },
  ];

  const categories = [
    { name: "Sports", link: "/category/sports" },
    { name: "Science", link: "/category/science" },
    { name: "Entertainment", link: "/category/entertainment" },
    { name: "Technology", link: "/category/technology" },
    { name: "History", link: "/category/history" },
    { name: "General Knowledge", link: "/category/gk" },
  ];

  const legal = [
    { name: "Privacy Policy", link: "/privacy" },
    { name: "Terms of Service", link: "/terms" },
    { name: "Cookie Policy", link: "/cookies" },
    { name: "Refund Policy", link: "/refund" },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, link: "#", color: "hover:bg-blue-600" },
    { icon: <Twitter size={20} />, link: "#", color: "hover:bg-sky-500" },
    { icon: <Instagram size={20} />, link: "#", color: "hover:bg-pink-600" },
    { icon: <Youtube size={20} />, link: "#", color: "hover:bg-red-600" },
  ];

  const features = [
    { icon: <Zap className="w-5 h-5" />, text: "Lightning Fast" },
    { icon: <Shield className="w-5 h-5" />, text: "100% Secure" },
    { icon: <Trophy className="w-5 h-5" />, text: "Win Real Prizes" },
  ];

  return (
    <footer className="bg-zinc-900 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      {/* Newsletter Section */}
      <div className="relative border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-black text-white mb-2">
                Stay in the{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">
                  Loop!
                </span>
              </h3>
              <p className="text-gray-400 text-lg">
                Get weekly quiz updates, tips, and exclusive offers directly in
                your inbox
              </p>
            </div>
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-4 bg-zinc-800 border border-zinc-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              <button className="px-8 py-4 bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold rounded-md hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 flex items-center gap-2">
                <Send size={20} />
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black text-white mb-4">
              QUIZ
              <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-orange-500">
                BATTLE
              </span>
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The ultimate quiz platform where knowledge meets competition.
              Challenge yourself, compete with friends, and win amazing prizes!
            </p>

            {/* Features */}
            <div className="space-y-3 mb-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className={`w-11 h-11 rounded-md bg-zinc-800 border border-zinc-700 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 ${social.color} hover:border-transparent hover:scale-110`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-linear-to-b from-purple-500 to-pink-500 rounded-full"></div>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ChevronRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-linear-to-b from-blue-500 to-cyan-500 rounded-full"></div>
              Categories
            </h4>
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <li key={index}>
                  <a
                    href={category.link}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ChevronRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-linear-to-b from-yellow-500 to-orange-500 rounded-full"></div>
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-400">
                <Mail className="w-5 h-5 mt-1 text-purple-400 shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a
                    href="mailto:support@quizbattle.com"
                    className="hover:text-white transition-colors"
                  >
                    shubham@quizbattle.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-400">
                <Phone className="w-5 h-5 mt-1 text-blue-400 shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a
                    href="tel:+911234567890"
                    className="hover:text-white transition-colors"
                  >
                    +91 7050043530
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-1 text-pink-400 shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="hover:text-white transition-colors">
                    Noida, Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm flex items-center gap-2">
              © 2024 QuizBattle. Made with
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              in India
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {legal.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Download App Banner */}
      <div className="relative border-t border-zinc-800 bg-linear-to-r from-purple-900/30 to-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-white font-bold text-xl mb-2">
                Play Anywhere, Anytime
              </h4>
              <p className="text-gray-400">
                Download our mobile app for the best experience
              </p>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-2">
                  <div className="text-2xl">📱</div>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Download on</div>
                    <div className="text-sm">App Store</div>
                  </div>
                </div>
              </button>
              <button className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-2">
                  <div className="text-2xl">🤖</div>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Get it on</div>
                    <div className="text-sm">Play Store</div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
