import styles from "../Customer.module.css";
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LockIcon from '@mui/icons-material/Lock';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import HistoryIcon from '@mui/icons-material/History';
import { blue } from "@mui/material/colors";
import NavTag from "../Components/NavTag";
import AddressItem from "../Components/AddressItem";

function Addresses () {
    return (
        <div>
            <div className={styles.bg_primary + " flex justify-evenly text-2xl"}>
                <div className={styles.bg_white +" rounded-lg w-1/4 my-12 lg:block hidden"}>
                    <NavTag DivCss={"px-4 py-8"} setHref={"/customer/info"} spanCss={"mx-6"} spanContent={"Thông tin tài khoản"}
                        aCss={"mx-4 my-4"} setIcon={<PersonIcon sx={{ fontSize: 30 }}></PersonIcon>} />
                    <NavTag DivCss={styles.bg_blue +" rounded-lg px-4 py-8 mx-6 my-8"} setHref={"#"} spanCss={"mx-4"} spanContent={"Địa chỉ nhận hàng"}
                        aCss={styles.text_blue} setIcon={<LocationOnIcon sx={{ fontSize: 30, color: blue[700] }}></LocationOnIcon>} />
                    <NavTag DivCss={"px-4 py-8"} setHref={"/customer/history"} spanCss={"mx-6"} spanContent={"Đơn đặt hàng"}
                        aCss={"mx-4 my-4"} setIcon={<AssignmentIcon sx={{ fontSize: 30 }}></AssignmentIcon>} />
                    <NavTag DivCss={"px-4 py-8"} setHref={"/customer/changePassword"} spanCss={"mx-6"} spanContent={"Đổi mặt khẩu"}
                        aCss={"mx-4 my-4"} setIcon={<LockIcon sx={{ fontSize: 30 }}></LockIcon>} />
                    <NavTag DivCss={"px-4 py-8"} setHref={"/customer/avatar"} spanCss={"mx-6"} spanContent={"Ảnh đại diện"}
                        aCss={"mx-4 my-4"} setIcon={<CropOriginalIcon sx={{ fontSize: 30 }}></CropOriginalIcon>} />
                    <NavTag DivCss={"px-4 py-8 mb-8"} setHref={"/customer/productReviews"} spanCss={"mx-6"} spanContent={"Lịch sử đánh giá sản phẩm"}
                        aCss={"mx-4 my-4"} setIcon={<HistoryIcon sx={{ fontSize: 30 }}></HistoryIcon>} />
                </div>
                <div className={"lg:w-2/5 my-12"}>
                    <div>
                        <AddressItem name="Lam Quoc Dat" email="20520433@gmail.com" sdt="0123456789" address="khu pho 6, linh trung, thu duc, thanh pho ho chi minh"></AddressItem>
                        <AddressItem name="nguyen van a" email="anguyenvan" sdt="0123456789" address="khu pho 6, linh trung, thu duc, thanh pho ho chi minh"></AddressItem>
                    </div>
                    <div className="flex justify-center">
                        <button className="border-2 rounded-lg px-4 py-4 bg-sky-600 text-white">
                            <Link to="/customer/addAddress">Thêm mới</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Addresses;