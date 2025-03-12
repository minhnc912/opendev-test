import Logo from "../assets/images/Logo.png";
import LanguageIcon from "../assets/icons/change-language.svg";
import MenuIcon from "../assets/icons/menu-icon.png";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent px-6 md:px-12 py-4 flex justify-between items-center">
      <div className="cursor-pointer">
        <img src={Logo} alt="logo" className="w-28 md:w-36" />
      </div>

      <div className="flex items-center gap-6 md:gap-8">
        <button className="cursor-pointer">
          <img
            src={LanguageIcon}
            alt="change language"
            className="w-6 md:w-8"
          />
        </button>
        <button className="cursor-pointer">
          <img src={MenuIcon} alt="menu" className="w-6 md:w-8" />
        </button>
      </div>
    </header>
  );
}
