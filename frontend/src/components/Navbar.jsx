import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center p-4">
      <Link to="/" className="font-bold text-xl hover:text-gray-200 transition">
        Smart College Events
      </Link>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-200 transition">Home</Link>
        <Link to="/events" className="hover:text-gray-200 transition">Events</Link>
        <Link to="/dashboard" className="hover:text-gray-200 transition">Dashboard</Link>
        <Link to="/auth" className="hover:text-gray-200 transition">Login</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
