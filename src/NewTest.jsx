import { motion } from "framer-motion";

function NewTest() {
  return (
    <div className="overflow-hidden whitespace-nowrap relative w-full">
      <motion.div
        className="inline-block will-change-transform"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 10, // Adjust duration for speed
        }}
        style={{ display: "flex" }}
      >
        <div className="flex-shrink-0 px-10">
          Your scrolling text goes here. Your scrolling text goes here.
        </div>
        <div className="flex-shrink-0 px-10">
          Your scrolling text goes here. Your scrolling text goes here.
        </div>
      </motion.div>
    </div>
  );
}
export default NewTest;
