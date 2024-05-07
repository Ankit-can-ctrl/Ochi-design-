function Cards() {
  return (
    <div className="main-container flex gap-5 flex-col xl:grid xl:grid-cols-2 md:px-10 py-10 bg-black">
      <div className="px-4">
        <div className=" bg-[#004D43] h-[450px] px-6 rounded-lg grid grid-rows-[3fr_.5fr]">
          <div className=" h-full w-full flex items-center justify-center">
            <img
              className=" h-[90px]"
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt=""
            />
          </div>
          <button className=" uppercase text-[#CDEA68] border-2 border-[#CDEA68] rounded-full px-4 h-fit w-fit">
            &copy;2019-2024
          </button>
        </div>
      </div>
      <div className="px-4 flex flex-col xl:grid xl:grid-cols-2 gap-6">
        <div className=" bg-[#212121] h-[450px] px-6 rounded-lg grid grid-rows-[3fr_.5fr]">
          <div className=" h-full w-full flex items-center justify-center">
            <img
              className="h-[90px]"
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              alt=""
            />
          </div>
          <button className=" uppercase border-2 rounded-full px-4 h-fit w-fit">
            &copy;Rating On Clutch
          </button>
        </div>
        <div className=" bg-[#212121] h-[450px] px-6 rounded-lg grid grid-rows-[3fr_.5fr]">
          <div className="h-full w-full flex items-center justify-center">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" />
          </div>
          <button className=" uppercase border-2 rounded-full px-4 h-fit w-fit">
            Business bootcamp Alumni
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
