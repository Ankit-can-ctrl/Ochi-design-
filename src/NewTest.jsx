import { motion } from "framer-motion";

function NewTest() {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        className="relative p-4 bg-blue-500 text-white rounded-md"
        whileHover={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center p-4 bg-green-500 text-white rounded-md"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <p className="text-white">Here is the answer to the question.</p>
        </motion.div>
        <p>Hover over to see the answer</p>
      </motion.div>
    </div>
  );
}
export default NewTest;
