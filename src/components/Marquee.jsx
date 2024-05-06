import { motion } from "framer-motion";
function Marquee() {
  return (
    <div
      // data-scroll
      // data-scroll-speed=".2"
      className="w-full py-[3vh] h-fit md:h-fit rounded-3xl bg-[#004D43]"
    >
      <div className="text border-t-2 border-b-2 border-zinc-200 flex  overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className=" font-semibold text-[70vw] md:text-[20vw] leading-none font-Founder pr-20 uppercase"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className=" font-semibold text-[70vw] md:text-[20vw] leading-none font-Founder pr-20 uppercase mb-7"
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
