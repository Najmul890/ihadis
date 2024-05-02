import ChapterDrawer from "../ChapterDrawer";
import BookIcons from "./BookIcons";

const BookHeading = () => {
  const chevron = ">";
  return (
    <div className="bg-white rounded-lg  ">
      <div className=" hidden min-[1280px]:block ">
        <div className="px-5 py-4 text-[#667085] text-sm font-medium flex items-center gap-1 border-b-[2px] ">
          <img
            src="https://ihadis.com/assets/others/bread-crumb-book.svg"
            alt="icon"
          />
          <span>{chevron}</span>
          <span>Bukhari</span>
          <span>{chevron}</span>
          <span>1</span>
        </div>
        <div className="px-5  flex justify-between items-center py-6 ">
          <div className="flex items-center gap-6 ">
            <div>
              <BookIcons />
            </div>
            <div>
              <h3 className=" text-2xl font-medium ">সহিহ বুখারী </h3>
              <h5 className="text-[14.4px] mt-3 ">সর্বমোট হাদিস - ৭৫৬৩</h5>
            </div>
          </div>
          <div className="text-2xl font-semibold ">صحيح البخاري</div>
        </div>
      </div>
      <ChapterDrawer />
      
    </div>
  );
};

export default BookHeading;
