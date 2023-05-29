import React from "react";
import Elon from "../assets/elon.png";

const Hero = () => {
  return (
    <section className="hero w-full text-white bg-primary py-[100px]">
      <div className="container grid md:grid-cols-2 justify-between items-center">
        <div className="flex gap-2 flex-col">
          <div className="relative">
            <h1 className="md:text-9xl text-7xl capitalize font-Changa relative">
              $cheems
            </h1>
            <span className="absolute top-0 text-4xl font-Changa backdrop-blur-3xl px-4">
              100x
            </span>
          </div>
          <h2 className="text-2xl">
            Cheems Coin: The barking funny crypto project on Ethereum that
            combines Doge-inspired memes with Elon Musk's cosmic charm.
          </h2>
          <h2 className="text-4xl capitalize">
            contract: <span>000000000000000000000000</span>
          </h2>
          <a
            href=""
            className="bg-primary w-max px-9 py-4 text-3xl text-black hover:bg-white hover:text-black capitalize"
          >
            telegram
          </a>
        </div>
        <img src={Elon} alt="" />
      </div>
    </section>
  );
};

export default Hero;
