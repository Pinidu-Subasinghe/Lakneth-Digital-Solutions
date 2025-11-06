import projects from "../data/projects.json";

export default function Portfolio() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-950 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Our Complete Portfolio
        </h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((p) => (
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
      </div>
    </section>
  );
}
