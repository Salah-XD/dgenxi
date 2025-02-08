import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Globe2 from "./components/globe";
import PricingComponent from "./components/Pricing";
function App() {

  return (  
    <div className=" bg-white">
      <Nav />
      <Hero />
      <AboutUs/>
      <Globe2/>
      <PricingComponent/>
    </div>
  );
}

export default App;
