import playback from "../img/about.mp4";

function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".2"
      className="w-full h-[100%] rounded-t-3xl text-black bg-[#CDEA68]"
    >
      <div className="about-top">
        <h1 className="w-[80%]  font-Neue text-[3.5vw] tracking-tighter font-normal pt-24  px-20 text-left">
          Ochi is a strategic partner for fast-growing tech businesses that need
          to raise funds, sell products, explain complex ideas, and hire great
          people.
        </h1>
        <div className=" pt-0 mt-7 border-t-[1px] border-zinc-500 flex justify-between items-center py-10 px-20"></div>
      </div>
      <div className="about-mid px-24 grid grid-cols-2 font-Neue text-[2.2vh] font-medium pb-10">
        <h1 className="font">What you can expect:</h1>
        <div className="about-mid-right grid grid-cols-2 gap-40">
          <div className="flex flex-col justify-between gap-8">
            <p>
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.
            </p>
            <p>
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
          <div className="about-links flex flex-col items-start gap-8 justify-end">
            <p>S:</p>
            <ul className="flex flex-col gap-2">
              {["Instagram", "Behance", "Facebook", "LinkedIn"].map(
                (item, index) => (
                  <li key={index} className="flex cursor-pointer">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className=" pt-0 mt-7 border-t-[1px] border-zinc-500 flex justify-between items-center py-10 px-20"></div>
      <div className="about-bottom grid grid-cols-2 pb-10">
        <div className="about-bottom-left flex flex-col px-10 items-start gap-5">
          <h1 className=" font-Neue font-semibold text-6xl">Our approach:</h1>
          <div className="about-bottom-button rounded-full font-Neue flex items-center justify-between px-10 text-white h-[4.5rem] w-[15rem] bg-black">
            <button className="text-xl">Read more</button>
            <svg
              className="text-xl"
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
          </div>
        </div>
        <div className="about-bottom-right px-10 flex items-center justify-center">
          <video className=" rounded-xl" autoPlay loop muted playsInline>
            <source src={playback} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default About;
