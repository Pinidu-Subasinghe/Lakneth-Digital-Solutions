import { Monitor, Palette, BarChart2, Share2 } from "lucide-react";

export default function FeaturesSection() {
  const services = [
    {
      icon: <Monitor size={36} />,
      title: "Web Design",
      desc: "Build responsive and stunning websites to represent your brand.",
    },
    {
      icon: <Palette size={36} />,
      title: "Branding",
      desc: "Create a consistent brand identity with creative visuals.",
    },
    {
      icon: <BarChart2 size={36} />,
      title: "SEO Optimization",
      desc: "Rank higher with proven search strategies and analytics.",
    },
    {
      icon: <Share2 size={36} />,
      title: "Social Media Marketing",
      desc: "Engage audiences with result-driven social campaigns.",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Fixed dark-mode text color */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Our Core Services
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ outline: "none" }} // removes dotted outline glitch
            >
              {/* subtle glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent to-blue-600/5 dark:to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {s.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
