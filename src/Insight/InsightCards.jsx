import { motion } from "framer-motion";
import { useState } from "react";
const cardsData = [
  {
    tags: ["public speaking", "storytelling"],
    name: "Ihor Huly",
    Date: "26 May 23",
    title:
      " Presenting to an International Audience: Tips and Lessons Learned.",
    image:
      "https://ochi.design/wp-content/uploads/2023/11/Frame-4126-1-324x394.png",
  },
  {
    tags: ["public speaking", "storytelling"],
    name: "Ihor Huly",
    Date: "26 May 23",
    title:
      " Presenting to an International Audience: Tips and Lessons Learned.",
    image:
      "https://ochi.design/wp-content/uploads/2023/11/Frame-4126-1-324x394.png",
  },
  {
    tags: ["public speaking", "storytelling"],
    name: "Ihor Huly",
    Date: "26 May 23",
    title:
      " Presenting to an International Audience: Tips and Lessons Learned.",
    image:
      "https://ochi.design/wp-content/uploads/2023/11/Frame-4126-1-324x394.png",
  },
  {
    tags: ["public speaking", "storytelling"],
    name: "Ihor Huly",
    Date: "26 May 23",
    title:
      " Presenting to an International Audience: Tips and Lessons Learned.",
    image:
      "https://ochi.design/wp-content/uploads/2023/11/Frame-4126-1-324x394.png",
  },
  {
    tags: ["public speaking", "storytelling"],
    name: "Ihor Huly",
    Date: "26 May 23",
    title:
      " Presenting to an International Audience: Tips and Lessons Learned.",
    image:
      "https://ochi.design/wp-content/uploads/2023/11/Frame-4126-1-324x394.png",
  },
];

function InsightCards() {
  const [hoverPost, setHoverPost] = useState({ id: null, isHovered: false });
  function handleMouseEnters(id) {
    setHoverPost({ id, isHovered: true });
  }
  function handleMouseLeave() {
    setHoverPost({ id: null, isHovered: false });
  }

  return (
    <div className=" bg-slate-400 w-fit  mx-4 md:mx-10 rounded-xl text-black flex flex-col md:flex-row flex-wrap justify-center gap-5">
      {cardsData.map((item, index) => (
        <div
          key={index}
          className="card py-10 px-4 m-5 rounded-lg md:px-10 bg-slate-200 font-Neue flex flex-col max-w-[500px] gap-4"
        >
          <div className="relative overflow-hidden rounded-2xl ">
            <motion.img
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              onMouseOver={() => handleMouseEnters(index)}
              onMouseOut={() => handleMouseLeave()}
              transition={{ duration: 0.5 }}
              className=" w-full rounded-2xlcursor-pointer hover:scale-125"
              src="https://ochi.design/wp-content/uploads/2023/11/Frame-4126-1-324x394.png"
              alt="work"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={
                hoverPost && hoverPost.id === index
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
              className="flex absolute top-0"
            >
              {item.tags.map((item, index) => (
                <div
                  key={index}
                  className="post-tag  uppercase text-white border-2 rounded-full mt-5 mx-3 px-2 py-1 text-xs  font-semibold"
                >
                  {item}
                </div>
              ))}
            </motion.div>
          </div>
          <h2 className="description font-semibold text-xl">{item.title}</h2>
          <div className=" font-semibold">
            <h3 className="name">
              By <span className="underline capitalize">{item.name}</span>
            </h3>
            <h3 className="date">{item.Date}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InsightCards;
