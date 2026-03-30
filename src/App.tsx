import Navbar from "./component/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans text-slate-800">
      <Navbar />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
