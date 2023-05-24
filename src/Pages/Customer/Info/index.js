import { useState,useEffect } from "react";
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
import HandleApiCustomer from "../../../Apis/HandleApiCustomer";
import Swal from "sweetalert2";

function Info(){
    const [ngay, setNgay] = useState(null);
    const [thang, setThang] = useState(null);
    const [nam, setNam] = useState(null);
    const [user, setUser] = useState(null);
    const [selectedGender, setSelectedGender] = useState('Nam');
    useEffect(() => {
        HandleApiCustomer.GetUserInfor()
        .then((res) => {
            setUser(res.user);
            console.log(res);
            if(res.user.gioitinh){
                setSelectedGender(res.user.gioitinh);
            }
            if(res.user.ngaysinh){
                const dateParts = res.user.ngaysinh.split('-');
                setNgay(parseInt(dateParts[0]));
                setThang(parseInt(dateParts[1]))
                setNam(parseInt(dateParts[2]))
                console.log(ngay+thang+nam);
            }
        });
    }, []);
    
    function changeFormatDate(num){
        if(parseInt(num)<10){
            return "0"+num.toString();
        }else{
            return num.toString();
        }
        
    }
    
    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
    };

    function handleSubmit(event) {
       event.preventDefault();
        const formData = new FormData(event.target);
        const hoten = formData.get('Name');
        const email = formData.get('Email');
        const sdt = formData.get('Telephone');
        const gioitinh = formData.get('Gender')
        const day = formData.get('date');
        const month = formData.get('month');
        const year = formData.get('year');
        HandleApiCustomer.UpdateInfor(user._id,{
            hoten:hoten,
            email:email,
            sdt:sdt,
            gioitinh:gioitinh,
            ngaysinh:changeFormatDate(day)+"-"+changeFormatDate(month)+"-"+changeFormatDate(year)
        }).then(async (res) => {
            
            await Swal.fire({
                position: "center",
                icon: "success",
                title: "Cập nhật dữ liệu thành công!",
                showConfirmButton: false,
                timer: 500
            });
           
            window.location.reload();
        }).catch((err)=>{
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Cập nhật dữ liệu không thành công!",
                showConfirmButton: false,
                timer: 500
            });

        })
      }
    


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
                    {user?
                    <form action="#" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-8 mx-8 my-4 ">
                            {/* <div className="my-4">
                                <label for="Name">Tên, Họ:</label><br/>
                                <input type="text" name="Name" className="w-full border-2 rounded-lg pl-4 py-3 mt-2 text-gray-400" value="Dat lam"/>
                            </div> */}
                            <LabelAndInput divCss={"my-4"} labelContent={"Tên, Họ:"} inputType={"text"} inputName={"Name"} inputCss={"w-full border-2 rounded-lg pl-4 py-3 mt-2 text-gray-400"} inputValue={user.hoten?user.hoten:"chưa thiết lập"}/>
                            <LabelAndInput divCss={"my-4"} labelContent={"Email"} inputType={"email"} inputName={"Email"} inputCss={"w-full border-2 rounded-lg pl-4 py-3 mt-2 text-gray-400"} inputValue={user.email?user.email:"chưa thiết lập"}/>
                        </div>
                        <div className="grid grid-cols-2 gap-8 mx-8 my-4">
                            <LabelAndInput inputType={"tel"} labelContent={"Số điện thoại"} inputName={"Telephone"} inputCss={"w-full border-2 rounded-lg pl-4 py-3 mt-2 text-gray-400"} inputValue={user.sdt || '1234567890'}/>
                            <div className="grid grid-rows-2">
                                <label htmlFor="Gender">Giới tính:</label>
                                <div className="content-center gap-8">
                                    <input type="radio" name="Gender" value="Nam" checked={selectedGender === "Nam"} onChange={handleGenderChange}/>
                                    <label className="mr-8 ml-4">Nam</label>
                                    <input type="radio" name="Gender" value="Nữ" checked={selectedGender === "Nữ"} onChange={handleGenderChange}/>
                                    <label className="ml-4">Nữ</label>
                                </div>
                            </div>
                        </div>
                        <div className="mx-8 my-4">
                            <label>Ngày sinh:</label> <br/>
                            <div>
                                <SelectTag setSelect={"Ngày"} Index={ngay?ngay:1} setIndex={1} setLength={31} setCss={"border-2 rounded-lg px-3 py-3 my-4 mr-8"} setName={"date"}/>
                                <SelectTag setSelect={"Tháng"} Index={thang?thang:1} setIndex={1} setLength={12} setCss={"border-2 rounded-lg px-3 py-3 my-4 mr-8"} setName={"month"}/>
                                <SelectTag setSelect={"Năm"} Index={nam?nam:1999} setIndex={1913} setLength={2023} setCss={"border-2 rounded-lg px-3 py-3 my-4"} setName={"year"}/>
                            </div>
                        </div>
                        <div className="mx-8 my-4">
                            <label>Username:</label> {user.hoten}
                        </div>
                        <div className="flex justify-center my-4">
                            <button className="border-2 rounded-full px-8 py-4 bg-sky-600 text-white">Lưu lại</button>
                        </div>
                    </form>:<></>}
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