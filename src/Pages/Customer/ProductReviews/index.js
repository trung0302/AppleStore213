import styles from "../Customer.module.css";
import SortIcon from '@mui/icons-material/Sort';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LockIcon from '@mui/icons-material/Lock';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import HistoryIcon from '@mui/icons-material/History';
import { blue } from "@mui/material/colors";
import NavTag from "../Components/NavTag";
import Preview from "../Components/Preview";

function ProductReviews () {

    return (
        <div>
            <div className={styles.bg_primary + " flex justify-evenly text-2xl"}>
                <div className={styles.bg_white +" rounded-lg w-1/4 my-12 lg:block hidden"}>
                    <NavTag DivCss={"px-4 py-8"} setHref={"/customer/info"} spanCss={"mx-6"} spanContent={"Thông tin tài khoản"}
                        aCss={"mx-4 my-4"} setIcon={<PersonIcon sx={{ fontSize: 30 }}></PersonIcon>} />
                    <NavTag DivCss={"px-4 py-8"} setHref={"/customer/addresses"} spanCss={"mx-4"} spanContent={"Địa chỉ nhận hàng"}
                        aCss={"mx-4 my-4"} setIcon={<LocationOnIcon sx={{ fontSize: 30 }}></LocationOnIcon>} />
                    <NavTag DivCss={"px-4 py-8"} setHref={"/customer/history"} spanCss={"mx-6"} spanContent={"Đơn đặt hàng"}
                        aCss={"mx-4 my-4"} setIcon={<AssignmentIcon sx={{ fontSize: 30 }}></AssignmentIcon>} />
                    <NavTag DivCss={"px-4 py-8"} setHref={"/customer/changePassword"} spanCss={"mx-6"} spanContent={"Đổi mặt khẩu"}
                        aCss={"mx-4 my-4"} setIcon={<LockIcon sx={{ fontSize: 30 }}></LockIcon>} />
                    <NavTag DivCss={"px-4 py-8"} setHref={"/customer/avatar"} spanCss={"mx-6"} spanContent={"Ảnh đại diện"}
                        aCss={"mx-4 my-4"} setIcon={<CropOriginalIcon sx={{ fontSize: 30 }}></CropOriginalIcon>} />
                    <NavTag DivCss={styles.bg_blue +" rounded-lg px-4 py-8 mx-6 my-8 mb-8"} setHref={"#"} spanCss={"mx-6"} spanContent={"Lịch sử đánh giá sản phẩm"}
                        aCss={styles.text_blue} setIcon={<HistoryIcon sx={{ fontSize: 30, color: blue[700] }}></HistoryIcon>} />
                </div>
                <div className={"lg:w-2/5 my-12"}>
                    <div className="flex justify-end">
                        <div className="relative">
                            <div className="mr-4 pl-3 mt-2 absolute top-0 left-0">
                                <SortIcon sx={{ fontSize: 25, color: blue[600] }}/>
                            </div>
                            <select className={styles.bg_white+ " text-sky-600 border-sky-600 focus-visible:border-sky-600 border-2 rounded-lg pl-14 pr-2 py-2  mb-10 mr-6"}>
                                <option value="date_increase">Ngày tăng dần</option>
                                <option value="date_derease">Ngày giảm dần</option>
                                <option value="rate_increase">Đánh giá cao đến thấp</option>
                                <option value="rate_decrease">Đánh giá thấp đến cao</option>
                            </select>
                        </div>
                    </div>
                    <Preview productname={"Iphone 12 pro max"} date={"12/12/2022"} star={4} comment={"Đóng gói tốt"}/>
                    <Preview productname={"Tai nghe chính hãng Apple"} date={"10/1/2023"} star={5} comment={"Nghe êm tai đấy"}/>
                    <Preview productname={"pin sạc dự phòng 500mA"} date={"2/3/2023"} star={5} comment={"Thời lượng pin trâu nhưng pin sạc lâu quá"}/>
                    <div className="flex justify-center my-4">
                        <button className="border-2 rounded-full px-8 py-4 bg-sky-600 text-white">Lưu lại</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductReviews;