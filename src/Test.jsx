import React, { useState } from "react";
import { motion } from "framer-motion";

const Test = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const links = ["Home", "About", "Services", "Contact"];

  return (
    <nav className="p-4 bg-white shadow-md">
      <ul className="flex space-x-8">
        {links.map((link, index) => (
          <li
            key={index}
            className="relative cursor-pointer"
            onMouseEnter={() => setSelectedIndex(index)}
            onMouseLeave={() => setSelectedIndex(null)}
          >
            {link}
            {selectedIndex === index && (
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-black"
                layoutId="underline"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Test;
