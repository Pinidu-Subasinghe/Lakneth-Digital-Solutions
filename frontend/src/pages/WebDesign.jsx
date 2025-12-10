import { useState } from "react";
import data from "../data/webDesign.json";
import { X, ArrowRight, CheckCircle } from "lucide-react";

export default function WebDesign() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  // WhatsApp Message Builder
  const sendWhatsApp = (pkg) => {
    const phone = "94756343816";
    const discountedPrice =
      pkg.discount > 0
        ? pkg.price - (pkg.price * pkg.discount) / 100
        : pkg.price;

    const msg =
      `Hello! I’m interested in the Web Development *${pkg.category} Package*.\n\n` +
      `Package: ${pkg.title}\n` +
      `Price: Rs. ${pkg.price.toLocaleString()}\n` +
      (pkg.discount > 0
        ? `Discount: ${
            pkg.discount
          }%\nDiscounted Price: Rs. ${discountedPrice.toLocaleString()}\n`
        : "") +
      `\nPlease send me more details.`;

    window.open(
      `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
        msg
      )}`,
      "_blank"
    );
  };

  return (
    <section className="min-h-screen px-6 py-12 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-5xl mx-auto">
        {/* PAGE TITLE */}
        <h1 className="text-4xl font-bold mb-4">Web Design & Development</h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-10">
          We design modern, responsive, and SEO-friendly websites tailored to
          your brand. Whether it's a business website, portfolio, or e-commerce
          platform, we deliver high-quality solutions with fast performance and
          polished UI/UX.
        </p>

        {/* ⭐ PACKAGES SECTION */}
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
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700 flex flex-col"
              >
                {/* CATEGORY */}
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                  {pkg.category} Package
                </span>

                {/* TITLE - FIXED HEIGHT */}
                <h3 className="text-xl font-semibold mt-2 h-14">{pkg.title}</h3>

                {/* DESCRIPTION - FIXED HEIGHT */}
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 h-16">
                  {pkg.shortDesc}
                </p>

                {/* PRICE (fixed height for perfect alignment) */}
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
                  className="mt-auto bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded-lg font-medium transition"
                  onClick={() => setSelectedPackage(pkg)}
                >
                  Read More
                </button>
              </div>
            );
          })}
        </div>

        {/* ⭐ COMPLETED PROJECTS SECTION */}
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
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p class0Name="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {project.shortDesc}
                </p>

                {project.url && project.url.trim() !== "" && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-blue-600 hover:underline font-medium"
                  >
                    Visit Project <ArrowRight size={16} className="ml-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ⭐ POPUP MODAL */}
      {selectedPackage && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div
            className="
        bg-white dark:bg-gray-800 rounded-xl shadow-xl 
        p-6 w-[90%] max-w-lg mx-auto
        max-h-[90vh] overflow-y-auto
        animate-scale-in relative
      "
          >
            {/* Close Button */}
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

            {/* Features */}
            <h3 className="font-semibold text-lg mb-2">Features</h3>
            <ul className="space-y-2 mb-4">
              {selectedPackage.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                >
                  <CheckCircle className="text-green-500" size={18} />
                  {feature}
                </li>
              ))}
            </ul>

            {/* WhatsApp Button */}
            <button
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium"
              onClick={() => sendWhatsApp(selectedPackage)}
            >
              More Details on WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* Animation */}
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
