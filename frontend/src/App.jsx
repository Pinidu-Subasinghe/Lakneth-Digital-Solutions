import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import Snowfall from "react-snowfall";

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

/* ❄️ Snow Layer (Auto-pauses when tab inactive & only active in December) */
function SnowLayer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check current date
    const now = new Date();
    const month = now.getMonth() + 1; // JS months are 0-based
    const day = now.getDate();

    // Active from Dec 1 to Dec 31
    if (month === 12 && day >= 1 && day <= 31) {
      setVisible(true);
    }

    const handleVisibility = () => {
      setVisible(!document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  if (!visible) return null;

  return (
    <Snowfall
      color="white"
      snowflakeCount={100} // safe for mobile
      speed={[0.6, 1]} // smooth & light
      wind={[-0.3, 0.3]}
      radius={[0.8, 2]}
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
        pointerEvents: "none",
        opacity: 0.6,
      }}
    />
  );
}

function App() {
  return (
    <Router>
      {/* ❄️ Snow only in December */}
      <SnowLayer />

      <ScrollToTop />
      <Header />

      <main className="bg-gray-950 text-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />

          <Route
            path="/services/facebook-selling"
            element={<FacebookSelling />}
          />
          <Route path="/services/web-design" element={<WebDesign />} />
          <Route path="/services/sms-email" element={<SMSEmail />} />
          <Route path="/services/seo-analytics" element={<SEOAnalytics />} />
          <Route
            path="/services/social-marketing"
            element={<SocialMarketing />}
          />
          <Route path="/services/branding" element={<Branding />} />

          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
      <Analytics />
    </Router>
  );
}

export default App;
