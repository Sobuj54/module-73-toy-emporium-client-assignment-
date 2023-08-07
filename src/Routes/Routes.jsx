import { createBrowserRouter } from "react-router-dom";
import LayOut from "../Layout/LayOut";
import Home from "../pages/home/home/Home";
import LogIn from "../pages/Login/LogIn";
import Register from "../pages/Register/Register";
import ViewDetails from "../viewDetails/ViewDetails";
import PrivateRoute from "./private/PrivateRoute";
import Blogs from "../pages/Blogs/Blogs";
import AddAToy from "../pages/AddAToy/AddAToy";
import AllToys from "../pages/AllToys/AllToys";
import Details from "../pages/AllToys/Details";
import MyToys from "../pages/MyToys/MyToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <LogIn></LogIn>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "viewDetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-cars-market-place-server.vercel.app/toys/${params.id}`
          ),
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "addAToy",
        element: (
          <PrivateRoute>
            <AddAToy></AddAToy>
          </PrivateRoute>
        ),
      },
      {
        path: "allToys",
        element: <AllToys></AllToys>,
        loader: () =>
          fetch(
            `https://toy-cars-market-place-server.vercel.app/addedToys?limit=${20}`
          ),
      },
      {
        path: "details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-cars-market-place-server.vercel.app/addedToys/${params.id}`
          ),
      },
      {
        path: "myToys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
