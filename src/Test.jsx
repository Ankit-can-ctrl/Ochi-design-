import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function Test() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 700, damping: 60 });
  const springY = useSpring(y, { stiffness: 700, damping: 60 });

  const handleMouseMove = (e) => {
    x.set(e.clientX);
    y.set(e.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      transition={{ ease: [0.76, 0, 0.24, 1] }}
      style={{
        x: springX,
        y: springY,
      }}
      className="fixed w-12 h-12 bg-blue-500 rounded-full pointer-events-none"
    />
  );
}

export default Test;
