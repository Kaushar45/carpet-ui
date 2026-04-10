import { motion, type Variants } from "framer-motion";
import { ArrowRight, Star, Shield, Truck, Clock } from "lucide-react";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const Home = () => {
  return (
    <div className="flex flex-col w-full bg-teal-950 text-emerald-100">
      <Hero />
      <Carousel />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-24 py-20 pb-32">
        
        {/* Features/Trust Banners */}
        <section>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Truck,
                title: "Global Delivery",
                desc: "Complimentary shipping for our artisan pieces worldwide.",
              },
              {
                icon: Shield,
                title: "Authentic Materials",
                desc: "100% genuine silk and wool sourced sustainably.",
              },
              {
                icon: Clock,
                title: "Timeless Guarantee",
                desc: "Backed by our lifetime craftsmanship warranty.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                whileHover={{ y: -10, scale: 1.02 }}
                className="flex flex-col items-center text-center p-8 bg-teal-900 rounded-3xl border-t-2 border-l-2 border-teal-700 border-b-2 border-r-2 border-black shadow-[4px_6px_15px_rgba(0,0,0,0.6),_inset_2px_2px_5px_rgba(255,255,255,0.1)] transition-all duration-300 group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-amber-400 to-yellow-600 p-4 rounded-full mb-6 border-t border-l border-amber-200 border-b border-r border-yellow-800 shadow-inner group-hover:shadow-[0_0_15px_rgba(251,191,36,0.6)] transition-all duration-500">
                  <feature.icon className="w-8 h-8 text-teal-950 drop-shadow-sm" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-amber-400 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] tracking-wide">{feature.title}</h3>
                <p className="text-emerald-100/70 font-medium leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Categories */}
        <section className="pt-10 border-t border-teal-800 border-dashed">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                <span className="w-8 h-[2px] bg-amber-400 inline-block shadow-[0_0_5px_rgba(251,191,36,0.8)]" /> 
                Environments
              </h2>
              <h3 style={{ fontFamily: "'Playfair Display', serif" }} className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-100 to-emerald-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Shop by <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-600">Category</span>
              </h3>
            </motion.div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Living Room Essentials",
                img: "https://images.unsplash.com/photo-1581452140409-548de84ccbeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              },
              {
                name: "Bedroom Retreat",
                img: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              },
              {
                name: "Dining Elegance",
                img: "https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              },
            ].map((cat, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer shadow-[10px_15px_30px_rgba(0,0,0,0.7),_inset_1px_1px_3px_rgba(255,255,255,0.2)] border-t-2 border-l-2 border-teal-700 border-b-2 border-r-2 border-black"
                whileHover={{ y: -5 }}
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90" />
                
                <div className="absolute bottom-8 left-8 right-8 text-center md:text-left">
                  <h3 style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl font-black text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] group-hover:text-amber-400 transition-colors duration-300">
                    {cat.name}
                  </h3>
                  <span className="text-amber-400 font-bold uppercase tracking-widest text-sm flex items-center justify-center md:justify-start gap-2 group-hover:gap-4 transition-all duration-300">
                    Explore Collection <ArrowRight className="w-5 h-5 drop-shadow-md" />
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Call to Action Banner */}
        <section>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="w-full rounded-[40px] bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 p-1 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-t border-amber-200 border-b-2 border-yellow-800"
          >
            <div className="bg-teal-950 rounded-[36px] px-8 py-20 md:p-24 relative overflow-hidden flex flex-col items-center text-center">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579541595180-8798bf1c360b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10 mix-blend-screen" />
              <div className="relative z-10 max-w-3xl">
                <Star className="w-12 h-12 text-amber-400 mx-auto mb-6 drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]" />
                <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                  Join Our Artisan Insider Club
                </h2>
                <p className="text-xl text-emerald-100/80 font-medium mb-10 drop-shadow-sm">
                  Subscribe to get early access to limited edition drops, exclusive behind-the-scenes content, and 10% off your first masterpiece.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="px-6 py-4 rounded-xl bg-teal-900 border-2 border-teal-700 text-white placeholder-emerald-100/50 focus:outline-none focus:border-amber-400 transition-colors w-full sm:w-96 shadow-inner"
                  />
                  <button className="px-8 py-4 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-xl font-bold text-teal-950 text-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 border-t border-l border-amber-200 border-b border-r border-yellow-800 shadow-[2px_4px_10px_rgba(0,0,0,0.5)]">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
};

export default Home;
