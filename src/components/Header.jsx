import { useState, useEffect, useRef } from "react";
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
  const slideInterval = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const startSlideTimer = () => {
    slideInterval.current = setInterval(() => {
      nextSlide();
    }, 6000);
  };

  const resetSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
    startSlideTimer();
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    resetSlideTimer();
  };

  useEffect(() => {
    startSlideTimer();
    return () => clearInterval(slideInterval.current);
  }, []);

  return (
    <div className="relative w-full h-auto max-h-[95vh] bg-[#191919] text-[#D9D9D9] overflow-hidden transition-all duration-700 aspect-video">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `
      url('${slides[currentSlide].image}')
    `,
          backgroundPosition: "50%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // backgroundColor: "lightgray",
        }}
      />

      <div className="absolute inset-0 bg-black/20 transition-all duration-700" />

      <div className="relative z-10 h-1/12 flex justify-between items-center px-46 py-5">
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
      <div className="relative z-10 h-11/12 flex justify-between items-center text-center px-12 transition-opacity duration-700">
        <div className="text-left absolute bottom-[50px]">
          <h1 className="text-4xl md:text-120 text-white font-stencil font-bold uppercase mb-6 tracking-wide mix-blend-screen">
            {slides[currentSlide].title}
          </h1>

          <div className="flex gap-3 max-w-[550px] items-end">
            <p className="text-sm max-w-[60%] ">
              {slides[currentSlide].description}
            </p>
            <button className="relative h-[50px] text-text font-bold uppercase tracking-wider border border-text px-7 py-3.5 transition-all duration-300 hover:bg-background rounded-[10px] skew-x-[-15deg] cursor-pointer">
              <span className="font-medium">Find out more</span>
            </button>
          </div>
          {/* Indicators */}
          <div className="flex space-x-2.5 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 p-0.5 rounded-full inline-flex justify-start items-center gap-2.5 cursor-pointer ${
                  index === currentSlide &&
                  "outline-1 outline-offset-[-1px] outline-text"
                }`}
              >
                <div
                  className={`w-3 h-3 rounded-full border border-text ${
                    index === currentSlide && "bg-text"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
        <div className="absolute bottom-[26px] right-12 max-w-lg p-6 rounded-3xl text-left">
          <div className="absolute inset-0 rounded-3xl z-10 left-1/2">
            <div className="w-[100px] h-[100px]  bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_#E30613_0%,_#009FE3_100%)] rounded-full blur-[50px]" />
            <div className="w-[168px] h-[168px] bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_rgba(0,_159,_227,_0.50)_0%,_rgba(227,_6,_19,_0.50)_100%)] rounded-full blur-[50px]" />
          </div>

          <div className="relative bg-[#29292999] text-white p-6 rounded-3xl z-10">
            <h2 className="text-2xl font-bold font-stencil uppercase text-end">
              Everyday Fun for Everyone
            </h2>
            <p className="text-sm mt-2">
              A few kilometers from Cheb, we have built a new entertainment
              centre
              <span className="bg-gradient-to-r from-[#009FE3] via-[#FFFFFF] to-[#E30613] text-sm bg-clip-text text-transparent">
                FUN Arena Cheb
              </span>
              for you. You will find entertainment and sports activities for
              children and adults here.
            </p>

            <button className="absolute bottom-0 right-0 transform translate-y-4 cursor-pointer">
              <span className="bg-white text-black font-bold px-4 py-2 rounded-2xl shadow-md block">
                +420737878891
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-10 flex justify-center">
        <div className="flex items-center justify-center pl-12 pr-7 py-4 bg-[#009FE3] text-text font-bold rounded-2xl z-11 skew-x-[-15deg] uppercase">
          Reserve
        </div>
        <div className="flex items-center justify-center pl-12 pr-7 py-4 bg-[#E30613] text-text font-bold rounded-2xl skew-x-[-15deg] uppercase">
          NOW
        </div>
      </div>

      {/* <div className="w-[264.75px] h-[65px] absolute flex bottom-0 left-1/2 -translate-x-1/2">
        <div className="left-[48.75px] top-[16px] absolute justify-start text-[#d9d9d9] text-[32px] font-bold font-['Big_Shoulders_Display'] leading-loose">
          RESERVE NOW!
        </div>
      </div> */}
    </div>
  );
}
