const LeftSidebar = () => {
  return (
    <>
      <aside className=" hidden lg:flex lg:basis-[8%] min-[1536px]:basis-[5.2%]  flex-col items-center justify-center h-[89vh] gap-[8%] ">
        <img
          className="  w-9"
          src="https://ihadis.com/assets/leftbar/home.svg"
          alt="home"
        />
        <div>
          <div className="p-4 bg-primary inline-block rounded-lg ">
            <img
              className="  w-9 "
              src="https://ihadis.com/assets/leftbar/fill/active/book.svg"
              alt="book"
            />
          </div>
        </div>
        <img
          className="  w-9"
          src="https://ihadis.com/assets/leftbar/subject.svg"
          alt="subject"
        />
        <img
          className="  w-9"
          src="https://ihadis.com/assets/leftbar/bookmark.svg"
          alt="bookmark"
        />
        <img
          className="  w-9"
          src="https://ihadis.com/assets/leftbar/others.svg"
          alt="others"
        />
        <img
          className="  w-9"
          src="https://ihadis.com/assets/leftbar/goto.svg"
          alt="goto"
        />
      </aside>
      <div className=" fixed shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-white z-10 bottom-0 left-0 right-0 py-3 flex items-center font-medium justify-between px-5 lg:hidden ">
      <img
          className="  w-5"
          src="https://ihadis.com/assets/leftbar/home.svg"
          alt="home"
        />
        <div>
          <div className="p-3 bg-primary inline-block rounded-lg ">
            <img
              className="  w-5 "
              src="https://ihadis.com/assets/leftbar/fill/active/book.svg"
              alt="book"
            />
          </div>
        </div>
        <img
          className="  w-5"
          src="https://ihadis.com/assets/leftbar/subject.svg"
          alt="subject"
        />
        <img
          className="  w-5"
          src="https://ihadis.com/assets/leftbar/bookmark.svg"
          alt="bookmark"
        />
        <img
          className="  w-5"
          src="https://ihadis.com/assets/leftbar/others.svg"
          alt="others"
        />
        <img
          className="  w-5"
          src="https://ihadis.com/assets/leftbar/goto.svg"
          alt="goto"
        />
      </div>
    </>
  );
};

export default LeftSidebar;
