import Home from "../Pages/Home";
import DetailProduct from "../Pages/DetailProduct";
import NotFound from "../Pages/NotFound";
import Order from "../Pages/Order";
import News from "../Pages/News";

import Info from "../Pages/Customer/Info";
import Addresses from "../Pages/Customer/Addresses";
import History from "../Pages/Customer/History";
import ChangePassword from "../Pages/Customer/ChangePassword";
import Avatar from "../Pages/Customer/Avatar";
import ProductReviews from "../Pages/Customer/ProductReviews";
import Addaddress from "../Pages/Customer/addAddress";
import Orderdetail from "../Pages/Customer/Orderdetail";
import Baohanh from "../Pages/Customer/Baohanh";

import Billdetail from "../Pages/Payment/Billdetail";
import PaymentInfo from "../Pages/Payment/PaymentInfo";
import PaymentFinish from "../Pages/Payment/PaymentFinish";

import Login from "../Pages/Login_Register/Login";
import Register from "../Pages/Login_Register/Register";
import Policy from "../Pages/Policy";
import NewPass from "../Pages/Login_Register/ForgetPass/NewPass";
import SearchResults from "../Pages/SearchResults";
import ProductList from "../Pages/ProductList";
import AnotherProductList from "../Pages/ProductList/Components/AnotherProductList";
import NewsCategory from "../Pages/NewsCategory";
import BaohanhDetail from "../Pages/Customer/BaohanhDetail";
import KhuyenMai from "../Pages/KhuyenMai";
import Store from "../Pages/Store";

