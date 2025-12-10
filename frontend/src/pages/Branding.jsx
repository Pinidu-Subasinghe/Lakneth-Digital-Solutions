import { useState } from "react";
import data from "../data/branding.json";
import { X, ArrowRight, CheckCircle } from "lucide-react";

export default function Branding() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const categoryColors = {
    Starter: "bg-yellow-500/20 text-yellow-700 border-yellow-400/40",
    Professional: "bg-pink-500/20 text-pink-700 border-pink-400/40",
    Enterprise: "bg-indigo-500/20 text-indigo-700 border-indigo-400/40",
  };

  const sendWhatsApp = (pkg) => {
    const phone = "94756343816";

    const discountedPrice =
      pkg.discount > 0
        ? pkg.price - (pkg.price * pkg.discount) / 100
        : pkg.price;

    const msg =
      `🎨 Hello! I'm interested in the *${pkg.category} Branding Package*.\n\n` +
      `📦 *Package:* ${pkg.title}\n` +
      `💰 *Price:* Rs. ${pkg.price.toLocaleString()}\n` +
      (pkg.discount > 0
        ? `🎉 *Discount:* ${pkg.discount}%\n` +
          `💵 *Discounted Price:* Rs. ${discountedPrice.toLocaleString()}\n`
        : ``) +
      `\n📩 Please send me more details.`;

    const encoded = encodeURIComponent(msg);

    // Auto-detect device
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    const mobileLink = `whatsapp://send?phone=${phone}&text=${encoded}`;
    const webLink = `https://api.whatsapp.com/send?phone=${phone}&text=${encoded}`;

    window.open(isMobile ? mobileLink : webLink, "_blank");
  };

  return (
    <section className="min-h-screen px-6 py-12 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Branding & Logo Design</h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-10">
          Build a strong brand identity with modern logo design, brand styling,
          and professional marketing materials tailored to your business.
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
                className="relative bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl
  transition-all border border-gray-200 dark:border-gray-700 flex flex-col"
              >
                {/* ⭐ DISCOUNT BADGE */}
                {pkg.discount > 0 && (
                  <div className="absolute top-3 right-3 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded-lg shadow z-20">
                    -{pkg.discount}%
                  </div>
                )}

                {/* CATEGORY LABEL */}
                <div
                  className={`w-fit px-3 py-1 rounded-full text-xs font-semibold border ${
                    categoryColors[pkg.category]
                  }`}
                >
                  {pkg.category} Package
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold mt-3 h-10">{pkg.title}</h3>

                {/* SHORT DESCRIPTION */}
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 h-12">
                  {pkg.shortDesc}
                </p>

                {/* PRICE AREA */}
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
                    <p className="text-gray-900 dark:text-gray-100 font-bold text-xl leading-none">
                      Rs. {pkg.price.toLocaleString()}
                    </p>
                  )}
                </div>

                {/* BUTTON */}
                <button
                  className="mt-auto bg-yellow-600 hover:bg-yellow-700 text-white w-full py-2 rounded-lg font-medium transition"
                  onClick={() => setSelectedPackage(pkg)}
                >
                  Read More
                </button>
              </div>
            );
          })}
        </div>

        {/* COMPLETED PROJECTS */}
        <h2 className="text-3xl font-semibold mt-16 mb-6">
          Completed Projects
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {data.projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-xl transition"
            >
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
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {project.shortDesc}
                </p>

                {project.url && project.url.trim() !== "" && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-yellow-600 hover:underline font-medium"
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
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 w-[90%] max-w-lg mx-auto max-h-[90vh] overflow-y-auto animate-scale-in relative">
            <button
              className="absolute top-3 right-3 p-2 bg-red-600 hover:bg-red-700 text-white rounded-full"
              onClick={() => setSelectedPackage(null)}
            >
              <X size={16} />
            </button>

            <h2 className="text-2xl font-semibold mb-2">
              {selectedPackage.title}
            </h2>
            <p className="text-gray-500 dark:text-gray-300 mb-4">
              {selectedPackage.fullDesc}
            </p>

            <h3 className="font-semibold text-lg mb-2">Features</h3>
            <ul className="space-y-2 mb-4">
              {selectedPackage.features.map((f, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                >
                  <CheckCircle className="text-green-500" size={18} />
                  {f}
                </li>
              ))}
            </ul>

            <button
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded-lg"
              onClick={() => sendWhatsApp(selectedPackage)}
            >
              More Details on WhatsApp
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
