import { useState } from "react";
import data from "../data/smsEmail.json";
import { X, ArrowRight, CheckCircle } from "lucide-react";

export default function SmsEmail() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const categoryColors = {
    Starter: "bg-blue-500/20 text-blue-700 border-blue-400/40",
    Professional: "bg-purple-500/20 text-purple-700 border-purple-400/40",
    Enterprise: "bg-green-500/20 text-green-700 border-green-400/40",
  };

  // Universal WhatsApp Message Builder (Emoji + Discount + Mobile/Desktop Switch)
  const sendWhatsApp = (pkg) => {
    const phone = "94756343816";

    const discountedPrice =
      pkg.discount > 0
        ? pkg.price - (pkg.price * pkg.discount) / 100
        : pkg.price;

    const msg =
      `👋 Hello! I'm interested in your *${pkg.category} Package*.\n\n` +
      `📦 *Package Name:* ${pkg.title}\n` +
      `💰 *Price:* Rs. ${pkg.price.toLocaleString()}\n` +
      (pkg.discount > 0
        ? `🎉 *Discount:* ${pkg.discount}%\n` +
          `💵 *Discounted Price:* Rs. ${discountedPrice.toLocaleString()}\n`
        : ``) +
      `\n📩 Please send me more details.`;

    const encoded = encodeURIComponent(msg);

    // Detect Mobile Device
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    // Mobile opens WhatsApp App — Desktop opens WhatsApp Web
    const mobileLink = `whatsapp://send?phone=${phone}&text=${encoded}`;
    const webLink = `https://api.whatsapp.com/send?phone=${phone}&text=${encoded}`;

    window.open(isMobile ? mobileLink : webLink, "_blank");
  };

  return (
    <section className="min-h-screen px-6 py-12 bg-gray-950 text-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <h1 className="text-4xl font-bold mb-4">SMS & Email Marketing</h1>
        <p className="text-gray-300 text-lg mb-10">
          Reach your audience instantly with powerful SMS and email campaigns
          designed to boost conversions and build customer relationships.
        </p>

        {/* PACKAGES */}
        <h2 className="text-3xl font-semibold mt-10 mb-6">Packages</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {data.packages.map((pkg) => {
            const discountedPrice =
              pkg.discount > 0
                ? pkg.price - (pkg.price * pkg.discount) / 100
                : pkg.price;

            return (
              <div
                key={pkg.id}
                className="relative p-8 bg-white/80 dark:bg-gray-900/80 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-md h-full backdrop-blur-md group transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden flex flex-col"
              >
                {/* ✨ Glow overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                {/* DISCOUNT BADGE */}
                {pkg.discount > 0 && (
                  <div className="absolute top-3 right-3 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded-lg shadow z-20">
                    -{pkg.discount}%
                  </div>
                )}

                {/* LABEL */}
                <div
                  className={`w-fit px-3 py-1 rounded-full text-xs font-semibold border ${
                    categoryColors[pkg.category]
                  }`}
                >
                  {pkg.category} Package
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold mt-3 h-14">{pkg.title}</h3>

                {/* DESCRIPTION */}
                <p className="text-sm text-gray-400 mt-2 h-12">
                  {pkg.shortDesc}
                </p>

                {/* PRICE */}
                <div className="mt-0 mb-3 h-14 flex flex-col justify-center">
                  {pkg.discount > 0 ? (
                    <>
                      <p className="line-through text-gray-500 text-sm leading-none">
                        Rs. {pkg.price.toLocaleString()}
                      </p>

                      <p className="text-green-600 font-bold text-xl leading-none">
                        Rs. {discountedPrice.toLocaleString()}
                      </p>
                    </>
                  ) : (
                    <p className="text-gray-100 font-bold text-xl leading-none">
                      Rs. {pkg.price.toLocaleString()}
                    </p>
                  )}
                </div>

                {/* BUTTON */}
                <button
                  className="mt-auto bg-purple-600 hover:bg-purple-700 text-white w-full py-2 rounded-lg font-medium transition"
                  onClick={() => setSelectedPackage(pkg)}
                >
                  Read More
                </button>
              </div>
            );
          })}
        </div>

        {/* PROJECTS */}
        <h2 className="text-3xl font-semibold mt-16 mb-6">
          Completed Projects
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {data.projects.map((project) => (
            <div
              key={project.id}
              className="relative bg-white/80 dark:bg-gray-900/80 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-md h-full backdrop-blur-md group transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden flex flex-col"
            >
              {/* ✨ Glow overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/600x400?text=Image+Not+Available";
                }}
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p className="text-sm text-gray-400 mt-2">
                  {project.shortDesc}
                </p>

                {project.url && project.url.trim() !== "" && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-purple-600 hover:underline font-medium"
                  >
                    Visit Project <ArrowRight size={16} className="ml-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedPackage && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-xl shadow-xl p-6 w-[90%] max-w-lg mx-auto max-h-[90vh] overflow-y-auto animate-scale-in relative">
            <button
              className="absolute top-3 right-3 p-2 bg-red-600 hover:bg-red-700 text-white rounded-full"
              onClick={() => setSelectedPackage(null)}
            >
              <X size={16} />
            </button>

            <h2 className="text-2xl font-semibold mb-2">
              {selectedPackage.title}
            </h2>

            <p className="text-gray-300 mb-4">{selectedPackage.fullDesc}</p>

            <h3 className="font-semibold text-lg mb-2">Features</h3>
            <ul className="space-y-2 mb-4">
              {selectedPackage.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="text-green-500" size={18} />
                  {f}
                </li>
              ))}
            </ul>

            <button
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium"
              onClick={() => sendWhatsApp(selectedPackage)}
            >
              More Details
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes scaleIn {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in {
          animation: scaleIn 0.2s ease-out;
        }
      `}</style>
    </section>
  );
}
