import { createBrowserRouter } from "react-router-dom";
import LayOut from "../Layout/LayOut";
import Home from "../pages/home/home/Home";
import LogIn from "../pages/Login/LogIn";
import Register from "../pages/Register/Register";
import ViewDetails from "../viewDetails/ViewDetails";
import PrivateRoute from "./private/PrivateRoute";

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
    ],
  },
]);

export default router;
