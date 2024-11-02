import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
/*eslint-disable*/

function LandingPage({ mainHeading }) {
  const isMobile = useMediaQuery({ maxWidth: "600px" });
  return (
    <div className="w-full bg-black text-white pb-20">
      <div className="text-structure pt-40 pl-5 sm:px-20">
        {mainHeading.map((item, index) => {
          return (
            <div key={index} className="masker ">
              <div className="flex items-center justify-start gap-2">
                {index === 1 && (
                  <motion.img
                    loading="lazy"
                    initial={{ width: 0 }}
                    animate={isMobile ? { width: "5rem" } : { width: "9rem" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className=" h-[50px] w-[90px] sm:h-[60px] md:w-[100px] xl:h-[100px] rounded-lg relative "
                    src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                    alt="ochi image"
                  />
                )}

                <h1 className=" text-[4rem] md:pt-5 md:text-[5.5rem] sm:text-[3.5rem] xl:text-[8rem] tracking-tight font-semibold leading-[1.5] xl:leading-[1] uppercase font-Founder ">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LandingPage;
