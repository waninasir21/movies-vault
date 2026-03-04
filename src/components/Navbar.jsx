import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/film-movie-icon.svg";

const Navbar = () => {
  return (
    <div className="flex items-center p-4 h-20 bg-amber-100 shadow-sm">
      <img
        className="w-10 absolute left-8 hover:rotate-12 transition-transform"
        src={Logo}
        alt="Logo"
      />

      <div className="flex justify-center items-center gap-12 w-full">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-amber-500 text-3xl font-bold border-b-2 border-amber-500 transition-all"
              : "text-amber-300 text-2xl font-bold hover:text-amber-400 transition-all"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/Watchlist"
          className={({ isActive }) =>
            isActive
              ? "text-amber-500 text-3xl font-bold border-b-2 border-amber-500 transition-all"
              : "text-amber-300 text-2xl font-bold hover:text-amber-400 transition-all"
          }
        >
          Watchlist
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
