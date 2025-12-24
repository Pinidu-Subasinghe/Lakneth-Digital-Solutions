import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import heroImg from "../../assets/marketing2.png";

export default function HeroSection() {
  const [showTop, setShowTop] = useState(false);
  const [heroHeight, setHeroHeight] = useState("100vh");

  useEffect(() => {
    const updateHeight = () => {
      const header = document.querySelector("header");
      const headerHeight = header?.offsetHeight || 0;

      // 💡 FIX for iPhone viewport bugs
      const viewportHeight =
        window.visualViewport?.height || window.innerHeight;

      setHeroHeight(`${viewportHeight - headerHeight}px`);
    };

    updateHeight();

    // Resize listener
    window.addEventListener("resize", updateHeight);

    // Scroll listener
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
      style={{ height: heroHeight }}
      className="relative flex items-center justify-center 
  bg-gradient-to-br 
  from-slate-900 via-indigo-900 to-blue-900 
  text-white overflow-hidden"
    >
      {/* Glow Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(255,255,255,0.08),transparent_40%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.04),transparent_30%)] mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            Transform Your{" "}
            <span className="text-yellow-300">Digital Presence</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-blue-100/90 mb-6 max-w-2xl mx-auto md:mx-0">
            Modern web design, targeted marketing, and measurable growth —
            crafted to help your business scale.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:brightness-110 transition"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center border border-white/30 text-white px-6 py-3 rounded-full hover:bg-white/5 transition"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="w-full md:w-1/2 flex justify-center items-center relative"
        >
          <div className="absolute w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] bg-white/5 blur-3xl rounded-full -z-10"></div>

          <motion.img
            src={heroImg}
            alt="Digital Growth"
            className="
              w-full 
              max-w-[280px] 
              sm:max-w-[340px] 
              md:max-w-[520px] 
              drop-shadow-2xl
            "
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      {/* Scroll to Top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition z-50"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </section>
  );
}
