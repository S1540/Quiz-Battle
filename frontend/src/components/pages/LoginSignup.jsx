import React, { useState } from "react";
import { Github, Chrome, Facebook } from "lucide-react";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900/30 to-blue-900/30">
      <div className="relative w-full max-w-md bg-zinc-900/80 border border-zinc-700 rounded-2xl overflow-hidden shadow-2xl">
        {/* Toggle Tabs */}
        <div className="relative flex">
          <button
            onClick={() => setIsLogin(true)}
            className={`w-1/2 py-3 text-sm font-semibold z-10 transition ${
              isLogin ? "text-white" : "text-gray-400"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`w-1/2 py-3 text-sm font-semibold z-10 transition ${
              !isLogin ? "text-white" : "text-gray-400"
            }`}
          >
            Sign Up
          </button>

          <div
            className={`absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-purple-600 to-pink-600 transition-transform duration-500 ${
              isLogin ? "translate-x-0" : "translate-x-full"
            }`}
          />
        </div>

        {/* Forms */}
        <div className="relative h-[550px]">
          {/* LOGIN */}
          <form
            className={`absolute inset-0 p-6 transition-all duration-500 ${
              isLogin
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10 pointer-events-none"
            }`}
          >
            <h2 className="text-2xl font-bold text-white mb-2">
              Welcome Back 👋
            </h2>
            <p className="text-sm text-gray-400 mb-6">
              Login to continue the quiz battle
            </p>

            <input
              type="email"
              placeholder="Email"
              className="w-full mb-4 px-4 py-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 outline-none focus:border-purple-500"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full mb-4 px-4 py-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 outline-none focus:border-purple-500"
            />

            <button
              type="submit"
              className="w-full py-3 mb-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:opacity-90 transition"
            >
              Login
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-4">
              <div className="flex-1 h-px bg-zinc-700"></div>
              <span className="text-xs text-gray-400">OR</span>
              <div className="flex-1 h-px bg-zinc-700"></div>
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-3 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white hover:bg-zinc-700 transition">
                <Chrome className="w-5 h-5 text-red-400" />
                Continue with Google
              </button>

              <button className="w-full flex items-center justify-center gap-3 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white hover:bg-zinc-700 transition">
                <Github className="w-5 h-5" />
                Continue with GitHub
              </button>

              <button className="w-full flex items-center justify-center gap-3 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white hover:bg-zinc-700 transition">
                <Facebook className="w-5 h-5 text-blue-500" />
                Continue with Facebook
              </button>
            </div>
          </form>

          {/* SIGNUP */}
          <form
            className={`absolute inset-0 p-6 transition-all duration-500 ${
              !isLogin
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10 pointer-events-none"
            }`}
          >
            <h2 className="text-2xl font-bold text-white mb-2">
              Create Account 🚀
            </h2>
            <p className="text-sm text-gray-400 mb-6">
              Join and start the quiz battle
            </p>

            <input
              type="text"
              placeholder="Full Name"
              className="w-full mb-4 px-4 py-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 outline-none focus:border-purple-500"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full mb-4 px-4 py-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 outline-none focus:border-purple-500"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full mb-4 px-4 py-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 outline-none focus:border-purple-500"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:opacity-90 transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginSignup;
