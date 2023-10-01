import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Root } from "postcss";
import Hero from "./components/Hero";
import Header from "./components/Header";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Header></Header>,
    element: <div>Hola</div>,
    children: [
      {
        path: "/",
        element: <div>hello</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
