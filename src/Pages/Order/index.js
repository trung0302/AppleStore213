import styles from "./Order.module.css";
import images from "../../assets/image/index";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { DeleteOutline } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import ProductHint from "./Components/ProductHint/ProductHint";
import Payment from "./Components/Payment/Payment";

function Order() {
    const [qty, setQty] = useState(1);
    const [isChecked, setIsChecked] = useState(false);
    const [dataPayment, setDataPayment] = useState(null);
    const navigate = useNavigate();
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const handleGetData = (data) => {
        setDataPayment(data);
    };
    console.log(dataPayment);

    const increaseQty = () => {
        setQty((prev) => Number(prev) + 1);
    };

    const decreaseQty = () => {
        if (qty > 1) {
            setQty((prev) => Number(prev) - 1);
        }
    };

    const handleQtyChange = (e) => {
        setQty(e.target.value);
    };

    const handleCheckBoxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const handleFailOrder = () => {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Vui lòng chọn và điền đầy đủ thông tin trước khi thanh toán!",
            showConfirmButton: false,
            timer: 1500,
            padding: "0 0 20px 0",
        });
    };
    // console.log(typeof dataPayment?.selectedProvince);
    const handleOrder = (e) => {
        e.preventDefault();
        if (
            dataPayment.name &&
            dataPayment.phone &&
            dataPayment.email &&
            dataPayment.selectedProvince &&
            dataPayment.selectedDistrict &&
            dataPayment.method &&
            dataPayment.payment
        ) {
            if (emailRegex.test(dataPayment.email)) {
                if (dataPayment.method === "Ship") {
                    if (dataPayment.address && dataPayment.selectedWard) {
                        if (isChecked) {
                            navigate("/billdetail");
                        } else {
                            Swal.fire({
                                position: "center",
                                icon: "error",
                                title: "Vui lòng chấp nhận các điều khoản và điều kiện!",
                                showConfirmButton: false,
                                timer: 1500,
                                padding: "0 0 20px 0",
                            });
                        }
                    } else handleFailOrder();
                } else if (dataPayment.method === "Store") {
                    if (dataPayment.selectedStore) {
                        if (isChecked) {
                            navigate("/billdetail");
                        } else {
                            Swal.fire({
                                position: "center",
                                icon: "error",
                                title: "Vui lòng chấp nhận các điều khoản và điều kiện!",
                                showConfirmButton: false,
                                timer: 1500,
                                padding: "0 0 20px 0",
                            });
                        }
                    } else handleFailOrder();
                }
            } 
            else {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Vui lòng nhập đúng format Email!",
                    showConfirmButton: false,
                    timer: 1500,
                    padding: "0 0 20px 0",
                });
            }
        } else handleFailOrder();
    };

    return (
        <div>
            {/* Header */}
            <div className={styles.header}>
                <div className={styles.label}>
                    <a
                        href="/"
                        className="text-[14px] text-[#515154] hover:text-[#0066cc]"
                    >
                        Trang chủ
                    </a>
                    <div className="px-[5px] py-0">&gt;</div>
                    <a
                        href="/cart"
                        className="text-[14px] text-[#515154] hover:text-[#0066cc]"
                    >
                        Giỏ hàng
                    </a>
                </div>
            </div>

            {/* Body */}
            <div className={styles.body}>
                <div className={styles.content + " grid grid-cols-3 gap-8"}>
                    <div className={styles.cartInfo + " col-span-2"}>
                        <div className={styles.cartDetail}>
                            <table className={styles.table}>
                                <thead className="h-[54px] text-[16px]">
                                    <tr>
                                        <th className="w-1/6">Hình ảnh</th>
                                        <th className="w-1/3">Tên sản phẩm</th>
                                        <th className="w-1/4">Giá bán</th>
                                        <th>Số lượng</th>
                                        <th className="w-1/12"></th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    <tr className="border-solid border-t border-t-[#d9d9d9]">
                                        <td className="p-[12px]">
                                            <a>
                                                <img
                                                    className="w-[80px] h-[80px]  m-[auto]"
                                                    src={images.ip14prm}
                                                    alt="Iphone 14 Pro Max"
                                                ></img>
                                            </a>
                                        </td>
                                        <td className="text-left pl-[24px] p-[12px]">
                                            <a
                                                href="/"
                                                className="font-semibold"
                                            >
                                                iPhone 14 Pro Max 128GB
                                            </a>
                                            <div className="text-[#86868B] font-normal mt-1">
                                                Hình thức: Mua thẳng
                                                <br />
                                                Khu vực: Khu vực miền Bắc
                                                <br />
                                                Màu sắc: Gold
                                            </div>
                                        </td>
                                        <td className="p-[12px] align-top">
                                            32.490.000đ
                                        </td>
                                        <td className="p-[12px] align-top">
                                            <div className={styles.quantity}>
                                                <button
                                                    className="text-[16px]"
                                                    onClick={decreaseQty}
                                                >
                                                    &#8722;
                                                </button>
                                                <input
                                                    type="text"
                                                    value={qty}
                                                    onChange={handleQtyChange}
                                                    className={
                                                        styles.inputQuantity
                                                    }
                                                ></input>
                                                <button
                                                    className="text-[16px]"
                                                    onClick={increaseQty}
                                                >
                                                    &#43;
                                                </button>
                                            </div>
                                        </td>
                                        <td className="p-[12px] align-top">
                                            <IconButton
                                                size="medium"
                                                color="error"
                                            >
                                                <DeleteOutline
                                                    sx={{ fontSize: "24px" }}
                                                />
                                            </IconButton>
                                        </td>
                                    </tr>
                                    <tr className="border-solid border-t border-t-[#d9d9d9]">
                                        <td className="p-[12px]">
                                            <a href="/cart">
                                                <img
                                                    className="w-[80px] h-[80px]  m-[auto]"
                                                    src={images.ip14prm}
                                                    alt="Iphone 14 Pro Max"
                                                ></img>
                                            </a>
                                        </td>
                                        <td className="text-left pl-[24px] p-[12px]">
                                            <a
                                                href="/"
                                                className="font-semibold"
                                            >
                                                iPhone 14 Pro Max 128GB
                                            </a>
                                            <div className="text-[#86868B] font-normal mt-1">
                                                Hình thức: Mua thẳng
                                                <br />
                                                Khu vực: Khu vực miền Bắc
                                                <br />
                                                Màu sắc: Gold
                                            </div>
                                        </td>
                                        <td className="p-[12px] align-top">
                                            32.490.000đ
                                        </td>
                                        <td className="p-[12px] align-top">
                                            <div className={styles.quantity}>
                                                <button
                                                    className="text-[16px]"
                                                    onClick={decreaseQty}
                                                >
                                                    &#8722;
                                                </button>
                                                <input
                                                    type="text"
                                                    value={qty}
                                                    onChange={handleQtyChange}
                                                    className={
                                                        styles.inputQuantity
                                                    }
                                                ></input>
                                                <button
                                                    className="text-[16px]"
                                                    onClick={increaseQty}
                                                >
                                                    &#43;
                                                </button>
                                            </div>
                                        </td>
                                        <td className="p-[12px] align-top">
                                            <IconButton
                                                size="medium"
                                                color="error"
                                            >
                                                <DeleteOutline
                                                    sx={{ fontSize: "24px" }}
                                                />
                                            </IconButton>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="mt-[16px] text-right">
                                <button
                                    type="submit"
                                    className="border-solid border border-[#0066cc] rounded-[8px] py-[10px] px-[20px] text-[#0066cc] text-[14px] hover:bg-sky-100"
                                >
                                    Cập nhật giỏ hàng
                                </button>
                                <a
                                    href="/"
                                    className="border-solid border border-[#0066cc] rounded-[8px] py-[10px] px-[20px] text-[#0066cc] text-[14px] ml-8 hover:bg-sky-100"
                                >
                                    Tiếp tục mua hàng
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* SideBar */}
                    <div className={styles.cartSidebar}>
                        <div className={styles.cartDiscount}>
                            <input
                                type="text"
                                placeholder="Mã giảm giá"
                                className="h-full flex-1 placeholder:text-[16px] placeholder:font-light outline-none rounded-l-[8px] pl-6 caret-red-600 text-[16px]"
                            ></input>
                            <button className="h-full w-[120px] text-[16px] font-light text-white bg-[#aaa] rounded-r-[6px] border-none hover:bg-[#999]">
                                Áp dụng
                            </button>
                        </div>

                        {/* Tổng giá */}
                        <div className={styles.totals}>
                            <div className="border-solid border-b border-[#d9d9d9] mb-8">
                                <div className="flex justify-between py-2">
                                    <div className="text-2xl  text-[#86868B]">
                                        Tổng phụ:
                                    </div>
                                    <div className="text-[16px]">
                                        {Number(45000000).toLocaleString() +
                                            "đ"}
                                    </div>
                                </div>
                                <div className="flex justify-between py-4 mb-6">
                                    <div className="text-[18px] font-semibold text-black">
                                        Tổng cộng:
                                    </div>
                                    <div className="text-[18px] text-[#007bff]">
                                        {Number(45000000).toLocaleString() +
                                            "đ"}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Điều khoản */}
                        <div className="flex items-center mb-10">
                            <input
                                type="checkbox"
                                id="service"
                                className="w-[20px] h-[20px] mr-4"
                                checked={isChecked}
                                onChange={handleCheckBoxChange}
                            ></input>
                            <label htmlFor="service" className="text-[14px]">
                                Tôi đã đọc và đồng ý với
                                <span className="text-[#0066cc]">
                                    {" "}
                                    điều khoản và điều kiện{" "}
                                </span>
                                của website.
                            </label>
                        </div>

                        <button
                            className="w-full h-[48px] px-8 py-4 text-[16px] text-white bg-[#0066CC] rounded-[8px]"
                            onClick={handleOrder}
                        >
                            Tiến hành đặt hàng
                        </button>

                        <div className="text-[#e4434b] text-[14px] pr-4 font-light mt-6">
                            &#40;&#42;&#41; Phí phụ thu sẽ được tính khi bạn
                            tiến hành thanh toán.
                        </div>
                    </div>

                    {/* Gợi ý sản phẩm */}
                    <div className={styles.productHint + " col-span-2"}>
                        <label className="text-[24px] font-semibold">
                            Gợi ý phụ kiện đi kèm
                        </label>
                        <ProductHint />
                    </div>
                    <div></div>
                    {/* Thông tin thanh toán */}
                    <div className={styles.payment + " col-span-2"}>
                        <label className="text-[24px] font-semibold">
                            Thông tin thanh toán
                        </label>
                        <Payment handleGetData={handleGetData} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;
