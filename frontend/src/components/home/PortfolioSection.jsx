import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import projects from "../../data/projects.json";

export default function PortfolioSection() {
  // Display only first 6 projects for homepage
  const displayProjects = projects.slice(0, 6);

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Some of Our{" "}
          <span className="text-blue-600 dark:text-blue-400">Recent Works</span>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {displayProjects.map((p) => (
            <div
              key={p.id}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 transition-transform hover:-translate-y-2"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5 text-left">
                <h4 className="text-lg font-semibold mb-1 text-blue-600 dark:text-blue-400">
                  {p.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>

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
