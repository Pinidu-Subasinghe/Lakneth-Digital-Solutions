import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react"; // install: npm i lucide-react

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 tracking-tight">
            Lakneth<span className="text-gray-800 dark:text-gray-100">Digital</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-700 dark:text-gray-200">
          <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Home</Link>
          <Link to="/services" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Services</Link>
          <Link to="/portfolio" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Portfolio</Link>
          <Link to="/packages" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Packages</Link>
          <Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</Link>
        </nav>

        {/* Controls (Theme + Menu) */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {theme === "dark" ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-700" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md border-t border-gray-100 dark:border-gray-800 transition-colors">
          <nav className="flex flex-col items-center space-y-4 py-5 font-medium text-gray-700 dark:text-gray-200">
            <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <Link to="/services" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 dark:hover:text-blue-400">Services</Link>
            <Link to="/portfolio" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 dark:hover:text-blue-400">Portfolio</Link>
            <Link to="/packages" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 dark:hover:text-blue-400">Packages</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
