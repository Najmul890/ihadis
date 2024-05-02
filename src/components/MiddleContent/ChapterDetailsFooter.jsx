
const ChapterDetailsFooter = () => {
    return (
        <div className="mt-8 flex justify-between items-center " >
            
            <div className="flex items-center gap-2 ">
                <span className="text-base font-semibold ">হাদিসের মানঃ  </span>
                <div className="inline-block rounded-md bg-[#34AB82] text-white text-[14.4px] font-semibold py-1.5 px-3 ">সহিহ হাদিস</div>
            </div>
            <div className="flex items-center gap-10 ">
                <img src="https://ihadis.com/assets/others/chapter/copy.svg" alt="icon" />
                <img src="https://ihadis.com/assets/others/chapter/bookmark.svg" alt="icon" />
                <img src="https://ihadis.com/assets/others/chapter/share.svg" alt="icon" />
                <img src="https://ihadis.com/assets/others/chapter/report.svg" alt="icon" />
                <img src="https://ihadis.com/assets/others/chapter/direct.svg" alt="icon" />
            </div>
        </div>
    );
};

export default ChapterDetailsFooter;