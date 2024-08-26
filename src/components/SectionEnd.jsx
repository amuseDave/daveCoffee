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

  const reviewOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0, 1]);
  const reviewY = useTransform(
    scrollYProgress,
    [0, 0.8, 0.83, 1],
    [0, 0, -110, -110]
  );

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
      style={{ opacity: reviewOpacity, y: reviewY }}
      layout
      className="h-[60svh] flex items-center justify-center flex-col"
    >
      <h1 className="text-4xl text-stone-500">Reviews</h1>

      <AnimatePresence mode="wait">
        <Review review={review} key={review.id} />
      </AnimatePresence>
      <motion.button
        whileHover={{
          scale: "1.01",
          x: [0, -5, 5, -5, 5, -5, 0],
          opacity: 1,
          textShadow: "0px 0px 5px white",
          boxShadow: "0px 0px 5px white",
          transition: { duration: 0.15 }, // Shorter duration for hover effect
        }}
        className="px-4 py-1 mt-5 font-bold rounded-lg text-1xl text-stone-300 sm:text-3xl bg-stone-800"
      >
        <Link to="products"> Browse Our Products</Link>
      </motion.button>
    </motion.section>
  );
}
