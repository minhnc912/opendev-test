import React from "react";

function ReserveNowButton() {
  return (
    <a
      href="https://booking.funarenacheb.cz/"
      target="_blank"
      className="absolute bottom-1 left-1/2 -translate-x-1/2 z-10 flex justify-center cursor-pointer"
    >
      <div className="absolute inset-0 rounded-3xl z-10 left-1/2">
        <div className="w-[100px] h-[100px] bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,#E30613_0%,#009FE3_100%)] rounded-full blur-[50px]" />
        <div className="w-[168px] h-[168px] bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(0,159,227,0.5)_0%,rgba(227,6,19,0.5)_100%)] rounded-full blur-[50px]" />
      </div>
      <div className="flex items-center justify-center pl-10 pr-6 py-4 bg-[#009FE3] text-text font-bold rounded-lg z-11 skew-x-[-30deg] uppercase">
        <span className="skew-x-[30deg]">Reserve</span>
      </div>
      <div className="absolute -right-20 flex items-center justify-center pl-12 pr-8 py-4 bg-[#E30613] text-text font-bold rounded-lg skew-x-[-30deg] uppercase">
        <span className="skew-x-[30deg]">NOW!</span>
      </div>
    </a>
  );
}

export default ReserveNowButton;
