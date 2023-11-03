import { configureStore } from "@reduxjs/toolkit";
import blocksSlice from "./blocksSlice";

export const store = configureStore({
  reducer: {blocks:blocksSlice},
});
