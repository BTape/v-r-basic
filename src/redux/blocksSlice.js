import { createSlice } from "@reduxjs/toolkit";
import vite from "/vite.svg";
import react from "/react.svg";
import redux from "/redux.png";

export const blocksSlice = createSlice({
  name: "blocks",

  initialState: {
    modules: [
      {
        name: "react",
        icon: react,
        class: "spin",
        pages: [
          { name: "react-router-dom" },
          { name: "estoEsUnaPrueba" },
          { name: "test2" },
          { name: "testeando" },
          { name: "test4" },
          { name: "nombreLargo1" },
          { name: "otroNombreLargo2" },
          { name: "test3" },
          { name: "testDeLosTest" },
          { name: "ocupandoEspacio" },
          { name: "nombreLargo11231" },
          { name: "otroNombreLargo212312" },
          { name: "test3543" },
          { name: "testDeLosTest23983" },
        ],
      },
      {
        name: "vite",
        icon: vite,
        class: "",
        pages: [{ name: "config" }],
      },
      {
        name: "redux-toolkit",
        icon: redux,
        class: "",
        pages: [{ name: "config" }],
      },
    ],
    element: null,
  },

  reducers: {},

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
