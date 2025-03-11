import { useState, useEffect } from "react";
import slide1 from "../assets/images/slide1.png";
import slide2 from "../assets/images/slide2.png";
import slide3 from "../assets/images/slide3.png";
import slide4 from "../assets/images/slide4.png";
import slide5 from "../assets/images/slide5.png";
import logo from "../assets/images/Logo.png";
import LanguageIcon from "../assets/icons/change-language.svg";
import MenuIcon from "../assets/icons/menu-icon.png";

const slides = [
  {
    image: slide1,
    title: "GO-KARTS",
    description:
      "Enjoy an adrenaline ride in any weather. Outdoor track and indoor hall at a professional level with Sodi go-karts.",
  },
  {
    image: slide2,
    title: "JUMPARENA",
    description:
      "Aréna se spoustou atrakcí pro děti i dospělé všech věkových kategorií. Trampolíny, lezecká stěna, ninja dráha a další atrakce.",
  },
  {
    image: slide3,
    title: "Virtuální realita",
    description:
      "Díky naší virtuální realitě vstoupíte do jiného světa a poznáte nové technologie. Vyberte si z naší nabídky her a zažijte VR na vlastní kůži.",
  },
  {
    image: slide4,
    title: "MULTIBALL",
    description:
      "Interaktivní sportovní a herní konzole, která z pohybu a vzdělávání dělá opravdovou zábavu. Velké množství her zaujme všechny věkové kategorie.",
  },
  {
    image: slide5,
    title: "Laserová střelnice",
    description:
      "Vyzkoušejte si nebo vypilujte svou mušku! Laserová střelnice se třemi režimy střelby na čas otestuje nejen vaši přesnost, ale také rychlost a postřeh.",
  },
];

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[100vh] bg-[#191919] text-[#D9D9D9] overflow-hidden transition-all duration-700">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `
      url('${slides[currentSlide].image}')
    `,
          backgroundPosition: "50%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: "lightgray",
        }}
      />

      <div className="absolute inset-0 bg-black opacity-10 transition-all duration-700" />

      <div className="relative z-10 flex justify-between items-center px-46 py-4">
        <div className="cursor-pointer">
          <img src={logo} alt="logo" />
        </div>

        <div className="flex items-center space-x-8">
          <button className="cursor-pointer">
            <img src={LanguageIcon} alt="change language" />
          </button>
          <button className="cursor-pointer">
            <img src={MenuIcon} alt="menu" />
          </button>
        </div>
      </div>

      {/* Slide Content */}
      <div className="relative z-10 flex justify-between items-center text-center px-12 h-full transition-opacity duration-700">
        <div className="text-left absolute bottom-[15%]">
          <h1 className="text-4xl md:text-120 text-white font-stencil font-bold uppercase mb-6 tracking-wide animate-fadeIn mix-blend-screen">
            {slides[currentSlide].title}
          </h1>

          <div className="flex gap-3 max-w-550px">
            <p className="text-sm mb-6 max-w-[60%] animate-fadeIn ">
              {slides[currentSlide].description}
            </p>
            <button className="relative text-text font-bold uppercase tracking-wider border border-text px-7 py-3.5 transition-all duration-300 hover:bg-background rounded-[10px] skew-x-[-15deg] cursor-pointer">
              <span className="font-medium">Find out more</span>
            </button>
          </div>
          {/* Indicators */}
          <div className="flex space-x-2 mt-12">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-[#009FE3] scale-125"
                    : "bg-[#D9D9D9] opacity-50"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* <button className="bg-gradient-to-r from-[#009FE3] to-[#E30613] text-white px-6 py-3 rounded-full text-lg font-semibold hover:scale-105 transition">
          Reserve Now
        </button> */}
      </div>
    </div>
  );
}
