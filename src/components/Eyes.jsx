import { useState } from "react";
import { useEffect } from "react";
import BaseEyes from "./BaseEyes";

function Eyes() {
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
    <div className="w-full h-screen">
      <div className=" relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
          <BaseEyes />
        </div>
      </div>
    </div>
  );
}

export default Eyes;
