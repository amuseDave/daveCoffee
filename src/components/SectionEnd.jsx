import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reviewActions } from "../store/reviewSlicer";
import { Link } from "react-router-dom";
import {
  AnimatePresence,
  motion,
  useTransform,
  useScroll,
} from "framer-motion";
import Review from "./Review";

export default function SectionEnd() {
  const { scrollYProgress } = useScroll();
  const dispatch = useDispatch();
  const timeout = useRef();
  const review = useSelector((state) => state.reviewSlicer.activeReview);

  useEffect(() => {
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      dispatch(reviewActions.changeReview());
    }, 4000);

    return () => {
      clearTimeout(timeout.current);
    };
  }, [review, dispatch]);

  return (
    <motion.section
      layout
      className="h-[60svh] flex items-center justify-center relative"
    >
      <h1 className="text-8xl text-stone-500 absolute top-0 left-[50%] translate-x-[-50%]">
        Reviews
      </h1>

      <motion.button
        whileHover={{
          scale: "1.01",
          x: [0, -5, 5, -5, 5, -5, 0],
          opacity: 1,
          textShadow: "0px 0px 5px white",
          boxShadow: "0px 0px 5px white",
          transition: { duration: 0.15 }, // Shorter duration for hover effect
        }}
        className="absolute px-4 py-1 mb-5 text-3xl font-bold rounded-lg sm:bottom-0 bottom-12 text-stone-300 sm:text-5xl bg-stone-800"
      >
        <Link to="products"> Browse Our Products</Link>
      </motion.button>

      <AnimatePresence mode="wait">
        <Review review={review} key={review.id} />
      </AnimatePresence>
    </motion.section>
  );
}
