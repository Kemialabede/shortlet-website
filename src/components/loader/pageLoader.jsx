import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PageLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // page load duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          className="fixed top-0 left-0 w-full h-full z-[9999] flex items-center justify-center bg-gradient-to-br from-[#F1E1C6] to-[#FAF9F6]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          {/* Outer expanding circle */}
          <motion.div
            className="absolute rounded-full border-2 border-[#E76F51] opacity-40"
            style={{ width: 60, height: 60 }}
            animate={{ scale: [1, 2, 1], opacity: [0.4, 0.1, 0.4] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />

          {/* Inner core */}
          <motion.div
            className="rounded-full bg-[#E76F51]"
            style={{ width: 16, height: 16 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
