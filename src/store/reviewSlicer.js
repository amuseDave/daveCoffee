import review1 from "../assets/review1.jpg";
import review2 from "../assets/review2.jpg";
import review3 from "../assets/review3.jpg";
import review4 from "../assets/review4.jpg";
import review5 from "../assets/review5.jpg";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: [
    { img: review1, id: "r1", text: "Heavenly Brew" },
    { img: review2, id: "r2", text: "Rich Flavor" },
    { img: review3, id: "r3", text: "Exceptional Taste" },
    { img: review4, id: "r4", text: "Coffee Bliss" },
    { img: review5, id: "r5", text: "Rich Flavor" },
  ],
  activeReview: { img: review1, id: "r1", text: "Heavenly Brew" },
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
