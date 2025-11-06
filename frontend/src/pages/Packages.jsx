import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ServicePackages from "../components/ServicePackages";
import servicesData from "../data/services.json";
import allPackages from "../data/packages.json";
import { Filter, ChevronDown } from "lucide-react";

export default function Packages() {
  const [packages, setPackages] = useState([]);
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setPackages(allPackages);
    setServices(servicesData.map((s) => s.title));
  }, []);

  const filteredPackages =
    selectedService === "All"
      ? packages
      : packages.filter((p) => p.serviceTitle === selectedService);

  const handleSelect = (value) => {
    setSelectedService(value);
    setIsOpen(false);
  };

  return (
    <section className="min-h-[90vh] py-20 bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* ---------- HEADER ROW ---------- */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white"
          >
            Our Packages
          </motion.h1>

          {/* ---------- MODERN DROPDOWN ---------- */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 px-5 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-full shadow-sm text-gray-800 dark:text-gray-200 font-medium hover:border-blue-500 transition"
            >
              <Filter size={18} className="text-blue-600 dark:text-blue-400" />
              {selectedService}
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="text-gray-600 dark:text-gray-300" size={18} />
              </motion.span>
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden z-50"
                >
                  <li
                    onClick={() => handleSelect("All")}
                    className={`px-4 py-3 text-sm cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/40 transition ${
                      selectedService === "All"
                        ? "text-blue-600 dark:text-blue-400 font-semibold"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    All Services
                  </li>
                  {services.map((title, i) => (
                    <li
                      key={i}
                      onClick={() => handleSelect(title)}
                      className={`px-4 py-3 text-sm cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/40 transition ${
                        selectedService === title
                          ? "text-blue-600 dark:text-blue-400 font-semibold"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {title}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ---------- PACKAGE GRID ---------- */}
        {filteredPackages.length > 0 ? (
          filteredPackages.map((service, index) => (
            <motion.div
              key={service.serviceId}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <ServicePackages service={service} />
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-20">
            No packages found for this service.
          </p>
        )}
      </div>
    </section>
  );
}
