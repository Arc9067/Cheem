import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Token from "./Components/Token";
import Tokenomic from "./Components/Tokenomic";
import Map from "./Components/Map";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="min-h-screen w-full relative bg-black font-Coolvetica">
      <Header />
      <Hero />
      <Token />
      <Tokenomic />
      <Map />
      <Footer />
    </div>
  );
};

export default App;
