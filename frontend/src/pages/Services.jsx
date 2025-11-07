import { useEffect, useState } from "react";
import servicesData from "../data/services.json";
import { Monitor, MessageCircle, BarChart2, Share2, PenTool } from "lucide-react";
import codingIcon from "../assets/coding.png";
import smsIcon from "../assets/sms.png";
import seoIcon from "../assets/seo.png";
import likeIcon from "../assets/like.png";

const icons = { Monitor, MessageCircle, BarChart2, Share2, PenTool };

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(servicesData);
  }, []);

  return (
    <section className="relative min-h-[80vh] py-20 bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 overflow-hidden">
      {/* ===== Floating Decorative Icons ===== */}
      <img
        src={codingIcon}
        alt="Decorative coding"
        className="hidden lg:block absolute left-8 top-20 w-36 xl:w-44 opacity-10 animate-float-slow"
      />
      <img
        src={smsIcon}
        alt="Decorative sms"
        className="hidden lg:block absolute right-14 bottom-16 w-40 xl:w-48 opacity-10 animate-float-slow"
      />
      <img
        src={seoIcon}
        alt="Decorative seo"
        className="hidden lg:block absolute left-1/2 bottom-0 w-32 xl:w-40 opacity-10 animate-float-slow"
      />
      <img
        src={likeIcon}
        alt="Decorative like"
        className="hidden lg:block absolute right-1/4 top-8 w-36 xl:w-44 opacity-10 animate-float-slow"
      />

      {/* ===== Content ===== */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h1 className="text-center text-4xl font-bold mb-14 text-gray-900 dark:text-white">
          Our Services
        </h1>

        <div className="grid gap-10 md:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <div
                key={service.id}
                className="relative p-8 bg-white/80 dark:bg-gray-900/80 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-md h-full backdrop-blur-md group transition-all duration-300 transform lg:hover:-translate-y-2 lg:hover:shadow-2xl"
              >
                {/* ===== Hover Gradient Glow ===== */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 flex flex-col">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-950 p-3 rounded-xl">
                      <Icon size={36} />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                    {service.longDesc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
