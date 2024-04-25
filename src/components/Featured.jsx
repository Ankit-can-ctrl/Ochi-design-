import { motion } from "framer-motion";
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
  return (
    <div className="w-full h-min py-20  bg-black">
      <div className="w-full  border-b-[.1px] border-zinc-600 pb-10">
        <h1 className="px-20 tracking-tighter font-Neue text-[3.5vw] ">
          Featured Projects
        </h1>
      </div>
      <div className="w-full gap-10 grid grid-cols-2 projects p-20">
        {projectsArr.map((item, index) => (
          <div key={index} className="project-container h-full w-full">
            <div className=" project-title text-xl flex items-center justify-start gap-4 px-14 h-[4vw] bg-black">
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
            <div className="project-img px-10 h-[80%]">
              <motion.img
                whileHover={{
                  scale: 0.95,
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
                className="rounded-lg  flex items-center justify-center h-full w-full "
                src={item.img}
                alt="project image"
              />
            </div>
            <div className="project-tags px-14 py-5 flex gap-4">
              {item.tags.map((item, index) => (
                <button
                  key={index}
                  className=" text-white border-[2px] border-white px-3 uppercase py-1 rounded-2xl"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;
