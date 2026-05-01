import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  Search,
  Menu,
  X,
  User,
  Trash2,
  Minus,
  Plus,

  Heart,
} from "lucide-react";
import { useStore } from "../context/StoreContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const { 
    cartItems, 
    updateQuantity, 
    removeFromCart: removeItem, 
    cartTotal, 
    cartCount, 
    isCartOpen, 
    setIsCartOpen,
    wishlist
  } = useStore();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevPath, setPrevPath] = useState(location.pathname);
  if (location.pathname !== prevPath) {
    setPrevPath(location.pathname);
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }

  // Lock body scroll when cart or mobile menu is open
  useEffect(() => {
    if (isCartOpen || isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen, isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    setIsSearchOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 sm:px-6 lg:px-8 ${isScrolled || isMobileMenuOpen ? "py-4" : "py-6"
          }`}
      >
        <div
          className={`max-w-7xl mx-auto flex justify-between items-center relative z-50 transition-all duration-500 px-6 ${isScrolled || isMobileMenuOpen
              ? "bg-teal-950 rounded-2xl border-t border-l border-teal-600 border-b border-r border-black shadow-[4px_6px_20px_rgba(0,0,0,0.7),_inset_1px_2px_3px_rgba(255,255,255,0.2),_inset_-2px_-2px_4px_rgba(0,0,0,0.6)] py-3"
              : "bg-transparent py-2"
            }`}
        >
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-black tracking-tighter flex items-center gap-3 group"
          >
            <motion.div
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-lg flex items-center justify-center border-t border-l border-amber-200 border-b border-r border-yellow-800 shadow-[2px_3px_8px_rgba(0,0,0,0.5),_inset_1px_1px_2px_rgba(255,255,255,0.4)]"
            >
              <span className={`text-2xl font-extrabold drop-shadow-sm ${isScrolled || isMobileMenuOpen ? "text-teal-950" : "text-yellow-900"}`}>
                M
              </span>
            </motion.div>
            <span
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500 transition-colors duration-500 drop-shadow-md"
            >
              MY
              <span
                className={`font-light ml-1 group-hover:text-amber-200 transition-colors duration-300 ${
                  isScrolled || isMobileMenuOpen
                    ? "text-white"
                    : "text-yellow-600"
                }`}
              >
                RUGS
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-10 items-center font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative text-sm tracking-widest uppercase group py-2"
                >
                  <span
                    className={`transition-colors duration-300 ${location.pathname === link.path
                        ? "font-black drop-shadow-md " + (isScrolled || isMobileMenuOpen ? "text-amber-400" : "text-yellow-600")
                        : "group-hover:text-amber-400 " + (isScrolled || isMobileMenuOpen ? "text-emerald-100/70" : "text-yellow-600/80")
                      }
                  `}
                  >
                    {link.name}
                  </span>
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full shadow-[0_2px_5px_rgba(251,191,36,0.6)]"
                    />
                  )}
                  {location.pathname !== link.path && (
                    <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-6">
              <motion.button
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`hover:text-amber-400 transition-colors ${isScrolled || isMobileMenuOpen
                    ? "text-emerald-100/70"
                    : "text-yellow-600"
                  }`}
              >
                <Search className="w-5 h-5 drop-shadow-md" />
              </motion.button>

              <Link to="/profile">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`hover:text-amber-400 transition-colors ${isScrolled || isMobileMenuOpen
                      ? "text-emerald-100/70"
                      : "text-yellow-600"
                    }`}
                >
                  <User className="w-5 h-5 drop-shadow-md" />
                </motion.div>
              </Link>
              <Link to="/wishlist">
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`hover:text-amber-400 transition-colors ${isScrolled || isMobileMenuOpen
                        ? "text-emerald-100/70"
                        : "text-yellow-600"
                      }`}
                  >
                    <Heart className="w-5 h-5 drop-shadow-md" />
                  </motion.div>
                  {wishlist.length > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-2 -right-3 bg-gradient-to-br from-amber-400 to-yellow-600 border border-teal-950 text-teal-950 text-[10px] font-black px-1.5 min-w-[20px] h-5 rounded-full flex items-center justify-center shadow-[2px_2px_5px_rgba(0,0,0,0.5),_inset_1px_1px_1px_rgba(255,255,255,0.4)]"
                    >
                      {wishlist.length}
                    </motion.span>
                  )}
                </div>
              </Link>
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsCartOpen(true)}
                  className={`hover:text-amber-400 transition-colors ${isScrolled || isMobileMenuOpen
                      ? "text-emerald-100/70"
                      : "text-yellow-600"
                    }`}
                  aria-label="Toggle cart"
                >
                  <ShoppingBag className="w-5 h-5 drop-shadow-md" />
                </motion.button>
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-3 bg-gradient-to-br from-amber-400 to-yellow-600 border border-teal-950 text-teal-950 text-[10px] font-black px-1.5 min-w-[20px] h-5 rounded-full flex items-center justify-center shadow-[2px_2px_5px_rgba(0,0,0,0.5),_inset_1px_1px_1px_rgba(255,255,255,0.4)]"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className={`md:hidden z-50 hover:text-amber-400 transition-colors ${isScrolled || isMobileMenuOpen
                  ? "text-emerald-100/70"
                  : "text-yellow-600"
                }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-7 h-7 drop-shadow-md" />
              ) : (
                <Menu className="w-7 h-7 drop-shadow-md" />
              )}
            </button>
        </div>

        {/* Search Bar Dropdown */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0, y: -20 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-4 right-4 sm:left-8 sm:right-8 lg:left-auto lg:right-8 lg:w-[600px] mt-4 bg-teal-950 rounded-2xl border-t border-l border-teal-600 border-b border-r border-black shadow-[4px_10px_25px_rgba(0,0,0,0.8),_inset_1px_1px_2px_rgba(255,255,255,0.1)] overflow-hidden z-40 hidden md:block"
            >
              <div className="flex items-center gap-4 py-8 px-6">
                <form onSubmit={handleSearch} className="flex-1 relative group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-100/50 group-focus-within:text-amber-400 transition-colors drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" />
                  <input
                    type="text"
                    placeholder="Search premium carpets..."
                    className="w-full pl-12 pr-4 py-4 bg-teal-900 text-white border-t-2 border-l-2 border-b-2 border-r-2 border-black border-t-black border-l-black border-b-teal-800 border-r-teal-800 rounded-xl focus:border-amber-400 outline-none transition-all placeholder:text-emerald-100/50 shadow-[inset_4px_4px_10px_rgba(0,0,0,0.8),_inset_-2px_-2px_6px_rgba(255,255,255,0.05),_0_2px_5px_rgba(0,0,0,0.3)] focus:shadow-[inset_2px_2px_8px_rgba(0,0,0,0.8),_0_0_20px_rgba(251,191,36,0.3)]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                  <button type="submit" className="hidden">
                    Submit
                  </button>
                </form>
                <motion.button
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsSearchOpen(false)}
                  className="p-4 text-emerald-100/50 hover:text-white bg-teal-900 border-t border-l border-teal-700 border-b border-r border-black rounded-xl shadow-[2px_2px_5px_rgba(0,0,0,0.5),_inset_1px_1px_1px_rgba(255,255,255,0.1)] transition-all hover:bg-teal-800 active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.6)]"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-teal-950/98 backdrop-blur-2xl z-40 flex flex-col pt-32 px-6 md:hidden overflow-y-auto"
          >
            <form
              onSubmit={handleSearch}
              className="relative mb-10 group shrink-0"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-100/50 group-focus-within:text-amber-400 transition-colors drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-12 pr-4 py-4 bg-teal-900 text-white border-t-2 border-l-2 border-b-2 border-r-2 border-black border-t-black border-l-black border-b-teal-800 border-r-teal-800 rounded-xl focus:border-amber-400 outline-none transition-all placeholder:text-emerald-100/50 shadow-[inset_4px_4px_10px_rgba(0,0,0,0.8),_inset_-2px_-2px_6px_rgba(255,255,255,0.05),_0_2px_5px_rgba(0,0,0,0.3)] focus:shadow-[inset_2px_2px_8px_rgba(0,0,0,0.8),_0_0_20px_rgba(251,191,36,0.3)]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            <nav className="flex flex-col gap-8 text-3xl font-black flex-1">
              {navLinks.map((link, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  key={link.name}
                >
                  <Link
                    to={link.path}
                    className={`${location.pathname === link.path
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
                        : "text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
                      } hover:text-amber-300 transition-colors inline-block`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-8 mb-10 shrink-0 flex gap-6 border-t border-teal-800 pt-8 bg-teal-900 border-b border-black shadow-[inset_2px_2px_5px_rgba(0,0,0,0.4),_0_4px_10px_rgba(0,0,0,0.6)] rounded-2xl p-4">
              <Link
                to="/profile"
                className="flex-1 flex flex-col items-center gap-3 text-emerald-100/70 hover:text-amber-400 transition-colors"
              >
                <User className="w-7 h-7 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" />
                <span className="text-xs font-bold uppercase tracking-widest text-white">
                  Profile
                </span>
              </Link>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsCartOpen(true);
                }}
                className="flex-1 flex flex-col items-center gap-3 text-emerald-100/70 hover:text-amber-400 transition-colors relative"
              >
                <div className="relative">
                  <ShoppingBag className="w-7 h-7 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-3 bg-gradient-to-tr from-amber-400 to-yellow-600 border border-teal-950 text-teal-950 text-[10px] font-black px-1.5 py-0.5 min-w-[20px] rounded-full flex items-center justify-center shadow-[2px_2px_5px_rgba(0,0,0,0.5),_inset_1px_1px_1px_rgba(255,255,255,0.4)]">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-white">
                  Cart
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60]"
            />

            {/* Drawer */}
            <motion.div
              initial={{
                x: "100%",
                borderTopLeftRadius: "50px",
                borderBottomLeftRadius: "50px",
              }}
              animate={{
                x: 0,
                borderTopLeftRadius: "0px",
                borderBottomLeftRadius: "0px",
              }}
              exit={{
                x: "100%",
                borderTopLeftRadius: "50px",
                borderBottomLeftRadius: "50px",
              }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-teal-950 border-l border-black shadow-[-10px_0_30px_rgba(0,0,0,0.8)] z-[70] flex flex-col text-white"
            >
              {/* Cart Header */}
              <div className="p-6 border-b border-black flex items-center justify-between bg-teal-900 border-t border-teal-700 shadow-[0_5px_15px_rgba(0,0,0,0.5)] z-10">
                <h2 className="text-xl font-black flex items-center gap-3 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                  <ShoppingBag className="w-6 h-6 text-amber-400" />
                  Your Cart
                  {cartCount > 0 && (
                    <span className="text-sm font-bold text-teal-950 bg-amber-400 px-3 py-1 rounded-full shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4),_2px_2px_5px_rgba(0,0,0,0.5)]">
                      {cartCount} items
                    </span>
                  )}
                </h2>
                <motion.button
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 text-emerald-100/70 hover:text-white bg-teal-950 border-t border-l border-teal-700 border-b border-r border-black rounded-full shadow-[2px_2px_5px_rgba(0,0,0,0.5)] transition-all active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.6)]"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
                {cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0, rotate: -20 }}
                      animate={{ scale: 1, opacity: 1, rotate: 0 }}
                      className="w-28 h-28 bg-teal-900 border-t border-l border-teal-700 border-b border-r border-black rounded-full flex items-center justify-center text-amber-400 shadow-[5px_5px_15px_rgba(0,0,0,0.6),_inset_2px_2px_5px_rgba(255,255,255,0.1)]"
                    >
                      <ShoppingBag className="w-14 h-14 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                        Your cart is empty
                      </h3>
                      <p className="text-emerald-100/60 font-medium">
                        Discover beautiful designs for your space.
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsCartOpen(false)}
                      className="mt-6 px-8 py-4 bg-gradient-to-br from-amber-400 to-yellow-600 text-teal-950 border border-amber-200 font-extrabold rounded-xl shadow-[4px_4px_15px_rgba(0,0,0,0.6),_inset_2px_2px_4px_rgba(255,255,255,0.4)] transition-all"
                    >
                      Explore Collection
                    </motion.button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cartItems.map((item, index) => (
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        key={item.id}
                        className="flex gap-5 p-4 rounded-2xl bg-teal-900 border-t border-l border-teal-700 border-b border-r border-black shadow-[4px_4px_10px_rgba(0,0,0,0.5),_inset_1px_1px_2px_rgba(255,255,255,0.1)] hover:border-amber-500/50 transition-all hover:bg-teal-800 group"
                      >
                        <div className="w-24 h-24 rounded-xl overflow-hidden bg-teal-950 shrink-0 relative border-t-2 border-l-2 border-black border-b-2 border-r-2 border-teal-800 shadow-[inset_3px_3px_6px_rgba(0,0,0,0.8)]">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 shadow-[inset_0_0_10px_black]"
                          />
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                          <div className="flex justify-between items-start gap-2">
                            <div>
                              <h3 className="font-bold text-white text-lg line-clamp-2 leading-tight group-hover:text-amber-400 transition-colors drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                                {item.name}
                              </h3>
                              <p className="text-amber-400 font-black mt-2 text-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                                ${item.price}
                              </p>
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-emerald-100/50 hover:text-white p-2 hover:bg-red-500/80 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.1)] bg-teal-950 border-t border-l border-teal-800 border-b border-r border-black rounded-lg transition-all active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.6)]"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-5 h-5 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" />
                            </button>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="flex items-center bg-teal-950 rounded-lg p-1 border-t border-l border-black border-b border-r border-teal-800 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.6)]">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="w-8 h-8 flex items-center justify-center rounded-md bg-teal-900 border-t border-l border-teal-700 border-b border-r border-black shadow-[2px_2px_5px_rgba(0,0,0,0.5)] text-white hover:bg-teal-800 hover:scale-105 transition-all outline-none active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)]"
                              >
                                <Minus className="w-4 h-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" />
                              </button>
                              <span className="w-10 text-center text-base font-black text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="w-8 h-8 flex items-center justify-center rounded-md bg-teal-900 border-t border-l border-teal-700 border-b border-r border-black shadow-[2px_2px_5px_rgba(0,0,0,0.5)] text-white hover:bg-teal-800 hover:scale-105 transition-all outline-none active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)]"
                              >
                                <Plus className="w-4 h-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Cart Footer */}
              {cartItems.length > 0 && (
                <div className="p-6 border-t border-black bg-teal-900 shadow-[0_-5px_15px_rgba(0,0,0,0.5)] z-10">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-emerald-100/70 font-bold text-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                      Subtotal
                    </span>
                    <span className="text-3xl font-black text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                      ${cartTotal.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-emerald-100/50 text-sm mb-6 font-medium">
                    Shipping & taxes calculated at checkout.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-br from-amber-400 to-yellow-600 border-t border-l border-amber-200 border-b border-r border-yellow-800 text-teal-950 font-black text-lg rounded-xl shadow-[4px_4px_15px_rgba(0,0,0,0.5),_inset_2px_2px_4px_rgba(255,255,255,0.4)] transition-all"
                  >
                    Checkout Now
                  </motion.button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </>
  );
};

export default Navbar;
