import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-teal-950 min-h-screen flex flex-col font-sans text-emerald-100 selection:bg-amber-400 selection:text-teal-950 transition-colors duration-500">
      <Navbar />
      <main className="flex-1 w-full flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
