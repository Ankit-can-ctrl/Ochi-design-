function LandingLinks() {
  return (
    <div className="border-t-[1px] border-zinc-600 bg-black text-white  flex flex-col lg:flex-row gap-10 items-start lg:items-center lg:justify-between lg:px-20 py-20 pl-5">
      {["For public and private companies", "From the first pitch to IPO"].map(
        (item, index) => (
          <p
            key={index}
            className=" font-Founder text-xl tracking-tight leading-none"
          >
            {item}
          </p>
        )
      )}
      <div className="button flex items-center gap-5">
        <button className="uppercase hover:scale-110 transition-all hover:text-black hover:bg-white border-[5px]  font-semibold rounded-full px-4 py-3 ">
          Start the project
        </button>
        <button className="arrow hover:scale-110 transition-all hover:text-black hover:bg-white flex items-center justify-center border-[5px] rounded-full h-12 w-12">
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
  );
}

export default LandingLinks;
