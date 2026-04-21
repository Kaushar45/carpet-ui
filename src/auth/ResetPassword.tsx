import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, ArrowRight, CheckCircle } from "lucide-react";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Reset Password:", { password });
    setIsSubmitted(true);
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-teal-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 text-emerald-100/70 border-t mt-20 border-teal-600 shadow-[inset_0_10px_30px_rgba(0,0,0,0.8)] pb-12 rounded-t-[40px] border-l border-r border-black overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute top-0 w-full flex justify-center z-0 opacity-10">
        <div className="text-[20vw] font-black text-teal-900 tracking-tighter whitespace-nowrap blur-[1px] leading-none select-none drop-shadow-[0_10px_10px_rgba(0,0,0,0.9)]">
          RESET
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
            Create new password
          </h2>
          <p className="mt-2 text-center text-sm text-emerald-100/60 font-medium">
            Please enter your new password below.
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
          {!isSubmitted ? (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="password" className="block text-sm font-bold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] mb-2 uppercase tracking-widest">
                  New Password
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                    <Lock className="h-5 w-5 text-emerald-100/50" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-12 pr-4 py-4 bg-teal-950 text-white border-t-2 border-l-2 border-b-2 border-r-2 border-black border-t-black border-l-black border-b-teal-800 border-r-teal-800 rounded-xl focus:border-amber-400 outline-none transition-all placeholder:text-emerald-100/30 shadow-[inset_4px_4px_10px_rgba(0,0,0,0.8),_inset_-2px_-2px_6px_rgba(255,255,255,0.05),_0_2px_5px_rgba(0,0,0,0.3)] focus:shadow-[inset_2px_2px_8px_rgba(0,0,0,0.8),_0_0_20px_rgba(251,191,36,0.3)] font-medium"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-bold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] mb-2 uppercase tracking-widest">
                  Confirm Password
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                    <Lock className="h-5 w-5 text-emerald-100/50" />
                  </div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                  Reset Password
                  <ArrowRight className="ml-2 h-6 w-6 text-teal-950 drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)] group-hover:translate-x-1.5 transition-transform" />
                </motion.button>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-teal-950 border-t border-l border-black border-b border-r border-teal-800 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.8),_4px_4px_15px_rgba(0,0,0,0.5)] mb-6">
                <CheckCircle className="h-8 w-8 text-green-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Password Reset!</h3>
              <p className="text-emerald-100/60 font-medium mb-6">
                Your password has been successfully reset. <br />
                Redirecting you to login...
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ResetPassword;
