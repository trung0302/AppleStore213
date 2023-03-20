import Home from "../Pages/Home";
import DetailProduct from "../Pages/DetailProduct";
import NotFound from "../Pages/NotFound";
import Order from "../Pages/Order";
import Info from "../Pages/Customer/Info";
import Addresses from "../Pages/Customer/Addresses";
import History from "../Pages/Customer/History";
import ChangePassword from "../Pages/Customer/ChangePassword";
import Avatar from "../Pages/Customer/Avatar";
import ProductReviews from "../Pages/Customer/ProductReviews";

const publicRoutes = [
    { path: "/", component: <Home /> },
    { path: "/detailproduct", component: <DetailProduct /> },
    { path: "/*", component: <NotFound />, layout: null },
    { path: "/cart", component: <Order /> },
    { path: "/customer/info", component: <Info />},
    { path: "/customer/addresses", component: <Addresses />},
    { path: "/customer/history", component: <History />},
    { path: "/customer/changePassword", component: <ChangePassword />},
    { path: "/customer/avatar", component: <Avatar />},
    { path: "/customer/productReviews", component: <ProductReviews />},
];

export { publicRoutes };
