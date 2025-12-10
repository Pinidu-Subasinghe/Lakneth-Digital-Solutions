# 🚀 Lakneth Digital Solutions Marketplace

A modern, fast, and fully responsive service marketplace built with **React + TailwindCSS**. This platform is designed for selling digital assets and professional services, including Facebook Pages, SEO Packages, Branding Packages, Social Media Marketing, and Web Development.

It features a clean user interface, dynamic filtering, automatic device-aware WhatsApp messaging, integrated discount labels, and verification badges.

## ✨ Live Features Overview

### 1. Facebook Page Selling Section
A dedicated section for listing and selling Facebook Pages with key feature indicators:

* **HD Profile Image:** Fetched dynamically via the **Facebook Graph API**.
* **Page Quality Indicators:** Visual cues for page status:
    * 🟢 `No Issues`
    * 🟡 `Warnings`
    * 🔴 `Restricted`
    * ⚫ `Unpublished`
* **Verification Support:** Display of a `verified.png` badge for authenticity.
* **Pricing Logic:** Includes a price calculator with automatic discount application.
* **Instant Inquiry:** Direct WhatsApp chat with full page details pre-filled.

### 2. Service Packages Marketplace
A unified marketplace covering four key digital service areas:

* **Web Development Packages**
* **SEO Packages**
* **Social Media Marketing Packages**
* **Branding Packages**

**Each Package Card Includes:**

* Category label, Title, and a Short Description.
* Original and Discounted Pricing.
* Automatic Discount Badge/Ribbon.
* Detailed **"Read More"** modal for package specifics.
* **WhatsApp Auto-Message** for instant, device-detected inquiries.

### 3. Universal WhatsApp Auto Inquiry System
A robust system for generating professional, formatted inquiry messages with emojis, ensuring seamless communication:

* **Professional Formatting:** Auto-built with specific package/page details.
* **Device Detection:** Automatically routes the user:
    * **📱 Mobile:** Opens the native WhatsApp Application.
    * **💻 Desktop:** Opens **WhatsApp Web**.

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Frontend** | React.js (Vite) |
| **Styling** | Tailwind CSS + Custom Components |
| **Icons** | Lucide React Icons |
| **Logic** | JavaScript ES6 |
| **Data Source** | JSON Datasets |
| **Utilities** | WhatsApp Message API, Facebook Graph APII |