import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "917800826134"; // Number provided by user
  const message = "Hello! I'm interested in your products.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-[200] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-white rounded-2xl shadow-2xl mb-4 w-[calc(100vw-3rem)] sm:w-[320px] max-h-[calc(100vh-6rem)] overflow-y-auto overflow-x-hidden origin-bottom-right border border-teal-100"
          >
            {/* Header */}
            <div className="bg-teal-900 p-4 flex justify-between items-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-teal-800/50 transform -skew-y-6 z-0"></div>
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-12 h-12 bg-teal-800 rounded-full flex items-center justify-center border-2 border-teal-500 shadow-inner">
                  <MessageCircle size={24} className="text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-bold text-base tracking-wide text-amber-50">MYRUGS Support</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <p className="text-xs text-teal-200 font-medium">Online • Replies instantly</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-teal-200 hover:text-white hover:bg-teal-800 p-1.5 rounded-full transition-colors relative z-10"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-5 bg-slate-50 min-h-[160px] flex flex-col gap-3 justify-end">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-3.5 rounded-2xl rounded-tl-sm shadow-sm text-sm text-slate-700 w-11/12 border border-slate-100 relative"
              >
                Hi there! 👋 Welcome to MYRUGS.
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white p-3.5 rounded-2xl rounded-tl-sm shadow-sm text-sm text-slate-700 w-11/12 border border-slate-100 relative"
              >
                How can we help you find the perfect artisanal rug today?
              </motion.div>
            </div>

            {/* Footer / Action */}
            <div className="p-4 bg-white border-t border-slate-100">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 px-4 rounded-xl font-semibold flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-green-200/50 hover:shadow-green-300/60 hover:-translate-y-0.5 group"
                onClick={() => setIsOpen(false)}
              >
                <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="fill-current text-white group-hover:scale-110 transition-transform"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                Start Chat on WhatsApp
                <Send size={16} className="ml-1 opacity-80 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-center text-[10px] text-slate-400 mt-3 font-medium uppercase tracking-wider">
                Secured by WhatsApp
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-xl shadow-green-900/30 transition-colors z-50 group"
        aria-label="Open Chat"
      >
        <span className="absolute inset-0 rounded-full border-2 border-[#25D366]/50 animate-ping opacity-75"></span>
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={32} />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              <svg viewBox="0 0 24 24" width="34" height="34" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="fill-current text-white"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Unread badge */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 border-2 border-white text-[10px] font-bold text-white shadow-sm">
            1
          </span>
        )}
      </motion.button>
    </div>
  );
};

export default WhatsAppChat;
