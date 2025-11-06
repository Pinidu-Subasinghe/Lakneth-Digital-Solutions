export default function PackageCard({ pkg }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
      <h3 className="text-xl font-bold text-blue-600 mb-2">{pkg.name}</h3>
      <p className="text-gray-700 font-semibold mb-4">{pkg.price}</p>
      <ul className="text-sm text-gray-600 mb-6 list-disc list-inside">
        {pkg.features.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
      <a
        href={`https://wa.me/94766312201?text=Hello%20Lakneth%2C%20I'm%20interested%20in%20the%20${pkg.name}%20package.`}
        className="block text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Contact via WhatsApp
      </a>
    </div>
  );
}
