import { useLocation } from "react-router-dom";
import PaymentConfirm from "../Component/PaymentConfirm";
import { useState } from "react";

function PaymentFinish () {
    const location = useLocation();
    
    const searchParams = new URLSearchParams(location.search);
    const phuongThuc = searchParams.get("phuongthuc");
    const amount = searchParams.get("amount");

    //momo
    const partnerCode = searchParams.get("partnerCode");
    const orderId = searchParams.get("orderId");
    const requestId = searchParams.get("requestId");
    const orderInfo = searchParams.get("orderInfo");
    const orderType = searchParams.get("orderType");
    const transId = searchParams.get("transId");
    const resultCode = searchParams.get("resultCode");
    const message = searchParams.get("message");
    const payType = searchParams.get("payType");
    const responseTime = searchParams.get("responseTime");
    const extraData = searchParams.get("extraData");
    const signature = searchParams.get("signature");
    //zalo
    const appid = searchParams.get("appid");
    const apptransid = searchParams.get("apptransid");
    const discountamount = searchParams.get("discountamount");
    const checksum = searchParams.get("checksum");
    const pmcid = searchParams.get("pmcid");
    const bankcode = searchParams.get("bankcode");
    const status = searchParams.get("status");

    //Lấy ngày tháng hiện tại
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Lưu ý: Phương thức getMonth() trả về giá trị từ 0 - 11
    const year = currentDate.getFullYear();

    //lấy order bằng transId
    const [order, setOrder] = useState({})
    // useEffect(() => {
    //     axios.get('http://localhost:3001/api/don-hang')
    //     .then((response) => {
    //          setOrder(response.data);
    //          console.log(order);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // });

    //Tạo đối tượng hoadon để post vào api tạo hóa đơn
    const hoadon = {  
        madh: order.madh,
        manv: "Không có",
        ngayxuathd: day+"/"+month+"/"+year,
    }
    //console.log(hoadon)

    //Tạo hóa đơn với data truyền từ giỏ hàng
    // useEffect(() => {
    //     axios.post('http://localhost:3001/api/hoa-don',hoadon)
    //     .then((response) => {
            
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // }, []);

    return (
        <div className="text-center text-2xl py-20">
            {(()=>{
                if (phuongThuc=="momo")
                    if(resultCode == 0)
                        return(<PaymentConfirm method={phuongThuc} status={"thành công"} madonhang={transId}/>)
                    else
                        return(<PaymentConfirm method={phuongThuc} status={"thất bại"} madonhang={transId}/>)
                else
                    if(status==1)
                        return(<PaymentConfirm method={phuongThuc} status={"thành công"} madonhang={apptransid}/>)
                    else
                        return(<PaymentConfirm method={phuongThuc} status={"thất bại"} madonhang={apptransid}/>)
            })()
            }
        </div>
    );
}

export default PaymentFinish