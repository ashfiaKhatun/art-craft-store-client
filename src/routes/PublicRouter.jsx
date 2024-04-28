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
import PrivateRouter from "./PrivateRouter";
import Details from "../pages/Home/Details";
import MyItems from "../pages/Home/MyItems";

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
            {
                path: '/item-details/:id',
                element: <PrivateRouter><Details></Details></PrivateRouter>,
                loader: ({params}) => fetch(`http://localhost:5000/allItems/${params.id}`)
            },
            {
                path: '/my-craft-list/email/:email',
                element: <MyItems></MyItems>,
                loader: ({params}) => fetch(`http://localhost:5000/allItems/email/${params.email}`)
            },

        ]
    },
]);

export default router;