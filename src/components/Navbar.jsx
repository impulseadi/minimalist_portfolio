import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100); // Hide on scroll down, show on scroll up
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 bg-gray-600/50 backdrop-blur-lg px-8 py-3 mt-5 rounded-full flex gap-8 shadow-xl border border-gray-700/50 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
      }`}
    >
      {["Home", "Skills", "Projects", "Connect"].map((item, index) => {
        const linkPath = item === "Home" ? "/" : `/${item.toLowerCase()}`;

        return (
          <Link
            key={index}
            to={linkPath}
            className={`text-white text-lg font-light transition ${
              location.pathname === linkPath ? "text-gray-400 underline" : "hover:text-gray-300"
            }`}
            onClick={(e) => {
              if (item === "Home" && location.pathname === "/") e.preventDefault();
            }}
          >
            {item}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
