import { Link } from "react-router-dom";
import { Monitor, MessageCircle, BarChart2, Share2 } from "lucide-react";
import servicesData from "../../data/services.json";

const icons = { Monitor, MessageCircle, BarChart2, Share2 };

export default function FeaturesSection() {
  const services = servicesData.slice(0, 4); // show first 4

  return (
    <section className="py-20 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Our Core Services
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          We offer a wide range of digital services to help your business grow, connect, and succeed online.
        </p>

        {/* Service Cards */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 mb-12">
          {services.map((s) => {
            const Icon = icons[s.icon];
            return (
              <div
                key={s.id}
                className="group relative p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-lg hover:-translate-y-2 transition-transform duration-300"
              >
                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent to-blue-600/5 dark:to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="text-blue-600 dark:text-blue-400 mb-4">
                    <Icon size={36} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {s.shortDesc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Read More Button */}
        <div className="text-center">
          <Link
            to="/services"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow transition"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
