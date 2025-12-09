import { useState } from "react";
import fbData from "../data/facebookSelling.json";
import {
  Filter,
  X,
  SlidersHorizontal,
  DollarSign,
  ThumbsUp,
  Tags,
} from "lucide-react";

/* CONSTANTS */
const HEADER_HEIGHT = 68;

/* GET USERNAME FROM URL */
const getFacebookUsername = (url) => {
  try {
    return url
      .replace("https://www.facebook.com/", "")
      .replace("https://facebook.com/", "")
      .split("/")[0]
      .split("?")[0]
      .trim();
  } catch {
    return "";
  }
};

/* HD PROFILE PIC FETCHER */
const getHDFacebookImage = (url) => {
  const username = getFacebookUsername(url);
  if (!username) return "/placeholder_fb.png";
  return `https://graph.facebook.com/${username}/picture?type=large&width=720&height=720`;
};

/* WHATSAPP MESSAGE */
const openWhatsApp = (page) => {
  const phone = "94756343816";
  const msg =
    `Hello, I'm interested in this Facebook Page:\n\n` +
    `Name: ${page.name}\n` +
    `Likes: ${page.likes.toLocaleString()}\n` +
    `Price: Rs.${page.price.toLocaleString()}\n` +
    `Page URL: ${page.url}\n\n` +
    `Please send more details.`;

  window.open(
    `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
      msg
    )}`,
    "_blank"
  );
};

/* FILTER PANEL */
function FilterPanel({
  minPrice,
  maxPrice,
  minLikes,
  maxLikes,
  setMinPrice,
  setMaxPrice,
  setMinLikes,
  setMaxLikes,
  category,
  setCategory,
  categories,
}) {
  return (
    <div className="w-full h-full overflow-y-auto pb-10">
      <div className="flex items-center gap-3 pb-4 px-4 border-b border-gray-200 dark:border-gray-700 pt-4">
        <SlidersHorizontal className="text-blue-600" size={22} />
        <h3 className="text-2xl font-bold">Filters</h3>
      </div>

      <div className="p-4 space-y-8">
        {/* PRICE */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <DollarSign className="text-green-600" size={20} />
            <h4 className="text-lg font-semibold">Price Range</h4>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <input
              type="number"
              placeholder="Min"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="p-2 rounded-lg bg-white dark:bg-gray-700 shadow-sm"
            />
            <input
              type="number"
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="p-2 rounded-lg bg-white dark:bg-gray-700 shadow-sm"
            />
          </div>
        </div>

        {/* LIKES */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <ThumbsUp className="text-purple-600" size={20} />
            <h4 className="text-lg font-semibold">Likes</h4>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <input
              type="number"
              placeholder="Min"
              value={minLikes}
              onChange={(e) => setMinLikes(e.target.value)}
              className="p-2 rounded-lg bg-white dark:bg-gray-700 shadow-sm"
            />
            <input
              type="number"
              placeholder="Max"
              value={maxLikes}
              onChange={(e) => setMaxLikes(e.target.value)}
              className="p-2 rounded-lg bg-white dark:bg-gray-700 shadow-sm"
            />
          </div>
        </div>

        {/* CATEGORY */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <Tags className="text-orange-500" size={20} />
            <h4 className="text-lg font-semibold">Categories</h4>
          </div>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 rounded-lg bg-white dark:bg-gray-700 shadow-sm"
          >
            <option value="">All Categories</option>
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

/* MAIN PAGE */
export default function FacebookSelling() {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minLikes, setMinLikes] = useState("");
  const [maxLikes, setMaxLikes] = useState("");
  const [category, setCategory] = useState("");

  /* CORRECT CATEGORY LIST */
  const allCategories = Array.from(
    new Set(fbData.flatMap((p) => p.categories))
  ).sort();

  /* FULLY FIXED FILTER SYSTEM */
  const filteredPages = fbData.filter((p) => {
    const priceMatch =
      (!minPrice || p.price >= Number(minPrice)) &&
      (!maxPrice || p.price <= Number(maxPrice));

    const likesMatch =
      (!minLikes || p.likes >= Number(minLikes)) &&
      (!maxLikes || p.likes <= Number(maxLikes));

    const categoryMatch = !category || p.categories.includes(category);

    return priceMatch && likesMatch && categoryMatch;
  });

  /* ANIMATION LOGIC */
  const openDrawer = () => {
    setClosing(false);
    setFiltersOpen(true);
  };

  const closeDrawer = () => {
    setClosing(true);
    setTimeout(() => {
      setFiltersOpen(false);
      setClosing(false);
    }, 300);
  };

  return (
    <section className="relative bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* HEADER */}
      <div className="flex justify-between items-center px-6 md:ml-[300px] pt-6 mb-5">
        <h1 className="text-4xl font-bold">Facebook Page Selling</h1>
        <button
          onClick={openDrawer}
          className="md:hidden bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow"
        >
          <Filter size={18} /> Filters
        </button>
      </div>

      {/* DESKTOP FILTER */}
      <aside
        className="hidden md:block fixed left-0 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700"
        style={{
          top: HEADER_HEIGHT,
          height: `calc(100vh - ${HEADER_HEIGHT}px)`,
          width: "280px",
        }}
      >
        <FilterPanel
          minPrice={minPrice}
          maxPrice={maxPrice}
          minLikes={minLikes}
          maxLikes={maxLikes}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
          setMinLikes={setMinLikes}
          setMaxLikes={setMaxLikes}
          category={category}
          setCategory={setCategory}
          categories={allCategories}
        />
      </aside>

      {/* MOBILE FILTER DRAWER */}
      {filtersOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 md:hidden flex">
          <div
            className={`w-72 bg-white dark:bg-gray-800 p-6 shadow-xl h-full 
              ${closing ? "animate-slide-out" : "animate-slide-in"}`}
          >
            <button
              onClick={closeDrawer}
              className="flex items-center gap-2 text-red-500 mb-4"
            >
              <X size={20} /> Close
            </button>

            <FilterPanel
              minPrice={minPrice}
              maxPrice={maxPrice}
              minLikes={minLikes}
              maxLikes={maxLikes}
              setMinPrice={setMinPrice}
              setMaxPrice={setMaxPrice}
              setMinLikes={setMinLikes}
              setMaxLikes={setMaxLikes}
              category={category}
              setCategory={setCategory}
              categories={allCategories}
            />
          </div>

          <div className="flex-1" onClick={closeDrawer}></div>
        </div>
      )}

      {/* PAGE CARDS */}
      <div className="px-6 md:ml-[300px] pb-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPages.map((page) => (
            <div
              key={page.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition p-5 no-hover-mobile"
            >
              <img
                src={getHDFacebookImage(page.url)}
                onError={(e) => (e.target.src = "/placeholder_fb.png")}
                className="w-full h-44 object-cover rounded-lg"
                alt={page.name}
              />

              <h2 className="text-xl font-semibold mt-4">{page.name}</h2>

              <div className="text-gray-600 dark:text-gray-300 mt-2 space-y-1 text-sm">
                <p>
                  <strong>Category:</strong> {page.categories.join(", ")}
                </p>
                <p>
                  <strong>Likes:</strong> {page.likes.toLocaleString()}
                </p>
                <p>
                  <strong>Price:</strong> Rs. {page.price.toLocaleString()}
                </p>
              </div>

              <button
                onClick={() => openWhatsApp(page)}
                className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg shadow font-medium"
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
