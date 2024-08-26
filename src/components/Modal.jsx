import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ children }) {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  function handleNavigate() {
    setIsVisible(false);
    setTimeout(() => {
      navigate("..");
    }, 100); // Delay matches the exit animation duration
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="id1"
          exit={{ opacity: 0, transition: { duration: 0.1 } }}
          animate={{ opacity: [0, 1] }}
          onClick={handleNavigate}
          className="fixed top-0 bottom-0 left-0 right-0 z-50 backdrop bg-stone-950 bg-opacity-65"
        ></motion.div>
      )}

      {isVisible && (
        <motion.dialog
          key="id2"
          initial={{ opacity: 0, x: "-50%", y: "-43%" }}
          animate={{ opacity: 1, y: "-50%" }}
          exit={{ opacity: 0, y: "-43%", transition: { duration: 0.1 } }}
          transition={{ duration: 0.3 }}
          className="fixed bg-stone-600 bg-opacity-70 w-[320px] h-[350px] rounded-xl left-1/2 top-1/2 z-[300] flex flex-col"
          open
        >
          {children}
        </motion.dialog>
      )}
    </AnimatePresence>
  );
}
