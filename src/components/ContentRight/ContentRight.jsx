import Setting from "./Setting";
import SupportCard from "./SupportCard";

const ContentRight = () => {
    return (
        <div className=" hidden min-[1536px]:block min-[1536px]:basis-[360px] h-[84.8vh] overflow-y-scroll " >
           <Setting/>
           <SupportCard/> 
        </div>
    );
};

export default ContentRight;