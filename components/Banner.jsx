import React from "react";

const Banner = () => {
  return (
    <div className="banner bg-cyan w-full overflow-hidden">
      <div className="container flex sm:flex-row flex-col justify-between items-center mx-auto">
        <div className="flex flex-row flex-wrap w-full sm:w-7/12 md:w-1/2 lg:w-1/3 pt-10 box-border px-3.5 self-center text-center sm:text-left justify-center sm:justify-start fade-up">
          <h1 className="text-gray text-4xl w-full font-semibold">
            Sua empresa com WhatsApp API Oficial
          </h1>
          <p className="text-gray text-xl py-6 tracking-wide leading-relaxed">
            Automação e desenvolvimento para a sua empresa de uma forma prática
            e funcional.
          </p>
        </div>
        <div className="w-full sm:w-1/2 fade-up ">
          <img className="w-full" alt="banner" src="images/banner.png" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
