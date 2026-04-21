import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login simulation
    console.log("Login:", { email, password });
    login();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-teal-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 text-emerald-100/70 border-t mt-20 border-teal-600 shadow-[inset_0_10px_30px_rgba(0,0,0,0.8)] pb-12 rounded-t-[40px] border-l border-r border-black overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute top-0 w-full flex justify-center z-0 opacity-10">
        <div className="text-[25vw] font-black text-teal-900 tracking-tighter whitespace-nowrap blur-[1px] leading-none select-none drop-shadow-[0_10px_10px_rgba(0,0,0,0.9)]">
          LOGIN
        </div>
      </div>

      <div className="relative z-10 sm:mx-auto sm:w-full sm:max-w-md">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <Link
            to="/"
            className="text-2xl font-black tracking-tighter flex items-center justify-center gap-3 group mb-2"
          >
            <motion.div
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-lg flex items-center justify-center border-t border-l border-amber-200 border-b border-r border-yellow-800 shadow-[2px_3px_8px_rgba(0,0,0,0.5),_inset_1px_1px_2px_rgba(255,255,255,0.4)]"
            >
              <span className="text-teal-950 text-2xl font-extrabold drop-shadow-sm">M</span>
            </motion.div>
            <span
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500 transition-colors duration-500 drop-shadow-md text-3xl"
            >
              MY
              <span className="font-light ml-1 text-emerald-100 group-hover:text-amber-200 transition-colors duration-300">
                RUGS
              </span>
            </span>
          </Link>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Welcome back
          </h2>
          <p className="mt-2 text-center text-sm text-emerald-100/60 font-medium">
            Don't have an account?{" "}
            <Link to="/signup" className="font-semibold text-amber-400 hover:text-amber-300 transition-colors drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
              Sign up for our artisan club
            </Link>
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10"
      >
        <div className="bg-teal-900 py-8 px-4 sm:rounded-[30px] sm:px-10 border-t-2 border-l-2 border-teal-700 border-b-2 border-r-2 border-black shadow-[4px_10px_25px_rgba(0,0,0,0.8),_inset_1px_1px_3px_rgba(255,255,255,0.1)] relative">
          <form className="space-y-6 relative" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] mb-2 uppercase tracking-widest">
                Email address
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                  <Mail className="h-5 w-5 text-emerald-100/50" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-12 pr-4 py-4 bg-teal-950 text-white border-t-2 border-l-2 border-b-2 border-r-2 border-black border-t-black border-l-black border-b-teal-800 border-r-teal-800 rounded-xl focus:border-amber-400 outline-none transition-all placeholder:text-emerald-100/30 shadow-[inset_4px_4px_10px_rgba(0,0,0,0.8),_inset_-2px_-2px_6px_rgba(255,255,255,0.05),_0_2px_5px_rgba(0,0,0,0.3)] focus:shadow-[inset_2px_2px_8px_rgba(0,0,0,0.8),_0_0_20px_rgba(251,191,36,0.3)] font-medium"
                  placeholder="artisan@myrugs.com"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="block text-sm font-bold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] uppercase tracking-widest">
                  Password
                </label>
                <div className="text-sm">
                  <Link to="/forgot-password" className="font-semibold text-amber-400 hover:text-amber-300 transition-colors drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                    Forgot your password?
                  </Link>
                </div>
              </div>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                  <Lock className="h-5 w-5 text-emerald-100/50" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-12 pr-4 py-4 bg-teal-950 text-white border-t-2 border-l-2 border-b-2 border-r-2 border-black border-t-black border-l-black border-b-teal-800 border-r-teal-800 rounded-xl focus:border-amber-400 outline-none transition-all placeholder:text-emerald-100/30 shadow-[inset_4px_4px_10px_rgba(0,0,0,0.8),_inset_-2px_-2px_6px_rgba(255,255,255,0.05),_0_2px_5px_rgba(0,0,0,0.3)] focus:shadow-[inset_2px_2px_8px_rgba(0,0,0,0.8),_0_0_20px_rgba(251,191,36,0.3)] font-medium"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="group w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-[4px_4px_15px_rgba(0,0,0,0.5),_inset_2px_2px_4px_rgba(255,255,255,0.4)] text-lg font-black text-teal-950 bg-gradient-to-br from-amber-400 to-yellow-600 border-t border-l border-amber-200 border-b border-r border-yellow-800 hover:from-amber-300 hover:to-yellow-500 focus:outline-none transition-all"
              >
                Enter Collection
                <ArrowRight className="ml-2 h-6 w-6 text-teal-950 drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)] group-hover:translate-x-1.5 transition-transform" />
              </motion.button>
            </div>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-black shadow-[0_1px_0_rgba(255,255,255,0.1)]" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 py-1 bg-teal-950 rounded-full border-t border-l border-black border-b border-r border-teal-800 font-bold uppercase tracking-widest text-emerald-100/50 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.6)]">Or continue with</span>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="#"
                  className="w-full inline-flex justify-center py-3.5 px-4 bg-teal-950 border-t border-l border-black border-b border-r border-teal-800 rounded-xl shadow-[inset_2px_2px_5px_rgba(0,0,0,0.6),_0_2px_5px_rgba(0,0,0,0.3)] hover:shadow-[inset_3px_3px_8px_rgba(0,0,0,0.8)] transition-all"
                >
                  <span className="sr-only">Sign in with Google</span>
                  <svg className="h-6 w-6 drop-shadow-md" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="#"
                  className="w-full inline-flex justify-center py-3.5 px-4 bg-teal-950 border-t border-l border-black border-b border-r border-teal-800 rounded-xl shadow-[inset_2px_2px_5px_rgba(0,0,0,0.6),_0_2px_5px_rgba(0,0,0,0.3)] hover:shadow-[inset_3px_3px_8px_rgba(0,0,0,0.8)] transition-all"
                >
                  <span className="sr-only">Sign in with GitHub</span>
                  <svg className="h-6 w-6 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.836c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
