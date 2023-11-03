import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { RouterProvider } from "react-router-dom";
import Router from "./router/router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={Router()}>
      <App />
    </RouterProvider>
  </Provider>
);
