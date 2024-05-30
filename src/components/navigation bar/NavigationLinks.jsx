import { motion } from "framer-motion";

function NavigationLinks({ link }) {
  return (
    <div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.5 }}
        className="capitalize cursor-pointer text-2xl leading-none"
      >
        {link}
      </motion.div>
    </div>
  );
}

export default NavigationLinks;
