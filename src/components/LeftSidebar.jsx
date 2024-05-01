const LeftSidebar = () => {
  return (
    <aside className="flex basis-[5.2%] flex-col items-center justify-center h-[89vh] gap-[8%] ">
      <img
        className="w-9"
        src="https://ihadis.com/assets/leftbar/home.svg"
        alt="home"
      />
      <div>
        <div className="p-4 bg-primary inline-block rounded-lg ">
          <img
            className="w-9 "
            src="https://ihadis.com/assets/leftbar/fill/active/book.svg"
            alt="book"
          />
        </div>
      </div>
      <img
        className="w-9"
        src="https://ihadis.com/assets/leftbar/subject.svg"
        alt="subject"
      />
      <img
        className="w-9"
        src="https://ihadis.com/assets/leftbar/bookmark.svg"
        alt="bookmark"
      />
      <img
        className="w-9"
        src="https://ihadis.com/assets/leftbar/others.svg"
        alt="others"
      />
      <img
        className="w-9"
        src="https://ihadis.com/assets/leftbar/goto.svg"
        alt="goto"
      />
    </aside>
  );
};

export default LeftSidebar;
