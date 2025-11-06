import { CheckCircle2 } from "lucide-react";

export default function PackageCard({ pkg }) {
  return (
    <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
      {/* Optional Badge */}
      {pkg.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-md">
          Most Popular
        </div>
      )}

      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
        {pkg.name}
      </h3>

      <p className="text-3xl font-extrabold text-blue-600 mb-2">
        {pkg.price}
        <span className="text-base text-gray-500 dark:text-gray-400 font-normal ml-1">
          / {pkg.duration || "month"}
        </span>
      </p>

      <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-2 mb-8 mt-4 flex-1">
        {pkg.features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-blue-600 dark:text-blue-400" />
            {f}
          </li>
        ))}
      </ul>

      <a
        href={`https://wa.me/94756343816?text=Hello%20Lakneth%2C%20I'm%20interested%20in%20the%20${pkg.name}%20package.`}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 rounded-full hover:from-blue-700 hover:to-indigo-700 transition"
      >
        Contact via WhatsApp
      </a>
    </div>
  );
}