const publicRoutes = [
    { path: "/", component: <Home /> },
    { path: "/detailproduct", component: <DetailProduct /> },
    { path: "/*", component: <NotFound />, layout: null },
    { path: "/cart", component: <Order /> },
    { path: "/store", component: <Store /> },

    { path: "/iphone", component: <ProductList type="iPhone" /> },
    {
        path: "/iphone-14-series",
        component: <AnotherProductList type="iPhone" />,
    },
    {
        path: "/iphone-13-series",
        component: <AnotherProductList type="iPhone" />,
    },
    {
        path: "/iphone-12-series",
        component: <AnotherProductList type="iPhone" />,
    },
    {
        path: "/iphone-11-series",
        component: <AnotherProductList type="iPhone" />,
    },
    {
        path: "/iphone-se-series",
        component: <AnotherProductList type="iPhone" />,
    },

    { path: "/ipad", component: <ProductList type="iPad" /> },
    { path: "/ipad-pro-m1", component: <AnotherProductList type="iPad" /> },
    { path: "/ipad-pro-m2", component: <AnotherProductList type="iPad" /> },
    { path: "/ipad-air", component: <AnotherProductList type="iPad" /> },
    { path: "/ipad-10", component: <AnotherProductList type="iPad" /> },
    { path: "/ipad-9", component: <AnotherProductList type="iPad" /> },
    { path: "/ipad-mini", component: <AnotherProductList type="iPad" /> },

    { path: "/mac", component: <ProductList type="Mac" /> },
    { path: "/macbook-pro", component: <AnotherProductList type="Mac" /> },
    { path: "/macbook-air", component: <AnotherProductList type="Mac" /> },
    { path: "/imac", component: <AnotherProductList type="Mac" /> },
    { path: "/mac-mini", component: <AnotherProductList type="Mac" /> },

    { path: "/watch", component: <ProductList type="Watch" /> },
    {
        path: "/apple-watch-ultra",
        component: <AnotherProductList type="Watch" />,
    },
    {
        path: "/apple-watch-series-8",
        component: <AnotherProductList type="Watch" />,
    },
    {
        path: "/apple-watch-series-7",
        component: <AnotherProductList type="Watch" />,
    },
    {
        path: "/apple-watch-series-6",
        component: <AnotherProductList type="Watch" />,
    },
    { path: "/apple-watch-se", component: <AnotherProductList type="Watch" /> },
    {
        path: "/apple-watch-series-3",
        component: <AnotherProductList type="Watch" />,
    },

    { path: "/am-thanh", component: <ProductList type="Âm thanh" /> },
    { path: "/airpods", component: <AnotherProductList type="Âm thanh" /> },
    { path: "/earpods", component: <AnotherProductList type="Âm thanh" /> },
    {
        path: "/loa-marshall",
        component: <AnotherProductList type="Âm thanh" />,
    },
    { path: "/loa-beats", component: <AnotherProductList type="Âm thanh" /> },
    {
        path: "/loa-harman-kardon",
        component: <AnotherProductList type="Âm thanh" />,
    },
    { path: "/loa-jbl", component: <AnotherProductList type="Âm thanh" /> },
    { path: "/loa-google", component: <AnotherProductList type="Âm thanh" /> },

    { path: "/phu-kien", component: <ProductList type="Phụ kiện" /> },
    {
        path: "/cuong-luc-bao-ve",
        component: <AnotherProductList type="Phụ kiện" />,
    },
    { path: "/sac-cap", component: <AnotherProductList type="Phụ kiện" /> },
    {
        path: "/bao-da-op-lung",
        component: <AnotherProductList type="Phụ kiện" />,
    },
    {
        path: "/sac-du-phong",
        component: <AnotherProductList type="Phụ kiện" />,
    },
    {
        path: "/balo-tui-chong-soc",
        component: <AnotherProductList type="Phụ kiện" />,
    },
    {
        path: "/chuot-ban-phim",
        component: <AnotherProductList type="Phụ kiện" />,
    },
    {
        path: "/but-apple-pencil",
        component: <AnotherProductList type="Phụ kiện" />,
    },
    {
        path: "/day-deo-apple-watch",
        component: <AnotherProductList type="Phụ kiện" />,
    },
    { path: "/airtags", component: <AnotherProductList type="Phụ kiện" /> },
    { path: "/may-anh", component: <AnotherProductList type="Phụ kiện" /> },
    {
        path: "/may-doc-sach",
        component: <AnotherProductList type="Phụ kiện" />,
    },
    { path: "/apple-tv", component: <AnotherProductList type="Phụ kiện" /> },
    {
        path: "/dong-ho-garmin",
        component: <AnotherProductList type="Phụ kiện" />,
    },

    { path: "/tin-tuc", component: <News /> },
    { path: "/tin-tuc/:id", component: <NewsCategory isPage={true} /> },
    { path: "/apple-news", component: <NewsCategory /> },
    { path: "/news-review", component: <NewsCategory /> },
    { path: "/tin-kham-pha", component: <NewsCategory /> },
    { path: "/thu-thuat", component: <NewsCategory /> },
    { path: "/tin-khac", component: <NewsCategory /> },

    { path: "/customer/info", component: <Info /> },
    { path: "/customer/addresses", component: <Addresses /> },
    { path: "/customer/addAddress", component: <Addaddress /> },
    { path: "/customer/history", component: <History /> },
    { path: "/customer/changePassword", component: <ChangePassword /> },
    { path: "/customer/avatar", component: <Avatar /> },
    { path: "/customer/productReviews", component: <ProductReviews /> },
    { path: "/customer/baohanh", component: <Baohanh /> },
    { path: "/customer/baohanh/detail/:id", component: <BaohanhDetail /> },
    { path: "/khuyenmai", component: <KhuyenMai /> },

    { path: "/detaiproduct", component: <DetailProduct /> },
    {
        path: "/customer/orderdetail/:madonhang/:status",
        component: <Orderdetail />,
    },
    { path: "/billdetail", component: <Billdetail /> },
    { path: "/paymentinfo", component: <PaymentInfo /> },
    { path: "/paymentfinish", component: <PaymentFinish /> },

    { path: "/login", component: <Login /> },
    { path: "/register", component: <Register /> },
    { path: "/resetpass/:id/:token", component: <NewPass /> },
    { path: "/policy", component: <Policy /> },

    { path: "/search", component: <SearchResults /> },
];

export { publicRoutes };
