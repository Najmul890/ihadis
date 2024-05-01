import LeftContent from "./LeftContent/LeftContent";
import LeftSidebar from "./LeftSidebar";

const Content = () => {
  return (
    <div className="flex" >
      <LeftSidebar />
      <main className="flex basis-[94.8%] p-4  rounded-tl-lg bg-[#e5e7eb] ">
         <LeftContent/>
      </main>
    </div>
  );
};

export default Content;
