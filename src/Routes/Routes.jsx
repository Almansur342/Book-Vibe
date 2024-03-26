import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErroPage from "../Pages/ErrorPage/ErroPage";
import Home from "../Pages/Home/Home";
import BooksDetails from "../Pages/BooksDetails/BooksDetails";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";

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
        element: <ListedBooks></ListedBooks>,
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
      {
        path:"/books-details/:id",
        element:<BooksDetails></BooksDetails>,
      },
    ],

  },
  
]);

export default router;