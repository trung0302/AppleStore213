import styles from "./Order.module.css";
import images from "../../assets/image/index";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { DeleteOutline, ReceiptOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import ProductHint from "./Components/ProductHint/ProductHint";
import Payment from "./Components/Payment/Payment";
import PromotionList from "./Components/PromotionList";
import HandleApiCart from "../../Apis/HandleApiCart";
import HandleApiKM from "../../Apis/HandleApiKM";

function Order() {
    const [data, setData] = useState([]);
    const [qty, setQty] = useState(1);
    // const [showPromotion, setShowPromotion] = useState(true);
    const [isChecked, setIsChecked] = useState(false);
    const [voucherDisplay, setVoucherDisplay] = useState(false);
    const [dataPayment, setDataPayment] = useState(null);
    const [promotion, setPromotion] = useState(0);
    const [moneyDiscount, setMoneyDiscount] = useState(0);
    const [totalMoney, setTotalMoney] = useState(0);
    const [promotionInput, setPromotionInput] = useState("");


    const navigate = useNavigate();
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const user = JSON.parse(localStorage.getItem("user"));

    // Hàm render giỏ hàng
    const HandleGetCart = () => {
        HandleApiCart.getCartByMaKH(user?.makh)
            .then((data) => {
                setData(data);
                setMoneyDiscount(
                    data.order.tongtrigia * (promotion / 100)
                );
                setTotalMoney(
                    data.order.tongtrigia -
                        data.order.tongtrigia * (promotion / 100)
                );
            })
            .catch((err) => console.log(err));
    };
    // console.log(data);

    // Render order the first time
    useEffect(() => {
        HandleGetCart();
        console.log(data);
    }, []);

    // Change total money when select promotion
    useEffect(() => {
        setMoneyDiscount(data.order?.tongtrigia * (promotion / 100));
        setTotalMoney(
            data.order?.tongtrigia - data.order?.tongtrigia * (promotion / 100)
        );
    }, [promotion]);

    const handleGetData = (data) => {
        setDataPayment(data);
    };
    // console.log(dataPayment);

    const increaseQty = (item) => {
        const data = {
            soluong: Number(item.soluong) + 1,
        };
        HandleApiCart.updateCart(
            item.makh,
            item.masp,
            item.mausac,
            item.dungluong,
            data
        )
            .then(() => {
                HandleGetCart();
                console.log("OK!");
            })
            .catch((err) => console.log(err));
    };

    const decreaseQty = (item) => {
        const data = {
            soluong: Number(item.soluong) - 1,
        };
        if (item.soluong > 1) {
            HandleApiCart.updateCart(
                item.makh,
                item.masp,
                item.mausac,
                item.dungluong,
                data
            )
                .then(() => {
                    HandleGetCart();
                    console.log("OK!");
                })
                .catch((err) => console.log(err));
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
                            navigate("/billdetail", {
                                state: { dataPayment, totalMoney, data },
                            });
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
                            navigate("/billdetail", {
                                state: { dataPayment, totalMoney, data },
                            });
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
            } else {
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

    const handleDisplayVoucher = () => {
        setVoucherDisplay(true);
    };

    // Handle Delete Product
    const HandleDeleteSp = (item) => {
        HandleApiCart.deleteSpFromCart(
            item.makh,
            item.masp,
            item.mausac,
            item.dungluong
        )
            .then(() => {
                HandleGetCart();
            })
            .catch(() => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Xóa sản phẩm thất bại",
                    showConfirmButton: false,
                    timer: 1500,
                    padding: "0 0 20px 0",
                });
            });
    };

    // Handle Áp dụng Mã giảm giá bằng input
    const HandleApplyPromotion = () => {
        // HandleApiKM.getKMByApdung
    }

    //  Handle change promotion input
    const HandleChangePromotionInput = (e) => {
        setPromotionInput(e.target.value);
    }

    return (
        <div>
            {user && data?.productCart?.length !== 0 ? (
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
                        <div
                            className={
                                styles.content + " grid grid-cols-3 gap-8"
                            }
                        >
                            <div className={styles.cartInfo + " col-span-2"}>
                                <div className={styles.cartDetail}>
                                    <table className={styles.table}>
                                        <thead className="h-[54px] text-[16px]">
                                            <tr>
                                                <th className="w-1/6">
                                                    Hình ảnh
                                                </th>
                                                <th className="w-1/3">
                                                    Tên sản phẩm
                                                </th>
                                                <th className="w-1/4">
                                                    Giá bán
                                                </th>
                                                <th>Số lượng</th>
                                                <th className="w-1/12"></th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-center">
                                            {data?.productCart?.map(
                                                (item, index) => (
                                                    <tr
                                                        className="border-solid border-t border-t-[#d9d9d9]"
                                                        key={index}
                                                    >
                                                        <td className="p-[12px]">
                                                            <a>
                                                                <img
                                                                    className="w-[80px] h-[80px]  m-[auto]"
                                                                    src={
                                                                        images.ip14prm
                                                                    }
                                                                    alt={
                                                                        item.tensp
                                                                    }
                                                                ></img>
                                                            </a>
                                                        </td>
                                                        <td className="text-left pl-[24px] p-[12px]">
                                                            <a
                                                                href="/"
                                                                className="font-semibold"
                                                            >
                                                                {item.tensp}
                                                            </a>
                                                            <div className="text-[#86868B] font-normal mt-1">
                                                                Hình thức: Mua
                                                                thẳng
                                                                <br />
                                                                Màu sắc:{" "}
                                                                {item.mausac}
                                                                <br />
                                                                Dung lượng:{" "}
                                                                {item.dungluong}
                                                            </div>
                                                        </td>
                                                        <td className="p-[12px] align-top">
                                                            {Number(
                                                                item.gia
                                                            ).toLocaleString() +
                                                                "đ"}
                                                        </td>
                                                        <td className="p-[12px] align-top">
                                                            <div
                                                                className={
                                                                    styles.quantity
                                                                }
                                                            >
                                                                <button
                                                                    className="text-[16px]"
                                                                    onClick={() =>
                                                                        decreaseQty(
                                                                            item
                                                                        )
                                                                    }
                                                                >
                                                                    &#8722;
                                                                </button>
                                                                <input
                                                                    type="text"
                                                                    value={
                                                                        item.soluong
                                                                    }
                                                                    onChange={
                                                                        handleQtyChange
                                                                    }
                                                                    className={
                                                                        styles.inputQuantity
                                                                    }
                                                                ></input>
                                                                <button
                                                                    className="text-[16px]"
                                                                    onClick={() =>
                                                                        increaseQty(
                                                                            item
                                                                        )
                                                                    }
                                                                >
                                                                    &#43;
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td className="p-[12px] align-top">
                                                            <IconButton
                                                                size="medium"
                                                                color="error"
                                                                onClick={() =>
                                                                    HandleDeleteSp(
                                                                        item
                                                                    )
                                                                }
                                                            >
                                                                <DeleteOutline
                                                                    sx={{
                                                                        fontSize:
                                                                            "24px",
                                                                    }}
                                                                />
                                                            </IconButton>
                                                        </td>
                                                    </tr>
                                                )
                                            )}
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
                                        value={promotionInput}
                                        onChange={HandleChangePromotionInput}
                                        className="h-full flex-1 placeholder:text-[16px] placeholder:font-light outline-none rounded-l-[8px] pl-6 caret-red-600 text-[16px]"
                                    ></input>
                                    <button className="h-full w-[120px] text-[16px] font-light text-white bg-[#aaa] rounded-r-[6px] border-none hover:bg-[#999]"
                                    onClick={HandleApplyPromotion}>
                                        Áp dụng
                                    </button>
                                </div>
                                {/* Mã giảm giá */}
                                <div className=" mb-[16px] flex justify-between">
                                    <div className="flex items-center">
                                        <ReceiptOutlined
                                            sx={{
                                                marginRight: "6px",
                                                fontSize: "20px",
                                                color: "#0066cc",
                                            }}
                                        />
                                        <div className="text-2xl">
                                            AppleDunk voucher
                                        </div>
                                    </div>
                                    <button
                                        className="border border-solid border-[#0066cc] rounded-[4px] px-3 py-1 
                                    text-[10px] text-[#0066cc] hover:bg-sky-100"
                                        onClick={handleDisplayVoucher}
                                    >
                                        Chọn mã giảm giá
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
                                                {data?.order?.tongtrigia.toLocaleString() +
                                                    "đ"}
                                            </div>
                                        </div>
                                        {promotion !== 0 && (
                                            <div className="flex justify-between py-2">
                                                <div className="text-2xl  text-[#86868B]">
                                                    Voucher giảm giá:
                                                </div>
                                                <div className="text-[16px]">
                                                    &minus;{" "}
                                                    {moneyDiscount.toLocaleString() +
                                                        "đ"}
                                                </div>
                                            </div>
                                        )}
                                        <div className="flex justify-between py-4 mb-6">
                                            <div className="text-[18px] font-semibold text-black">
                                                Tổng cộng:
                                            </div>
                                            <div className="text-[18px] text-[#007bff]">
                                                {totalMoney.toLocaleString() +
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
                                    <label
                                        htmlFor="service"
                                        className="text-[14px]"
                                    >
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
                                    &#40;&#42;&#41; Phí phụ thu sẽ được tính khi
                                    bạn tiến hành thanh toán.
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

                    <PromotionList
                        display={voucherDisplay}
                        setDisplay={setVoucherDisplay}
                        promotion={promotion}
                        setPromotion={setPromotion}
                        totalMoney={totalMoney}
                    />
                </div>
            ) : (
                <div className="h-[540px]">
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
                    <div className="text-[16px] text-[#777] text-center pt-16">
                        Giỏ hàng của bạn đang trống!
                    </div>
                </div>
            )}
        </div>
    );
}

export default Order;
