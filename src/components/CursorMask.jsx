import { motion } from "framer-motion";

function CursorMask() {
  return (
    <div className=" bg-black w-full h-screen">
      <Mask />
    </div>
  );
}

export default CursorMask;

function Mask() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 4 }}
      className="mask flex items-center justify-center h-28 w-28 bg-[#CDEA68]  rounded-full"
    >
      <h1 className=" text-black text-xl font-Neue font-semibold">Drag</h1>
    </motion.div>
  );
}
