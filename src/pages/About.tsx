import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="flex flex-col gap-16 md:gap-24 bg-teal-950 text-emerald-100 min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-16 md:gap-24">
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center rounded-[36px] overflow-hidden shadow-[10px_15px_30px_rgba(0,0,0,0.7),_inset_1px_1px_3px_rgba(255,255,255,0.2)] border-t-2 border-l-2 border-teal-700 border-b-2 border-r-2 border-black">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Beautiful home interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-teal-950/80 via-teal-950/60 to-teal-950/90 mix-blend-multiply" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative z-10 text-center px-4 max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
            >
              Our Story
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-emerald-100/90 font-medium drop-shadow-md"
            >
              Elevating everyday spaces with exceptional, handcrafted rugs. A legacy of weaver artisanship passed down over generations.
            </motion.p>
          </div>
        </section>

        {/* Content Split */}
        <section className="grid md:grid-cols-2 gap-12 items-center px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <img
              src="https://images.unsplash.com/photo-1596401053423-f3c5b967d716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Weaver crafting a rug"
              className="rounded-3xl shadow-[4px_6px_20px_rgba(0,0,0,0.7)] border-t-2 border-l-2 border-teal-700 border-b-2 border-r-2 border-black w-full h-[500px] object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2 flex flex-col justify-center"
          >
            <h2 className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] flex items-center gap-2">
              <span className="w-8 h-[2px] bg-amber-400 inline-block shadow-[0_0_5px_rgba(251,191,36,0.8)]" />
              The Craftsmanship
            </h2>
            <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl md:text-4xl font-black mb-6 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Dedicated to Authentic Artistry
            </h2>
            <p className="text-emerald-100/80 mb-4 leading-relaxed text-lg font-medium drop-shadow-sm">
              At MYRUGS, we believe that a rug is much more than floor covering. It is the unifying focal point of any room, dictating tone, rhythm, and character. We partner directly with artisan collectives across the world to source the highest-grade natural fibers.
            </p>
            <p className="text-emerald-100/80 leading-relaxed text-lg font-medium drop-shadow-sm">
              Every thread woven into our collections carries the story of its maker. By focusing on sustainable practices and ethical sourcing, we ensure fair compensation for our artists and a timeless product for you.
            </p>
          </motion.div>
        </section>

        {/* Promise */}
        <section className="bg-teal-900 rounded-[36px] p-12 md:p-20 text-center border-t-2 border-l-2 border-teal-700 border-b-2 border-r-2 border-black shadow-[4px_10px_25px_rgba(0,0,0,0.7),_inset_2px_2px_5px_rgba(255,255,255,0.1)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-5 mix-blend-overlay" />
          <div className="relative z-10">
            <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl md:text-5xl font-black mb-12 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Our Promise to You
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { icon: "🌱", title: "Sustainable", desc: "Environmentally friendly dyes and natural materials." },
                { icon: "🤝", title: "Fair Trade", desc: "Direct partnerships ensuring fair pay for every artisan." },
                { icon: "✨", title: "Heirloom Quality", desc: "Designed to last lifetimes and pass through generations." }
              ].map((item, i) => (
                <div key={i} className="group">
                  <div className="w-20 h-20 bg-teal-950 rounded-full flex items-center justify-center mx-auto mb-6 border-t border-l border-teal-700 border-b border-r border-black shadow-[4px_4px_10px_rgba(0,0,0,0.6),_inset_1px_1px_3px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all duration-300">
                    <span className="text-3xl filter drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-amber-400 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">{item.title}</h3>
                  <p className="text-emerald-100/70 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
