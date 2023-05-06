import { Link } from "react-router-dom"
export default ({method, status, madonhang})=> {
    return(
        <>
            <h1 className="text-green-500 font-bold mb-10 text-3xl">Thanh toán qua {method} {status}</h1>
            <p className="mb-10">Chúng tôi sẽ gửi xác nhận vào email cho bạn khi việc thanh toán được hoàn tất</p>
            <strong className="mb-10">SỐ ĐƠN ĐẶT HÀNG: {madonhang}</strong><br/>
            <div className="my-10">
                <Link to="#" className="text-blue-600">Nhấp vào đây để biết chi tiết đơn hàng</Link>
            </div>
            <div className="mb-10">
                <Link to="#" className="border-2 rounded-lg px-8 py-4 mx-auto bg-sky-600 text-white">Tiếp tục mua hàng</Link>
            </div>
        </>
    )
}