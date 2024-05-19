import { motion } from "framer-motion";

import { useEffect, useState } from "react";
import img1 from "../img/office/1.jpg";
import img2 from "../img/office/2.jpg";
import img3 from "../img/office/3.jpg";
import img4 from "../img/office/4.jpg";
import img5 from "../img/office/5.jpg";
function ImageSlider() {
  const [positionIndexes, setpositionIndexes] = useState([0, 1, 2, 3, 4]);

  function handleNext() {
    setpositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  }

  const images = [img1, img2, img3, img4, img5];
  const positions = ["center", "left1", "left", "right", "right1"];
  const imageVariants = {
    mobile: {
      center: { y: "0%", scale: 1, zIndex: 5 },
      left1: { y: "-50%", scale: 0.7, zIndex: 2, filter: "blur(2px)" },
      left: { y: "-90%", scale: 0.5, zIndex: 1, filter: "blur(5px)" },
      right: { y: "90%", scale: 0.5, zIndex: 1, filter: "blur(5px)" },
      right1: { y: "50%", scale: 0.7, zIndex: 2, filter: "blur(2px)" },
    },
    desktop: {
      center: { x: "0%", scale: 1, zIndex: 5 },
      left1: { x: "-50%", scale: 0.7, zIndex: 2, filter: "blur(2px)" },
      left: { x: "-90%", scale: 0.5, zIndex: 1, filter: "blur(5px)" },
      right: { x: "90%", scale: 0.5, zIndex: 1, filter: "blur(5px)" },
      right1: { x: "50%", scale: 0.7, zIndex: 2, filter: "blur(2px)" },
    },
  };
  const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState("desktop");

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScreenSize("mobile");
      } else {
        setScreenSize("desktop");
      }
    };

    useEffect(() => {
      window.addEventListener("resize", handleResize);
      handleResize(); // Initial call
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return screenSize;
  };
  const screenSize = useScreenSize();

  return (
    <div className=" relative overflow-hidden bg-blackbg-[#004D43] h-screen flex items-center flex-col  justify-center">
      {images.map((image, index) => (
        <motion.img
          src={image}
          alt={image}
          key={index}
          className=" rounded-3xl w-[100%] md:w-[50%]"
          variants={imageVariants[screenSize]}
          initial="center"
          animate={positions[positionIndexes[index]]}
          transition={{ duration: 0.5 }}
          style={{ position: "absolute" }}
        />
      ))}

      <button
        onClick={() => handleNext()}
        className=" z-50 absolute bottom-20 md:bottom-14 rounded-3xl bg-[#004D43] text-white border-4 border-white px-6 font-bold text-xl hover:bg-white hover:text-[#004D43] hover:scale-125 transition-all py-3"
      >
        Next
      </button>
    </div>
  );
}

export default ImageSlider;
