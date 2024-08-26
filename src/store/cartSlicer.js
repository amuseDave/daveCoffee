import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  discountCodes: ["COFFEELOVER", "SUMMERCOFFEE"],
};
const cartSlicer = createSlice({ name: "cart", initialState, reducers: {} });
