import styles from "../Payment.module.css";

function Billdetail () {
    return (
        <div className={styles.bg_primary + " flex justify-center text-2xl"}>
            <div className="rounded-lg lg:w-2/5 my-12 bg-white">
                <h1 className="text-4xl text-center px-4 py-4 mt-10">Chi tiết đơn hàng</h1>
                <div className=" px-10 py-4">
                    <ul className="mb-10">
                        <li className="flex justify-between my-4">
                            <lable className="text-slate-500">Mã đơn hàng:</lable>
                            <span>123</span>
                        </li>
                        <li className="flex justify-between my-4">
                            <lable className="text-slate-500">Ngày đặt hàng:</lable>
                            <span>22/12/2023</span>
                        </li>
                        <li className="flex justify-between my-4">
                            <lable className="text-slate-500">Tình trạng:</lable>
                            <span className="text-green-500">Đang xử lý</span>
                        </li>
                        <li className="flex justify-between my-4">
                            <lable className="text-slate-500">Tên khách hàng:</lable>
                            <span>lam quoc dat</span>
                        </li>
                        <li className="flex justify-between my-4">
                            <lable className="text-slate-500">Số điện thoại:</lable>
                            <span>0123456789</span>
                        </li>
                        <li className="flex justify-between my-4">
                            <lable className="text-slate-500">Email:</lable>
                            <span>nguyenvana@gmail.com</span>
                        </li>
                        <hr/>
                        <li className="flex justify-between my-4">
                            <lable className="text-slate-500">Phương thức thanh toán:</lable>
                            <span>Chuyển khoảng ngân hàng</span>
                        </li>
                        <li className="flex justify-between my-4">
                            <lable className="text-slate-500">Tình trạng thanh toán</lable>
                            <span className="text-green-500">Đang xử lý</span>
                        </li>
                        <hr/>
                        <li className=" my-4">
                            <lable className="text-slate-500">Sản phẩm</lable>
                            <div className="rounded-lg my-4 px-4 py-4 border-2 flex justify-between">
                                <div>
                                    <label>Pin sạc dự phòng</label><br/>
                                    <span>Màu: </span>Đen
                                </div>
                                <div>
                                    <label>SL:</label>
                                    <span>1</span>
                                </div>
                            </div>
                        </li>
                        <li className="flex justify-between my-4">
                            <lable className="text-slate-500">Tổng số tiền đã đặt hàng:</lable>
                            <b className="text-blue-600 text-3xl">350.000₫</b>
                        </li>
                    </ul>
                    <div className="text-center">
                        <a href="#" className="text-blue-500">Nhấp vào đây để xem chi tiết đơn hàng</a>
                        <div className="flex mt-10">
                            <a href="#" className="rounded-lg w-1/2 px-4 py-4 mx-4 my-4 bg-blue-600 text-white">Tiếp tục mua hàng</a>
                            <a href="/paymentinfo" className="rounded-lg w-1/2 px-4 py-4 mx-4 my-4 bg-blue-600 text-white">Thanh toán</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Billdetail
