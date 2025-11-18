import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Success Stories", path: "/success-stories" },
    { name: "Contact", path: "/contact" },
  ];

  const Menu = ({ className, vertical }) => (
    <div
      className={`${className} ${
        vertical ? "flex flex-col gap-2" : "flex gap-6"
      }`}
    >
      {menuItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            `relative py-1 text-orange-500 hover:text-orange-400 transition-colors duration-200 ${
              isActive
                ? "font-bold after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-orange-500"
                : ""
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );

  return (
    <div className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div
        className={`mx-auto rounded-xl flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md w-11/12 px-6 py-2 mt-2"
            : "bg-transparent w-11/12 px-6 py-4"
        }`}
      >
        {/* Navbar Start */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu */}
          <div className="dropdown lg:hidden relative">
            <label tabIndex={0} className="btn btn-ghost p-2 !hover:bg-transparent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul className="menu menu-sm dropdown-content bg-white rounded-box z-50 mt-3 w-52 p-2 shadow absolute left-0">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/success-stories">Success Stories</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>

          {/* Logo - Fixed Size */}
          <NavLink to="/" className="flex items-center">
            <img
              src="https://i.ibb.co.com/MDd996gn/logo-1-removebg-preview.png"
              alt="Logo"
              className={`transition-all duration-300 ${
                scrolled ? "h-15 w-auto" : "h-15 w-auto"
              }`}
            />
          </NavLink>
        </div>

        {/* Navbar Center: Desktop Menu */}
        <div className="hidden lg:flex flex-1 justify-center">
          <Menu />
        </div>

        {/* Navbar End: Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <NavLink
            to="/register"
            className={`btn rounded-xl px-5 transition-all duration-300 ${
              scrolled ? "bg-orange-500 text-white" : "bg-white text-orange-500"
            }`}
          >
            Sign Up
          </NavLink>
          <NavLink
            to="/login"
            className="btn btn-neutral text-white rounded-xl px-5"
          >
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;