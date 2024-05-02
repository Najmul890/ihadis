import ContentRight from "./ContentRight/ContentRight";
import LeftContent from "./LeftContent/LeftContent";
import LeftSidebar from "./LeftSidebar";
import MiddleContent from "./MiddleContent/MiddleContent";

const Content = () => {
  return (
    <div className="flex " >
      <LeftSidebar />
      <main className="flex basis-full lg:basis-[92%] min-[1536px]:basis-[94.8%] p-4 gap-5  rounded-tl-lg bg-[#e5e7eb] ">
         <LeftContent/>
         <MiddleContent/>
         <ContentRight/>
      </main>
    </div>
  );
};

export default Content;
