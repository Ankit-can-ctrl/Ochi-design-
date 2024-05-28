import { motion } from "framer-motion";

const Test = () => {
  return (
    <div className="relative inline-block group">
      <span className="relative z-10">Hover over me</span>
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-black origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default Test;
