import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function ProgressBar({ position }) {
  const cart = useSelector((state) => state.cartSlicer.cart);
  const [scope, animate] = useAnimate();
  const totalPriceCents = cart.reduce(
    (acc, item) => item.totalPriceCents + acc,
    0
  );

  useEffect(() => {
    if (totalPriceCents >= 9999) {
      console.log("working");
      animate(scope.current, { rotateZ: [0, 3, 0, -3, 0] }, { duration: 0.2 });
      return;
    }
  }, [totalPriceCents]);

  let defaultPosition =
    "absolute sm:left-1/2 sm:translate-x-[-50%] left-3 rounded-full";

  if (position === "cart") {
    defaultPosition = "rounded-full w-full";
  }

  return (
    <motion.div
      animate={{ opacity: [0, 0, 0, 1] }}
      className={`${defaultPosition} select-none`}
    >
      <motion.div
        ref={scope}
        className={`overflow-hidden bg-stone-200 ${
          position === "cart" ? "w-full" : "w-[214px]"
        } h-[19px] rounded-xl relative`}
      >
        <motion.p className="absolute text-xs bg-none left-1/2 translate-x-[-50%] z-50">
          {totalPriceCents >= 9999 ? "Discount Applied!" : "Fill for discount!"}
        </motion.p>
        <motion.div
          layout
          className="h-full bg-yellow-900 bg-opacity-70 rounded-xl"
          style={{ width: `${(totalPriceCents / 9999) * 100}%` }}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
}
