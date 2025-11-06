import { useEffect, useState } from "react";
import packagesData from "../data/packages.json";
import ServicePackages from "../components/ServicePackages";
import { motion } from "framer-motion";

export default function Packages() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(packagesData);
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-10 text-gray-900 dark:text-white"
        >
          Our Packages
        </motion.h1>

        {services.map((service) => (
          <ServicePackages key={service.serviceId} service={service} />
        ))}
      </div>
    </section>
  );
}
