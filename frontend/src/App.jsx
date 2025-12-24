import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

import vesak1 from "./assets/vesak1.gif";
import vesak2 from "./assets/vesak2.gif";

/* 🎉 Reusable FestiveEffect wrapper */
function FestiveEffect({
  startMonth,
  startDay,
  endMonth,
  endDay,
  children,
  forceVisible,
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (forceVisible) {
      setVisible(true);
      return;
    }

    const now = new Date();
    const year = now.getFullYear();
    const startDate = new Date(year, startMonth - 1, startDay);
    const endDate = new Date(year, endMonth - 1, endDay, 23, 59, 59);

    if (now >= startDate && now <= endDate) {
      setVisible(true);
    }
  }, [startMonth, startDay, endMonth, endDay, forceVisible]);

  if (!visible) return null;
  return <>{children}</>;
}

/* ❄️ Snow Layer (December only) */
function SnowLayer() {
  return (
    <FestiveEffect startMonth={12} startDay={1} endMonth={12} endDay={31}>
      <Snowfall
        color="white"
        snowflakeCount={100} // mobile-safe
        speed={[0.6, 1]}
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
    </FestiveEffect>
  );
}

/* 🪔 Vesak Lantern GIFs Layer */
function VesakLanternGIFs() {
  return (
    <>
      {/* Top-left lantern */}
      <img
        src={vesak1}
        alt="Vesak Lantern 1"
        className="fixed top-20 left-4 w-20 h-auto md:w-32 z-50 pointer-events-none opacity-90"
        style={{ mixBlendMode: "screen" }}
      />

      {/* Bottom-right lantern */}
      <img
        src={vesak2}
        alt="Vesak Lantern 2"
        className="fixed bottom-4 right-4 w-20 h-auto md:w-32 z-50 pointer-events-none opacity-90"
        style={{ mixBlendMode: "screen" }}
      />
    </>
  );
}

function App() {
  return (
    <Router>
      {/* 🎄 Christmas Snow */}
      <SnowLayer />

      {/* 🪔 Vesak Lantern GIFs */}
      <FestiveEffect
        startMonth={5}
        startDay={1}
        endMonth={5}
        endDay={31}
        //forceVisible={true} // Uncomment to test outside Vesak period
      >
        <VesakLanternGIFs />
      </FestiveEffect>

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
