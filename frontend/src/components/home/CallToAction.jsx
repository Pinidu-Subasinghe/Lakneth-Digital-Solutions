import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import marketingImg from "../../assets/marketing.png";
import marketing3Img from "../../assets/marketing3.png";

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden py-24 px-6 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white text-center">
      {/* Decorative Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)]"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl"></div>

      {/* Floating Side Images */}
      <motion.img
        src={marketingImg}
        alt="Digital Marketing"
        className="hidden lg:block absolute left-10 bottom-0 w-64 xl:w-72 object-contain opacity-90"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      <motion.img
        src={marketing3Img}
        alt="Marketing Strategy"
        className="hidden lg:block absolute right-10 top-10 w-52 xl:w-60 object-contain opacity-90"
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-3xl mx-auto flex flex-col items-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Let’s Build Your{" "}
          <span className="text-yellow-300">Digital Success Story</span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
          Whether you need web design, social media strategy, or SEO — Lakneth
          Digital Solutions will help you grow faster, smarter, and stronger
          online.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-white text-blue-700 font-semibold px-10 py-3 rounded-full shadow hover:bg-blue-50 transition-transform transform hover:scale-105"
          >
            Get in Touch
          </Link>
          <Link
            to="/services"
            className="border border-white text-white px-10 py-3 rounded-full hover:bg-white hover:text-blue-700 transition-transform transform hover:scale-105"
          >
            Explore Services
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
