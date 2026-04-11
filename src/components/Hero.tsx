import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Eye, Star, Sparkles } from "lucide-react";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] bg-teal-950 overflow-hidden flex items-center pt-24 pb-16"
    >
      {/* Background Ornaments */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] rounded-full bg-teal-800 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] rounded-full bg-amber-900/40 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Text Content Area */}
          <motion.div
            style={{ opacity }}
            className="flex flex-col justify-center max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="px-4 py-1.5 rounded-full bg-teal-900 border-t border-l border-teal-700 border-b border-r border-black shadow-[inset_1px_1px_2px_rgba(255,255,255,0.1),_2px_4px_8px_rgba(0,0,0,0.4)] flex items-center gap-2 w-fit">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-emerald-100/90 text-sm font-semibold tracking-wider uppercase">
                  Artisanal Heritage
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] text-white tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] mb-6"
            >
              Weave <br className="hidden sm:block" />
              <span className="relative inline-block mt-2">
                <span
                  className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Luxury Into
                </span>
                <span className="absolute bottom-2 left-0 w-full h-[30%] bg-amber-500/20 blur-md -z-10" />
              </span>
              <br />
              Your Space.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg sm:text-xl text-emerald-100/70 font-medium leading-relaxed mb-10 max-w-lg drop-shadow-sm"
            >
              Discover hand-crafted carpets that blend centuries of traditional
              artistry with stunning modern aesthetics. Delivered straight to
              your floor.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <button className="group relative px-8 py-4 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-xl font-bold text-teal-950 text-lg flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] active:scale-95 border-t-2 border-l-2 border-amber-200 border-b-2 border-r-2 border-yellow-800 shadow-[3px_6px_15px_rgba(0,0,0,0.4),_inset_1px_1px_3px_rgba(255,255,255,0.4)]">
                Explore Collection
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm" />
              </button>

              <button className="group px-8 py-4 bg-teal-900 rounded-xl font-bold text-emerald-100 text-lg flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] hover:bg-teal-800 active:scale-95 border-t-2 border-l-2 border-teal-700 border-b-2 border-r-2 border-black shadow-[3px_6px_15px_rgba(0,0,0,0.4),_inset_1px_1px_3px_rgba(255,255,255,0.1)]">
                <Eye className="w-5 h-5 group-hover:scale-110 group-hover:text-amber-400 transition-all duration-300" />
                View Process
              </button>
            </motion.div>

            {/* Micro Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-12 flex items-center gap-8 pt-8 border-t border-teal-800/60"
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-sm"
                    />
                  ))}
                </div>
                <span className="text-emerald-100/60 text-sm mt-1 font-medium">
                  4.9/5 from 2,000+ reviews
                </span>
              </div>
              <div className="w-px h-10 bg-teal-800/60" />
              <div className="flex flex-col">
                <span className="text-white font-black text-xl drop-shadow-md">
                  Hand-Knotted
                </span>
                <span className="text-emerald-100/60 text-sm font-medium">
                  Premium Quality
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image & Showcase Area */}
          <div className="relative h-[500px] lg:h-[650px] w-full perspective-1000">
            {/* Main Center Image */}
            <motion.div
              style={{ y: y1 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] sm:w-[70%] aspect-[4/5] z-20"
            >
              <div className="w-full h-full p-2 bg-teal-900 rounded-2xl border-t-2 border-l-2 border-teal-700 border-b-2 border-r-2 border-black shadow-[0_20px_50px_rgba(0,0,0,0.8),_inset_1px_1px_3px_rgba(255,255,255,0.2)] rotate-2 hover:rotate-0 transition-transform duration-700">
                <div className="w-full h-full rounded-xl overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 to-transparent z-10 opacity-60" />
                  <img
                    src="https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Premium Living Room Rug"
                    className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700"
                  />
                  {/* Floating Price Tag */}
                  <div className="absolute bottom-6 right-6 z-20 px-4 py-2 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-xl font-black text-teal-950 border-t border-l border-amber-200 border-b border-r border-yellow-800 shadow-[2px_4px_10px_rgba(0,0,0,0.5)]">
                    $1,299
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Back Image (Left) */}
            <motion.div
              style={{ y: y2 }}
              className="absolute left-0 top-[15%] w-[50%] aspect-[3/4] z-10 opacity-70"
            >
              <div className="w-full h-full p-2 bg-teal-950 rounded-2xl border-t border-l border-teal-800 border-b border-r border-black shadow-[0_10px_30px_rgba(0,0,0,0.6)] -rotate-6">
                <div className="w-full h-full rounded-xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-teal-900/40 z-10 mix-blend-multiply" />
                  <img
                    src="https://plus.unsplash.com/premium_photo-1675738774551-cf86de1fd242?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Artisan Rug Details"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Side Floating Decor (Right) */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [3, 5, 3],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
              className="absolute right-[-5%] top-[30%] w-[45%] z-30"
            >
              <div className="p-4 bg-teal-900/90 backdrop-blur-md rounded-2xl border-t-2 border-l-2 border-teal-700 border-b-2 border-r-2 border-black shadow-[0_15px_40px_rgba(0,0,0,0.6),_inset_1px_1px_2px_rgba(255,255,255,0.2)]">
                <div className="w-12 h-12 mb-3 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-lg flex items-center justify-center border-t border-l border-amber-200 border-b border-r border-yellow-800 shadow-inner">
                  <span className="text-teal-950 font-black text-xl">100%</span>
                </div>
                <h4 className="text-amber-400 font-bold text-sm tracking-widest uppercase mb-1 drop-shadow-sm">
                  Authentic
                </h4>
                <p className="text-emerald-100/70 text-xs font-medium">
                  Hand-woven by master artisans
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
