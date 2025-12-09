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

  /* ===========================================================
     UNIVERSAL WHATSAPP OPENER (100% working on all devices)
  =========================================================== */
  const openWhatsApp = (page) => {
    const phone = "94756343816";

    const text =
      `Hello, I’m interested in this Facebook Page:\n\n` +
      `Name: ${page.name}\n` +
      `Likes: ${page.likes}\n` +
      `Price: Rs.${page.price}\n` +
      `Page Link: ${page.url}\n\n` +
      `Can I get more details?`;

    const encoded = encodeURIComponent(text);

    const waLink = `https://api.whatsapp.com/send?phone=${phone}&text=${encoded}`;

    window.open(waLink, "_blank");
  };

  /* ================= FILTER LOGIC ================= */
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

  return (
    <section className="relative min-h-[80vh] py-20 pt-10 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* ================= TITLE + MOBILE FILTER BUTTON ================= */}
      <div className="flex justify-between items-center px-6 md:px-10 mb-10">
        <h1 className="text-4xl font-bold">Facebook Page Selling</h1>

        <button
          onClick={() => setFiltersOpen(true)}
          className="md:hidden bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Filter size={18} /> Filters
        </button>
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 px-6 md:px-10">
        {/* ================= FILTERS LEFT (NOT A CARD) ================= */}
        <div className="hidden md:block space-y-6">
          <FiltersPanel
            minPrice={minPrice}
            maxPrice={maxPrice}
            minLikes={minLikes}
            maxLikes={maxLikes}
            minFollowers={minFollowers}
            maxFollowers={maxFollowers}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
            setMinLikes={setMinLikes}
            setMaxLikes={setMaxLikes}
            setMinFollowers={setMinFollowers}
            setMaxFollowers={setMaxFollowers}
            category={category}
            setCategory={setCategory}
            categories={categories}
          />
        </div>

        {/* ================= MOBILE FILTER DRAWER ================= */}
        {filtersOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 md:hidden">
            <div className="absolute left-0 top-0 w-72 h-full bg-white dark:bg-gray-900 p-5 overflow-y-auto">
              <button
                onClick={() => setFiltersOpen(false)}
                className="flex items-center gap-2 text-red-500 mb-4"
              >
                <X size={20} /> Close
              </button>

              <FiltersPanel
                minPrice={minPrice}
                maxPrice={maxPrice}
                minLikes={minLikes}
                maxLikes={maxLikes}
                minFollowers={minFollowers}
                maxFollowers={maxFollowers}
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice}
                setMinLikes={setMinLikes}
                setMaxLikes={setMaxLikes}
                setMinFollowers={setMinFollowers}
                setMaxFollowers={setMaxFollowers}
                category={category}
                setCategory={setCategory}
                categories={categories}
              />
            </div>
          </div>
        )}

        {/* ================= PAGE CARDS RIGHT ================= */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPages.map((page) => (
            <div
              key={page.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition p-5"
            >
              <img
                src={page.image}
                alt={page.name}
                className="w-full h-44 object-cover rounded-lg"
              />

              <h2 className="text-xl font-semibold mt-4">{page.name}</h2>

              <div className="text-sm text-gray-600 dark:text-gray-300 mt-2 space-y-1">
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

              <button
                onClick={() => openWhatsApp(page)}
                className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg"
              >
                Contact on WhatsApp
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===========================================================
   FILTER PANEL COMPONENT (NO CARD UI)
=========================================================== */

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
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold">Filters</h3>

      {/* === Price === */}
      <div>
        <label className="block mb-1 text-sm font-medium">Price Range</label>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-full p-2 bg-gray-100 dark:bg-gray-700 rounded-lg"
          />
          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full p-2 bg-gray-100 dark:bg-gray-700 rounded-lg"
          />
        </div>
      </div>

      {/* === Likes === */}
      <div>
        <label className="block mb-1 text-sm font-medium">Likes</label>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            value={minLikes}
            onChange={(e) => setMinLikes(e.target.value)}
            className="w-full p-2 bg-gray-100 dark:bg-gray-700 rounded-lg"
          />
          <input
            type="number"
            placeholder="Max"
            value={maxLikes}
            onChange={(e) => setMaxLikes(e.target.value)}
            className="w-full p-2 bg-gray-100 dark:bg-gray-700 rounded-lg"
          />
        </div>
      </div>

      {/* === Followers === */}
      <div>
        <label className="block mb-1 text-sm font-medium">Followers</label>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            value={minFollowers}
            onChange={(e) => setMinFollowers(e.target.value)}
            className="w-full p-2 bg-gray-100 dark:bg-gray-700 rounded-lg"
          />
          <input
            type="number"
            placeholder="Max"
            value={maxFollowers}
            onChange={(e) => setMaxFollowers(e.target.value)}
            className="w-full p-2 bg-gray-100 dark:bg-gray-700 rounded-lg"
          />
        </div>
      </div>

      {/* === Category === */}
      <div>
        <label className="block mb-1 text-sm font-medium">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 bg-gray-100 dark:bg-gray-700 rounded-lg"
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
