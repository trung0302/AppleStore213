import { useState } from "react";
import styles from "../Customer.module.css";
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LockIcon from '@mui/icons-material/Lock';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import HistoryIcon from '@mui/icons-material/History';
import { blue } from "@mui/material/colors";
import SelectTag from "../Components/SelectTag";
import NavTag from "../Components/NavTag";
import LabelAndInput from "../Components/LabelAndInput";
import GppGoodIcon from '@mui/icons-material/GppGood';

function Info(){
    const user = JSON.parse(localStorage.getItem("user"));
    
    const [selectedGender, setSelectedGender] = useState(user.gioitinh || 'Nam');

    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
    };
    
    return (
        <div>
            <div className={styles.bg_primary + " flex justify-evenly text-2xl"}>
                <div className={styles.bg_white +" rounded-lg w-1/4 my-12 lg:block hidden"}>
                    <NavTag DivCss={styles.bg_blue +" rounded-lg px-4 py-8 mx-6 my-8"} setHref={"#"} spanCss={"mx-4"} spanContent={"Thông tin tài khoản"}
                        aCss={styles.text_blue} setIcon={<PersonIcon sx={{ fontSize: 30, color: blue[700] }}></PersonIcon>} />
                    <NavTag DivCss={"px-4 py-8"} setHref={"/customer/addresses"} spanCss={"mx-6"} spanContent={"Địa chỉ nhận hàng"}
                        aCss={"mx-4 my-4"} setIcon={<LocationOnIcon sx={{ fontSize: 30 }}></LocationOnIcon>} />
                    <NavTag DivCss={"px-4 py-8"} setHref={"/customer/history"} spanCss={"mx-6"} spanContent={"Đơn đặt hàng"}
                        aCss={"mx-4 my-4"} setIcon={<AssignmentIcon sx={{ fontSize: 30 }}></AssignmentIcon>} />
                    <NavTag DivCss={"px-4 py-8"} setHref={"/customer/changePassword"} spanCss={"mx-6"} spanContent={"Đổi mặt khẩu"}
                        aCss={"mx-4 my-4"} setIcon={<LockIcon sx={{ fontSize: 30 }}></LockIcon>} />
                    <NavTag DivCss={"px-4 py-8"} setHref={"/customer/avatar"} spanCss={"mx-6"} spanContent={"Lịch sử đánh giá sản phẩm"}
                        aCss={"mx-4 my-4"} setIcon={<CropOriginalIcon sx={{ fontSize: 30 }}></CropOriginalIcon>} />
                    <NavTag DivCss={"px-4 py-8"} setHref={"/customer/productReviews"} spanCss={"mx-6"} spanContent={"Lịch sử đánh giá sản phẩm"}
                        aCss={"mx-4 my-4"} setIcon={<HistoryIcon sx={{ fontSize: 30 }}></HistoryIcon>} />
                    <NavTag DivCss={"px-4 py-8 mb-8"}  setHref={"/customer/baohanh"} spanCss={"mx-6"} spanContent={"Bảo hành"}
                        aCss={"mx-4 my-4"} setIcon={<GppGoodIcon sx={{ fontSize: 30 }}></GppGoodIcon>} />
                </div>
                <div className={styles.bg_white +" rounded-lg lg:w-2/5 my-12"}>
                    <form action="#">
                        <div className="grid grid-cols-2 gap-8 mx-8 my-4 ">
                            {/* <div className="my-4">
                                <label for="Name">Tên, Họ:</label><br/>
                                <input type="text" name="Name" className="w-full border-2 rounded-lg pl-4 py-3 mt-2 text-gray-400" value="Dat lam"/>
                            </div> */}
                            <LabelAndInput divCss={"my-4"} labelContent={"Tên, Họ:"} inputType={"text"} inputName={"Name"} inputCss={"w-full border-2 rounded-lg pl-4 py-3 mt-2 text-gray-400"} inputValue={user.hoten}/>
                            <LabelAndInput divCss={"my-4"} labelContent={"Email"} inputType={"email"} inputName={"Email"} inputCss={"w-full border-2 rounded-lg pl-4 py-3 mt-2 text-gray-400"} inputValue={user.email}/>
                        </div>
                        <div className="grid grid-cols-2 gap-8 mx-8 my-4">
                            <LabelAndInput inputType={"tel"} labelContent={"Số điện thoại"} inputName={"Telephone"} inputCss={"w-full border-2 rounded-lg pl-4 py-3 mt-2 text-gray-400"} inputValue={user.sdt || '1234567890'}/>
                            <div className="grid grid-rows-2">
                                <label htmlFor="Gender">Giới tính:</label>
                                <div className="content-center gap-8">
                                    <input type="radio" name="Gender" value="Nam" checked={selectedGender === "Nam"} onChange={handleGenderChange}/>
                                    <label className="mr-8 ml-4">Nam</label>
                                    <input type="radio" name="Gender" value="Nu" checked={selectedGender === "Nu"} onChange={handleGenderChange}/>
                                    <label className="ml-4">Nữ</label>
                                </div>
                            </div>
                        </div>
                        <div className="mx-8 my-4">
                            <label>Ngày sinh:</label> <br/>
                            <div>
                                <SelectTag setSelect={"Ngày"} Index={10} setIndex={1} setLength={31} setCss={"border-2 rounded-lg px-3 py-3 my-4 mr-8"} setName={"date"}/>
                                <SelectTag setSelect={"Tháng"} Index={12} setIndex={1} setLength={12} setCss={"border-2 rounded-lg px-3 py-3 my-4 mr-8"} setName={"month"}/>
                                <SelectTag setSelect={"Năm"} Index={1913} setIndex={1913} setLength={2023} setCss={"border-2 rounded-lg px-3 py-3 my-4"} setName={"year"}/>
                            </div>
                        </div>
                        <div className="mx-8 my-4">
                            <label>Username:</label> {user.hoten}
                        </div>
                        <div className="flex justify-center my-4">
                            <button className="border-2 rounded-full px-8 py-4 bg-sky-600 text-white">Lưu lại</button>
                        </div>
                    </form>
                </div>
            </div>
            {/* <div className={styles.bg_primary2 + " grid justify-items-center content-center py-20 text-2xl"}>
                <div className="text-5xl my-4 font-bold">Đăng ký nhận tin từ Shopdunk</div>
                <p className="my-4 text-center">Thông tin sản phẩm mới nhất và chương trình khuyến mãi</p>
                <div className="relative my-4 w-1/3">
                    <input type="text" className="w-full border-2 rounded-full px-6 py-4" placeholder="E-mail của bạn"/>
                    <button className="w-max border-2 rounded-full px-4 py-4 bg-sky-600 text-white absolute right-0">Đăng ký</button>
                </div>
            </div> */}
        </div>
    );
}

export default Info;