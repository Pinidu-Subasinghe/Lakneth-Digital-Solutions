import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
        {/* Logo - Left */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-extrabold text-blue-400 tracking-tight">
            Lakneth
            <span className="text-gray-100">Digital</span>
          </span>
        </Link>

        {/* Desktop Nav - Right */}
        <nav className="hidden md:flex ml-auto space-x-8 font-medium text-gray-200">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:text-blue-400 transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu - Far Right */}
        <div className="flex items-center md:hidden ml-auto relative">
          <button
            className="p-2 rounded-md text-gray-200 hover:bg-gray-800 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="absolute right-0 top-12 w-48 bg-gray-900 border border-gray-700 rounded-md shadow-lg overflow-hidden"
              >
                <nav className="flex flex-col text-sm font-medium text-gray-200">
                  {navLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setMenuOpen(false)}
                      className="px-4 py-3 hover:bg-blue-900/40 transition"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
