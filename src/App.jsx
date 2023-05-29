import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Token from "./Components/Token";

const App = () => {
  return (
    <div className="min-h-screen w-full relative bg-black font-Coolvetica">
      <Header />
      <Hero />
      <Token />
    </div>
  );
};

export default App;
