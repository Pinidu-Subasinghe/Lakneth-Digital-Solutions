import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import FacebookSelling from "./pages/FacebookSelling";
import WebDesign from "./pages/WebDesign";
import SMSEmail from "./pages/SmsEmail";
import SEOAnalytics from "./pages/SeoAnalytics";
import SocialMarketing from "./pages/SocialMarketing";
import Branding from "./pages/Branding";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main className="bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/facebook-selling" element={<FacebookSelling />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/sms-email" element={<SMSEmail />} />
          <Route path="/seo-analytics" element={<SEOAnalytics />} />
          <Route path="/social-marketing" element={<SocialMarketing />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <Analytics /> {/* ✅ Add this just before closing Router */}
    </Router>
  );
}

export default App;
