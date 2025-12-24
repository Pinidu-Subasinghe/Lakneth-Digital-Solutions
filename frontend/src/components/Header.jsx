import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SL_Flag from "../assets/lk.png"; // adjust path if needed

/* 🎉 Reusable FestiveEffect wrapper */
function FestiveEffect({
  startMonth,
  startDay,
  endMonth,
  endDay,
  children,
  forceVisible,
  onVisibleChange, // callback to notify parent
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (forceVisible) {
      setVisible(true);
      if (onVisibleChange) onVisibleChange(true);
      return;
    }

    const now = new Date();
    const year = now.getFullYear();
    const startDate = new Date(year, startMonth - 1, startDay);
    const endDate = new Date(year, endMonth - 1, endDay, 23, 59, 59);

    if (now >= startDate && now <= endDate) {
      setVisible(true);
      if (onVisibleChange) onVisibleChange(true);
    } else {
      if (onVisibleChange) onVisibleChange(false);
    }
  }, [startMonth, startDay, endMonth, endDay, forceVisible, onVisibleChange]);

  if (!visible) return null;
  return <>{children}</>;
}

// Helper function to get ordinal suffix
function getOrdinalSuffix(n) {
  const j = n % 10,
    k = n % 100;
  if (j === 1 && k !== 11) return "st";
  if (j === 2 && k !== 12) return "nd";
  if (j === 3 && k !== 13) return "rd";
  return "th";
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [eventActive, setEventActive] = useState(false); // tracks any active event

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/contact", label: "Contact" },
  ];

  // Independence Day year calculation
  const currentYear = new Date().getFullYear();
  const indDay = currentYear - 1948; // 1948 is the first independence year
  const ordinal = getOrdinalSuffix(indDay);

  return (
    <header className="bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          {/* Independence Day Logo Feb 1-7 */}
          <FestiveEffect
            startMonth={2}
            startDay={1}
            endMonth={2}
            endDay={7}
            //forceVisible={true} // remove for real deployment
            onVisibleChange={(v) => v && setEventActive(v)}
          >
            <span className="text-2xl font-extrabold text-yellow-400 tracking-tight flex items-center gap-2">
              {indDay}<sup className="align-super">{ordinal}</sup> Independence Day
              <img src={SL_Flag} alt="SL Flag" className="w-8 h-auto" />
            </span>
          </FestiveEffect>

          {/* Normal Logo, only if no event is active */}
          {!eventActive && (
            <span className="text-2xl font-extrabold text-blue-400 tracking-tight">
              Lakneth
              <span className="text-gray-100">Digital</span>
            </span>
          )}
        </Link>

        {/* Desktop Nav */}
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

        {/* Mobile Menu */}
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
