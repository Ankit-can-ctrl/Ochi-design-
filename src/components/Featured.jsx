import { motion } from "framer-motion";
import { useState } from "react";
const projectsArr = [
  {
    name: "fyde",
    img: "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png",
    tags: ["audit", "copywriting", "sales deck", "slides design"],
  },
  {
    name: "hyp",
    img: "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png",
    tags: ["audit", "copywriting", "sales deck", "slides design"],
  },
  {
    name: "doms",
    img: "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png",
    tags: ["audit", "copywriting", "sales deck", "slides design"],
  },
  {
    name: "saheme",
    img: "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png",
    tags: ["audit", "copywriting", "sales deck", "slides design"],
  },
];

function Featured() {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div className="w-full h-min py-20  bg-black">
      <div className="w-full  border-b-[.1px] border-zinc-600 pb-10">
        <h1 className="px-20 tracking-tighter font-Neue text-[3.5vw] ">
          Featured Projects
        </h1>
      </div>
      <div className="w-full gap-10 xl:grid xl:grid-cols-2 projects py-20 px-5 xl:px-20">
        {projectsArr.map((item, index) => (
          <div key={index} className="project-container h-full w-full">
            <div className=" project-title text-xl flex items-center justify-start gap-4 xl:px-14 py-9 h-[4vw] bg-black">
              <svg
                color="white"
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 8 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path>
              </svg>

              <span className="heading text-base font-semibold uppercase font-Neue text-zinc-50">
                {item.name}
              </span>
            </div>
            <div
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="project-img relative"
            >
              <motion.img
                whileTap={{
                  scale: 0.95,
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
                whileHover={{
                  scale: 0.95,
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
                className="  rounded-lg  flex items-center justify-center h-full w-full "
                src={item.img}
                alt="project image"
              />
              <motion.h1
                initial={{ opacity: 0 }}
                animate={isHovering ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1 }}
                className="uppercase text-[#CDEA68] md:text-6xl text-4xl top-[50%] left-[30%] md:left-[40%] xl:top-1/2 xl:left-[16vw]  font-Founder font-bold tracking-tighter absolute"
              >
                {item.name}
              </motion.h1>
            </div>
            <div className="project-tags xl:px-14 py-5 flex gap-4 flex-wrap">
              {item.tags.map((item, index) => (
                <button
                  key={index}
                  className=" text-white border-[2px]  border-white px-3 uppercase py-1 rounded-2xl"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="projects-btn w-full px-20 py-10 flex items-center justify-center">
        <motion.button
          whileTap={{ scale: 1.1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className=" bg-white text-black rounded-full text-md xl:text-xl font-Neue font-semibold flex items-center justify-center gap-4 capitalize border-[1px] px-6 py-4"
        >
          view all work
          <span>
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
          </span>
        </motion.button>
      </div>
    </div>
  );
}

export default Featured;
