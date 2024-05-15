// import Eyes from "../components/Eyes";
import { useEffect, useState } from "react";
import NewNavbar from "../components/Newcomponents/NewNavbar";
import Featured from "../components/Featured";
import Marquee from "../components/Marquee";
import { motion } from "framer-motion";
import ReadyToStart from "../components/ReadyToStart";
import Footer from "../components/Footer";

const publicationData = [
  {
    name: "OfficeVibe PPT Template",
    image:
      "https://ochi.design/wp-content/uploads/2022/05/Frame-3878-325x325.jpg",
  },
  {
    name: "OfficeVibe PPT Template",
    image:
      "https://ochi.design/wp-content/uploads/2022/05/Frame-3878-325x325.jpg",
  },
  {
    name: "OfficeVibe PPT Template",
    image:
      "https://ochi.design/wp-content/uploads/2022/05/Frame-3878-325x325.jpg",
  },
];

function Work() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    // to track mouse position
    window.addEventListener("mousemove", (e) => {
      // setting variable for position of each coordinate
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });
  return (
    <div className="main-work-container">
      <div className="work-nav">
        <NewNavbar />
      </div>
      <div className="work-eyes h-fit bg-[#d5f269] pt-20 overflow-hidden">
        <h1 className="text-left font-Neue text-gray-800 px-14 md:text-[150px] leading-loose py-10 text-8xl font-bold tracking-tighter">
          Work
        </h1>
        <div className="eyes relative flex flex-col items-center justify-center">
          <div className=" flex gap-5 md:gap-10 items-center justify-center">
            <div className="each-eye-main flex items-center justify-center h-[150px] w-[150px] md:h-[200px] md:w-[200px] rounded-full bg-zinc-100">
              <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
                <div
                  style={{
                    transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                  }}
                  className=" line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-10"
                >
                  <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>
            <div className="each-eye-main flex items-center justify-center h-[150px] w-[150px] md:h-[200px] md:w-[200px] rounded-full bg-zinc-100">
              <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
                <div
                  style={{
                    transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                  }}
                  className=" line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-10"
                >
                  <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>
          </div>
          <div className=" absolute bottom-0 top-28 bg-[#a6bf49] rounded-3xl w-full md:w-[80%] h-32"></div>
          <div className=" absolute bottom-0 top-32 md:top-36 bg-[#96ac3f] rounded-3xl w-full md:w-[90%] h-32"></div>
        </div>
      </div>
      <div className="projects  bg-[#96ac3f]">
        <div className="projects rounded-t-2xl overflow-hidden">
          <Featured />
        </div>
      </div>
      <div className="work-marquee">
        <Marquee />
        <div className="publication-cards text-white  bg-[#004D43]">
          <div className=" py-10 px-5 flex flex-col gap-10 ">
            <h1 className=" font-Neue font-semibold text-2xl ">
              Latest Publications:
            </h1>
            <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
              {" "}
              {publicationData.map((item, index) => (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  key={index}
                  className="cards flex flex-col gap-4 "
                >
                  <div className="card overflow-hidden">
                    <img
                      className="rounded-2xl "
                      src={item.image}
                      alt="cards"
                    />
                  </div>
                  <div className="name px-2 flex items-center justify-start gap-5">
                    <span>
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
                    </span>
                    <h1 className=" font-Neue text-md font-semibold">
                      {item.name}
                    </h1>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#004D43]">
        <div className=" rounded-t-2xl overflow-hidden">
          <ReadyToStart />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Work;
