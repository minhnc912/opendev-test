import React from "react";
import GiftImage from "../assets/images/gift.png";

function GiftVoucher() {
  return (
    <div className="px-4 xl:px-64 lg:px-32 2xl:px-96">
      <div className="relative flex flex-col lg:flex-row items-center gap-4 lg:pl-56 lg:pr-28 py-4 bg-[#E30613] rounded-3xl">
        {/* Hình ảnh quà tặng */}
        <img
          src={GiftImage}
          className="w-32 lg:w-auto absolute top-0 left-1/2 lg:top-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 -translate-y-1/2"
          loading="lazy"
        />

        {/* Nội dung văn bản */}
        <div className="text-center lg:text-left flex-1">
          <h1 className="font-medium text-2xl pt-12 lg:pt-0 lg:text-[32px] text-white">
            Make somebody happy with a gift voucher
          </h1>
          <p className="text-white font-medium text-sm lg:text-base">
            The voucher is valid for all services. Unforgettable experiences for
            children and adults!
          </p>
        </div>

        {/* Nút "Buy Now" */}
        <button className="px-6 py-3 font-bold text-[#292929] bg-white rounded-xl cursor-pointer hover:bg-white/90 mt-4 lg:mt-0 lg:absolute lg:top-1/2 lg:-right-[3.625rem] lg:-translate-y-1/2">
          <a
            href="https://vouchers.funarenacheb.cz/c/darkovy-poukaz"
            tagert="_blank"
          >
            Buy now
          </a>
        </button>
      </div>
    </div>
  );
}

export default GiftVoucher;
