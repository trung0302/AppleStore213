import styles from "../Payment.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import HandleApiThanhtoan from "../../../Apis/HandleApiThanhtoan";

function Billdetail () {
    const amount = 100000;
    const method = "zalo";

    const location = useLocation();
    const Thanhtoan = () => {
        if(method=="zalo")
            HandleApiThanhtoan.thanhtoanZalo(amount)
                .then((response) => {
                    window.open(response.orderUrl, '_blank');
                })
                .catch((error) => {
                    console.log(error);
                });
        else
            HandleApiThanhtoan.thanhtoanMoMo(amount)
                .then((response) => {
                    window.open(response.orderUrl, '_blank');
                })
                .catch((error) => {
                    console.log(error);
                });
      };

    return (
        <div className={styles.bg_primary + " flex justify-center text-2xl"}>
            <div className="rounded-lg lg:w-2/5 my-12 bg-white">
                <h1 className="text-4xl text-center px-4 py-4 mt-10">Chi tiết đơn hàng</h1>
                <div className=" px-10 py-4">
                    <ul className="mb-10">
                        <li className="flex justify-between my-4">
                            <p className="text-slate-500">Mã đơn hàng:</p>
                            <span name="madonhang">123</span>
                        </li>
                        <li className="flex justify-between my-4">
                            <p className="text-slate-500">Ngày đặt hàng:</p>
                            <span name="date">22/12/2023</span>
                        </li>
                        <li className="flex justify-between my-4">
                            <p className="text-slate-500">Tình trạng:</p>
                            <span name="status" className="text-green-500">Đang xử lý</span>
                        </li>
                        <li className="flex justify-between my-4">
                            <p className="text-slate-500">Tên khách hàng:</p>
                            <span name="tenkhachhang">lam quoc dat</span>
                        </li>
                        <li className="flex justify-between my-4">
                            <p className="text-slate-500">Số điện thoại:</p>
                            <span name="sdt">0123456789</span>
                        </li>
                        <li className="flex justify-between my-4">
                            <p className="text-slate-500">Email:</p>
                            <span name="email">nguyenvana@gmail.com</span>
                        </li>
                        <hr/>
                        <li className="flex justify-between my-4">
                            <p className="text-slate-500">Phương thức thanh toán:</p>
                            <span name="method">Chuyển khoảng ví điện tử</span>
                        </li>
                        <li className="flex justify-between my-4">
                            <p className="text-slate-500">Tình trạng thanh toán</p>
                            <span name="method_status" className="text-green-500">Đang xử lý</span>
                        </li>
                        <hr/>
                        <li className=" my-4">
                            <p className="text-slate-500">Sản phẩm</p>
                            <div name="product" className="rounded-lg my-4 px-4 py-4 border-2 flex justify-between">
                                <div>
                                    <p>Pin sạc dự phòng</p><br/>
                                    <span>Màu: </span>Đen
                                </div>
                                <div>
                                    <label>SL:</label>
                                    <span>1</span>
                                </div>
                            </div>
                        </li>
                        <li className="flex justify-between my-4">
                            <p className="text-slate-500">Tổng số tiền đã đặt hàng:</p>
                            <p className="text-blue-600 text-3xl">{amount} ₫</p>
                        </li>
                    </ul>
                    <div className="text-center">
                        <Link to="#" className="text-blue-500">Nhấp vào đây để xem chi tiết đơn hàng</Link>
                        <div className="flex mt-10">
                            <Link to="#" className="rounded-lg w-1/2 px-4 py-4 mx-4 my-4 bg-blue-600 text-white">Tiếp tục mua hàng</Link>
                            <button onClick={Thanhtoan} className="rounded-lg w-1/2 px-4 py-4 mx-4 my-4 bg-blue-600 text-white">Thanh toán</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Billdetail
