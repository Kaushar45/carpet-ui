import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, ShoppingBag } from "lucide-react";
import { useRef } from "react";

const products = [
  {
    id: 1,
    name: "Persian Heritage",
    price: "$2,499",
    tag: "Bestseller",
    image:
      "https://plus.unsplash.com/premium_photo-1675183689526-231e7da8afbb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Modern Minimalist",
    price: "$1,899",
    tag: "New Arrival",
    image:
      "https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Vintage Anatolian",
    price: "$3,100",
    tag: "Masterpiece",
    image:
      "https://plus.unsplash.com/premium_photo-1755783616131-c0ee02053313?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Abstract Azure",
    price: "$1,250",
    tag: "Trending",
    image:
      "https://images.unsplash.com/photo-1714926618653-39de3cf5b691?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Nomadic Wool",
    price: "$899",
    tag: "Classic",
    image:
      "https://images.unsplash.com/photo-1766663769869-359d473a0f37?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Carousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-teal-950 py-20 relative overflow-hidden border-t-4 border-b-4 border-amber-600/30">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30 select-none flex items-center justify-center">
        <div className="w-full text-center text-[15vw] font-black text-teal-900 leading-none whitespace-nowrap drop-shadow-xl">
          COLLECTIONS
        </div>
      </div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              <span className="w-8 h-[2px] bg-amber-400 inline-block shadow-[0_0_5px_rgba(251,191,36,0.8)]" />
              Curated For You
            </h2>
            <h3
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-100 to-emerald-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            >
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-600">
                Masterpieces
              </span>
            </h3>
          </div>

          <div className="flex gap-4">
            <button
              onClick={scrollLeft}
              className="w-14 h-14 bg-teal-900 border-t-2 border-l-2 border-teal-700 border-b-2 border-r-2 border-black rounded-full shadow-[4px_6px_15px_rgba(0,0,0,0.6),_inset_2px_2px_5px_rgba(255,255,255,0.1)] flex items-center justify-center text-amber-400 hover:text-teal-950 hover:bg-gradient-to-br hover:from-amber-400 hover:to-yellow-600 hover:border-amber-200 hover:border-b-yellow-800 transition-all duration-300 active:scale-95 group"
            >
              <ChevronLeft className="w-7 h-7 drop-shadow-md group-hover:drop-shadow-none" />
            </button>
            <button
              onClick={scrollRight}
              className="w-14 h-14 bg-teal-900 border-t-2 border-l-2 border-teal-700 border-b-2 border-r-2 border-black rounded-full shadow-[4px_6px_15px_rgba(0,0,0,0.6),_inset_2px_2px_5px_rgba(255,255,255,0.1)] flex items-center justify-center text-amber-400 hover:text-teal-950 hover:bg-gradient-to-br hover:from-amber-400 hover:to-yellow-600 hover:border-amber-200 hover:border-b-yellow-800 transition-all duration-300 active:scale-95 group"
            >
              <ChevronRight className="w-7 h-7 drop-shadow-md group-hover:drop-shadow-none" />
            </button>
          </div>
        </div>

        {/* Draggable Carousel Track */}
        <motion.div
          ref={carouselRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-10 pt-4 px-4 -mx-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="min-w-[320px] max-w-[320px] md:min-w-[400px] md:max-w-[400px] snap-center snap-always relative group cursor-grab active:cursor-grabbing"
            >
              {/* Premium 3D Card wrapper */}
              <div className="bg-teal-900 rounded-3xl p-3 border-t-2 border-l-2 border-teal-700 border-b-2 border-r-2 border-black shadow-[10px_15px_30px_rgba(0,0,0,0.7),_inset_1px_1px_3px_rgba(255,255,255,0.1)] h-full flex flex-col">
                {/* Image Area */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-5 border-t border-l border-black/50 border-b border-r border-teal-700/50 shadow-[inset_2px_2px_10px_rgba(0,0,0,0.8)]">
                  <div className="absolute inset-0 bg-teal-950/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-multiply" />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                    draggable={false}
                  />

                  {/* Tag */}
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-lg text-teal-950 font-bold text-xs uppercase tracking-widest border-t border-l border-amber-200 border-b border-r border-yellow-800 shadow-[2px_3px_8px_rgba(0,0,0,0.6)]">
                    {product.tag}
                  </div>

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 bg-teal-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center backdrop-blur-[2px]">
                    <button className="px-6 py-3 bg-teal-900/90 text-amber-400 font-bold rounded-xl border-t border-l border-teal-700 border-b border-r border-black shadow-[0_5px_15px_rgba(0,0,0,0.5)] flex items-center gap-2 hover:bg-gradient-to-br hover:from-amber-400 hover:to-yellow-600 hover:text-teal-950 hover:border-amber-200 hover:border-b-yellow-800 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                      <ShoppingBag className="w-5 h-5" />
                      View Details
                    </button>
                  </div>
                </div>

                {/* Info Area */}
                <div className="px-2 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-sm"
                        />
                      ))}
                    </div>
                    <h4
                      style={{ fontFamily: "'Playfair Display', serif" }}
                      className="text-2xl font-bold text-emerald-100 group-hover:text-amber-400 transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] mb-1"
                    >
                      {product.name}
                    </h4>
                    <p className="text-emerald-100/60 text-sm font-medium mb-4">
                      Hand-woven 100% Wool
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-600 drop-shadow-[0_2px_3px_rgba(0,0,0,0.6)]">
                      {product.price}
                    </span>
                    <button className="w-12 h-12 rounded-xl bg-teal-950 border-t border-l border-teal-800 border-b border-r border-black flex items-center justify-center text-amber-500 hover:text-emerald-100 hover:bg-teal-800 transition-all shadow-[inset_1px_1px_3px_rgba(0,0,0,0.8),_2px_3px_6px_rgba(0,0,0,0.4)] hover:shadow-[inset_1px_1px_2px_rgba(255,255,255,0.1),_4px_6px_10px_rgba(0,0,0,0.6)]">
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Progress Indication (Optional decorative element) */}
        <div className="mt-8 flex justify-center items-center gap-3">
          <div className="w-16 h-1 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
          <div className="w-4 h-1 rounded-full bg-teal-800" />
          <div className="w-4 h-1 rounded-full bg-teal-800" />
          <div className="w-4 h-1 rounded-full bg-teal-800" />
        </div>
      </div>
    </section>
  );
};

export default Carousel;
