import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Globe2 from "./components/globe";
import PricingComponent from "./components/Pricing";

function App() {
  const [aboutUsVisible, setAboutUsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.1; // 20% of viewport height
      setAboutUsVisible(window.scrollY > triggerPoint);
    };  

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-white">
      <Nav />

      {/* Hero Section */}
      <div className="relative z-10">
        <Hero />
      </div>

      {/* AboutUs Overlay Effect */}
      <div
        className={`fixed top-0 left-0 w-full h-screen transition-transform duration-500 ${
          aboutUsVisible ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ zIndex: 50 }}
      >
        <AboutUs />
      </div>

      {/* Other Components */}
      
    </div>
  );
}

export default App;
