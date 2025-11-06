import { useEffect, useState } from "react";
import servicesData from "../data/services.json";
import { Monitor, MessageCircle, BarChart2, Share2 } from "lucide-react";
import { motion } from "framer-motion";

const icons = { Monitor, MessageCircle, BarChart2, Share2 };

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(servicesData);
  }, []);

  return (
    <section className="min-h-[80vh] py-20 bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center text-4xl font-bold mb-14 text-gray-900 dark:text-white"
        >
          Our Services
        </motion.h1>

        <div className="grid gap-10 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <div
                key={service.id}
                className="p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-800 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-950 p-3 rounded-xl">
                    <Icon size={36} />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                  {service.longDesc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
