import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import projects from "../../data/projects.json";

export default function PortfolioSection() {
  // Display only first 6 projects for homepage
  const displayProjects = projects.slice(0, 6);

  return (
    <section className="py-20 bg-gray-900 border-t border-gray-800 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          Some of Our{" "}
          <span className="text-blue-400">Recent Works</span>
        </h2>

        {/* Portfolio Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {displayProjects.map((p) => (
            <div
              key={p.id}
              className="group relative rounded-xl overflow-hidden border border-gray-600 bg-gray-800/80 shadow-md transition-all duration-300 transform backdrop-blur-md lg:hover:-translate-y-2 lg:hover:shadow-2xl"
            >
              {/* Subtle Hover Gradient Border (same as FeaturesSection) */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Project Image */}
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-56 object-cover relative z-10"
              />

              {/* Card Text */}
              <div className="p-5 text-left relative z-10">
                <h4 className="text-lg font-semibold mb-1 text-blue-400">
                  {p.title}
                </h4>
                <p className="text-gray-300 text-sm">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold mt-10 hover:underline transition-colors"
        >
          View Full Portfolio <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
