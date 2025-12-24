import React from "react";

// A small presentational component that arranges multiple marketing images
// in a layered, modern composition. Uses Tailwind classes for layout and
// respects reduced-motion preferences by avoiding continuous animations.
export default function HeroImages() {
  return (
    <div className="relative w-full flex items-center justify-center">
      {/* Back card */}
      <div className="hidden sm:block absolute -left-8 top-8 w-44 sm:w-56 md:w-64 lg:w-72 transform rotate-[-6deg] bg-white/3 rounded-2xl shadow-2xl">
        <img
          src={require("../../assets/marketing3.png")}
          alt="Marketing illustration layer 3"
          className="w-full h-full object-cover rounded-2xl"
          draggable={false}
        />
      </div>

      {/* Middle card */}
      <div className="absolute -right-6 top-20 w-52 sm:w-64 md:w-72 lg:w-80 transform rotate-3 bg-white/4 rounded-2xl shadow-2xl">
        <img
          src={require("../../assets/marketing.png")}
          alt="Marketing illustration layer 2"
          className="w-full h-full object-cover rounded-2xl"
          draggable={false}
        />
      </div>

      {/* Front card (primary) */}
      <div className="relative w-full max-w-[520px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[560px]">
        <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-white/6 to-white/4 dark:from-black/20 dark:to-black/10 shadow-2xl">
          <img
            src={require("../../assets/marketing2.png")}
            alt="Marketing illustration"
            className="w-full h-auto object-cover block"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}
