import { useEffect, useState } from "react";
import PackageCard from "../components/PackageCard";
import data from "../data/packages.json";
import { motion } from "framer-motion";

export default function Packages() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    setPackages(data);
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
        >
          Our Packages
        </motion.h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Choose the package that fits your goals. Whether you’re starting small or scaling up, Lakneth has flexible plans tailored for every business.
        </p>

        {/* Packages Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <PackageCard pkg={pkg} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
