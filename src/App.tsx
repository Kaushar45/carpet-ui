import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const authPaths = ["/login", "/signup", "/forgot-password", "/reset-password"];
  const isAuthPage = authPaths.includes(location.pathname);

  return (
    <div className="bg-teal-950 min-h-screen flex flex-col font-sans text-emerald-100 selection:bg-amber-400 selection:text-teal-950 transition-colors duration-500">
      {!isAuthPage && <Navbar />}
      <main className="flex-1 w-full flex flex-col">
        <Outlet />
      </main>
      {!isAuthPage && <Footer />}
    </div>
  );
}

export default App;
