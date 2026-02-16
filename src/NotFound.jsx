import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-bold">404 Not Found</h1>

      <NavLink to="/">
        <button className="px-4 py-2 bg-purple-400 text-white rounded cursor-pointer">
          Back to Home
        </button>
      </NavLink>
    </section>
  );
};

export default NotFound;
