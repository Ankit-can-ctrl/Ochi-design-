import { easeInOut, motion } from "framer-motion";
import { useEffect, useState } from "react";

function Question({ question, answer }) {
  const [onHover, setOnHover] = useState(false);
  const handleOnHover = () => {
    setOnHover(!onHover);
  };
  const handleNotHover = () => {
    setOnHover(false);
  };
  const isMobile = useIsMobile();

  return (
    <div className="">
      {question && (
        <div className="my-20 mx-10 flex flex-col items-center gap-5 justify-center">
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 1, ease: easeInOut }}
            onClick={isMobile ? handleOnHover : undefined}
            onMouseOver={!onHover && !isMobile ? handleOnHover : undefined}
            onMouseOut={handleNotHover}
            className="question text-center capitalize cursor-pointer p-5 font-bold hover:text-black hover:bg-white overflow-hidden md:text-2xl py-2  w-full border-2 rounded-xl "
          >
            {question}
          </motion.div>
          {onHover && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              transition={{ duration: 1, ease: easeInOut }}
              className="answer text-center h-fit bg-[#CDEA68] text-black capitalize lg:h-[100px] w-full flex items-center justify-center font-bold md:text-xl border-2 rounded-xl"
            >
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1, ease: easeInOut }}
                className="p-5"
              >
                {answer}
              </motion.h1>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
}

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isMobile;
};

export default Question;
