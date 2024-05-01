import Chapter from "./Chapter";
import SearchBar from "./SearchBar";

const LeftContent = () => {
  return (
    <div className="rounded-lg basis-1/5 bg-white  ">
      <div className="border-b flex ">
        <div className="basis-1/2 flex justify-center items-center py-3 text-xl font-bold rounded-tl-lg bg-white ">
          বই
        </div>
        <div className="basis-1/2 flex justify-center items-center text-white py-3 text-xl font-bold rounded-tr-lg bg-primary ">
          অধ্যায়
        </div>
      </div>
      <SearchBar/>
      <Chapter/>
    </div>
  );
};

export default LeftContent;
