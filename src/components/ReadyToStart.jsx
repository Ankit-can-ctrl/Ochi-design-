function ReadyToStart() {
  return (
    <div className="w-full bg-[#CDEA68] h-fit rounded-t-xl py-32">
      <div className="title uppercase text-black text-center text-[3.2rem] md:text-8xl xl:text-[200px] font-Founder font-bold tracking-tight leading-none w-full h-fit">
        <h1 className="">ready</h1>
        <h1 className="">to start</h1>
        <h1 className="">the project ?</h1>
      </div>
      <div className="eyes"></div>
      <div className="buttons overflow-hidden text-black font-semibold w-full pt-32 flex flex-col gap-4 font-Neue items-center justify-center">
        <div className="text-white bg-black rounded-full hover:bg-white hover:text-black">
          <button className=" flex items-center justify-center gap-2 border-2 border-black hover:border-white w-fit px-4  py-4 uppercase rounded-full">
            Start the Project
            <svg
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.5 4a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V4.5H7a.5.5 0 01-.5-.5z"></path>
              <path d="M12.354 3.646a.5.5 0 010 .708l-9 9a.5.5 0 01-.708-.708l9-9a.5.5 0 01.708 0z"></path>
            </svg>
          </button>
        </div>
        <h1>OR</h1>
        <div>
          <button className=" hover:text-white active:text-white hover:bg-black active:bg-black flex items-center justify-center gap-2 border-2 border-black w-fit px-4  py-4 uppercase rounded-full">
            ak537664@gmail.com
            <svg
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.5 4a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V4.5H7a.5.5 0 01-.5-.5z"></path>
              <path d="M12.354 3.646a.5.5 0 010 .708l-9 9a.5.5 0 01-.708-.708l9-9a.5.5 0 01.708 0z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReadyToStart;
