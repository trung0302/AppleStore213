import styles from "../Customer.module.css";
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LockIcon from '@mui/icons-material/Lock';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import HistoryIcon from '@mui/icons-material/History';
import { blue } from "@mui/material/colors";
import NavTag from "../Components/NavTag";
import Orderbill from "../Components/Orderbill";
import GppGoodIcon from '@mui/icons-material/GppGood';
import HandleApiCustomer from "../../../Apis/HandleApiCustomer";
import { useState,useEffect } from "react";
import axios from "axios";

function History () {
    const user = JSON.parse(localStorage.getItem("user"));
    const [orderlist, setOrderlist] = useState([]);
    const [state, setState] = useState("");


    const handleFilterChange = (e)=>{
        setState(e.target.value);
    } 

    //api lấy order theo bộ lọc và gán vào data
    useEffect(() => {
        axios.get(`http://localhost:3001/don-hang?makh=${user.makh}`)
        .then((response) => {
            setOrderlist(response.data.orders);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [orderlist]);

    return (
        <div>
            <div className={styles.bg_primary + " flex justify-evenly text-2xl"}>
                <div className={styles.bg_white +" rounded-lg w-1/4 my-12 lg:block hidden"}>
                    <NavTag DivCss={"px-4 py-8"} setHref={"/customer/info"} spanCss={"mx-6"} spanContent={"Thông tin tài khoản"}
                        aCss={"mx-4 my-4"} setIcon={<PersonIcon sx={{ fontSize: 30 }}></PersonIcon>} />
                    <NavTag DivCss={"px-4 py-8"} setHref={"/customer/addresses"} spanCss={"mx-4"} spanContent={"Địa chỉ nhận hàng"}
                        aCss={"mx-4 my-4"} setIcon={<LocationOnIcon sx={{ fontSize: 30 }}></LocationOnIcon>} />
                    <NavTag DivCss={styles.bg_blue +" rounded-lg px-4 py-8 mx-6 my-8"} setHref={"#"} spanCss={"mx-6"} spanContent={"Đơn đặt hàng"}
                        aCss={styles.text_blue} setIcon={<AssignmentIcon sx={{ fontSize: 30, color: blue[700] }}></AssignmentIcon>} />
                    <NavTag DivCss={"px-4 py-8"} setHref={"/customer/changePassword"} spanCss={"mx-6"} spanContent={"Đổi mặt khẩu"}
                        aCss={"mx-4 my-4"} setIcon={<LockIcon sx={{ fontSize: 30 }}></LockIcon>} />
                    <NavTag DivCss={"px-4 py-8"} setHref={"/customer/avatar"} spanCss={"mx-6"} spanContent={"Ảnh đại diện"}
                        aCss={"mx-4 my-4"} setIcon={<CropOriginalIcon sx={{ fontSize: 30 }}></CropOriginalIcon>} />
                    <NavTag DivCss={"px-4 py-8"} setHref={"/customer/productReviews"} spanCss={"mx-6"} spanContent={"Lịch sử đánh giá sản phẩm"}
                        aCss={"mx-4 my-4"} setIcon={<HistoryIcon sx={{ fontSize: 30 }}></HistoryIcon>} />
                    <NavTag DivCss={"px-4 py-8  mb-8"}  setHref={"/customer/baohanh"} spanCss={"mx-6"} spanContent={"Bảo hành"}
                        aCss={"mx-4 my-4"} setIcon={<GppGoodIcon sx={{ fontSize: 30 }}></GppGoodIcon>} />
                </div>
                <div className={"lg:w-2/5 my-12"}>

                    {/* Bộ lọc */}
                    <div className="flex justify-end">
                        <select onChange={handleFilterChange} className={styles.bg_white+ " text-sky-600 border-sky-600 focus:border-sky-600 border-2 rounded-lg px-10 py-2 mb-10"} name="filter_status">
                            <option value="">Tất cả</option>
                            <option value="green">Thành công</option>
                            <option value="blue">Đang giao</option>
                            <option value="yellow">Đang xử lý</option>
                            <option value="red">Đã hủy</option>
                        </select>
                    </div>

                    {/* Render các đơn hàng */}
                    {orderlist!==undefined && orderlist.map((item)=>{
                        return(
                            <Orderbill madonhang={item.madh} date={item.updatedAt} total={item.tongtrigia} method={item.paymentMethod} status={item.tinhtrang} key={item._id}></Orderbill>
                        )
                    })}
                    {orderlist!==undefined && orderlist.length === 0 && <div className="flex justify-center">Bạn chưa có đơn hàng nào</div>}
                </div>
            </div>
        </div>
    );
}

export default History;