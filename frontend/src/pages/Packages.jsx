import { useEffect, useState } from "react";
import PackageCard from "../components/PackageCard";
import data from "../data/packages.json";

export default function Packages() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    setPackages(data);
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">Our Packages</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {packages.map(pkg => <PackageCard key={pkg.id} pkg={pkg} />)}
      </div>
    </div>
  );
}
