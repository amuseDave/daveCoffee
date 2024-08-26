import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export default function Modal({ children }) {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("..");
  }
  return (
    <>
      <motion.div
        animate={{ opacity: [0, 1] }}
        onClick={handleNavigate}
        className="fixed top-0 bottom-0 left-0 right-0 z-50 backdrop bg-stone-950 bg-opacity-65"
      ></motion.div>

      <motion.dialog
        initial={{ x: "-50%" }}
        animate={{ opacity: [0, 1], y: [30, 0] }}
        className="bg-stone-600 bg-opacity-70 w-[320px] h-[350px] rounded-xl left-1/2 translate-x-1/2 z-[300] flex flex-col"
        open
      >
        {children}
      </motion.dialog>
    </>
  );
}
