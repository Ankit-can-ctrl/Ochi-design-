import { useState } from "react";
import { useEffect } from "react";

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
      <div
        // data-scroll
        // data-scroll-speed="-.7"
        className=" relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]"
      >
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
          <div className="each-eye-main flex items-center justify-center h-[30vw] w-[30vw] md:w-[15vw] md:h-[15vw] rounded-full bg-zinc-100">
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
          <div className="each-eye-main flex items-center justify-center h-[30vw] w-[30vw] md:w-[15vw] md:h-[15vw] rounded-full bg-zinc-100">
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
      </div>
    </div>
  );
}

export default Eyes;
