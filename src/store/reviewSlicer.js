import { createSlice } from "@reduxjs/toolkit";

import r1 from "../assets/review1.jpg";
import r2 from "../assets/review2.jpg";
import r3 from "../assets/review3.jpg";
import r4 from "../assets/review4.jpg";
import r5 from "../assets/review5.jpg";

const initialState = {
  reviews: [
    { img: r1, id: "r1", text: "Heavenly Brew" },
    { img: r2, id: "r2", text: "Rich Flavor" },
    { img: r3, id: "r3", text: "Exceptional Taste" },
    { img: r4, id: "r4", text: "Coffee Bliss" },
    { img: r5, id: "r5", text: "Perfectly Balanced" },
  ],
  activeReview: { img: r1, id: "r1", text: "Heavenly Brew" },
};

const reviewSlicer = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    changeReview(state) {
      if (state.activeReview.id === "r5") {
        state.activeReview = state.reviews[0];
      } else {
        const activeIndex = state.reviews.findIndex(
          (review) => review.id === state.activeReview.id
        );
        state.activeReview = state.reviews[activeIndex + 1];
      }
    },
  },
});

export const reviewActions = reviewSlicer.actions;
export default reviewSlicer.reducer;
