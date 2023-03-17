import Home from "../Pages/Home";
import DetailProduct from "../Pages/DetailProduct";
import NotFound from "../Pages/NotFound";
import Order from "../Pages/Order";

const publicRoutes = [
    { path: "/", component: <Home /> },
    { path: "/detailproduct", component: <DetailProduct /> },
    { path: "/*", component: <NotFound />, layout: null },
    { path: "/cart", component: <Order /> },
];

export { publicRoutes };
