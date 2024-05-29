import { motion } from "framer-motion";
import playback720 from "../img/about720.mp4";

function About() {
  return (
    <div className="  bg-[#004D43]">
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
            <div className=" text-left md:pr-32">
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
        <div className="about-bottom-right md:flex md:h-screen w-full overflow-hidden relative items-center justify-center">
          <motion.h1
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="hidden md:block font-Founder w-full absolute text-8xl font-extrabold"
          >
            Flow{" "}
          </motion.h1>
          <video
            className=" rounded-xl md:z-10 object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={playback720} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default About;
