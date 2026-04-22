import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, ArrowLeft, Star, Ruler, MapPin, Layers } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { products } from '../data/products';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useStore();

  const product = products.find(p => p.id === Number(id));

  const [mainImageLoaded, setMainImageLoaded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-teal-950 flex flex-col items-center justify-center text-white">
        <h2 className="text-3xl font-black mb-4">Product Not Found</h2>
        <button 
          onClick={() => navigate('/shop')}
          className="px-6 py-3 bg-gradient-to-br from-amber-400 to-yellow-600 text-teal-950 rounded-xl font-bold shadow-[4px_4px_15px_rgba(0,0,0,0.6)]"
        >
          Return to Shop
        </button>
      </div>
    );
  }

  const inWishlist = isInWishlist(product.id);

  const toggleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="bg-teal-950 min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-emerald-100">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-amber-400 font-bold hover:text-amber-300 transition-colors drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Shop
        </button>

        <div className="bg-teal-900 rounded-[3rem] p-6 lg:p-10 border-t-2 border-l-2 border-teal-700 border-b-2 border-r-2 border-black shadow-[4px_10px_30px_rgba(0,0,0,0.8),_inset_2px_2px_5px_rgba(255,255,255,0.1)] flex flex-col lg:flex-row gap-12 relative overflow-hidden">
          
          {/* Abstract background shape */}
          <div className="absolute -right-40 -top-40 opacity-[0.03] text-white pointer-events-none blur-sm">
            <svg width="800" height="800" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M48.7,-73.4C63.8,-65.2,77.8,-53.1,84.3,-38.9C90.8,-24.7,89.8,-8.3,86.6,6.7C83.4,21.7,78,35.3,68.4,45.5C58.8,55.7,45.1,62.5,31.8,68.5C18.5,74.5,5.7,79.7,-7.6,78.2C-20.9,76.7,-34.6,68.5,-46.7,59.1C-58.8,49.7,-69.2,39,-75.9,26C-82.6,13,-85.6,-2.3,-81.9,-16.2C-78.2,-30.1,-67.8,-42.6,-54.7,-51.7C-41.6,-60.8,-25.8,-66.4,-10.3,-69.6C5.2,-72.8,20.4,-73.6,34.7,-73.4Z" transform="translate(100 100)" />
            </svg>
          </div>

          {/* Product Image Section */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden bg-teal-950 border-t-2 border-l-2 border-black border-b-2 border-r-2 border-teal-800 shadow-[inset_4px_4px_10px_rgba(0,0,0,0.8)]"
            >
              {!mainImageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-amber-400 border-t-transparent animate-spin rounded-full"></div>
                </div>
              )}
              <img 
                src={product.image} 
                alt={product.name} 
                onLoad={() => setMainImageLoaded(true)}
                className={`w-full h-full object-cover transition-opacity duration-1000 ${mainImageLoaded ? 'opacity-100' : 'opacity-0'}`}
              />
              
              {product.isNew && (
                <div className="absolute top-6 left-6 bg-gradient-to-br from-amber-400 to-yellow-600 text-teal-950 px-5 py-2 rounded-full text-sm font-black border-t border-l border-amber-200 border-b border-r border-yellow-800 shadow-[2px_3px_8px_rgba(0,0,0,0.7),_inset_1px_1px_2px_rgba(255,255,255,0.4)] tracking-widest z-10">
                  NEW ARRIVAL
                </div>
              )}
              <button 
                onClick={toggleWishlist}
                className="absolute top-6 right-6 p-4 rounded-full bg-teal-950/80 backdrop-blur-md border border-teal-700/50 hover:bg-teal-900 transition-colors z-20 group peer shadow-[4px_4px_10px_rgba(0,0,0,0.5)] active:scale-95"
              >
                <Heart 
                  className={`w-6 h-6 transition-all ${inWishlist ? 'fill-amber-400 text-amber-400 scale-110 drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]' : 'text-emerald-100/70 group-hover:text-amber-400'}`} 
                />
              </button>
            </motion.div>
          </div>

          {/* Product Details Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col pt-4 relative z-10"
          >
            <div className="mb-2">
              <span className="bg-teal-950 text-amber-400 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-teal-800 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.6)]">
                {product.category} Collection
              </span>
            </div>
            
            <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-6 mb-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] leading-tight">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-6 mb-8">
              <p className="font-black text-amber-400 text-4xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                ${product.price}
              </p>
              <div className="h-8 w-px bg-teal-700 mx-2"></div>
              <div className="flex flex-col">
                <div className="flex gap-1 text-amber-400 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className={`w-4 h-4 ${idx < (product.rating || 5) ? 'fill-current' : 'text-teal-800'}`} />
                  ))}
                </div>
                <span className="text-emerald-100/60 text-xs font-bold mt-1 uppercase tracking-widest">
                  12 Reviews
                </span>
              </div>
            </div>

            <p className="text-emerald-100/80 text-lg leading-relaxed mb-10 font-medium pb-8 border-b border-teal-800 border-dashed">
              {product.description || "A gorgeous artisanal rug completely handwoven to perfection."}
            </p>

            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="bg-teal-950/50 p-5 rounded-2xl border border-teal-800 flex items-start gap-4">
                <div className="p-3 bg-teal-900 rounded-xl rounded-tr-none text-amber-400 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.6)]">
                  <Ruler className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-black text-emerald-100/50 mb-1">Dimensions</h4>
                  <p className="font-bold text-white tracking-wide">{product.dimensions || "Available in sizes"}</p>
                </div>
              </div>

              <div className="bg-teal-950/50 p-5 rounded-2xl border border-teal-800 flex items-start gap-4">
                <div className="p-3 bg-teal-900 rounded-xl rounded-tl-none text-amber-400 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.6)]">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-black text-emerald-100/50 mb-1">Material</h4>
                  <p className="font-bold text-white tracking-wide">{product.material || "100% Wool"}</p>
                </div>
              </div>

              <div className="bg-teal-950/50 p-5 rounded-2xl border border-teal-800 flex items-start gap-4">
                <div className="p-3 bg-teal-900 rounded-xl rounded-br-none text-amber-400 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.6)]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-black text-emerald-100/50 mb-1">Origin</h4>
                  <p className="font-bold text-white tracking-wide">{product.origin || "Global"}</p>
                </div>
              </div>
            </div>

            <div className="mt-auto flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => addToCart(product)}
                className="flex-1 bg-gradient-to-br from-amber-400 to-yellow-600 text-teal-950 border-t border-l border-amber-200 border-b border-r border-yellow-800 shadow-[4px_10px_20px_rgba(0,0,0,0.6),_inset_2px_2px_5px_rgba(255,255,255,0.4)] rounded-2xl py-5 font-black text-lg uppercase tracking-widest flex items-center justify-center gap-3 transition-transform"
              >
                <ShoppingCart className="w-6 h-6 drop-shadow-[0_1px_2px_rgba(255,255,255,0.5)]" /> 
                Add to Cart
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={toggleWishlist}
                className={`px-8 py-5 rounded-2xl font-black text-lg uppercase tracking-widest flex items-center justify-center transition-all ${
                  inWishlist 
                  ? 'bg-teal-800 text-amber-400 border border-teal-700 shadow-[inset_2px_2px_10px_rgba(0,0,0,0.6)]' 
                  : 'bg-teal-950 text-white border-t border-l border-black border-b border-r border-teal-800 shadow-[4px_10px_20px_rgba(0,0,0,0.5),_inset_2px_2px_5px_rgba(255,255,255,0.1)] hover:border-amber-400/30 hover:text-amber-400'
                }`}
              >
                {inWishlist ? 'Wishlisted' : 'Wishlist'}
              </motion.button>
            </div>
            
            <div className="mt-8 pt-6 border-t border-teal-800 border-dashed flex items-center gap-8 text-sm text-emerald-100/60 font-medium">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 drop-shadow-[0_0_5px_rgba(74,222,128,0.8)]"></span>
                In Stock & Ready to Ship
              </p>
              <p>Free Standard Shipping over $500</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
