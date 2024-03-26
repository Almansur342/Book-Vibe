import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErroPage from "../Pages/ErrorPage/ErroPage";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErroPage></ErroPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:"/Listed Books",
        element: <h1>list</h1>,
      },
      {
        path:"/Pages to Read",
        element: <h1>Pages to Read</h1>,
      },
      {
        path:"/New Releases",
        element: <h1>new realese</h1>,
      },
      {
        path:"/Best Sellers",
        element: <h1>Best Sellers</h1>,
      },
    ],

  },
  
]);

export default router;