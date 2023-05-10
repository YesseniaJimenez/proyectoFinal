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
        path: "/detail/:id",
        Component: Detail
    },
    {
        id: 3,
        path: "/add",
        Component: AddProduct
    }

]

export { Login, Layout };