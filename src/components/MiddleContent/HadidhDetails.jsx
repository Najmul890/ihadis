/* eslint-disable react/prop-types */

import ChapterDetailsFooter from "./ChapterDetailsFooter";
import ChapterSettingIcon from "./ChapterSettingIcon";

const HadidhDetails = ({ info }) => {
  return (
    <div className="bg-white mt-4 rounded-lg p-4 ">
      <div className="flex items-center gap-3 ">
        <ChapterSettingIcon />
        <span className="text-primary text-xl font-semibold ">
          {info.position}
        </span>
      </div>
      <p className="mt-4 text-right leading-[40px] text-[22px] ">{info.arabicDetails}</p>
      <div className="mt-10">
        <h5 className="text-primary  font-semibold text-[17px] ">
          {info.speaker}
        </h5>
        <p className="mt-5 text-[17px] leading-10 font-semibold ">{info.details}</p>
      </div>
      <ChapterDetailsFooter/>
    </div>
  );
};

export default HadidhDetails;
