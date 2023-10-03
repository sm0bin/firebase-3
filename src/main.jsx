import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./components/Root";
import Hero from "./components/Hero";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import AuthProvider from "./providers/AuthProvider";
import Table from "./components/Table";
import PrivateRoutes from "./routes/PrivateRoutes";
import Profile from "./components/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Hero></Hero>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/table",
        element: (
          <PrivateRoutes>
            <Table></Table>
          </PrivateRoutes>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
