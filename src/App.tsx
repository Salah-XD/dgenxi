import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Globe2 from "./components/globe";
function App() {

  return (  
    <div className=" bg-white">
      <Nav />
      <Hero />
      <AboutUs/>
      <Globe2/>
    </div>
  );
}

export default App;
