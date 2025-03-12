import FlagImage from "../assets/images/flag.png";
import PhoneIcon from "../assets/icons/phone.svg";

export default function HeroDescriptionCard() {
  return (
    <div className="relative w-full mt-6 lg:mt-0 lg:max-w-96 rounded-3xl text-left lg:absolute lg:bottom-6 lg:right-6">
      {/* Gradient Effects */}
      <div className="absolute inset-0 rounded-3xl z-0">
        <div className="w-[100px] h-[100px] bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,#E30613_0%,#009FE3_100%)] rounded-full blur-[50px]" />
        <div className="w-[168px] h-[168px] bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(0,159,227,0.5)_0%,rgba(227,6,19,0.5)_100%)] rounded-full blur-[50px]" />
      </div>

      {/* Content */}
      <div className="relative bg-[#29292999] text-white px-4 py-4 rounded-3xl z-10">
        <img
          src={FlagImage}
          alt="flag"
          className="absolute -top-10 -left-4 w-20 h-20 object-cover"
        />
        <h2 className="text-2xl md:text-3xl font-stencil uppercase text-end">
          Everyday Fun for Everyone
        </h2>

        <p className="text-sm mt-3 pb-3">
          A few kilometers from Cheb, we have built a new entertainment centre{" "}
          <span className="bg-gradient-to-r from-[#009FE3] via-[#FFFFFF] to-[#E30613] bg-clip-text text-transparent">
            FUN Arena Cheb
          </span>
          . You will find entertainment and sports activities for children and
          adults here.
        </p>

        <button className="absolute bottom-0 right-0 transform translate-y-4 cursor-pointer">
          <span className="bg-white text-black font-lexend font-bold p-1 pl-3 rounded-full shadow-md flex items-center gap-2">
            <p>+420737878891</p>
            <span className="p-2 bg-[#E30613] rounded-full">
              <img src={PhoneIcon} alt="phone-icon" className="w-4" />
            </span>
          </span>
        </button>
      </div>
    </div>
  );
}
