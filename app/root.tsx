import * as React from "react";
import { Link, Outlet } from "react-router";
import appCss from "./app.css?url";

export const links = () => [{ rel: "stylesheet", href: appCss }];

export default function Root() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="bg-slate-800 text-white px-10 py-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">My Concert App</h2>

        <nav className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/concerts">Concerts</Link>
          <Link to="/concerts/trending">Trending</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </header>

      <main className="p-10">
        <Outlet />
      </main>
    </div>
  );
}
