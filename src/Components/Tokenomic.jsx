import React from "react";
import img from "../assets/tokenomics.png";

const Tokenomic = () => {
  return (
    <section className="py-[50px] w-full bg-primary">
      <div className="container flex justify-center flex-col gap-4 items-center">
        <h1 className="font-Changa text-5xl flex items-center gap-3 md:text-7xl capitalize text-center">
          <img src={img} alt="" /> tokenomics
        </h1>
        <div className="flex flex-wrap gap-6 justify-between items-center mt-14">
          <article className="h-[300px] w-full md:w-[300px] bg-primary ring-1 ring-secondary rounded-md flex justify-center items-center flex-col gap-4">
            <h1 className="text-6xl font-Changa text-white">0%</h1>
            <p className="text-4xl capitalize">tax</p>
          </article>
          <article className="h-[300px] w-full md:w-[300px] bg-primary ring-1 ring-white rounded-md flex justify-center items-center flex-col gap-4">
            <h1 className="text-6xl font-Changa text-white">Ownership</h1>
            <p className="text-4xl capitalize">Renounced</p>
          </article>
          <article className="h-[300px] w-full md:w-[300px] bg-primary ring-1 ring-black rounded-md flex justify-center items-center flex-col gap-4">
            <h1 className="text-6xl font-Changa text-white">Contract</h1>
            <p className="text-4xl capitalize">verified</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Tokenomic;
