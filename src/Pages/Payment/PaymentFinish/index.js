import styles from "../Payment.module.css";
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";


function PaymentFinish () {
    const { madonhang } = useParams();

    return (
        <div className="text-center text-2xl py-20">
            <h1 className="text-green-500 font-bold mb-10 text-3xl">Thông tin thanh toán của bạn đã được Appledunk ghi nhận</h1>
            <p className="mb-10">Chúng tôi sẽ gửi xác nhận vào email cho bạn khi việc thanh toán được hoàn tất</p>
            <strong className="mb-10">SỐ ĐƠN ĐẶT HÀNG: {madonhang}</strong><br/>
            <div className="my-10">
                <Link to="#" className="text-blue-600">Nhấp vào đây để biết chi tiết đơn hàng</Link>
            </div>
            <div className="mb-10">
                <Link to="#" className="border-2 rounded-lg px-8 py-4 mx-auto bg-sky-600 text-white">Tiếp tục mua hàng</Link>
            </div>
        </div>
    );
}

export default PaymentFinish