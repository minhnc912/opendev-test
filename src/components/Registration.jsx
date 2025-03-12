import React from "react";

function Registration() {
  return (
    <div className="px-6 py-100 flex flex-col md:flex-row gap-6 md:gap-20 justify-center">
      <div className="flex-1/2 flex flex-col gap-8 max-w-[566px]">
        <h1 className="text-7xl font-bold uppercase text-text font-stencil">
          Registration
        </h1>
        <p className=" text-text">
          For organizational and security reasons, every visitor to the FUN
          arena Cheb must register before entering the attraction. At the
          reception, your registration will be completed and you will receive a
          loyalty card which you will use for our services.
        </p>
      </div>
      <div className="flex-1/2 max-w-[566px]">
        For organizational and security reasons, every visitor to the FUN arena
        Cheb must register before entering the attraction. At the reception,
        your registration will be completed and you will receive a loyalty card
        which you will use for our services.
      </div>
    </div>
  );
}

export default Registration;
