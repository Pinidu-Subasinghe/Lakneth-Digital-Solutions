import { CheckCircle2 } from "lucide-react";
import bronzeIcon from "../assets/bronze.png";
import silverIcon from "../assets/silver.png";
import goldIcon from "../assets/gold.png";

export default function PackageCard({ pkg, serviceTitle }) {
  // WhatsApp message link
  const message = encodeURIComponent(
    `Hello,\nI am interested about *${serviceTitle}* (*${pkg.name}*) package. Can I have more details?`
  );

  // Choose icon based on package name
  const getBadge = () => {
    const lower = pkg.name.toLowerCase();
    if (lower.includes("gold")) return goldIcon;
    if (lower.includes("silver")) return silverIcon;
    if (lower.includes("bronze")) return bronzeIcon;
    return null;
  };

  const badge = getBadge();

  return (
    <div className="relative flex flex-col bg-white/90 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full backdrop-blur-md group">
      {/* Glow Hover Accent */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Package Header */}
      <div className="flex flex-col items-center text-center mb-6 relative z-10">
        {/* Badge Background with Overlaid Text */}
        {badge && (
          <div className="relative w-28 h-28 mb-6">
            <img
              src={badge}
              alt={`${pkg.name} badge`}
              className="absolute inset-0 w-full h-full object-contain opacity-90"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
                {pkg.name}
              </h3>
            </div>
          </div>
        )}

        {/* Price */}
        <p className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 mt-2">
          {pkg.price}
          <span className="text-base text-gray-500 dark:text-gray-400 font-normal ml-1">
            / {pkg.duration || "month"}
          </span>
        </p>
      </div>

      {/* Features List */}
      <ul className="flex-1 text-gray-700 dark:text-gray-300 text-sm space-y-2 mb-8 relative z-10">
        {pkg.features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <CheckCircle2
              size={16}
              className="text-blue-600 dark:text-blue-400 flex-shrink-0"
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <a
        href={`https://wa.me/94756343816?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-full shadow-lg transition-all duration-300 relative z-10"
      >
        Contact via WhatsApp
      </a>
    </div>
  );
}
