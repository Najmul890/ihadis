import Setting from "./Setting";
import SupportCard from "./SupportCard";

const ContentRight = () => {
    return (
        <div className="basis-[360px] h-[84.8vh] overflow-y-scroll " >
           <Setting/>
           <SupportCard/> 
        </div>
    );
};

export default ContentRight;