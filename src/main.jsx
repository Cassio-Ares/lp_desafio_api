import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/home/Home";
import SearchFlags from "./views/Search_Flags/SearchFlags";
import Details from "./views/Details/Details";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },

  {
    path: "/SearchFlags",
    element: <SearchFlags/>,
  },
  
  {
    path: "/details/:tld",
    element: <Details/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
