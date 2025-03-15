import React from "react";
import FloatingLogo from "../assets/images/FloatingLogo.png";
import QRImage from "../assets/images/qr.png";

function Registration() {
  return (
    <div className="relative px-4 sm:px-6 md:px-10 py-20 flex flex-col lg:flex-row gap-16 lg:gap-20 justify-center items-center lg:items-start">
      <div className="hidden lg:block absolute left-20 2xl:left-60 top-[calc(50%-2rem)] h-full w-40 z-0 pointer-events-none">
        <img
          src={FloatingLogo}
          alt="FUN"
          className="w-[90%] object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex-1/2 flex flex-col gap-4 lg:gap-8 max-w-xl text-center lg:text-left">
        <h1 className="text-7xl font-bold uppercase text-[#d4d4d8] font-stencil">
          Registration
        </h1>
        <p className=" text-[#d4d4d8]">
          For organizational and security reasons, every visitor to the FUN
          arena Cheb must register before entering the attraction. At the
          reception, your registration will be completed and you will receive a
          loyalty card which you will use for our services.
        </p>
      </div>
      <div className="flex-1/2 flex flex-col gap-10 lg:gap-12 w-full max-w-xl">
        {/* step 1 */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-2">
            <div className="w-[66.5px] bg-[#29292980] rounded-lg skew-x-[-20deg]">
              <h1 className="text-center text-5xl sm:text-7xl font-bold text-[#009FE3] skew-x-[20deg] leading-[50px]">
                1
              </h1>
            </div>
            <div className="flex-1 px-2 bg-[#29292980] rounded-lg skew-x-[-20deg] w-full">
              <p className="text-2xl font-bold text-[#d4d4d8] skew-x-[20deg] px-4 leading-16">
                Choose an Attraction
              </p>
            </div>
          </div>
          <p className="max-w-[434px] text-[#d4d4d8] lg:pl-[calc(3rem+52px)]">
            Choose from the attractions of the FUN arena.
          </p>
        </div>
        {/* step 2 */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-2">
            <div className="w-[66.5px] bg-[#29292980] rounded-lg skew-x-[-20deg]">
              <h1 className="text-center text-5xl sm:text-7xl font-bold text-[#009FE3] skew-x-[20deg] leading-[50px]">
                2
              </h1>
            </div>
            <div className="flex-1 px-2 bg-[#29292980] rounded-lg skew-x-[-20deg] w-full flex justify-between pr-44 relative">
              <img
                src={QRImage}
                className="absolute top-3.5 right-[3%] skew-x-[20deg]"
                loading="lazy"
              />

              <p className="text-2xl font-bold text-[#d4d4d8] skew-x-[20deg] px-4 leading-16">
                Register
              </p>
              <div className="my-[19px] px-2 py-1 bg-red-600 rounded-lg inline-flex justify-center items-center gap-2.5 skew-x-[20deg] hover:bg-red-600/80">
                <a
                  href="https://web.racefacer.com/kiosk/kartarenacheb"
                  target="_blank"
                  className="justify-start text-white text-sm font-bold"
                >
                  Click here
                </a>
              </div>
            </div>
          </div>
          <p className="max-w-3/5 lg:max-w-[368px] text-[#d4d4d8] lg:pl-[calc(3rem+52px)]">
            You can register at the reception or by clicking the button above
            from the comfort of your home.
          </p>
        </div>
        {/* step 3 */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-2">
            <div className="w-[66.5px] bg-[#29292980] rounded-lg skew-x-[-20deg]">
              <h1 className="text-center text-5xl sm:text-7xl font-bold text-[#009FE3] skew-x-[20deg] leading-[50px]">
                3
              </h1>
            </div>
            <div className="flex-1 px-2 bg-[#29292980] rounded-lg skew-x-[-20deg] w-full">
              <p className="text-2xl font-bold text-[#d4d4d8] skew-x-[20deg] px-4 leading-16">
                Have Fun
              </p>
            </div>
          </div>
          <p className="max-w-[550px] text-[#d4d4d8] lg:pl-[calc(3rem+52px)]">
            Thank you for your online registrations. For each purchase you get
            points, which you can apply to our services and attractions then. We
            look forward to you!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registration;
