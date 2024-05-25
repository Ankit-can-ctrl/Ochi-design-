import { motion } from "framer-motion";

function NewTest({ text }) {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        className="relative text-4xl font-bold"
        animate={{
          y: [0, -20, 0], // The vertical movement sequence
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.div>
    </div>
  );
}
export default NewTest;
