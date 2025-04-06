
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white py-4 shadow-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-wide section-padding flex items-center justify-between">
        <a href="#" className="text-xl md:text-2xl font-display font-bold">
          Vyoma<span className="text-gray-500">X</span>
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-sm uppercase tracking-wider hover-underline"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} className="text-black" />
          ) : (
            <Menu size={24} className="text-black" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-white p-6 flex flex-col space-y-8 animate-fade-in">
          {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-2xl font-medium py-2 border-b border-gray-100"
              onClick={toggleMenu}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
