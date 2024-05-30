import { motion } from "framer-motion";
function Marquee({ text }) {
  return (
    <div
      // data-scroll
      // data-scroll-section
      // data-scroll-speed=".3"
      className=" bg-zinc-900 text-black"
    >
      <div className="w-full py-20 h-fit rounded-t-3xl bg-[#f6751f]">
        <div className="text border-t-2 border-b-2 border-zinc-900 flex items-center justify-center overflow-hidden whitespace-nowrap">
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
            className=" cursor-pointer font-semibold text-[70vw] md:text-[20vw] leading-none align-middle font-Founder pr-28 uppercase"
          >
            {text}
          </motion.h1>
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
            className=" cursor-pointer font-semibold text-[70vw] md:text-[20vw] leading-none align-middle font-Founder pr-28 uppercase"
          >
            {text}
          </motion.h1>
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
            className=" cursor-pointer font-semibold text-[70vw] md:text-[20vw] leading-none align-middle font-Founder pr-28 uppercase"
          >
            {text}
          </motion.h1>
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
            className=" cursor-pointer font-semibold text-[70vw] md:text-[20vw] leading-none align-middle font-Founder pr-28 uppercase"
          >
            {text}
          </motion.h1>
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
            className=" cursor-pointer font-semibold text-[70vw] md:text-[20vw] leading-none align-middle font-Founder pr-28 uppercase"
          >
            {text}
          </motion.h1>
        </div>
      </div>
    </div>
  );
}

export default Marquee;
