import { configureStore } from "@reduxjs/toolkit";
import reviewSlicer from "./reviewSlicer";
import cartSlicer from "./cartSlicer";

const store = configureStore({ reducer: { reviewSlicer, cartSlicer } });

export default store;
