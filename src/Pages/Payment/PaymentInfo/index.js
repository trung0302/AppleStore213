import styles from "../Payment.module.css";
import { useState } from "react";
import images from "../../../assets/image";
import QRImg from "../Component/QRImg";

function PaymentInfo () {
    const [bank, setbank] = useState("MomoQR");

    const handleSelectChange = (event) => {
        setbank(event.target.value);
    }

    return (
        <div className={styles.bg_primary + " flex justify-center text-2xl"}>
            <div className="w-1/2">

                <h1 className="text-4xl text-center px-4 py-4 mt-10">Thông tin thanh toán</h1>

                <div className="rounded-lg my-12 bg-white px-4 py-4">
                    <p className="text-center mt-4">Quý khách vui lòng chọn ngân hàng để thực hiện chuyển khoảng</p>
                    <div className="grid grid-cols-2 gap-6 mt-10">
                        <label htmlFor="momo" className="flex border border-solid border-[#ddd] rounded-[8px] py-5 px-10 items-center cursor-pointer">
                            <input type="radio" id="momo" name="method" value="MomoQR" checked={bank === "MomoQR"} onChange={handleSelectChange}/>
                            <img src={images.momo} alt="Momo" className="h-[36px] w-[36px] rounded-[8px] mx-5"/>
                            <div className="text-[14px]">Thanh toán bằng Momo</div>
                        </label>
                        <label htmlFor="zalopay"
                            className="flex border border-solid border-[#ddd] rounded-[8px] py-5 px-10 items-center cursor-pointer">
                            <input type="radio" id="zalopay" name="method" value="ZalopayQR" checked={bank === "ZalopayQR"} onChange={handleSelectChange}/>
                            <img src={images.zalopay} alt="ZaloPay" className="h-[36px] w-[36px] rounded-[8px] mx-5"/>
                            <div className="text-[14px]">Thanh toán bằng ZaloPay</div>
                        </label>
                    </div>

                    {(()=>{
                        if(bank === "MomoQR")
                            return(<QRImg bank={"MomoQR"}></QRImg>);
                        else 
                            return (<QRImg bank={"ZalopayQR"}></QRImg>);
                    })()}
                    <div className="px-20 my-10">
                        <strong className="text-rose-600">Lưu ý:</strong> Quý khách vui lòng chuyển khoảng vào đúng số tài khoảng trên. Nội dung chuyển khoảng chính xác theo hướng dẫn để nhận được thông báo về giao dịch.
                    </div>
                </div>
                <div className="text-center mb-20">
                    <a href="#" className="rounded-lg w-1/2 px-4 py-4 mx-4 my-4 bg-blue-600 text-white">Xác nhận</a>
                </div>
            </div>
        </div>
    );
}

export default PaymentInfo