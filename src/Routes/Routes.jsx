import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErroPage from "../Pages/ErrorPage/ErroPage";
import Home from "../Pages/Home/Home";
import BooksDetails from "../Pages/BooksDetails/BooksDetails";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";
// import WishList from "../components/WishList/WishList";
import DynamicListPage from "../Pages/DynamicListPage/DynamicListPage";
import WishList from "../Pages/WishList/WishList";
import Contact from "../Pages/Contact/Contact";


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
      // {
      //   path:"/Listed Books",
      //   element: <ListedBooks></ListedBooks>,
        
      // },
      {
        path:"/Pages to Read",
        element: <h1>Pages to Read</h1>,
      },
      {
        path:"/contact-us",
        element: <Contact></Contact>
      },
      {
        path:"/Best Sellers",
        element: <h1>Best Sellers</h1>,
      },
      {
        path:"/books-details/:id",
        element:<BooksDetails></BooksDetails>,
      },
      {
        path:'/Listed Books',
        element:<DynamicListPage></DynamicListPage>,
        children: [
          {
            index:true,
            element:<ListedBooks></ListedBooks>,
          },
          {
            path:'wishlist',
            element:<WishList></WishList>,
          }
        ]
      }
    ],

  },
  
]);

export default router;