import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const dataArray = [
  {
    logo: "https://ochi.design/wp-content/uploads/2022/05/Asset-15.svg",
    company: "planetly",
    details:
      "Ihor and his team tackled the projects with great professionalism and creativity. They understood our brand value and turned this into excellent slide designs. The process was seamless and very effective, so we decided to roll this out across all our presentation decks. Furthermore, their understanding, professionalism, and creativity have secured a continued partnership.															",
  },
  {
    logo: "https://ochi.design/wp-content/uploads/2022/05/Logo_2-1.svg",
    company: "Nestle",
    details:
      "Ihor and his team tackled the projects with great professionalism and creativity. They understood our brand value and turned this into excellent slide designs. The process was seamless and very effective, so we decided to roll this out across all our presentation decks. Furthermore, their understanding, professionalism, and creativity have secured a continued partnership.															",
  },
  {
    logo: "https://ochi.design/wp-content/uploads/2022/05/toyota-logo-freelogovectors.net_.svg",
    company: "toyota",
    details:
      "Ihor and his team tackled the projects with great professionalism and creativity. They understood our brand value and turned this into excellent slide designs. The process was seamless and very effective, so we decided to roll this out across all our presentation decks. Furthermore, their understanding, professionalism, and creativity have secured a continued partnership.															",
  },
  {
    logo: "https://ochi.design/wp-content/uploads/2022/05/Logo_2.svg",
    company: "lexus",
    details:
      "Ihor and his team tackled the projects with great professionalism and creativity. They understood our brand value and turned this into excellent slide designs. The process was seamless and very effective, so we decided to roll this out across all our presentation decks. Furthermore, their understanding, professionalism, and creativity have secured a continued partnership.															",
  },
  {
    logo: "https://ochi.design/wp-content/uploads/2022/05/aflori-logo-freelogovectors.net_.svg",
    company: "aflorithmic",
    details:
      "Ihor and his team tackled the projects with great professionalism and creativity. They understood our brand value and turned this into excellent slide designs. The process was seamless and very effective, so we decided to roll this out across all our presentation decks. Furthermore, their understanding, professionalism, and creativity have secured a continued partnership.															",
  },
  {
    logo: "https://ochi.design/wp-content/uploads/2022/05/Asset-12.svg",
    company: "order lion",
    details:
      "Ihor and his team tackled the projects with great professionalism and creativity. They understood our brand value and turned this into excellent slide designs. The process was seamless and very effective, so we decided to roll this out across all our presentation decks. Furthermore, their understanding, professionalism, and creativity have secured a continued partnership.															",
  },
  {
    logo: "https://ochi.design/wp-content/uploads/2022/05/Picture2-1.svg",
    company: "black book",
    details:
      "Ihor and his team tackled the projects with great professionalism and creativity. They understood our brand value and turned this into excellent slide designs. The process was seamless and very effective, so we decided to roll this out across all our presentation decks. Furthermore, their understanding, professionalism, and creativity have secured a continued partnership.															",
  },
];
/*eslint-disable*/
function DragCards() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth); //to get draga constraint from left side
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div
      ref={carousel}
      className="carousel bg-black w-full py-20 px-10 overflow-hidden cursor-grab"
    >
      <motion.div
        whileTap={{ cursor: "grabbing" }}
        drag="x"
        // dragconstraints set limit to how much can you drag in each direction
        dragConstraints={{ right: 0, left: -width }}
        className="inner-carousel flex gap-10 "
      >
        {dataArray.map((item, index) => (
          <div key={index}>
            <Cards item={item} />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

function Cards({ item }) {
  return (
    <div className="card flex flex-col gap-10 min-w-[350px] bg-zinc-700 overflow-hidden p-10 rounded-2xl ">
      <div className="logo">
        <img className=" h-24" src={item.logo} alt="logo" />
      </div>
      <div className="description flex flex-col gap-5 font-semibold font-Neue">
        <h1 className=" text-2xl underline capitalize">{item.company}</h1>
        <p>{item.details}</p>
      </div>
    </div>
  );
}

export default DragCards;
