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
import Addaddress from "../Pages/Customer/addAddress";
import Orderdetail from "../Pages/Customer/Orderdetail";

import Billdetail from "../Pages/Payment/Billdetail";
import PaymentInfo from "../Pages/Payment/PaymentInfo";


import Login from "../Pages/Login_Register/Login";
import Register from "../Pages/Login_Register/Register";
import Policy from "../Pages/Policy";
import NewPass from "../Pages/Login_Register/ForgetPass/NewPass";

const publicRoutes = [
    { path: "/", component: <Home /> },
    { path: "/detailproduct", component: <DetailProduct /> },
    { path: "/*", component: <NotFound />, layout: null },
    { path: "/cart", component: <Order /> },

    { path: "/customer/info", component: <Info />},
    { path: "/customer/addresses", component: <Addresses />},
    { path: "/customer/addAddress", component: <Addaddress />},
    { path: "/customer/history", component: <History />},
    { path: "/customer/changePassword", component: <ChangePassword />},
    { path: "/customer/avatar", component: <Avatar />},
    { path: "/customer/productReviews", component: <ProductReviews />},
    { path: "/detaiproduct", component: <DetailProduct />},
    { path: "/customer/orderdetail/:madonhang/:status", component: <Orderdetail />},
    { path: "/billdetail", component: <Billdetail />},
    { path: "/paymentinfo", component: <PaymentInfo />},

    { path: "/login", component: <Login /> },
    { path: "/register", component: <Register /> },
    { path: "/resetpass/:token", component: <NewPass /> },
    { path: "/policy", component: <Policy /> },



];

export { publicRoutes };
