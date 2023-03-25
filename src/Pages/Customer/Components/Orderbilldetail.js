import styles from "../Customer.module.css";
import Status from "./Status";

export default ({madonhang, status}) => {
    return(
        <div>
            <div className={styles.bg_white +" rounded-lg w-full mb-8 px-8 py-10"}>
                <ul>
                    <li className="flex justify-between mb-4">
                        <label>Mã đơn hàng:</label>
                        <b>{madonhang}</b>
                    </li>
                    <hr/>
                    <li className="flex justify-between mt-4 mb-4">
                        <label>Ngày đặt hàng:</label>
                        <span>22/03/2023</span>
                    </li>
                    <hr/>
                    <li className="flex justify-between mt-4 mb-4">
                        <label>Tình trạng đặt hàng:</label>
                        <Status status={status}></Status>
                    </li>
                </ul>
                <div className="flex items-center justify-center">
                    <button className={styles.bg_white+ " text-sky-600 border-sky-600 border-2 rounded-lg px-10 py-4"}>
                        Xuất file PDF
                    </button>
                </div>
            </div>
            <div className={styles.bg_white +" rounded-lg w-full mb-8 px-8 py-10"}>
                <ul>
                    <li className="flex justify-between mb-4">
                        <label>Tên khách hàng:</label>
                        <span>Dat Lam</span>
                    </li>
                    <li className="flex justify-between mt-4 mb-4">
                        <label>Điện thoại:</label>
                        <span>0123456789</span>
                    </li>
                    <li className="flex justify-between mt-4 mb-4">
                        <label>E-mail:</label>
                        <span>datlam@gmail.com</span>
                    </li>
                    <hr/>
                    <li className="flex justify-between mt-4 mb-4">
                        <label>Địa chỉ nhận hàng:</label>
                        <span>Yên Thủy</span>
                    </li>
                    <hr/>
                    <li className="flex justify-between mt-4 mb-4">
                        <label>Phương thức thanh toán:</label>
                        <span>Chuyển khoản ngân hàng</span>
                    </li>
                    <li className="mt-4 mb-4">
                        <div className="flex justify-between">
                            <label>Tình trạng thanh toán:</label>
                            {(()=>{
                                if(status == "green")return (<span>Thành công</span>);
                                else if (status=="red") return (<span>Đã hủy</span>);
                                else return (<span>Đang xử lý</span>);
                            })()}
                        </div>
                        { 
                            (() => {
                                if (status == "yellow") {
                                return (
                                    <div className="text-center">
                                        <button className="border-2 rounded-lg px-8 py-4 mt-8 mb-8 mx-auto bg-sky-600 text-white">Thử thanh toán lại</button>
                                        <p className="text-lg text-slate-400">Đơn đặt hàng này chưa được thanh toán. Để thanh toán ngay bây giờ, hãy nhấn vào nút "Thử thanh toán lại".</p>
                                    </div>
                                );
                                } else {
                                return null;
                                }
                            })()
                        }
                        
                    </li>
                    <li className="mt-4 mb-4">
                        <label>Sản phẩm</label>
                        <div className="mt-4 mb-4 rounded-lg border-2 px-4 py-3 flex justify-between">
                            <div>
                                <a href="#" className="">Iphone 12 Promax</a>
                                <div>
                                    <label>Màu sắc: Green </label>
                                </div>
                            </div>
                            <div>
                                <label>SL:</label>
                                <span>2</span>
                            </div>
                        </div>
                    </li>
                    <li className="flex justify-between mt-4 mb-4">
                        <label>Tổng số tiền đã đặt hàng:</label>
                        <b className="text-2xl">119.000₫</b>
                    </li>
                </ul>
            </div>
        </div>
    );
}