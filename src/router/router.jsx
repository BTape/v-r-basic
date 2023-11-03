import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import Bar from "../layout/Bar";

import React from "react";
import Elements from "../pages/Elements";
import Page from "../pages/Page";

const Router = () => {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Bar />}>
        <Route index element={<App />} />
        <Route path=":name" element={<Elements />} />
        <Route path=":name/:page" element={<Page />} />
      </Route>
    )
  );
};

export default Router;
