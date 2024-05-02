import Setting from "./ContentRight/Setting";
import SupportCard from "./ContentRight/SupportCard";
import HeaderSettingIcon from "./HeaderSettingIcon";

const SettingDrawer = () => {
  return (
    <div className="drawer z-[100] drawer-end">
      <input id="setting-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="setting-drawer" className="">
          <HeaderSettingIcon />
        </label>
      </div>
      <div className="drawer-side ">
        <label
          htmlFor="setting-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-white text-base-content">
          <Setting />
          <SupportCard />
        </ul>
      </div>
    </div>
  );
};

export default SettingDrawer;
