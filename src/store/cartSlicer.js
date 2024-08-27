import { createSlice } from "@reduxjs/toolkit";

import p1 from "../assets/product1.jpg";
import p2 from "../assets/product2.jpg";
import p3 from "../assets/product3.jpg";
import p4 from "../assets/product4.jpg";
import p5 from "../assets/product5.jpg";
import p6 from "../assets/product6.jpg";
import p7 from "../assets/product7.jpg";
import p8 from "../assets/product8.jpg";
import p9 from "../assets/product9.jpg";

const initialState = {
  cart: [],
  discountCodes: ["COFFEELOVER", "SUMMERCOFFEE"],
  products: [
    {
      id: "c1",
      img: p1,
      title: "African Coffee",
      priceCents: 499,
      selectedQuantity: 1,
    },
    {
      id: "c2",
      img: p2,
      title: "best coffee",
      priceCents: 999,
      selectedQuantity: 1,
    },
    {
      id: "c3",
      img: p3,
      title: "best coffee",
      priceCents: 499,
      selectedQuantity: 1,
    },
    {
      id: "c4",
      img: p4,
      title: "best coffee",
      priceCents: 999,
      selectedQuantity: 1,
    },
    {
      id: "c5",
      img: p5,
      title: "best coffee",
      priceCents: 499,
      selectedQuantity: 1,
    },
    {
      id: "c6",
      img: p6,
      title: "best coffee",
      priceCents: 299,
      selectedQuantity: 1,
    },
    {
      id: "c7",
      img: p7,
      title: "best coffee",
      priceCents: 249,
      selectedQuantity: 1,
    },
    {
      id: "c8",
      img: p8,
      title: "best coffee",
      priceCents: 199,
      selectedQuantity: 1,
    },
    {
      id: "c9",
      img: p9,
      title: "best coffee",
      priceCents: 899,
      selectedQuantity: 1,
    },
  ],
};
const cartSlicer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      const cartIndex = state.cart.findIndex(
        (cartItem) => cartItem.id === action.payload
      );

      if (cartIndex === -1) {
        state.cart.push({
          quantity: product.selectedQuantity,
          title: product.title,
          priceCents: product.priceCents,
          totalPriceCents: product.priceCents * product.selectedQuantity,
          img: product.img,
          id: product.id,
        });
      } else {
        state.cart[cartIndex].quantity += product.selectedQuantity;
        state.cart[cartIndex].totalPriceCents +=
          product.selectedQuantity * product.priceCents;
      }
      product.selectedQuantity = 1;
    },
    removeItem() {},
    increaseQuantity(state, action) {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload
      );
      state.products[productIndex].selectedQuantity++;
    },
    decreaseQuantity(state, action) {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload
      );
      state.products[productIndex].selectedQuantity--;
    },
  },
});

export const cartActions = cartSlicer.actions;
export default cartSlicer.reducer;
