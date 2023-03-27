import styles from "../Customer.module.css";
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LockIcon from '@mui/icons-material/Lock';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import HistoryIcon from '@mui/icons-material/History';
import { blue } from "@mui/material/colors";
import NavTag from "../Components/NavTag";
import LabelAndInput from "../Components/LabelAndInput";
import CitySelect from "../Components/CitySelect";

function Addaddress () {
    return (
        <div>
            <div className={styles.bg_primary + " flex justify-evenly text-2xl"}>
                <div className={styles.bg_white +" rounded-lg w-1/4 my-12 lg:block hidden"}>
                    <NavTag DivCss={"px-4 py-8"} setHref={"/customer/info"} spanCss={"mx-6"} spanContent={"Thông tin tài khoản"}
                        aCss={"mx-4 my-4"} setIcon={<PersonIcon sx={{ fontSize: 30 }}></PersonIcon>} />
                    <NavTag DivCss={styles.bg_blue +" rounded-lg px-4 py-8 mx-6 my-8"} setHref={"/customer/addresses"} spanCss={"mx-4"} spanContent={"Địa chỉ nhận hàng"}
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
                <div className={styles.bg_white +" rounded-lg lg:w-2/5 my-12"}>
                    <form>
                        <LabelAndInput divCss={"px-5 py-5"} inputType={"text"} labelContent={"Tên:"} inputName={"Name"} inputCss={"w-full border-2 rounded-lg pl-4 py-3 mt-2 text-gray-400"}/>
                        <div className="grid grid-cols-2 ">
                            <LabelAndInput divCss={"px-5 py-5"} inputType={"tel"} labelContent={"Số điện thoại:"} inputName={"Telephone"} inputCss={"w-full border-2 rounded-lg pl-4 py-3 mt-2 text-gray-400"}/>
                            <LabelAndInput divCss={"px-5 py-5"} inputType={"email"} labelContent={"Email:"} inputName={"Email"} inputCss={"w-full border-2 rounded-lg pl-4 py-3 mt-2 text-gray-400"}/>
                            <div className="px-5 py-5">
                                <label>Quốc gia</label><br/>
                                <select className="w-full border-2 rounded-lg px-3 py-3 my-4 mr-8">
                                    <option value="">Chọn quốc gia</option>
                                    <option value="VN">Việt Nam</option>
                                    {/* <option value="Cam">Cam pu chia</option>
                                    <option value="Thai">Thái Lan</option> */}
                                </select>
                            </div>
                            <div className="px-5 py-5">
                                <CitySelect></CitySelect>
                            </div>
                            <LabelAndInput divCss={"px-5 py-5"} inputType={"text"} labelContent={"Quận, huyện:"} inputName={"Quan"} inputCss={"w-full border-2 rounded-lg pl-4 py-3 mt-2 text-gray-400"}/>
                            <LabelAndInput divCss={"px-5 py-5"} inputType={"text"} labelContent={"Phường, xã:"} inputName={"Phuong"} inputCss={"w-full border-2 rounded-lg pl-4 py-3 mt-2 text-gray-400"}/>
                        </div>
                        <LabelAndInput divCss={"px-5 py-5"} inputType={"text"} labelContent={"Địa chỉ cụ thể:"} inputName={"Detail"} inputCss={"w-full border-2 rounded-lg pl-4 py-3 mt-2 text-gray-400"}/>
                        <div className="flex justify-center">
                            <button className="border-2 rounded-lg px-4 py-4 mb-5 bg-sky-600 text-white">Lưu lại</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Addaddress;