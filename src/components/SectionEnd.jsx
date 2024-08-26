import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reviewActions } from "../store/reviewSlicer";
import {
  AnimatePresence,
  motion,
  useTransform,
  useScroll,
} from "framer-motion";
import Review from "./Review";

export default function SectionEnd() {
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
      <AnimatePresence mode="wait">
        <Review review={review} key={review.id} />
      </AnimatePresence>
    </motion.section>
  );
}
