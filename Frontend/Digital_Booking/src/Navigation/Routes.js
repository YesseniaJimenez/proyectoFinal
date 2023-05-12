import Login from "../Routes/Login";
import Home from "../Routes/Home";
import Detail from "../Routes/Detail";
import Layout from "../Routes/Layout";
import AddProduct from "../Routes/AddProduct";

export const routes = [

    {
        id: 1,
        path: "/home",
        Component: Home
    },
    {
        id: 2,
        path: "/detail",
        Component: Detail
    },
    {
        id: 3,
        path: "/add",
        Component: AddProduct
    },
    // {
    //     id: 4,
    //     path: "/menumobile",
    //     Component: MenuMobile
    // }

]

export { Login, Layout };