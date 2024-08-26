import { configureStore } from "@reduxjs/toolkit";
import reviewSlicer from "./reviewSlicer";

const store = configureStore({ reducer: { reviewSlicer } });

export default store;
