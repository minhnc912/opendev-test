import React from "react";
import ArrowRight from "../assets/icons/arrow-right.svg";
import EntertaimentImage from "../assets/images/entertaiment-image.png";
import PlayIcon from "../assets/icons/play.svg";

function Entertaiment() {
  return (
    <div className="flex flex-col items-center gap-12 px-4 md:px-10 xl:px-[116px] w-full">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 w-full lg:pl-[233px]">
        <div className="flex flex-col gap-6 md:gap-8 grow text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-bold text-text uppercase font-bigShouldersText">
            New entertainment centre near Cheb
          </h1>
          <p className="text-base md:text-lg max-w-md mx-auto md:mx-0">
            We have been entertaining children and adults in western Bohemia for
            more than 10 years!
          </p>
        </div>
        <button className="flex items-center gap-3 text-base md:text-lg min-w-40 md:min-w-48 mx-auto md:mx-0">
          <p>Find more about us</p>
          <img src={ArrowRight} className="w-4 md:w-6" />
        </button>
      </div>

      <div className="relative w-full max-w-7xl">
        <img
          src={EntertaimentImage}
          className="w-full object-cover rounded-3xl"
        />
        <button className="cursor-pointer px-4 py-4 md:px-[22px] md:py-5 bg-[#009FE3] rounded-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:bg-[#009FE3]/90">
          <img src={PlayIcon} className="w-6 md:w-8" />
        </button>
      </div>
    </div>
  );
}

export default Entertaiment;
