import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import PaymentConfirm from "../Component/PaymentConfirm";


function PaymentFinish () {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const phuongThuc = searchParams.get("phuongthuc");
    const partnerCode = searchParams.get("partnerCode");
    const orderId = searchParams.get("orderId");
    const requestId = searchParams.get("requestId");
    const amount = searchParams.get("amount");
    const orderInfo = searchParams.get("orderInfo");
    const orderType = searchParams.get("orderType");
    const transId = searchParams.get("transId");
    const resultCode = searchParams.get("resultCode");
    const message = searchParams.get("message");
    const payType = searchParams.get("payType");
    const responseTime = searchParams.get("responseTime");
    const extraData = searchParams.get("extraData");
    const signature = searchParams.get("signature");

    return (
        <div className="text-center text-2xl py-20">
            {(()=>{
                if (phuongThuc=="momo")
                    if(resultCode == 0)
                        return(<PaymentConfirm method={phuongThuc} status={"thành công"} madonhang={transId}/>)
                    else
                        return(<PaymentConfirm method={phuongThuc} status={"thất bại"} madonhang={transId}/>)
                else
                    if(resultCode==1)
                        return(<PaymentConfirm method={phuongThuc} status={"thành công"} madonhang={transId}/>)
                    else
                        return(<PaymentConfirm method={phuongThuc} status={"thành công"} madonhang={transId}/>)
            })()
            }
        </div>
    );
}

export default PaymentFinish