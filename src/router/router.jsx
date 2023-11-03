import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import Bar from "../layout/Bar";

import React from "react";
import { useSelector } from "react-redux";

const CustomRoutes = () => {
  const blocks = useSelector((state) => state.blocks);

  return blocks?.map((block) => {
    return (
      <Route path={block?.name} element={block?.element}>
        {block?.pages?.map((page) => {
          return <Route path={page?.name} element={page?.element} />;
        })}
      </Route>
    );
  });
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Bar />}>
      <Route index element={<App />} />
      {CustomRoutes}
    </Route>
  )
);

export { router };
