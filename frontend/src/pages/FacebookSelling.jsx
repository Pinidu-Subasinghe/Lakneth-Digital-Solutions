import { useState } from "react";
import fbData from "../data/facebookSelling.json";
import VerifiedBadge from "../assets/verified.png";
import {
  Filter,
  X,
  SlidersHorizontal,
  DollarSign,
  ThumbsUp,
  Tags,
} from "lucide-react";

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

  const discountedPrice =
    page.discount > 0
      ? page.price - (page.price * page.discount) / 100
      : page.price;

  const priceMessage =
    page.discount > 0
      ? `Original Price: Rs.${page.price.toLocaleString()}\nDiscount: ${
          page.discount
        }%\nDiscounted Price: Rs.${discountedPrice.toLocaleString()}\n`
      : `Price: Rs.${page.price.toLocaleString()}\n`;

  const qualityInfo = {
    green: "No Issues 🟢",
    yellow: "Has Warnings 🟡",
    red: "Restricted 🔴",
    black: "Unpublished / Severe Issues ⚫",
  };

  const verifiedStatus = page.verified ? "Verified Page ✅" : "Not Verified ❌";

  const msg =
    `Hello, I'm interested in this Facebook Page:\n\n` +
    `📌 *Name:* ${page.name}\n` +
    `👍 *Likes:* ${page.likes.toLocaleString()}\n` +
    `🏷️ *Category:* ${page.categories.join(", ")}\n\n` +
    `🔵 *Verified Status:* ${verifiedStatus}\n` +
    `⚙️ *Page Quality:* ${qualityInfo[page.qualityStatus]}\n\n` +
    `💰 *Pricing Details:*\n${priceMessage}` +
    `🔗 *Page URL:* ${page.url}\n\n` +
    `Please send more details.`;

  const encoded = encodeURIComponent(msg);

  // Device detection → choose link
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  const mobileLink = `whatsapp://send?phone=${phone}&text=${encoded}`;
  const webLink = `https://api.whatsapp.com/send?phone=${phone}&text=${encoded}`;

  // Open based on device
  window.open(isMobile ? mobileLink : webLink, "_blank");
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
  onClearFilters,
}) {
  return (
    <div className="w-full h-full overflow-y-auto pb-10">
      <div className="flex items-center gap-3 pb-4 px-4 border-b border-gray-700 pt-4">
        <SlidersHorizontal className="text-blue-600" size={22} />
        <h3 className="text-2xl font-bold">Filters</h3>
      </div>

      <div className="p-4 space-y-8">
        {/* PRICE FILTER */}
        <div className="bg-gray-800 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <DollarSign className="text-green-600" size={20} />
            <h4 className="text-lg font-semibold">Price Range</h4>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <input
              className="p-2 rounded-lg bg-gray-700"
              type="number"
              placeholder="Min"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <input
              className="p-2 rounded-lg bg-gray-700"
              type="number"
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>

        {/* LIKES FILTER */}
        <div className="bg-gray-800 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <ThumbsUp className="text-purple-600" size={20} />
            <h4 className="text-lg font-semibold">Likes</h4>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <input
              className="p-2 rounded-lg bg-gray-700"
              type="number"
              placeholder="Min"
              value={minLikes}
              onChange={(e) => setMinLikes(e.target.value)}
            />
            <input
              className="p-2 rounded-lg bg-gray-700"
              type="number"
              placeholder="Max"
              value={maxLikes}
              onChange={(e) => setMaxLikes(e.target.value)}
            />
          </div>
        </div>

        {/* CATEGORY FILTER */}
        <div className="bg-gray-800 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <Tags className="text-orange-500" size={20} />
            <h4 className="text-lg font-semibold">Categories</h4>
          </div>

          <select
            className="w-full p-2 rounded-lg bg-gray-700"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>

        <button
          onClick={onClearFilters}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg"
        >
          Clear Filters
        </button>
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

  const categories = Array.from(
    new Set(fbData.flatMap((p) => p.categories))
  ).sort();

  const filteredPages = fbData.filter((p) => {
    const priceMatch =
      (!minPrice || p.price >= minPrice) && (!maxPrice || p.price <= maxPrice);

    const likesMatch =
      (!minLikes || p.likes >= minLikes) && (!maxLikes || p.likes <= maxLikes);

    const categoryMatch = !category || p.categories.includes(category);

    return priceMatch && likesMatch && categoryMatch;
  });

  /* OPEN DRAWER */
  const openDrawer = () => {
    setClosing(false);
    setFiltersOpen(true);
  };

  /* CLOSE DRAWER WITH ANIMATION */
  const closeDrawer = () => {
    setClosing(true);
    setTimeout(() => setFiltersOpen(false), 250);
  };

  return (
    <section className="relative bg-gray-950 min-h-screen">
      {/* FIXED FILTER BUTTON (Moodle-style) */}
      <div className="group fixed top-14 left-0 z-50 flex items-center">
        {/* FILTER BUTTON */}
        <button
          onClick={openDrawer}
          className="
      bg-blue-600 text-white
      px-2.5 py-3 flex items-center
      rounded-r-xl shadow-lg
      hover:bg-blue-700 transition
    "
        >
          <Filter size={18} />
        </button>

        {/* HOVER LABEL - only visible on desktop */}
        <span
          className="
      hidden md:inline-block               /* hide on mobile */
      ml-2 px-3 py-1
      bg-blue-600 text-white text-sm rounded-lg shadow
      opacity-0 group-hover:opacity-100
      translate-x-[-10px] group-hover:translate-x-0
      transition-all duration-200
      pointer-events-none
    "
        >
          Filters
        </span>
      </div>

      {/* PAGE TITLE */}
      <div className="px-6 pt-8 mb-6">
        <h1 className="text-3xl md:text-4xl font-bold">
          Facebook Page Selling
        </h1>
      </div>

      {/* DRAWER (SLIDE ANIMATION) */}
      {filtersOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex">
          <div
            className={`
              w-72 bg-gray-800 shadow-lg p-6
              ${closing ? "animate-slide-out" : "animate-slide-in"}
            `}
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
              categories={categories}
              onClearFilters={() => {
                setMinPrice("");
                setMaxPrice("");
                setMinLikes("");
                setMaxLikes("");
                setCategory("");
              }}
            />
          </div>

          {/* Click Outside to Close */}
          <div className="flex-1" onClick={closeDrawer}></div>
        </div>
      )}

      {/* PAGE CONTENT CARDS */}
      <div className="px-6 pb-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredPages.map((page) => {
            // Quality status mappings
            const qualityColors = {
              green: "bg-green-100 text-green-700 border-green-300",
              yellow: "bg-yellow-100 text-yellow-700 border-yellow-300",
              red: "bg-red-100 text-red-700 border-red-300",
              black: "bg-gray-800 text-white border-gray-700",
            };

            const qualityText = {
              green: "No Issues",
              yellow: "Has Warnings",
              red: "Restricted",
              black: "Unpublished / Severe Issues",
            };

            return (
              <div
                key={page.id}
                className="relative p-8 bg-white/80 dark:bg-gray-900/80 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-md h-full backdrop-blur-md group transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden flex flex-col"
              >
                {/* ✨ Glow overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                {/* STATUS RIBBON */}
                {page.status === "available" && (
                  <div className="absolute top-3 left-0 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-r-lg shadow-lg z-20">
                    Available
                  </div>
                )}

                {/* DISCOUNT BADGE */}
                {page.discount > 0 && (
                  <div className="absolute top-3 right-3 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded-lg shadow z-20">
                    -{page.discount}%
                  </div>
                )}

                {/* IMAGE */}
                <img
                  src={getHDFacebookImage(page.url)}
                  onError={(e) => (e.target.src = "/placeholder_fb.png")}
                  alt={page.name + " Facebook Page Image"}
                  className="w-full h-44 object-cover rounded-lg transition-all duration-300 hover:opacity-90 z-10 relative"
                />

                {/* NAME + QUALITY STATUS + VERIFIED BADGE */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <h2 className="text-lg font-semibold">{page.name}</h2>

                    {/* VERIFIED BADGE */}
                    {page.verified && (
                      <img
                        src={VerifiedBadge}
                        alt="Verified Badge"
                        className="w-4 h-4 object-contain"
                      />
                    )}
                  </div>

                  <span
                    className={`px-2.5 py-1 text-[11px] font-semibold rounded-full border ${
                      qualityColors[page.qualityStatus]
                    }`}
                  >
                    {qualityText[page.qualityStatus]}
                  </span>
                </div>

                <p className="text-gray-300 mt-1 text-sm">
                  <strong>Category:</strong> {page.categories.join(", ")}
                </p>

                <p className="text-gray-300 text-sm">
                  <strong>Likes:</strong> {page.likes.toLocaleString()}
                </p>

                {/* PRICE */}
                <div className="mt-2 text-sm">
                  {page.discount > 0 ? (
                    <div className="flex items-center gap-2">
                      <span className="line-through text-gray-500">
                        Rs. {page.price.toLocaleString()}
                      </span>
                      <span className="font-bold text-green-600 text-lg">
                        Rs{" "}
                        {(
                          page.price -
                          (page.price * page.discount) / 100
                        ).toLocaleString()}
                      </span>
                    </div>
                  ) : (
                    <span className="font-bold text-gray-200 text-lg">
                      Rs. {page.price.toLocaleString()}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => openWhatsApp(page)}
                  className="mt-auto w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg shadow transition"
                >
                  Mode Details
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
