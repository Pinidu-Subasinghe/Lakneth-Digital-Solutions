import { Link } from "react-router-dom";
import codingIcon from "../../assets/coding.png";
import smsIcon from "../../assets/sms.png";
import seoIcon from "../../assets/seo.png";
import likeIcon from "../../assets/like.png";
import servicesData from "../../data/services.json";

// keep order: coding, sms, seo, like
const icons = [codingIcon, smsIcon, seoIcon, likeIcon];

export default function FeaturesSection() {
  const services = servicesData.slice(0, 4);

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      {/* ===== Floating Decorative Icons (Larger & Soft) ===== */}
      <img
        src={codingIcon}
        alt="Decorative coding icon"
        className="hidden lg:block absolute left-10 top-16 w-36 xl:w-40 opacity-10 animate-float-slow"
      />
      <img
        src={smsIcon}
        alt="Decorative sms icon"
        className="hidden lg:block absolute right-14 bottom-16 w-40 xl:w-44 opacity-10 animate-float-slow"
      />
      <img
        src={seoIcon}
        alt="Decorative seo icon"
        className="hidden lg:block absolute left-1/2 bottom-0 w-32 xl:w-36 opacity-10 animate-float-slow"
      />
      <img
        src={likeIcon}
        alt="Decorative like icon"
        className="hidden lg:block absolute right-1/4 top-6 w-32 xl:w-36 opacity-10 animate-float-slow"
      />

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Our Core Services
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Empowering your business with modern digital solutions that inspire
          growth, innovation, and engagement.
        </p>

        {/* Service Cards */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {services.map((s, index) => (
            <div
              key={s.id}
              className="group relative p-8 rounded-2xl bg-white/80 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 shadow-lg backdrop-blur-md hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              {/* Hover Gradient Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Card Content */}
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-[2px] group-hover:scale-110 transition-transform duration-300">
                  <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                    <img
                      src={icons[index]}
                      alt={s.title}
                      className="w-9 h-9 object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {s.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {s.shortDesc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-14">
          <Link
            to="/services"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white font-semibold px-10 py-3 rounded-full shadow-lg transition-all duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
