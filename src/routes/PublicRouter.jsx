import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import AddCraftItem from "../pages/Home/AddCraftItem";
import AllCraftItems from "../pages/Home/AllCraftItems";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/add-craft-item',
                element: <AddCraftItem></AddCraftItem>,
            },
            {
                path: '/allItems',
                element: <AllCraftItems></AllCraftItems>,
                loader: () => fetch('http://localhost:5000/allItems')
            },

        ]
    },
]);

export default router;