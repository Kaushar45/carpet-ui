import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { Facebook, Twitter, Instagram, Youtube, MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const Footer = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const parallaxOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.2, 0.4]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        duration: 0.8 
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
  };

  return (
    <footer ref={containerRef} className="relative overflow-hidden bg-teal-950 text-emerald-100/70 border-t mt-20 border-teal-600 shadow-[0_-10px_30px_rgba(0,0,0,0.8)] pb-12 rounded-t-[40px] border-l border-r border-black">
      
      {/* Background Parallax Layer */}
      <motion.div 
        style={{ y: parallaxY, opacity: parallaxOpacity }}
        className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center"
      >
        <div className="text-[25vw] font-black text-teal-900 tracking-tighter whitespace-nowrap blur-[1px] leading-none select-none drop-shadow-[0_10px_10px_rgba(0,0,0,0.9)]">
          MYRUGS
        </div>
      </motion.div>

      {/* Infinite Marquee Strip */}
      <div className="relative z-10 w-full overflow-hidden bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 border-y-2 border-amber-200 border-b-yellow-800 py-4 shadow-[0_5px_20px_rgba(0,0,0,0.8),_inset_0_2px_5px_rgba(255,255,255,0.4)]">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex w-max"
        >
          {[...Array(12)].map((_, i) => (
            <div key={i} className="flex items-center mx-6 gap-6">
              <span className="text-teal-950 font-black text-xl tracking-widest uppercase drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">Premium Hand-Made Carpets</span>
              <span className="text-teal-950 font-black text-2xl drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">✦</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <Link to="/" className="text-2xl font-black tracking-tighter flex items-center gap-3 group mb-8 w-fit">
              <motion.div
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-lg flex items-center justify-center border-t border-l border-amber-200 border-b border-r border-yellow-800 shadow-[2px_3px_8px_rgba(0,0,0,0.5),_inset_1px_1px_2px_rgba(255,255,255,0.4)]"
              >
                <span className="text-teal-950 text-2xl font-extrabold drop-shadow-sm">M</span>
              </motion.div>
              <span style={{ fontFamily: "'Playfair Display', serif" }} className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500 transition-colors duration-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-3xl">
                MY<span className="font-light ml-1 text-emerald-100 group-hover:text-amber-200 transition-colors duration-300">RUGS</span>
              </span>
            </Link>
            <p className="mb-8 max-w-sm text-lg leading-relaxed text-emerald-100/70 font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              Elevate your living space with our premium artisan collections. Hand-crafted carpets delivered straight to your door with unparalleled luxury.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ y: -8, scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 bg-teal-900 border-t-2 border-l-2 border-teal-700 border-b-2 border-r-2 border-black rounded-xl shadow-[4px_6px_15px_rgba(0,0,0,0.6),_inset_2px_2px_5px_rgba(255,255,255,0.1)] flex items-center justify-center text-emerald-100/70 hover:text-teal-950 hover:bg-gradient-to-br hover:from-amber-400 hover:to-yellow-600 hover:border-amber-200 hover:border-b-yellow-800 transition-all duration-300 group"
                >
                  <Icon className="w-6 h-6 drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)] group-hover:drop-shadow-[0_1px_2px_rgba(255,255,255,0.4)]" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-amber-400 font-black text-xl mb-8 tracking-widest uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] border-b-2 border-teal-800 pb-3 inline-block">Quick Links</h3>
            <ul className="flex flex-col gap-5">
              {['About Us', 'Shop All', 'FAQ', 'Returns', 'Shipping'].map((link, idx) => (
                <li key={idx}>
                  <Link to={`/${link.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="group flex items-center font-medium hover:text-amber-400 transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    <ArrowUpRight className="w-5 h-5 mr-3 text-teal-600 group-hover:text-amber-400 transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
                    <span className="relative overflow-hidden text-lg">
                      {link}
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-400 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Collections */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="text-amber-400 font-black text-xl mb-8 tracking-widest uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] border-b-2 border-teal-800 pb-3 inline-block">Collections</h3>
            <ul className="flex flex-col gap-5">
              {['Persian Classics', 'Modern Minimal', 'Vintage Wash', 'Runners', 'Outdoor'].map((link, idx) => (
                <li key={idx}>
                  <Link to="/shop" className="group flex items-center font-medium hover:text-amber-400 transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    <ArrowUpRight className="w-5 h-5 mr-3 text-teal-600 group-hover:text-amber-400 transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
                    <span className="relative overflow-hidden text-lg">
                      {link}
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-400 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Us */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h3 className="text-amber-400 font-black text-xl mb-8 tracking-widest uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] border-b-2 border-teal-800 pb-3 inline-block">Contact Us</h3>
            <ul className="flex flex-col gap-6">
              {[
                { icon: MapPin, text: "123 Artisan Ave, Suite 400\nNew York, NY 10001" },
                { icon: Phone, text: "+1 (800) 123-4567" },
                { icon: Mail, text: "support@myrugs.com" }
              ].map((item, idx) => (
                <motion.li 
                  key={idx} 
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-teal-900 border-t-2 border-l-2 border-teal-700 border-b-2 border-r-2 border-black shadow-[4px_6px_15px_rgba(0,0,0,0.6),_inset_1px_1px_3px_rgba(255,255,255,0.1)] hover:border-amber-500/50 hover:bg-teal-800 transition-all group cursor-pointer"
                >
                  <div className="bg-teal-950 p-2.5 rounded-lg border-t-2 border-l-2 border-black border-b-2 border-r-2 border-teal-800 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.8)]">
                    <item.icon className="w-5 h-5 text-amber-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="whitespace-pre-line font-medium group-hover:text-amber-100 transition-colors mt-1 leading-snug drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-10 mt-16 border-t-2 border-teal-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
          
          <div className="flex items-center gap-3 px-6 py-3 bg-teal-900 rounded-full border-t border-l border-teal-700 border-b border-r border-black shadow-[inset_1px_1px_2px_rgba(255,255,255,0.1),_2px_4px_10px_rgba(0,0,0,0.6)]">
            <span className="text-amber-400 text-base drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">© {new Date().getFullYear()}</span> 
            <span className="text-white font-black tracking-widest text-base drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">MYRUGS</span>
            <span className="text-emerald-100/50">All rights reserved.</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, idx) => (
              <Link 
                key={idx} 
                to={`/${link.toLowerCase().replace(/ /g, '-')}`} 
                className="hover:text-amber-400 transition-colors px-4 py-2 bg-teal-900/50 rounded-lg border-t border-l border-teal-700/50 border-b border-r border-black/50 hover:border-amber-400/50 hover:bg-teal-800 shadow-[0_2px_5px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_10px_rgba(0,0,0,0.6)] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
              >
                {link}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
