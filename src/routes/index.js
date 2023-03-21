import Home from "../Pages/Home";
import DetailProduct from "../Pages/DetailProduct";
import NotFound from "../Pages/NotFound";
import Order from "../Pages/Order";
import Login from "../Pages/Login_Register/Login";
import Register from "../Pages/Login_Register/Register";
import Policy from "../Pages/Policy";
import NewPass from "../Pages/Login_Register/ForgetPass/NewPass";
const publicRoutes = [
    { path: "/", component: <Home /> },
    { path: "/detailproduct", component: <DetailProduct /> },
    { path: "/*", component: <NotFound />, layout: null },
    { path: "/cart", component: <Order /> },
    { path: "/login", component: <Login /> },
    { path: "/register", component: <Register /> },
    { path: "/resetpass/:token", component: <NewPass /> },
    { path: "/policy", component: <Policy /> },


];

export { publicRoutes };
