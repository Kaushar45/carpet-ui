
import { motion } from "framer-motion";
import { User, Package, Heart, LogOut, Settings, CreditCard, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../context/StoreContext";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const navigate = useNavigate();
  const { wishlist, cartItems } = useStore();
  const { logout } = useAuth();
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    joined: "Member since Oct 2023"
  };

  const menuItems = [
    { icon: <Package className="w-5 h-5" />, label: "My Orders", path: "/orders", badge: "2" },
    { icon: <Heart className="w-5 h-5" />, label: "Wishlist", path: "/wishlist", badge: wishlist.length > 0 ? String(wishlist.length) : undefined },
    { icon: <CreditCard className="w-5 h-5" />, label: "Payment Methods", path: "/payments" },
    { icon: <Settings className="w-5 h-5" />, label: "Settings", path: "/settings" },
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
                <div className="w-24 h-24 rounded-full border-2 border-teal-700 shadow-[inset_2px_2px_10px_rgba(0,0,0,0.8),_0_4px_10px_rgba(0,0,0,0.6)] overflow-hidden bg-teal-950">
                  <img 
                    src={user.avatar} 
                    alt={user.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="absolute bottom-0 right-0 bg-gradient-to-br from-amber-400 to-yellow-600 text-teal-950 p-2 rounded-full border-t border-l border-amber-200 border-b border-r border-yellow-800 shadow-[2px_2px_5px_rgba(0,0,0,0.5)] hover:scale-110 active:scale-95 transition-all">
                  <User className="w-4 h-4 drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]" />
                </button>
              </div>
              <div className="text-center md:text-left">
                <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl font-black drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">{user.name}</h1>
                <p className="text-emerald-100/70 font-medium">{user.email}</p>
                <p className="text-sm text-amber-400/80 mt-1 uppercase tracking-wider font-bold text-[10px]">{user.joined}</p>
              </div>
            </div>
            <button className="px-6 py-3 bg-teal-800 hover:bg-teal-700 text-white rounded-xl font-bold transition-colors border-t border-l border-teal-600 border-b border-r border-black shadow-[2px_2px_5px_rgba(0,0,0,0.5)] active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.6)]">
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
              <button onClick={() => logout()} className="flex items-center justify-center gap-3 text-red-400 hover:text-red-300 font-bold transition-all px-6 py-4 hover:bg-red-950/30 rounded-xl w-full sm:w-auto border border-transparent hover:border-red-900 shadow-none hover:shadow-inner">
                <LogOut className="w-5 h-5" />
                Sign Out
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
