import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import heroImg from "../../assets/consult.svg";

export default function HeroSection() {
  const [showTop, setShowTop] = useState(false);
  const [heroHeight, setHeroHeight] = useState("100vh");

  useEffect(() => {
    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 0;

    const updateHeight = () => {
      const vh = window.innerHeight - headerHeight;
      setHeroHeight(`${vh}px`);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    const handleScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section
      className="relative flex items-center justify-center bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-700 dark:from-gray-900 dark:via-indigo-900 dark:to-blue-900 text-white overflow-hidden"
      style={{ height: heroHeight }}
    >
      {/* Glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto w-full px-6 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Transform Your{" "}
            <span className="text-yellow-300">Digital Presence</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            We craft modern, results-driven web and marketing solutions that
            help your business grow faster in the digital era.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link
              to="/contact"
              className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow hover:shadow-lg transition"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-blue-600 transition"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>

        {/* Right Side */}
        {/* Hero Image — hidden on mobile, visible on md+ */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hidden md:flex justify-center items-center relative w-full md:w-1/2"
        >
          {/* Soft glowing background circle */}
          <div className="absolute w-[520px] h-[520px] bg-blue-500/25 dark:bg-blue-400/20 blur-3xl rounded-full -z-10"></div>

          {/* Floating animated hero image */}
          <motion.img
            src={heroImg}
            alt="Digital Growth"
            className="w-[560px] lg:w-[600px] drop-shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </section>
  );
}
