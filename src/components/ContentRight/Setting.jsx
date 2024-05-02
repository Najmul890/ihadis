const Setting = () => {
  return (
    <div className="bg-white rounded-lg w-full  p-4">
      <h3 className="text-center text-2xl font-semibold ">সেটিংস</h3>
      <div className="mt-4">
        <h4 className="text-[16.8px] font-semibold ">আরবি ফন্ট সিলেক্ট করুন</h4>
        <div className="mt-2 flex justify-between items-center px-4 py-3 border rounded-md ">
          <span className="text-[16.8px] font-semibold">KFGQ</span>
          <img
            src="https://ihadis.com/assets/sidebar/downarrow.svg"
            alt="down-arrow"
          />
        </div>
      </div>
      <div className="mt-6">
        <div>
          <h4 className="text-[16.8px] mb-3 font-semibold ">
            এরাবিক ফন্ট সাইজ
          </h4>
          <input type="range" min="18" max="40" className="w-full" value="22" />
        </div>
        <div className="mt-4">
          <h4 className="text-[16.8px] mb-3 font-semibold ">
            অনুবাদ ফন্ট সাইজ
          </h4>
          <input
            type="range"
            min="18"
            max="40"
            className="w-full "
            value="30"
          />
        </div>
      </div>
      <div className="mt-6">
        <div className="flex justify-between items-center " >
          <span className="text-[16.8px] font-semibold ">নাইট মোড</span>
          <input type="checkbox" className="toggle" disabled />
        </div>
      </div>
    </div>
  );
};

export default Setting;
