import { createSlice } from "@reduxjs/toolkit";

export const blocksSlice = createSlice({
  name: "blocks",

  initialState: {
    element: null,
  },

  reducers: {},
});

export const {} = blocksSlice.actions;
export default blocksSlice.reducer;
