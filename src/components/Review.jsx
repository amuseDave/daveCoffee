import { motion } from "framer-motion";

export default function Review({ review }) {
  return (
    <motion.div
      layout
      animate={{ opacity: [0, 1], x: [20, 0] }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col items-center justify-center"
    >
      <img
        src={review.img}
        className="sm:w-[320px] sm:h-[320px] h-[280px] w-[280px] object-cover rounded-full brightness-50"
        alt="review"
      />
      <p className="text-4xl text-white sm:text-7xl">"{review.text}"</p>
    </motion.div>
  );
}
