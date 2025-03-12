import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import SlideContent from "./SlideContent";
import HeroDescriptionCard from "./HeroDescriptionCard";

import Slide1 from "../assets/images/slide1.png";
import Slide2 from "../assets/images/slide2.png";
import Slide3 from "../assets/images/slide3.png";
import Slide4 from "../assets/images/slide4.png";
import Slide5 from "../assets/images/slide5.png";
import ReserveNowButton from "./ReserveNowButton";

const slides = [
  {
    image: Slide1,
    title: "GO-KARTS",
    description:
      "Enjoy an adrenaline ride in any weather. Outdoor track and indoor hall at a professional level with Sodi go-karts.",
  },
  {
    image: Slide2,
    title: "JUMPARENA",
    description: "Trampolíny, lezecká stěna, ninja dráha a další atrakce.",
  },
  {
    image: Slide3,
    title: "Virtuální realita",
    description:
      "Díky naší virtuální realitě vstoupíte do jiného světa a poznáte nové technologie.",
  },
  {
    image: Slide4,
    title: "MULTIBALL",
    description:
      "Interaktivní sportovní a herní konzole, která z pohybu a vzdělávání dělá opravdovou zábavu.",
  },
  {
    image: Slide5,
    title: "Laserová střelnice",
    description:
      "Vyzkoušejte si nebo vypilujte svou mušku! Laserová střelnice otestuje vaši přesnost.",
  },
];

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  const startSlideTimer = () => {
    slideInterval.current = setInterval(nextSlide, 6000);
  };

  const resetSlideTimer = () => {
    if (slideInterval.current) clearInterval(slideInterval.current);
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
    <div className="relative w-full h-screen bg-[#191919] text-[#D9D9D9] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url('${slides[currentSlide].image}')`,
        }}
      />
      <div className="absolute inset-0 bg-black/20 transition-all duration-700" />

      <Header />
      <div className="relative bottom-24 lg:bottom-6 h-full flex flex-col justify-center items-center lg:flex-row lg:items-end lg:justify-between px-6 md:px-12">
        <SlideContent
          currentSlide={currentSlide}
          slides={slides}
          goToSlide={goToSlide}
        />

        <HeroDescriptionCard />
      </div>
      <ReserveNowButton />
    </div>
  );
}
