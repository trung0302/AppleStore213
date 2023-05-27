import styles from "../Payment.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import HandleApiThanhtoan from "../../../Apis/HandleApiThanhtoan";
import { useEffect } from "react";
import axios from "axios";

function Billdetail() {
    //Lấy ngày tháng năm hiện tại
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Lưu ý: Phương thức getMonth() trả về giá trị từ 0 - 11
    const year = currentDate.getFullYear();

    // lưu dữ liệu truyền vào từ trang giỏ hàng
    const location = useLocation();
    //console.log(location.state);

    const amount = location.state.totalMoney; // tổng tiền
    const method = location.state.dataPayment.payment; // phương thức thanh toán

     //Tạo đối tương order để post vào api order
     const newOrder = {
        makh: location.state.data.order.makh,
        tongtrigia: amount,
        products: [
            //lấy các product trong giỏ hàng
            location.state.data.productCart.map((product)=>{
                return ({
                    id: product._id,
                    tensanpham: product.tensp,
                    soluong: product.soluong,
                })
            })
        ]
    }

    console.log(newOrder);

    //Tạo đơn hàng với order truyền từ giỏ hàng (chưa xong)
    useEffect(() => {
        axios.post('http://localhost:3001/don-hang', {order: newOrder})
        .then((response) => {
           console.log(response.data)
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    //Thanh toán bằng zalo hoặc momo
    const Thanhtoan = () => {
        if (method == "zalo")
            HandleApiThanhtoan.thanhtoanZalo(amount)
                .then((response) => {
                    window.open(response.orderUrl, "_blank");
                })
                .catch((error) => {
                    console.log(error);
                });
        else if(method == "momo")
            HandleApiThanhtoan.thanhtoanMoMo(amount)
                .then((response) => {
                    window.open(response.orderUrl, "_blank");
                })
                .catch((error) => {
                    console.log(error);
                });
    };

    return (
        <div className={styles.bg_primary + " flex justify-center text-2xl"}>
            <div className="rounded-lg lg:w-2/5 my-12 bg-white">
                <h1 className="text-4xl text-center px-4 py-4 mt-10">
                    Chi tiết đơn hàng
                </h1>
                <div className=" px-10 py-4">
                    <ul className="mb-10">
                        <li className="flex justify-between my-4">
                            <p className="text-slate-500">Mã đơn hàng:</p>
                            <span name="madonhang">123</span>
                        </li>
                        <li className="flex justify-between my-4">
                            <p className="text-slate-500">Ngày đặt hàng:</p>
                            <span name="date">{day}/{month}/{year}</span>
                        </li>
                        <li className="flex justify-between my-4">
                            <p className="text-slate-500">Tên khách hàng:</p>
                            <span name="tenkhachhang">{location.state.dataPayment.name}</span>
                        </li>
                        <li className="flex justify-between my-4">
                            <p className="text-slate-500">Số điện thoại:</p>
                            <span name="sdt">{location.state.dataPayment.phone}</span>
                        </li>
                        <li className="flex justify-between my-4">
                            <p className="text-slate-500">Email:</p>
                            <span name="email">{location.state.dataPayment.email}</span>
                        </li>
                        <hr />
                        <li className="flex justify-between my-4">
                            <p className="text-slate-500">
                                Phương thức thanh toán:
                            </p>
                            {(method=='zalo' || method=='momo') && (<span name="method">Chuyển khoảng bằng {method}</span>)}
                            {(method!=='zalo' && method!=='momo') && (<span name="method">Thanh toán khi nhận hàng</span>)}
                        </li>
                        <li className="flex justify-between my-4">
                            <p className="text-slate-500">
                                Tình trạng thanh toán
                            </p>
                            <span
                                name="method_status"
                                className="text-green-500"
                            >
                                Đang xử lý
                            </span>
                        </li>
                        <hr />
                        <li className=" my-4">
                            <p className="text-slate-500">Sản phẩm</p>
                            { //lấy các sản phẩm ra
                                location.state.data.productCart.map((product)=>{
                                    return (
                                        <div name="product" key={product.masp}
                                            className="rounded-lg my-4 px-4 py-4 border-2 flex justify-between"
                                        >
                                            <div>
                                                <p>{product.tensp}</p>
                                                <br />
                                                {product.dungluong && (<div>Dung Lượng: {product.dungluong}</div>)}
                                                {product.mausac && (<div>Màu: {product.mausac}</div>)}
                                                
                                            </div>
                                            <div className="flex flex-col justify-between">
                                                <div>
                                                    <label>SL: </label>
                                                    <span>{product.soluong}</span>
                                                </div>
                                                <div>
                                                    <label>Giá: </label>
                                                    <b>{product.gia}đ</b>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </li>
                        <li className="flex justify-between my-4">
                            <p className="text-slate-500">
                                Tổng số tiền đã đặt hàng:
                            </p>
                            <p className="text-blue-600 text-3xl">{amount} ₫</p>
                        </li>
                    </ul>
                    <div className="text-center">
                        <Link to="/customer/history" className="text-blue-500">
                            Nhấp vào đây để xem chi tiết đơn hàng
                        </Link>
                        <div className="flex mt-10 justify-around">
                            <Link
                                to="/"
                                className="rounded-lg w-1/2 px-4 py-4 mx-4 my-4 bg-blue-600 text-white"
                            >
                                Tiếp tục mua hàng
                            </Link>
                            {(method=='zalo' || method=='momo') &&
                                <button
                                    onClick={Thanhtoan}
                                    className="rounded-lg w-1/2 px-4 py-4 mx-4 my-4 bg-blue-600 text-white"
                                >
                                    Thanh toán
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Billdetail;