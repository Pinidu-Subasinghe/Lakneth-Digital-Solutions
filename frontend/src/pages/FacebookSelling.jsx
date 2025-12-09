import { useState } from "react";
import fbData from "../data/facebookSelling.json";
import { Filter, X } from "lucide-react";

export default function FacebookSelling() {
  const [filtersOpen, setFiltersOpen] = useState(false);

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minLikes, setMinLikes] = useState("");
  const [maxLikes, setMaxLikes] = useState("");
  const [minFollowers, setMinFollowers] = useState("");
  const [maxFollowers, setMaxFollowers] = useState("");
  const [category, setCategory] = useState("");

  const categories = [
    "Comedy",
    "Entertainment",
    "Art",
    "Music",
    "Political",
    "Public Figure",
    "Personal Blog",
    "Digital Creator",
    "Food",
    "Lifestyle",
    "Tech",
  ];

  const filteredPages = fbData.filter((page) => {
    return (
      (!minPrice || page.price >= minPrice) &&
      (!maxPrice || page.price <= maxPrice) &&
      (!minLikes || page.likes >= minLikes) &&
      (!maxLikes || page.likes <= maxLikes) &&
      (!minFollowers || page.followers >= minFollowers) &&
      (!maxFollowers || page.followers <= maxFollowers) &&
      (!category || page.categories.includes(category))
    );
  });

  const openWhatsApp = (page) => {
    const message = encodeURIComponent(
      `Hello, I’m interested in this Facebook Page:

Name: ${page.name}
Likes: ${page.likes}
Followers: ${page.followers}
Price: Rs. ${page.price}
Page URL: ${page.url}

Can I get more details?`
    );

    window.open(`https://wa.me/94756343816?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 md:px-8 pt-24 pb-20">
      {/* TITLE */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Facebook Page Selling</h1>

        {/* Mobile Filter Button */}
        <button
          onClick={() => setFiltersOpen(true)}
          className="md:hidden bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Filter size={18} /> Filters
        </button>
      </div>

      {/* LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
        {/* ================= FILTER PANEL (LEFT) ================= */}
        <div className="hidden md:block bg-white dark:bg-gray-800 p-5 rounded-xl shadow-lg h-fit sticky top-28">
          <FiltersPanel
            {...{
              minPrice,
              maxPrice,
              minLikes,
              maxLikes,
              minFollowers,
              maxFollowers,
              category,
              setMinPrice,
              setMaxPrice,
              setMinLikes,
              setMaxLikes,
              setMinFollowers,
              setMaxFollowers,
              setCategory,
              categories,
            }}
          />
        </div>

        {/* Mobile Filters Drawer */}
        {filtersOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 md:hidden">
            <div className="absolute left-0 top-0 h-full w-72 bg-white dark:bg-gray-800 p-5 shadow-xl">
              <button
                className="mb-4 flex items-center gap-2 text-red-500"
                onClick={() => setFiltersOpen(false)}
              >
                <X size={20} /> Close
              </button>

              <FiltersPanel
                {...{
                  minPrice,
                  maxPrice,
                  minLikes,
                  maxLikes,
                  minFollowers,
                  maxFollowers,
                  setMinPrice,
                  maxFollowers,
                  setMaxPrice,
                  setMinLikes,
                  setMaxLikes,
                  setMinFollowers,
                  setMaxFollowers,
                  category,
                  setCategory,
                  categories,
                }}
              />
            </div>
          </div>
        )}

        {/* ================= PAGE CARDS (RIGHT) ================= */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPages.map((page) => (
            <div
              key={page.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 hover:shadow-xl transition"
            >
              <img
                src={page.image}
                alt={page.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />

              <h2 className="text-xl font-semibold">{page.name}</h2>

              <div className="mt-2 text-gray-600 dark:text-gray-300 text-sm space-y-1">
                <p>
                  <strong>Category:</strong> {page.categories.join(", ")}
                </p>
                <p>
                  <strong>Likes:</strong> {page.likes.toLocaleString()}
                </p>
                <p>
                  <strong>Followers:</strong> {page.followers.toLocaleString()}
                </p>
                <p>
                  <strong>Price:</strong> Rs. {page.price.toLocaleString()}
                </p>
              </div>

              {/* BUTTON */}
              <button
                onClick={() => openWhatsApp(page)}
                className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium"
              >
                Contact on WhatsApp
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ===================== FILTER PANEL COMPONENT ===================== */

function FiltersPanel({
  minPrice,
  maxPrice,
  minLikes,
  maxLikes,
  minFollowers,
  maxFollowers,
  setMinPrice,
  setMaxPrice,
  setMinLikes,
  setMaxLikes,
  setMinFollowers,
  setMaxFollowers,
  category,
  setCategory,
  categories,
}) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold mb-3">Filters</h3>

      {/* Price Filter */}
      <div>
        <label className="block text-sm font-medium mb-1">Price Range</label>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
          />
          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
          />
        </div>
      </div>

      {/* Likes Filter */}
      <div>
        <label className="block text-sm font-medium mb-1">Likes</label>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            value={minLikes}
            onChange={(e) => setMinLikes(e.target.value)}
            className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
          />
          <input
            type="number"
            placeholder="Max"
            value={maxLikes}
            onChange={(e) => setMaxLikes(e.target.value)}
            className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
          />
        </div>
      </div>

      {/* Followers Filter */}
      <div>
        <label className="block text-sm font-medium mb-1">Followers</label>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            value={minFollowers}
            onChange={(e) => setMinFollowers(e.target.value)}
            className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
          />
          <input
            type="number"
            placeholder="Max"
            value={maxFollowers}
            onChange={(e) => setMaxFollowers(e.target.value)}
            className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div>
        <label className="block text-sm font-medium mb-1">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
        >
          <option value="">All</option>
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
