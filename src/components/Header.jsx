import logo from "../assets/home-logo.png";
import SearchIcon from "./SearchIcon";
import SettingDrawer from "./SettingDrawer";

const Header = () => {
  return (
    <header className="p-4 flex justify-between items-center ">
      <div className="flex items-center lg:items-start gap-6 ">
        <div>
          <img className="w-10 lg:w-[60px] h-10 lg:h-[60px] " src={logo} alt="logo" />
        </div>
        <div className="hidden lg:block">
          <h3 className="font-bold text-xl ">হাদিস সমূহ</h3>
          <h5 className="text-secondary font-medium mt-1 text-sm ">
            হাদিস পড়ুন শিখুন এবং জানুন
          </h5>
        </div>
        <div className="block lg:hidden">
          <h3 className="text-primary font-bold  text-xl sm:text-[27.2px] "> আল হাদিস</h3>
        </div>
      </div>
      <div className="flex items-center gap-6 lg:gap-[80px] ">
        <div className="block lg:hidden ">
          <SearchIcon />
        </div>
        <div className="hidden lg:block ">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="text" className="grow" placeholder="Search Hadith" />
          </label>
        </div>
        <div className="px-5 rounded-lg py-3 hidden min-[1536px]:flex items-center gap-2 bg-primary ">
          <span className="text-white text-[16.8px] font-semibold ">
            সাপোর্ট করুন
          </span>
          <img
            src="https://ihadis.com/assets/others/helping-hand.svg"
            alt="helping-hand-icon"
          />
        </div>
        <div className="block min-[1536px]:hidden ">
          <SettingDrawer />
        </div>
      </div>
    </header>
  );
};

export default Header;
