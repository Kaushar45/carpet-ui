import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Package,
  Heart,
  LogOut,
  Settings,
  CreditCard,
  ChevronRight,
  X,
  Edit2,
  Trash2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../context/StoreContext";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const navigate = useNavigate();
  const { wishlist, clearCartAndWishlist } = useStore();
  const { user: authUser, logout, updateUser } = useAuth();
  
  const user = authUser || {
    name: "Guest User",
    email: "guest@example.com",
    avatar: "",
    joined: "Unknown",
  };

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateUser({ avatar: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditProfile = () => {
    const newName = window.prompt("Enter new name:", user.name);
    if (newName && newName.trim() !== "") {
      updateUser({ name: newName.trim() });
    }
  };

  const handleDeletePhoto = () => {
    updateUser({ avatar: "" });
    setIsImageModalOpen(false);
  };

  const handleLogout = () => {
    clearCartAndWishlist();
    logout();
    navigate("/");
  };

  const menuItems = [
    {
      icon: <Package className="w-5 h-5" />,
      label: "My Orders",
      path: "/orders",
      badge: "2",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      label: "Wishlist",
      path: "/wishlist",
      badge: wishlist.length > 0 ? String(wishlist.length) : undefined,
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      label: "Payment Methods",
      path: "/payments",
    },
    {
      icon: <Settings className="w-5 h-5" />,
      label: "Settings",
      path: "/settings",
    },
  ];

  return (
    <div className="pt-32 pb-16 min-h-screen bg-teal-950 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-teal-900 rounded-3xl shadow-[4px_10px_25px_rgba(0,0,0,0.7),_inset_1px_1px_3px_rgba(255,255,255,0.1)] border-t border-l border-teal-700 border-b border-r border-black overflow-hidden"
        >
          {/* Header */}
          <div className="px-8 py-10 bg-teal-950 text-white flex flex-col md:flex-row items-center md:justify-between gap-6 border-b border-black shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative">
                <div 
                  className="w-24 h-24 rounded-full border-2 border-teal-700 shadow-[inset_2px_2px_10px_rgba(0,0,0,0.8),_0_4px_10px_rgba(0,0,0,0.6)] overflow-hidden bg-teal-950 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setIsImageModalOpen(true)}
                >
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-10 h-10 text-emerald-100/50" />
                  )}
                </div>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handlePhotoChange} 
                  accept="image/*" 
                  className="hidden" 
                />
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute bottom-0 right-0 bg-gradient-to-br from-amber-400 to-yellow-600 text-teal-950 p-2 rounded-full border-t border-l border-amber-200 border-b border-r border-yellow-800 shadow-[2px_2px_5px_rgba(0,0,0,0.5)] hover:scale-110 active:scale-95 transition-all"
                >
                  <User className="w-4 h-4 drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]" />
                </button>
              </div>
              <div className="text-center md:text-left">
                <h1
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-3xl font-black drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
                >
                  {user.name}
                </h1>
                <p className="text-emerald-100/70 font-medium">{user.email}</p>
                <p className="text-sm text-amber-400/80 mt-1 uppercase tracking-wider font-bold text-[10px]">
                  {user.joined}
                </p>
              </div>
            </div>
            <button onClick={handleEditProfile} className="px-6 py-3 bg-teal-800 hover:bg-teal-700 text-white rounded-xl font-bold transition-colors border-t border-l border-teal-600 border-b border-r border-black shadow-[2px_2px_5px_rgba(0,0,0,0.5)] active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.6)]">
              Edit Profile
            </button>
          </div>

          {/* Body */}
          <div className="p-8">
            <h2 className="text-xl font-black text-amber-400 mb-6 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] flex items-center gap-3">
              <span className="w-6 h-[2px] bg-amber-400 inline-block shadow-[0_0_5px_rgba(251,191,36,0.8)]" />
              Account Settings
            </h2>

            <div className="grid gap-4">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  onClick={() => navigate(item.path)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-teal-800 border border-transparent hover:border-teal-700/50 transition-all group shadow-none hover:shadow-[inset_1px_1px_2px_rgba(255,255,255,0.05),_4px_4px_10px_rgba(0,0,0,0.3)] cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-950 flex items-center justify-center text-emerald-100/70 border-t border-l border-black border-b border-r border-teal-800 group-hover:border-amber-200 group-hover:bg-gradient-to-br group-hover:from-amber-400 group-hover:to-yellow-600 group-hover:text-teal-950 transition-all shadow-[inset_2px_2px_5px_rgba(0,0,0,0.6)] group-hover:shadow-[2px_2px_5px_rgba(0,0,0,0.5)]">
                      <span className="drop-shadow-sm">{item.icon}</span>
                    </div>
                    <span className="font-bold text-emerald-100/80 group-hover:text-amber-400 transition-colors tracking-wide">
                      {item.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    {item.badge && (
                      <span className="bg-gradient-to-br from-amber-400 to-yellow-600 text-teal-950 text-xs font-black px-2.5 py-1 rounded-full border border-amber-200 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.5),_2px_2px_4px_rgba(0,0,0,0.3)]">
                        {item.badge}
                      </span>
                    )}
                    <ChevronRight className="w-5 h-5 text-emerald-100/30 group-hover:text-amber-400 transition-colors group-hover:translate-x-1" />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-teal-800 border-dashed">
              <button
                onClick={handleLogout}
                className="flex items-center justify-center gap-3 text-red-400 hover:text-red-300 font-bold transition-all px-6 py-4 hover:bg-red-950/30 rounded-xl w-full sm:w-auto border border-transparent hover:border-red-900 shadow-none hover:shadow-inner"
              >
                <LogOut className="w-5 h-5" />
                Sign Out
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-teal-950/90 backdrop-blur-sm p-4"
          >
            <div className="absolute inset-0" onClick={() => setIsImageModalOpen(false)} />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative z-10 w-full max-w-sm flex flex-col items-center"
            >
              <button
                onClick={() => setIsImageModalOpen(false)}
                className="absolute -top-12 right-0 p-2 text-emerald-100/50 hover:text-amber-400 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border-4 border-teal-700 shadow-[0_10px_30px_rgba(0,0,0,0.8)] overflow-hidden bg-teal-900 flex items-center justify-center">
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-32 h-32 text-emerald-100/30" />
                )}
              </div>

              <div className="mt-8 flex gap-6">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="w-14 h-14 rounded-full bg-teal-900 border border-teal-700 shadow-[2px_4px_10px_rgba(0,0,0,0.5)] flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-teal-950 group-hover:scale-110 active:scale-95 transition-all">
                    <Edit2 className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-bold text-emerald-100/70 group-hover:text-amber-400 transition-colors uppercase tracking-widest">
                    Change
                  </span>
                </button>
                <button
                  onClick={handleDeletePhoto}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="w-14 h-14 rounded-full bg-teal-900 border border-teal-700 shadow-[2px_4px_10px_rgba(0,0,0,0.5)] flex items-center justify-center text-red-400 group-hover:bg-red-500 group-hover:text-white group-hover:scale-110 active:scale-95 transition-all">
                    <Trash2 className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-bold text-emerald-100/70 group-hover:text-red-400 transition-colors uppercase tracking-widest">
                    Remove
                  </span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Profile;
