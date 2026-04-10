import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, ChevronDown, Star, ShoppingCart } from 'lucide-react';

const products = [
  { id: 1, name: "Isfahan Silk Blend", category: "Persian", price: 1299, image: "https://images.unsplash.com/photo-1534889156217-d643df14f14a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", rating: 5, isNew: true },
  { id: 2, name: "Nordic Geometric", category: "Modern", price: 499, image: "https://images.unsplash.com/photo-1596401053423-f3c5b967d716?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", rating: 4, isNew: false },
  { id: 3, name: "Marrakech Runner", category: "Runner", price: 349, image: "https://images.unsplash.com/photo-1543854589-32867c295ce8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", rating: 5, isNew: false },
  { id: 4, name: "Oushak Vintage", category: "Vintage", price: 899, image: "https://images.unsplash.com/photo-1582582621959-48d27397dc69?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", rating: 5, isNew: true },
  { id: 5, name: "Anatolian Wool", category: "Vintage", price: 650, image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", rating: 4, isNew: false },
  { id: 6, name: "Minimalist Cream", category: "Modern", price: 299, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", rating: 4, isNew: false },
  { id: 7, name: "Heriz Medallion", category: "Persian", price: 1550, image: "https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", rating: 5, isNew: false },
  { id: 8, name: "Jute Braided", category: "Outdoor", price: 150, image: "https://plus.unsplash.com/premium_photo-1673827409418-508b9cd2aa4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", rating: 3, isNew: true }
];

const categories = ["All", "Persian", "Modern", "Vintage", "Runner", "Outdoor"];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="flex flex-col gap-8 bg-teal-950 text-emerald-100 min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-8">
        {/* Header */}
        <div className="bg-teal-900 text-white rounded-[36px] p-8 md:p-16 mb-4 relative overflow-hidden border-t-2 border-l-2 border-teal-700 border-b-2 border-r-2 border-black shadow-[4px_10px_25px_rgba(0,0,0,0.7),_inset_2px_2px_5px_rgba(255,255,255,0.1)]">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581452140409-548de84ccbeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-10 mix-blend-screen" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] flex items-center gap-2">
              <span className="w-8 h-[2px] bg-amber-400 inline-block shadow-[0_0_5px_rgba(251,191,36,0.8)]" /> 
              Environments
            </h2>
            <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-4xl md:text-6xl font-black mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
              Shop Collection
            </h1>
            <p className="text-emerald-100/90 text-lg md:text-xl font-medium drop-shadow-md">
              Browse our complete collection of handcrafted rugs, runners, and carpets to find the perfect addition to your home.
            </p>
          </div>
          <div className="absolute -right-20 -bottom-20 opacity-20 pointer-events-none text-teal-700">
             {/* Abstract shape decoration */}
             <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-45.9C90.8,-32.7,96.8,-16.3,95.6,-0.7C94.4,14.9,86,30,75.4,42.5C64.8,55,52.1,65,37.8,71.5C23.5,78,7.7,81,-7.6,79.5C-22.9,78,-37.6,72.1,-49.7,63.1C-61.8,54.1,-71.2,42,-78.9,28C-86.6,14,-92.6,-1.9,-89.9,-16.2C-87.2,-30.5,-75.8,-43.3,-62.7,-51.7C-49.6,-60.1,-34.8,-64.1,-21.3,-68.9C-7.8,-73.7,4.4,-79.3,18.5,-80.1C32.6,-80.9,46.5,-76.9,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Sidebar Filters */}
          <aside className="w-full md:w-72 shrink-0 flex flex-col gap-8 bg-teal-900/50 p-6 rounded-3xl border border-teal-800 backdrop-blur-md">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Filter className="w-5 h-5 text-amber-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" />
                <h2 className="font-black text-xl text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] tracking-wide">Filters</h2>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-sm uppercase tracking-widest text-amber-400/80 mb-5 border-b border-teal-800 pb-2">Categories</h3>
                  <div className="flex flex-col gap-3">
                    {categories.map((cat) => (
                      <label key={cat} className="flex items-center gap-4 cursor-pointer group">
                        <div className={`w-5 h-5 rounded flex items-center justify-center transition-all bg-teal-950 border-t ${selectedCategory === cat ? 'border-amber-400 border-l border-amber-400 shadow-[2px_2px_5px_rgba(0,0,0,0.5),_inset_1px_1px_2px_rgba(255,255,255,0.3)] bg-gradient-to-br from-amber-400 to-yellow-600' : 'border-t border-l border-black border-b border-r border-teal-800 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.6)] group-hover:border-amber-400/50'}`}>
                           {selectedCategory === cat && <span className="w-2 h-2 rounded-sm bg-teal-950" />}
                        </div>
                        <input 
                          type="radio" 
                          name="category" 
                          checked={selectedCategory === cat}
                          onChange={() => setSelectedCategory(cat)}
                          className="sr-only"
                        />
                        <span className={`text-emerald-100/80 font-medium transition-colors group-hover:text-amber-400 tracking-wide ${selectedCategory === cat ? 'font-black text-amber-400 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]' : ''}`}>
                          {cat}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <h3 className="font-bold text-sm uppercase tracking-widest text-amber-400/80 mb-5 border-b border-teal-800 pb-2">Sort By</h3>
                  <div className="relative">
                    <select className="appearance-none w-full bg-teal-950 text-white border-t border-l border-black border-b border-r border-teal-800 rounded-xl px-4 py-4 text-sm font-bold focus:outline-none focus:border-amber-400 pr-10 cursor-pointer shadow-[inset_2px_2px_5px_rgba(0,0,0,0.6)] transition-all">
                      <option>Recommended</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Newest Arrivals</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-400 pointer-events-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" />
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1 w-full">
            <div className="mb-8 flex justify-between items-center">
              <p className="text-emerald-100/70 font-medium">Showing <strong className="text-amber-400">{filteredProducts.length}</strong> results</p>
            </div>

            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
            >
              {filteredProducts.map((product) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={product.id} 
                  className="group flex flex-col cursor-pointer bg-teal-900 rounded-[2rem] p-3 border-t-2 border-l-2 border-teal-700 border-b-2 border-r-2 border-black shadow-[4px_6px_15px_rgba(0,0,0,0.6),_inset_1px_1px_2px_rgba(255,255,255,0.1)] hover:border-amber-500/50 hover:shadow-[0_0_25px_rgba(251,191,36,0.2)] transition-all duration-300"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] mb-5 bg-teal-950 border-t-2 border-l-2 border-black border-b-2 border-r-2 border-teal-800 shadow-[inset_4px_4px_10px_rgba(0,0,0,0.8)]">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal" />
                    {product.isNew && (
                      <div className="absolute top-4 right-4 bg-gradient-to-br from-amber-400 to-yellow-600 text-teal-950 px-4 py-1.5 rounded-full text-xs font-black border-t border-l border-amber-200 border-b border-r border-yellow-800 shadow-[2px_3px_8px_rgba(0,0,0,0.7),_inset_1px_1px_2px_rgba(255,255,255,0.4)] z-10 tracking-widest">
                        NEW
                      </div>
                    )}
                    {/* Quick Add Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-10">
                      <button className="w-full bg-gradient-to-br from-amber-400 to-yellow-600 text-teal-950 border-t border-l border-amber-200 border-b border-r border-yellow-800 shadow-[4px_4px_15px_rgba(0,0,0,0.6),_inset_2px_2px_5px_rgba(255,255,255,0.4)] rounded-xl py-3.5 font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-transform">
                        <ShoppingCart className="w-5 h-5 drop-shadow-[0_1px_2px_rgba(255,255,255,0.5)]" /> Add to Cart
                      </button>
                    </div>
                  </div>
                  <div className="px-2 pb-2">
                    <div className="flex justify-between items-start mb-2 gap-4">
                      <h3 className="text-xl font-bold group-hover:text-amber-400 transition-colors tracking-wide text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] line-clamp-1">{product.name}</h3>
                      <p className="font-black text-amber-400 text-xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">${product.price}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-emerald-100/60 font-medium uppercase tracking-wider">{product.category}</p>
                      <div className="flex gap-1 text-amber-400 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                        {[...Array(5)].map((_, idx) => (
                          <Star key={idx} className={`w-3.5 h-3.5 ${idx < product.rating ? 'fill-current' : 'text-teal-800'}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20 bg-teal-900 border-2 border-teal-800 rounded-3xl border-dashed">
                <h3 className="font-black text-2xl text-white mb-3 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">No products found</h3>
                <p className="text-emerald-100/70 font-medium text-lg">Try adjusting your filters to find what you're looking for.</p>
                <button 
                  onClick={() => setSelectedCategory("All")}
                  className="mt-8 px-8 py-3 bg-teal-950 hover:bg-teal-800 text-white font-bold rounded-xl transition-all border-t border-l border-teal-700 border-b border-r border-black shadow-[4px_4px_10px_rgba(0,0,0,0.5),_inset_1px_1px_2px_rgba(255,255,255,0.1)] active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.6)] uppercase tracking-widest text-sm"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
