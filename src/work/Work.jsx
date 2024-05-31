// import Eyes from "../components/Eyes";
import { useEffect, useState } from "react";
import Featured from "../components/Featured";
import Marquee from "../components/Marquee";
import { motion } from "framer-motion";
import ReadyToStart from "../components/ReadyToStart";
import Footer from "../components/Footer";
import Navigation from "../components/navigation bar/Navigation";
import PublicationCards from "./PublicationCards";

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
        <Navigation />
      </div>
      <div className=" bg-black">
        <div className="work-eyes h-fit rounded-t-3xl bg-[#d5f269] pt-20 overflow-hidden">
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
      </div>
      <div className="projects  bg-[#96ac3f]">
        <div className="projects rounded-t-2xl overflow-hidden">
          <Featured />
        </div>
      </div>
      <div className="work-marquee">
        <Marquee text="Hire Me!" />
        <div className="publication-cards text-black bg-orange-500">
          <PublicationCards />
        </div>
      </div>
      <div className=" bg-[#D5F269]">
        <div className=" bg-orange-500 overflow-hidden">
          <ReadyToStart />
        </div>
      </div>
      <div className=" bg-[#d5f269]">
        <Footer />
      </div>
    </div>
  );
}

export default Work;
