const mainHeadnig = ["We Create", "Eye Opening", "Presentations"];
import { motion } from "framer-motion";
function LandingPage() {
  return (
    <div
      // data-scroll allows us to vary speed of scroll of the element
      // data-scroll-section tells it is a different section
      // data-scroll-speed tells the speed of scroll
      // data-scroll
      // data-scroll-speed="-.3"
      className="w-full bg-zinc-900 pt-1"
    >
      <div className="text-structure pt-40 pl-4 sm:px-20">
        {mainHeadnig.map((item, index) => {
          return (
            <div key={index} className="masker ">
              <div className="flex items-center justify-start gap-2">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100px" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="h-[50px] w-[90px] sm:h-[60px] md:w-[100px] xl:h-[100px] rounded-lg relative top-2  bg-green-500"
                  ></motion.div>
                )}

                <h1 className=" text-[2.5rem] md:text-[6rem] sm:text-[4rem] xl:text-[8rem] tracking-tighter font-semibold leading-[1.5] xl:leading-[1] uppercase font-Founder ">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex flex-col lg:flex-row gap-10 items-start lg:items-center lg:justify-between lg:px-20 py-20 pl-5">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className=" font-Founder text-xl font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="button flex items-center gap-5">
          <button className="uppercase border-[1px] border-zinc-400 font-light rounded-full px-4 py-3 ">
            Start the project
          </button>
          <button className="arrow flex items-center justify-center border-[1px] rounded-full h-12 w-12">
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

export default LandingPage;
