import { motion } from "framer-motion";
import { Monitor, Palette, BarChart2, Share2 } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Monitor size={40} />,
      title: "Web Design & Development",
      desc: "Custom, responsive, and SEO-optimized websites that bring your business online.",
    },
    {
      icon: <Palette size={40} />,
      title: "Branding & Design",
      desc: "Build a strong identity with creative visuals, logos, and brand guidelines.",
    },
    {
      icon: <BarChart2 size={40} />,
      title: "SEO & Analytics",
      desc: "Enhance visibility, attract organic traffic, and measure success effectively.",
    },
    {
      icon: <Share2 size={40} />,
      title: "Social Media Marketing",
      desc: "Boost engagement with powerful content strategies and ad campaigns.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-10 text-gray-900 dark:text-white"
        >
          Our Services
        </motion.h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="mb-4 text-blue-600 dark:text-blue-400 flex justify-center">
                {s.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
