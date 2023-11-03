import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import Bar from "../layout/Bar";

import React from "react";
import { useSelector } from "react-redux";
import Elements from "../pages/Elements";

//   return blocks.map((block) => {
//     <Route path={block?.name} element={<Elements />} />;
//   });
// };

const Router = () => {
  //   const blocks = useSelector((state) => state.blocks);

  return createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Bar />}>
        <Route index element={<App />} />
        <Route path=":element" element={<Elements />} />
      </Route>
    )
  );
};

export default Router;
