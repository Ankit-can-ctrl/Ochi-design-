import { motion } from "framer-motion";
import Navigation from "../components/navigation bar/Navigation";
import { useEffect, useRef, useState } from "react";
import InsightCards from "./InsightCards";
const latestInsights = [
  "All",
  "presentation template",
  "public speaking",
  "storytelling",
];

function Insight() {
  const filter = useRef();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth); //to get draga constraint from left side
    setWidth(filter.current.scrollWidth - filter.current.offsetWidth);
  }, []);

  return (
    <div className="main-container bg-black">
      <div>
        <Navigation />
      </div>
      <div className="heading border-b-2 border-zinc-600">
        <h1 className="font-semibold uppercase font-Founder text-8xl py-[20%] md:text-9xl md:py-[10%] px-10">
          Insights
        </h1>
      </div>
      <div className="latest-insights">
        <div className="insights py-14 flex flex-col gap-5">
          <h1 className=" font-Neue px-10 font-semibold">Latest Insights:</h1>
          <motion.div
            ref={filter}
            className=" py-3 px-10 bg-slate-400 rounded-2xl overflow-hidden mx-6"
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="insight-tags flex gap-5"
            >
              {latestInsights.map((item, index) => (
                <a
                  key={index}
                  className="cursor-pointer text-center min-w-fit rounded-full bg-white w-full text-black px-4 py-1 font-semibold hover:text-white hover:bg-black hover:border-2 hover:border-white uppercase"
                >
                  {item}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
        <InsightCards />
      </div>
    </div>
  );
}

export default Insight;
