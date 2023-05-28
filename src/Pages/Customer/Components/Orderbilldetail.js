import styles from "../Customer.module.css";
import { Link } from "react-router-dom";
import jsPDF from 'jspdf';
import { useState,useEffect } from "react";
import 'jspdf-autotable';
import Status from "./Status";
import HandleApiCustomer from "../../../Apis/HandleApiCustomer";
import HandleApiThanhToan from "../../../Apis/HandleApiThanhtoan"
import axios from "axios";

//import hai file script thêm font chữ roboto hỗ trợ tiếng Việt vào trong jspdf
import "./Roboto-Bold.js";
import "./Roboto-Medium";
import { SystemSecurityUpdateWarningTwoTone } from "@mui/icons-material";

export default ({ order }) => {
    const date = new Date(order.updatedAt);
    
    const day = date.getDate();
    const month = date.getMonth() + 1; // Lưu ý: Tháng trong đối tượng Date được đếm từ 0 đến 11
    const year = date.getFullYear();
    
    const user = JSON.parse(localStorage.getItem("user"));
    const [products, setProducts] = useState([]);

    //hàm lấy thông tin product theo productId
    const getProduct = async (proId) => {
        try {
          const response = await axios.get(`http://localhost:3001/api/product/${proId}`);
            return response.data;
        } catch (error) {
          console.log(error);
          return null;
        }
      };

    const fetchProducts = async () => {
        const productPromises = order.products.map((item) => getProduct(item.productId));
        const resolvedProducts = await Promise.all(productPromises);
        setProducts(resolvedProducts);
    };

    useEffect(() => {
        fetchProducts();
      }, []);

    //gọi api cập nhật order
    const UpdateOrder = (id, url)=>{
        axios.put(`http://localhost:3001/don-hang/${order.madh}`, {
            transId:id,
            orderUrl: url
        })
        .then((response) => {
            window.open(response.data.orderUrl, "_blank");
        })
        .catch((error) => {
            console.log(error);
        });
    }

    //hàm thanh toán khi nhấn nút thanh toán lại
    const ThanhToan = ()=>{
        //gọi hàm thanh toán và set lại transId, orderUrl
        if(order.paymentMethod == "momo") 
            HandleApiThanhToan.thanhtoanMoMo(10000)
            .then((res)=>{
                UpdateOrder(res.transId, res.orderUrl);
            })
            .catch((e)=>{
                console.log(e);
            })
        else
            HandleApiThanhToan.thanhtoanZalo(10000)
            .then((res)=>{
                console.log(res.orderUrl)
                UpdateOrder(res.transId, res.orderUrl);
            })
            .catch((e)=>{
                console.log(e);
            })
    }

    const generatePDF = () => {
        const doc = new jsPDF();

        //đặt fontsize cho cả file pdf
        doc.setFontSize(10);
        doc.setFont("Roboto", "bold");
        doc.text(5, 5, `Mã đơn hàng: ${order.madh}`);
        doc.text(5, 10, `https://appledunk.com`);
        doc.text(5, 15, `Ngày: ${day}/${month}/${year}`);
        doc.setFont("Roboto", "medium");
        doc.text(10, 20, `Tên: ${user.hoten}`);
        doc.text(10, 25, `Số điện thoại: ${user.sdt}`);
        doc.text(10, 30, `Địa chỉ:`);
        if(user.diachinhanhang.length !==0)
            doc.text(20, 35, `${user.diachinhanhang[0].diachi}`);
        doc.text(10, 40, `Phương thức thanh toán: Payment.Name.VietQr`);
        doc.setFont("Roboto", "bold");
        doc.text(10, 55, `Các sản phẩm:`);
        doc.setFont("Roboto", "medium");

        //tạo các dòng dữ liệu cho bảng
        const productData = products.map((product, index) => {
            const item = order.products[index];
            const totalPrice = product ? product.gia * item.soluong : 0;
            return [product ? product.tensanpham : '', product ? product.masp : '', product ? `${product.gia} đ` : '', item.soluong, `${totalPrice} đ`];
          });
        // [
        //     ["Cổng chuyển đổi USB-C To Apple Pencil Adapter", "MQLU3ZP/A", "350.000 đ", "1", "350.000 đ"],
        //     ["Tên sản phẩm 2", "Mã sản phẩm 2", "150.000 đ", "1", "150.000 đ"],
        //     ["Tên sản phẩm 3", "Mã sản phẩm 3", "150.000 đ", "1", "150.000 đ"],
        //     ["Tên sản phẩm 4", "Mã sản phẩm 4", "150.000 đ", "1", "150.000 đ"],
        // ];
        
        //tạo bảng
        doc.autoTable({
            head: [["Tên", "Mã sản phẩm", "Giá", "Số lượng", "Tổng"]],
            body: productData,
            startY: 60,
            styles: {font: "Roboto"}
        });
        
        //tính chiều dài của bảng
        const tableHeight = 60 + products.length*5 + 10;

        doc.setFont("Roboto", "bold");
        doc.setFontSize(10);
        doc.text(190, tableHeight + 20, `Tổng: ${order.tongtrigia}`, { align: "right" });

        //lưu file về máy client
        doc.save(`order_${order.madh}.pdf`);
    }
    
    return(
        <div>
            <div className={styles.bg_white +" rounded-lg w-full mb-8 px-8 py-10 drop-shadow-lg"}>
                <ul>
                    <li className="flex justify-between mb-4">
                        <label>Mã đơn hàng:</label>
                        <b>{order.madh}</b>
                    </li>
                    <hr/>
                    <li className="flex justify-between mt-4 mb-4">
                        <label>Ngày đặt hàng:</label>
                        <span>{day}/{month}/{year}</span>
                    </li>
                    <hr/>
                    <li className="flex justify-between mt-4 mb-4">
                        <label>Tình trạng đặt hàng:</label>
                        <Status status={order.tinhtrang}></Status>
                    </li>
                </ul>
                <div className="flex items-center justify-center">
                    <button onClick={generatePDF} className={styles.bg_white+ " text-sky-600 border-sky-600 border-2 rounded-lg px-10 py-4"}>
                        Xuất file PDF
                    </button>
                </div>
            </div>
            <div className={styles.bg_white +" rounded-lg w-full mb-8 px-8 py-10 drop-shadow-lg"}>
                <ul>
                    <li className="flex justify-between mb-4">
                        <label>Tên khách hàng:</label>
                        <span>{user!==undefined && user.hoten}</span>
                    </li>
                    <li className="flex justify-between mt-4 mb-4">
                        <label>Điện thoại:</label>
                        <span>{user!==undefined && user.sdt}</span>
                    </li>
                    <li className="flex justify-between mt-4 mb-4">
                        <label>E-mail:</label>
                        <span>{user!==undefined && user.email}</span>
                    </li>
                    <hr/>
                    <li className="flex justify-between mt-4 mb-4">
                        <label>Địa chỉ nhận hàng:</label>
                        <span>{user!==undefined && user.diachinhanhang[0]!==undefined && user.diachinhanhang[0].diachi}</span>
                    </li>
                    <hr/>
                    <li className="flex justify-between mt-4 mb-4">
                        <label>Phương thức thanh toán:</label>
                        <span>{order.paymentMethod}</span>
                    </li>
                    <li className="mt-4 mb-4">
                        <div className="flex justify-between">
                            <label>Tình trạng thanh toán:</label>
                            {(()=>{
                                if(order.tinhtrang == "Đã thanh toán")return (<span>Thành công</span>);
                                else if (order.tinhtrang=="Đã hủy") return (<span>Đã hủy</span>);
                                else if (order.tinhtrang=="Chưa thanh toán") return (<span>Chưa thanh toán</span>);
                                else return (<span>Đang giao</span>);
                            })()}
                        </div>
                        { 
                            (() => {
                                if (order.tinhtrang == "Chưa thanh toán" && order.orderUrl!=="Không có") {
                                return (
                                    <div className="text-center">
                                        <button className="border-2 rounded-lg px-8 py-4 mt-8 mb-8 mx-auto bg-sky-600 text-white" onClick={ThanhToan}>Thử thanh toán lại</button>
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
                        {order.products !== undefined &&
                            products.map((product, index) => {
                            const item = order.products[index];
                            return (
                                <div className="mt-4 mb-4 rounded-lg border-2 px-4 py-3 flex justify-between" key={product._id}>
                                {item !== undefined && (
                                    <div>
                                    <div>
                                        <Link to="#" className="">
                                            {product.tensanpham}
                                        </Link>
                                    </div>
                                    <div>
                                        <label>SL:</label>
                                        <span>{item.soluong}</span>
                                    </div>
                                    </div>
                                )}
                                </div>
                            );
                        })}
                    </li>
                    <li className="flex justify-between mt-4 mb-4">
                        <label>Tổng số tiền đã đặt hàng:</label>
                        <b className="text-2xl">{order.tongtrigia}₫</b>
                    </li>
                </ul>
            </div>
        </div>
    );
}