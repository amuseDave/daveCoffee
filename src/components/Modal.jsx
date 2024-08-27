import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
export default function Modal({ children, isVisible }) {
  const [isVisible2, setIsVisible] = useState(true);
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cartSlicer.cart);

  function handleNavigate() {
    setIsVisible(false);
    setTimeout(() => {
      navigate("..");
    }, 100); // Delay matches the exit animation duration
  }

  return (
    <AnimatePresence>
      {isVisible2 && isVisible && (
        <motion.div
          key="id1"
          exit={{ opacity: 0, transition: { duration: 0.1 } }}
          animate={{ opacity: [0, 1] }}
          onClick={handleNavigate}
          className="fixed top-0 bottom-0 left-0 right-0 z-50 backdrop bg-stone-950 bg-opacity-65"
        ></motion.div>
      )}

      {isVisible2 && isVisible && (
        <motion.dialog
          key="id2"
          initial={{ opacity: 0, x: "-50%", y: "-43%" }}
          animate={{ opacity: 1, y: "-50%" }}
          exit={{ opacity: 0, y: "-43%", transition: { duration: 0.1 } }}
          transition={{ duration: 0.3 }}
          className={`fixed p-4 pt-9 border border-stone-100 bg-stone-600 bg-opacity-70 sm:w-[320px] h-[400px] w-[300px] rounded-xl left-1/2 top-1/2 z-[300] flex flex-col ${
            cartItems.length < 1
              ? "justify-center items-center"
              : "justify-between"
          }`}
          open
        >
          {children}
        </motion.dialog>
      )}
    </AnimatePresence>
  );
}
