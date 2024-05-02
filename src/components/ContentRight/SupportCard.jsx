import MosqueBG from "./MosqueBG";

const SupportCard = () => {
    return (
        <div className="bg-[#34AB82] relative mt-4 p-4 rounded-lg " >
            <h3 className="text-white text-2xl font-semibold ">আপনিও সদাকায়ে জারিয়াতে অংশ নিন</h3>
            <p className="mt-4 text-base text-white font-medium leading-6 ">
            আপনার দান, সেটা ছোট হলেও, ইসলামের বার্তা ও হাদিস প্রচারে সহায়তা করবে। আমাদের কাজের অংশ হতে এবং এই গুরুত্বপূর্ণ কাজে সাহায্য করতে আমাদের প্রজেক্টে হাদিয়া দিন। ইনশাআল্লাহ এটি সদাকায়ে জারিয়াহ হিসেবে আল্লাহ্‌র কাছে কবুল হবে।
            </p>
            <div className="flex justify-center ">
            <div className="mt-6 z-10 text-center inline-block rounded-lg bg-white py-3 px-10 text-[16.8px] font-semibold text-primary ">সাপোর্ট করুন</div>
            </div>
            <MosqueBG/>
        </div>
    );
};

export default SupportCard;