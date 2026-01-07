import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import laknethLogo from "../assets/Lakneth Logo.png"; // ✅ logo path inside src/assets/
import LK from "../assets/lk.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 pb-4 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        {/* ===== COMPANY INFO + LOGO ===== */}
        <div className="flex flex-col items-start text-left">
          <div className="flex items-center gap-3 mb-3">
            <img
              src={laknethLogo}
              alt="Lakneth Digital Solutions Logo"
              className="w-12 h-12 object-contain rounded-lg shadow-sm"
            />
            <h2 className="text-2xl font-bold text-blue-400">
              Lakneth Digital Solutions
            </h2>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            Empowering Sri Lankan businesses with innovative digital strategies,
            modern web design, and creative marketing solutions.
          </p>
        </div>

        {/* ===== QUICK LINKS ===== */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-400 transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-blue-400 transition">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* ===== CONTACT INFO ===== */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-blue-400 mt-1" />
              <span>
                112/H/13, Raja Samaranayaka Mawatha, Alubomulla, Panadura
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-blue-400" />
              <a
                href="tel:+94756343816"
                className="hover:text-blue-400 transition"
              >
                +94 75 634 3816
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-blue-400" />
              <a
                href="mailto:info@laknethdigital.lk"
                className="hover:text-blue-400 transition"
              >
                info@laknethdigital.lk
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Clock size={16} className="text-blue-400" />
              <span>Mon – Sun: 9.00am – 10.00pm</span>
            </li>
          </ul>
        </div>

        {/* ===== SOCIALS ===== */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-3 text-white">Follow Us</h3>
          <div className="flex gap-5">
            <a
              href="https://www.facebook.com/LaknethDigitalSolutions"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-3 rounded-full bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white transition-transform transform hover:-translate-y-1 shadow-md"
            >
              <Facebook size={20} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-3 rounded-full bg-gray-800 text-gray-300 hover:bg-pink-600 hover:text-white transition-transform transform hover:-translate-y-1 shadow-md"
            >
              <Instagram size={20} />
            </a>

            <a
              href="https://www.linkedin.com/company/lakneth-digital-solutions/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full bg-gray-800 text-gray-300 hover:bg-blue-700 hover:text-white transition-transform transform hover:-translate-y-1 shadow-md"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* ===== COPYRIGHT BAR ===== */}
      <div className="text-center py-4 text-sm">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-blue-400 font-medium">
            Lakneth Digital Solutions
          </span>
          . All Rights Reserved.
        </p>
        <p className="text-gray-400 flex items-center justify-center gap-1">
          Made in
          <img
            src={LK}
            alt="Sri Lanka Flag"
            className="w-5 h-auto inline-block"
          />
          with ♥️
        </p>
      </div>
    </footer>
  );
}
