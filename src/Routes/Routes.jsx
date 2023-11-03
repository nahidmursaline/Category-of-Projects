import { createBrowserRouter } from "react-router-dom";
import CategoryData from "../Components/Category/CategoryData";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/categoryData/:categoryName',
          element: <CategoryData></CategoryData>
        }
      ]
    },
  ]);