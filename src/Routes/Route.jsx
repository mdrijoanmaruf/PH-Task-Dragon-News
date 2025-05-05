import { createBrowserRouter } from "react-router";
import Home from "../layouts/Home";
import Root from "../components/Root/Root";
import NotFoundPage from "../components/ErrorPage/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
        {
            index: true,
            Component: Home,
            loader: ()=> fetch("/news.json")
        },
        {
            path : '/',
            Component: Home
        }
        
    ]
  },
]);

export default router;
