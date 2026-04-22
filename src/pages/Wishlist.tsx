import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, ArrowRight, Star, Trash2 } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart } = useStore();
  const navigate = useNavigate();

  return (
    <div className="bg-teal-950 min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-emerald-100 flex flex-col">
      <div className="max-w-7xl mx-auto w-full flex flex-col flex-1">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] flex items-center gap-2">
              <span className="w-8 h-[2px] bg-amber-400 inline-block shadow-[0_0_5px_rgba(251,191,36,0.8)]" /> 
              Your Favorites
            </h2>
            <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-4xl md:text-5xl font-black text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] flex items-center gap-4">
              <Heart className="w-10 h-10 text-amber-400 fill-amber-400" /> Wishlist
            </h1>
          </div>
          <div className="hidden sm:block text-emerald-100/60 font-medium">
            {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved
          </div>
        </div>

        {wishlist.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 flex flex-col items-center justify-center bg-teal-900 rounded-[3rem] p-12 text-center border-t border-l border-teal-700 border-b border-r border-black shadow-[4px_10px_25px_rgba(0,0,0,0.7),_inset_2px_2px_5px_rgba(255,255,255,0.1)] border-dashed my-auto"
          >
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-teal-950 mb-6 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.8)] border border-teal-800">
              <Heart className="w-10 h-10 text-emerald-100/30" />
            </div>
            <h3 className="text-2xl font-black mb-4 text-white drop-shadow-md">Your Wishlist is Empty</h3>
            <p className="text-emerald-100/60 font-medium mb-8 max-w-md">
              Start building out your dream space by adding your favorite rugs and carpets to your collection.
            </p>
            <button 
              onClick={() => navigate('/shop')}
              className="group px-8 py-4 bg-gradient-to-br from-amber-400 to-yellow-600 text-teal-950 rounded-xl font-black uppercase tracking-widest shadow-[4px_4px_15px_rgba(0,0,0,0.6),_inset_2px_2px_5px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              Explore Shop
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {wishlist.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigate(`/product/${product.id}`)}
                className="group cursor-pointer bg-teal-900 flex flex-col rounded-[2rem] p-3 border-t border-l border-teal-700 border-b border-r border-black shadow-[4px_6px_15px_rgba(0,0,0,0.6),_inset_1px_1px_2px_rgba(255,255,255,0.1)] hover:border-amber-500/50 hover:shadow-[0_0_20px_rgba(251,191,36,0.2)] transition-all duration-300"
              >
                <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-4 border-t-2 border-l-2 border-black border-b-2 border-r-2 border-teal-800 shadow-[inset_4px_4px_10px_rgba(0,0,0,0.8)]">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  
                  <button 
                    onClick={(e) => { e.stopPropagation(); removeFromWishlist(product.id); }}
                    className="absolute top-4 right-4 p-2.5 rounded-full bg-teal-950/80 backdrop-blur-md text-emerald-100/70 hover:text-red-400 hover:bg-teal-950 transition-colors z-20 shadow-[2px_2px_5px_rgba(0,0,0,0.5)] active:scale-95 border border-teal-800"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="px-3 pb-3 flex flex-col flex-1">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h3 className="text-lg font-bold group-hover:text-amber-400 transition-colors tracking-wide text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] line-clamp-1">{product.name}</h3>
                  </div>
                  
                  <div className="flex items-center gap-1 text-amber-400 mb-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className={`w-3.5 h-3.5 ${idx < (product.rating||5) ? 'fill-current' : 'text-teal-800'}`} />
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <p className="font-black text-amber-400 text-xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">${product.price}</p>
                    <button 
                      onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                      className="p-3 bg-teal-950 text-amber-500 rounded-xl hover:text-emerald-100 hover:bg-teal-800 border-t border-l border-teal-800 border-b border-r border-black shadow-[inset_1px_1px_3px_rgba(0,0,0,0.8),_2px_3px_6px_rgba(0,0,0,0.4)] hover:shadow-[inner_light_teal] active:scale-95 transition-all"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
