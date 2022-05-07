import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Users from "./Pages/Users";
import AddUsers from "./Pages/AddUsers";
import EditUsers from "./Pages/EditUsers";
import NavUsers from "./Pages/NavUsers";
import About from "./Components/About";

const Router = () => {
  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "about", element: <About /> },
    { path: "Login", element: <Login /> },
    { path: "Register", element: <Register /> },
    {
      path: "/Users",
      element: <NavUsers />,
      children: [
        {
          path: "Users-Data",
          element: <Users />,
        },
        {
          path: "Add-User",
          element: <AddUsers />,
        },
        {
          path: "Edit-User/:id",
          element: <EditUsers />,
        },
      ],
    },
  ]);

  return element;
};

export default Router;
