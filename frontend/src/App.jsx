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

function App() {
  return (
    <Router>
      {/* ❄️ Snow overlay */}
      <Snowfall
        color="white"
        snowflakeCount={200}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 9999,
          pointerEvents: "none"
        }}
      />

      <ScrollToTop />
      <Header />

      <main className="bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100">
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
