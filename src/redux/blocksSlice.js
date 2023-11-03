import { createSlice } from "@reduxjs/toolkit";
import viteLogo from "/vite.svg";
import reactLogo from "/react.svg";

export const blocksSlice = createSlice({
  name: "blocks",

  initialState: {
    modules: [
      {
        name: "react",
        icon: reactLogo,
        class: "spin",
        element: "",
        pages: [{ name: "react-router-dom", element: "" }],
      },
      { name: "vite", icon: viteLogo, class: "", element: "", pages: [] },
    ],
    element: null,
  },

  reducers: {
    // pageSet: (state, action) => {
    //   state.page = action.payload;
    // },
  },

  extraReducers(builder) {
    // builder.addCase(pagesGet.pending, (state) => {
    //   state.status = 100;
    //   state.loader = true;
    // });
    // builder.addCase(pagesGet.fulfilled, (state, action) => {
    //   // console.log(action.payload);
    //   state.status = action.payload.status;
    //   state.pages = action.payload.data;
    //   state.loader = false;
    // });
    // builder.addCase(createPage.pending, (state) => {
    //   state.status = 100;
    //   state.loader = true;
    // });
    // builder.addCase(createPage.fulfilled, (state, action) => {
    //   state.status = null;
    // });
    // builder.addCase(deletePage.pending, (state) => {
    //   state.status = 100;
    //   state.loader = true;
    //   state.page = {};
    //   state.pages = [];
    // });
    // builder.addCase(deletePage.fulfilled, (state, action) => {
    //   state.status = null;
    // });
  },
});

export const {} = blocksSlice.actions;
export default blocksSlice.reducer;
