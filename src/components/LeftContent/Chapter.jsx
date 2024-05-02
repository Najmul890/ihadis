import HexagonIcon from "./HexagonIcon";
import HexagonIconActive from "./HexagonIconActive";

const chapters = [
  {
    lesson: "১",
    title: "ওহীর সূচনা অধ্যায়",
    range: "১-৭",
  },
  {
    lesson: "২",
    title: "ঈমান",
    range: "৮-৫৮",
  },
  {
    lesson: "৩",
    title: "ইলম",
    range: "৫৯-১৩৪",
  },
  {
    lesson: "৪",
    title: "ওজু",
    range: "১৩৫-২৪৭",
  },
  {
    lesson: "৫",
    title: "গোসল",
    range: "২৪৮-২৯৩",
  },
  {
    lesson: "৬",
    title: "হায়েজ",
    range: "২৯৪-২৩৩",
  },
  {
    lesson: "৭",
    title: "তায়াম্মুম",
    range: "৩৩৪-৩৪৮",
  },
  {
    lesson: "৮",
    title: "সালাত",
    range: "৩৪৯-৩২০",
  },
  {
    lesson: "৯",
    title: "সালাতের ওয়াক্তসমূহ",
    range: "৫২১-৬০২",
  },
  {
    lesson: "১০",
    title: "আজান",
    range: "৬০৩-৮৭৫",
  },
];

const Chapter = () => {
  return (
    <div className="flex h-[70vh] min-[1280px]:h-[64vh] overflow-y-scroll px-4 flex-col gap-3 min-[1280px]:gap-4">
      {chapters.map((chapter, index) => (
        <div key={chapter.title} className={` flex gap-5 items-center rounded-lg px-4 py-5 ${index===0 ? "bg-[#ebfcf6] rounded-lg ":"" } `}>
           <div className="h-12 w-12  flex items-center justify-center relative" >
           <h3 className={`${index===0 ? "text-white":"text-[#9CA3AF]" } absolute text-[16.8px] font-medium`}>{chapter.lesson}</h3>
              {
                index===0 ? <HexagonIconActive/> : <HexagonIcon/>
              }
           </div>
           <div>
            <h4 className="text-[#333] font-semibold text-[16.8px] ">{chapter.title}</h4>
            <h6 className="text-secondary mt-4 text-[14.4px] ">হাদিসের রেঞ্জ: {chapter.range}</h6>
           </div>
        </div>
      ))}
    </div>
  );
};

export default Chapter;
