# 🚀 Lakneth Digital Solutions – Full Website Codebase

A modern, fast, and fully responsive service marketplace built using React + TailwindCSS, designed for selling Facebook pages, SEO packages, Branding packages, Social Media Marketing packages, and Web development packages.

This platform includes a clean UI, dynamic filters, automatic WhatsApp messaging, discount labels, verified badges, and mobile-optimized layouts.
---------------------------------------------------------
# 🌐 Live Features Overview
✔️ 1. Facebook Page Selling Section

● HD profile image fetched via Facebook Graph API
● Page quality indicators:
🟢 No Issues | 🟡 Warnings | 🔴 Restricted | ⚫ Unpublished
● Verified badge support (verified.png)
● Discount percentage ribbon
● Price calculator (with discount logic)
● Instant WhatsApp inquiry with full page details
---------------------------------------------------------
✔️ 2. Service Packages Marketplace

# Includes:
● Web Development Packages
● SEO Packages
● Social Media Marketing Packages
● Branding Packages

# Each package includes:

● Category label
● Title + short description
● Original & discounted pricing
● Automatic discount badge
● “Read More” modal
● WhatsApp auto-message with device detection
---------------------------------------------------------
✔️ 3. WhatsApp Auto Inquiry System

Fully universal WhatsApp message generator with:

● Emojis
● Professional formatting
# Device detection →
📱 Mobile → opens WhatsApp App
💻 Desktop → opens WhatsApp Web
● Auto-built package/page details
---------------------------------------------------------
# 🛠️ Tech Stack
● Frontend          React.js (Vite)
● Styling           Tailwind CSS + Custom Components
● Icons             Lucide React Icons
● Logic             JavaScript ES6
● Data Source       JSON datasets
● Utilities         WhatsApp Message API, Facebook Graph Image Fetch
---------------------------------------------------------
# 📂 Project Structure
src/
 ├── assets/
 │    ├── verified.png
 │    ├── placeholder_fb.png
 │    └── ...images
 ├── components/
 │    ├── PackageCard.jsx
 │    ├── FilterPanel.jsx
 │    └── Modal.jsx
 ├── data/
 │    ├── facebookSelling.json
 │    └── packages.json
 ├── pages/
 │    ├── FacebookSelling.jsx
 │    ├── WebPackages.jsx
 │    ├── SeoPackages.jsx
 │    ├── BrandingPackages.jsx
 │    └── Contact.jsx
 ├── utils/
 │    ├── whatsapp.js
 │    └── facebook.js
 └── App.jsx
---------------------------------------------------------
# ⭐ Highlighted Code Features
# 🔵 HD Facebook Image Fetch
const getHDFacebookImage = (url) => {
  const username = getFacebookUsername(url);
  return `https://graph.facebook.com/${username}/picture?type=large&width=720&height=720`;
};

# 🟢 Universal WhatsApp Message (Device Auto-Detect)
const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

window.open(
  isMobile ? mobileURL : desktopURL,
  "_blank"
);

# 🟡 Discount Badge
{pkg.discount > 0 && (
  <div className="absolute top-3 right-3 bg-pink-600 text-white text-xs px-2 py-1 font-bold rounded-lg shadow">
    -{pkg.discount}%
  </div>
)}
---------------------------------------------------------
📱 Responsive Design
Fully optimized for:
● Desktop monitors
● Tablets
● iPhones / Android
● Dark mode & light mode