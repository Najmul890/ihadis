import Chapter from "./LeftContent/Chapter";
import SearchBar from "./LeftContent/SearchBar";

const ChapterDrawer = () => {
  return (
    <div className="drawer z-[100] ">
      <input id="chapter-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <div className="px-5 py-4 flex min-[1280px]:hidden gap-2 items-center ">
          <label htmlFor="chapter-drawer" className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </label>
          <h3 className=" text-[16.8px] font-medium ">সহিহ বুখারী </h3>
        </div>
      </div>
      <div className="drawer-side ">
        <label
          htmlFor="chapter-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-0 w-80 min-h-full bg-white">
          <div className="px-4 py-6 flex justify-between items-center ">
            <span className="text-2xl font-semibold "> ক্যাটেগরি </span>
            <label htmlFor="chapter-drawer">
              <img
                className="block min-[1536px]:hidden "
                src="https://ihadis.com/assets/others/right-side-bar/cross.svg"
                alt="close-icon"
              />
            </label>
          </div>
          <div className="flex ">
            <div className="basis-1/2 border flex justify-center items-center py-3 text-xl font-bold  bg-white ">
              বই
            </div>
            <div className="basis-1/2 flex justify-center items-center text-white py-3 text-xl font-bold  bg-primary ">
              অধ্যায়
            </div>
          </div>
          <SearchBar />
          <Chapter />
        </ul>
      </div>
    </div>
  );
};

export default ChapterDrawer;
