import Home from "../pages/Home";
import DetailProduct from "../pages/DetailProduct";

const publicRoutes = [
    { path: "/", component: <Home /> },
    { path: "/detailproduct", component: <DetailProduct /> },
    { path: "/*", component: <NotFound /> },
    
];

export {
    publicRoutes
};