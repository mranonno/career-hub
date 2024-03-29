import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import Error from "./Components/Error/Error";
import JobDetails from "./Components/JobDetails/JobDetails";
import AppliedJobCart from "./Components/AppliedJobCart/AppliedJobCart";
import { HelmetProvider } from "react-helmet-async";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/applied",
        loader: () => fetch("../public/jobs.json"),
        element: <AppliedJobCart></AppliedJobCart>,
      },
      {
        path: "/statistics",
        element: <h4>Statistics</h4>,
      },
      {
        path: "/job/:id",
        loader: () => fetch("../public/jobs.json"),
        element: <JobDetails></JobDetails>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);