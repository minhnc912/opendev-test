import React from "react";
import LogoFooter from "../assets/images/logo-footer.png";
import FaceBookIcon from "../assets/icons/facebook.svg";
import GmailIcon from "../assets/icons/gmail.svg";
import InstagramIcon from "../assets/icons/instagram.svg";
import PhoneIcon from "../assets/icons/phone.svg";
import ArrowUp from "../assets/icons/arrow-up.svg";

function Footer({ topRef }) {
  const handleScrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="px-6 lg:px-[7.25rem] py-10 lg:py-20 flex flex-col gap-10 lg:gap-6 bg-[#121212] text-white">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0">
        {/* Logo */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={LogoFooter}
            alt="FUN Arena Logo"
            className="w-40 lg:w-auto"
          />
        </div>

        {/* Description */}
        <p className="text-sm text-center lg:text-left lg:w-[18.75rem]">
          New entertainment centre FUN arena Cheb. You will find entertainment
          and sports activities for children and adults here.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col text-center lg:text-end gap-2.5 text-sm">
          <p>Potočiště 3, 350 02 Odrava</p>
          <p>fun@funarenacheb.cz</p>
          <p>+420737878891</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
        {/* Social Icons */}
        <div className="flex gap-3 px-3 py-1 bg-[#292929] rounded-full">
          <span className="p-2.5 cursor-pointer hover:scale-110 transition">
            <img src={FaceBookIcon} alt="Facebook" />
          </span>
          <span className="p-2.5 cursor-pointer hover:scale-110 transition">
            <img src={InstagramIcon} alt="Instagram" />
          </span>
          <span className="p-2.5 cursor-pointer hover:scale-110 transition">
            <img src={GmailIcon} alt="Gmail" />
          </span>
          <span className="p-2.5 cursor-pointer hover:scale-110 transition">
            <img src={PhoneIcon} alt="Phone" />
          </span>
        </div>

        {/* Copyright + Scroll Button */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 items-center justify-between w-full lg:w-auto">
          <p className="text-center lg:text-left text-xs lg:text-sm">
            © 2025 FUN Arena Cheb. All rights Reserved.
          </p>
          <button
            className="w-10 h-10 rounded-full bg-[#292929] flex justify-center items-center cursor-pointer hover:bg-[#444] transition"
            onClick={handleScrollToTop}
          >
            <img src={ArrowUp} className="w-4" alt="Scroll to top" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
