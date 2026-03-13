import { Outlet, Link } from "react-router";
import "./app.css";

export default function Root() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-slate-800 text-white px-10 py-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">My Concert App</h2>

        <nav className="flex gap-6">
          <Link className="hover:text-gray-300" to="/">
            Home
          </Link>
          <Link className="hover:text-gray-300" to="/about">
            About
          </Link>
          <Link className="hover:text-gray-300" to="/concerts">
            Concerts
          </Link>
          <Link className="hover:text-gray-300" to="/concerts/trending">
            Trending
          </Link>
          <Link className="hover:text-gray-300" to="/login">
            Login
          </Link>
          <Link className="hover:text-gray-300" to="/register">
            Register
          </Link>
          <Link className="hover:text-gray-300" to="/cart">
            Cart
          </Link>
        </nav>
      </header>

      {/* Page content */}
      <main className="max-w-6xl mx-auto p-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-10">
        © 2026 My Concert App
      </footer>
    </div>
  );
}
