import fbData from "../data/facebookSelling.json";

export default function FacebookSelling() {
  return (
    <div className="min-h-screen py-20 px-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-6">Facebook Page Selling</h1>

      <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
        Explore our available Facebook pages for sale.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {fbData.map((page) => (
          <div key={page.id} className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
            <h2 className="text-xl font-semibold">{page.name}</h2>
            <p className="text-gray-600 dark:text-gray-300">{page.niche}</p>
            <p className="mt-2 font-bold text-blue-600">{page.followers} Followers</p>
          </div>
        ))}
      </div>
    </div>
  );
}
