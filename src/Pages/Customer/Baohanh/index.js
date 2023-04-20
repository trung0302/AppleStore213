import styles from "../Customer.module.css";
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LockIcon from '@mui/icons-material/Lock';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import HistoryIcon from '@mui/icons-material/History';
import { blue } from "@mui/material/colors";
import NavTag from "../Components/NavTag";
import BaohanhItem from "../Components/BaohanhItem";
import GppGoodIcon from '@mui/icons-material/GppGood';
import SearchIcon from '@mui/icons-material/Search';

function Baohanh () {
    return (
        <div>
            <div className={styles.bg_primary + " flex justify-evenly text-2xl relative"}>
                <div className={styles.bg_white +" rounded-lg w-1/4 my-12 lg:block hidden"}>
                    <NavTag DivCss={"px-4 py-8"} setHref={"/customer/info"} spanCss={"mx-6"} spanContent={"Thông tin tài khoản"}
                        aCss={"mx-4 my-4"} setIcon={<PersonIcon sx={{ fontSize: 30 }}></PersonIcon>} />
                    <NavTag DivCss={"px-4 py-8"} setHref={"#"} spanCss={"mx-4"} spanContent={"Địa chỉ nhận hàng"}
                        aCss={"mx-4 my-4"} setIcon={<LocationOnIcon sx={{ fontSize: 30 }}></LocationOnIcon>} />
                    <NavTag DivCss={"px-4 py-8"} setHref={"/customer/history"} spanCss={"mx-6"} spanContent={"Đơn đặt hàng"}
                        aCss={"mx-4 my-4"} setIcon={<AssignmentIcon sx={{ fontSize: 30 }}></AssignmentIcon>} />
                    <NavTag DivCss={"px-4 py-8"} setHref={"/customer/changePassword"} spanCss={"mx-6"} spanContent={"Đổi mặt khẩu"}
                        aCss={"mx-4 my-4"} setIcon={<LockIcon sx={{ fontSize: 30 }}></LockIcon>} />
                    <NavTag DivCss={"px-4 py-8"} setHref={"/customer/avatar"} spanCss={"mx-6"} spanContent={"Ảnh đại diện"}
                        aCss={"mx-4 my-4"} setIcon={<CropOriginalIcon sx={{ fontSize: 30 }}></CropOriginalIcon>} />
                    <NavTag DivCss={"px-4 py-8"} setHref={"/customer/productReviews"} spanCss={"mx-6"} spanContent={"Lịch sử đánh giá sản phẩm"}
                        aCss={"mx-4 my-4"} setIcon={<HistoryIcon sx={{ fontSize: 30 }}></HistoryIcon>} />
                    <NavTag DivCss={styles.bg_blue +" rounded-lg px-4 py-8 mx-6 my-8  mb-8"}  setHref={"#"} spanCss={"mx-6"} spanContent={"Bảo hành"}
                        aCss={styles.text_blue} setIcon={<GppGoodIcon sx={{ fontSize: 30, color: blue[700] }}></GppGoodIcon>} />
                </div>
                <div className={"lg:w-2/5 my-12"}>
                    <div className="relative">
                        <SearchIcon className="absolute left-0 pl-2" sx={{ fontSize: 32, color: blue[700] }}></SearchIcon>
                        <input type="text" className="border-2 rounded border-sky-500 px-2 py-2 pl-12"/>
                    </div>
                    <div>
                        <BaohanhItem name={"Iphone 12 pro max"} id={"123456789"} ngmua={"1/1/2023"} nghethan={"11/12/2023"}/>
                        <BaohanhItem name={"Iphone 12 pro max"} id={"123456789"} ngmua={"1/1/2023"} nghethan={"11/4/2023"}/>
                        <BaohanhItem name={"Iphone 12 pro max"} id={"123456789"} ngmua={"1/1/2023"} nghethan={"11/12/2023"}/>
                        <BaohanhItem name={"Iphone 12 pro max"} id={"123456789"} ngmua={"1/1/2023"} nghethan={"1/3/2023"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Baohanh;