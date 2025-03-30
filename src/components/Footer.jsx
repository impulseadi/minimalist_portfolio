import React, { useState, useEffect } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight - 10) {
        setIsVisible(true); // Show footer when at bottom
      } else {
        setIsVisible(false); // Hide footer when scrolling up
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      className={`w-full bg-black text-white py-4 px-6 flex justify-between items-center fixed bottom-0 left-0 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <span className="text-lg font-semibold">Aditya Gupta</span>
      <span className="text-lg">{new Date().toLocaleTimeString()}</span>
    </footer>
  );
};

export default Footer;
