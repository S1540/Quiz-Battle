import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/Quiz logo.mp4";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { nav: "HOME", link: "/" },
    { nav: "ONLINE QUIZ", link: "/onlineQuiz" },
    { nav: "PREMIUM QUIZ", link: "/premiumQuiz" },
    { nav: "HISTORY", link: "/history" },
    { nav: "HELP & SUPPORT", link: "/support" },
    { nav: "PROFILE", link: "/profile" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-linear-to-r from-purple-600 via-blue-600 to-indigo-600 shadow-lg py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="shrink-0">
              <video
                src={logo}
                loop
                muted
                autoPlay={true}
                playsInline
                className="w-28 h-12 object-cover rounded-xs"
              ></video>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((navlink, index) => (
                <a
                  key={index}
                  href={navlink.link}
                  className="text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  {navlink.nav}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center text-white hover:bg-white/20 rounded-md transition-all duration-300 cursor-pointer"
              aria-label="Toggle menu"
            >
              <Menu
                className={`absolute transition-all duration-300 ${
                  isMenuOpen
                    ? "rotate-90 opacity-0 scale-0"
                    : "rotate-0 opacity-100 scale-100"
                }`}
                size={30}
              />
              <X
                className={`absolute transition-all duration-300 ${
                  isMenuOpen
                    ? "rotate-0 opacity-100 scale-100"
                    : "-rotate-90 opacity-0 scale-0"
                }`}
                size={30}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleMenu}
        />

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-16 right-0 w-72 h-[calc(100vh-4rem)] bg-linear-to-b from-purple-600 via-blue-600 to-indigo-700 shadow-2xl transform transition-all duration-300 ease-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col p-6 space-y-2">
            {navLinks.map((navlink, index) => (
              <a
                key={index}
                href={navlink.link}
                onClick={toggleMenu}
                className="text-white px-6 py-4 rounded-md text-base font-medium hover:bg-white/20 transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg border border-transparent hover:border-white/30"
                style={{
                  animation: isMenuOpen
                    ? `slideIn 0.3s ease-out ${index * 0.05}s both`
                    : "none",
                }}
              >
                {navlink.nav}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16" />

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Header;
