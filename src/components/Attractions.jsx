import React, { useState } from "react";
import ArrowBlue from "../assets/icons/arrow-blue.svg";
import ArrowRed from "../assets/icons/arrow-red.svg";
import AttractionImage1 from "../assets/images/attraction1.png";
import AttractionImage2 from "../assets/images/attraction2.png";
import AttractionImage3 from "../assets/images/attraction3.png";
import AttractionImage4 from "../assets/images/attraction4.png";
import AttractionImage5 from "../assets/images/attraction5.png";
import AttractionImage6 from "../assets/images/attraction6.png";
import AttractionImage from "../assets/images/attractionImage.png";
function Attractions() {
  const [activeId, setActiveId] = useState(2);
  const attractions = [
    {
      id: 1,
      image: AttractionImage1,
      title: "Kartarena",
    },
    { id: 2, image: AttractionImage2, title: "jumparena" },
    { id: 3, image: AttractionImage3, title: "virtual reality" },
    { id: 4, image: AttractionImage4, title: "multiball" },
    { id: 5, image: AttractionImage5, title: "laser shooting range" },
    { id: 6, image: AttractionImage6, title: "company events" },
  ];
  return (
    <div className="px-4 md:px-6 lg:px-[7.25rem] py-10 md:py-16 lg:py-100 flex flex-col items-center gap-10 lg:gap-12">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-2.5">
        <div className="flex-1 text-center lg:text-left text-zinc-300 text-3xl lg:text-7xl font-bold font-bigShouldersText uppercase">
          OUR ATTRACTIONS
        </div>
        <div className="flex flex-row justify-center lg:justify-end items-center gap-4 lg:gap-6">
          <div className="text-zinc-300 text-sm lg:text-base font-medium">
            Multiple activities at Fun Arena Cheb
          </div>
          <div className="flex justify-start items-center gap-2">
            <img src={ArrowRed} loading="lazy" />
            <img src={ArrowBlue} loading="lazy" />
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1280px] flex flex-col xl:flex-row justify-between items-center gap-8 xl:gap-0">
        <div className="py-4 xl:py-10 flex flex-col justify-center items-center xl:items-start gap-6 xl:gap-10">
          <div className="w-[500px] pr-0 xl:pr-10 flex flex-col justify-start items-center gap-4 lg:gap-3">
            {attractions.map((attraction) => {
              const isActive = activeId === attraction.id;
              return (
                <div
                  className="relative w-full min-h-[56px] xl:h-16 rounded-2xl skew-x-[-20deg] cursor-pointer"
                  onClick={() => setActiveId(attraction.id)}
                >
                  <div
                    className={`absolute h-14 xl:h-16 top-0 rounded-2xl transition-all duration-300 -translate-x-1/2 xl:translate-x-0 ${
                      isActive
                        ? "bg-zinc-800 w-[420px] xl:w-[620.50px] left-1/2 xl:left-[-30px]"
                        : "bg-zinc-300  w-[420px] xl:w-[500px] left-1/2 xl:left-[-30px]"
                    }`}
                  />
                  <img
                    className="absolute h-14 xl:h-16 left-[45%] xl:left-[-30px] -translate-x-[77%] xl:translate-x-0 top-0 rounded-s-2xl"
                    src={attraction.image}
                    loading="lazy"
                  />
                  <div
                    class={`w-80 absolute h-14 xl:h-16 left-[46%] xl:left-[-30px] -translate-x-[60%] xl:translate-x-0 top-0 bg-gradient-to-r rounded-s-2xl ${
                      isActive
                        ? "from-zinc-800/20 to-zinc-800"
                        : "from-zinc-300/20 to-zinc-300"
                    }`}
                  ></div>
                  <div
                    className={`absolute w-80 top-[10px] -translate-x-1/2 xl:translate-x-0 xl:top-[13px] text-right uppercase font-bigShouldersText text-lg xl:text-3xl transition-all duration-300 ${
                      isActive
                        ? "text-white left-1/2 xl:left-[100px]"
                        : "text-zinc-800 left-1/2 xl:left-[76px]"
                    }`}
                  >
                    {attraction.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative flex-1 w-auto h-auto flex flex-col justify-end items-end">
          <img
            src={AttractionImage}
            className="w-full h-full object-cover rounded-xl"
            alt="Attraction Main"
            loading="lazy"
          />

          <div className="absolute bottom-0 w-full xl:max-w-[747px] 2xl:w-[747px] bg-transparent flex flex-row justify-between items-end gap-4 pl-2  xl:p-0">
            <div className="flex-1 max-w-full pb-0 xl:pb-4 xl:max-w-[366.5px] text-left text-white text-sm xl:text-base">
              Arena with lots of attractions for children and adults of all
              ages. Trampolines, climbing wall, ninja track and other
              attractions.
            </div>

            <button
              className="
        px-4 
        py-2  
        bg-zinc-300 
        rounded-full 
        flex justify-center items-center 
        text-zinc-800 text-sm xl:text-base font-bold cursor-pointer"
            >
              Find out more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attractions;
