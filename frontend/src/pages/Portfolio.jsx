import projects from "../data/projects.json";

export default function Portfolio() {
  return (
    <section className="relative py-20 pt-10 bg-gray-50 dark:bg-gray-950 min-h-screen overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Section Title */}
        <h1 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Our Complete Portfolio
        </h1>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div
              key={p.id}
              className="relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/80 shadow-md transition-all duration-300 transform backdrop-blur-md group lg:hover:-translate-y-2 lg:hover:shadow-2xl"
            >
              {/* Hover Gradient Glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Project Image */}
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-56 object-cover relative z-10"
              />

              {/* Project Info */}
              <div className="p-5 text-left relative z-10">
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
      </div>
    </section>
  );
}
