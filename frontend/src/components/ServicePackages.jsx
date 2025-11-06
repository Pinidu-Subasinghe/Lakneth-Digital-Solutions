import PackageCard from "./PackageCard";
import { motion } from "framer-motion";

export default function ServicePackages({ service }) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        {service.serviceTitle}
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {service.packages.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <PackageCard pkg={pkg} serviceTitle={service.serviceTitle} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
