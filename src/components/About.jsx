import playback from "../img/about.mp4";

function About() {
  return (
    <div
      // data-scroll
      // data-scroll-section
      // data-scroll-speed=".2"
      className="w-full rounded-t-3xl font-Neue text-black bg-[#d5f269] pb-10"
    >
      <div className="about-top w-full">
        <h1 className=" text-3xl md:text-5xl font-semibold py-20 pl-10 text-left md:pr-[30%]">
          Ochi is a strategic partner for fast-growing tech <br /> businesses
          that need to <span className=" underline">raise funds</span> , sell
          products,
          <br />
          <span className=" underline"> explain complex ideas</span> ,and
          <span className=" underline"> hire great people.</span>
        </h1>
        <div className=" pt-0 mt-7 border-t-[1px] border-zinc-500 flex justify-between items-center py-10 px-20"></div>
      </div>
      <div className="about-mid px-10 xl:grid xl:grid-cols-2 text-xl font-medium font-Neue">
        <h1 className="font pb-5">What you can expect:</h1>
        <div className="about-mid-desc xl:flex xl:gap-10">
          <div className=" text-left pr-32">
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
          <div className="about-links pt-10 flex flex-col items-start gap-4 justify-end">
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
      <div className="about-bottom font-Neue flex flex-col gap-10 md:flex-row">
        <div className="about-bottom-left flex flex-col px-10 items-start gap-5">
          <h1 className=" text-4xl font-semibold md:text-6xl">Our approach:</h1>
          <div className="about-bottom-button rounded-full flex items-center justify-between gap-5 px-10 text-white h-[4rem] w-fit bg-black">
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
        <div className="about-bottom-right px-10">
          <video className=" rounded-xl" autoPlay loop muted playsInline>
            <source src={playback} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default About;
