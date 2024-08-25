import { useEffect, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { Link } from "react-router-dom";
import coffeeImg from "../assets/coffee.png";
export default function StartingSection() {
  const [isDuration, setIsDuration] = useState(false);
  const { scrollY } = useScroll();

  const coffeeImgScroll = useTransform(
    scrollY,
    [0, 300, 400, 500],
    [1, 0.5, 0.5, 0]
  );
  const productsBttn = useTransform(
    scrollY,
    [0, 300, 400, 500],
    [1, 0.5, 0.5, 0]
  );

  useEffect(() => {
    setTimeout(() => {
      setIsDuration(true);
    }, 1000);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center w-[400px] min-h-[538px] pt-10 mb-80">
      <motion.img
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: [0, 1], y: 0 }}
        transition={{ duration: 1 }}
        src={coffeeImg}
        className="brightness-50 md:w-[400px] w-[320px]"
        style={{ opacity: coffeeImgScroll }}
      />
      <motion.button
        initial={{ display: "none" }}
        animate={{ opacity: [0, 0, 1], y: [20, 20, 0], display: "block" }}
        transition={{ duration: isDuration ? 0.1 : 1, type: "tween" }}
        whileHover={{
          scale: "1.01",
          x: [0, -5, 5, -5, 5, -5, 0],
          opacity: 1,
          textShadow: "0px 0px 5px white",
          boxShadow: "0px 0px 5px white",

          transition: { duration: 0.15 }, // Shorter duration for hover effect
        }}
        className="text-stone-300 text-3xl md:text-5xl font-bold bg-stone-800 rounded-lg py-1 px-4 "
        style={{ opacity: productsBttn }}
      >
        <Link to="products"> Browse Our Products</Link>
      </motion.button>
    </div>
  );
}
