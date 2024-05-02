import BookHeading from "./BookHeading";
import ChapterDetails from "./ChapterDetai;s";

const MiddleContent = () => {
  return (
    <div className="basis-3/5 h-[84.8vh] overflow-y-scroll ">
      <BookHeading />
      <div className="flex items-center gap-4 bg-white rounded-lg p-4 mt-4 ">
        <div className="w-[42.5px] h-10 bg-primary text-white flex justify-center text-[16.8px] font-semibold items-center rounded-xl ">
          ১
        </div>
        <div className="text-xl text-secondary font-medium ">
          ওহীর সূচনা অধ্যায়
        </div>
      </div>
      <ChapterDetails/>
      
    </div>
  );
};

export default MiddleContent;
