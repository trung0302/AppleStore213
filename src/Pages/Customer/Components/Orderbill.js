import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../Customer.module.css";
import Status from "./Status";

export default ({madonhang, date, total, method, status}) => {
    return (
        <div className={styles.bg_white +" rounded-lg w-full mb-8 relative"}>
            <div className="px-4 py-4">
                <ul>
                    <li className="mx-3 mb-4">
                        <label className="mr-3">Mã đơn hàng:</label>
                        <span>{madonhang}</span>
                    </li>
                    <li className="mx-3 my-8">
                        <label className="mr-3">Ngày đặt hàng:</label>
                        <span>{date}</span>
                    </li>
                    <li className="mx-3 my-8">
                        <label className="mr-3">Tổng tiền:</label>
                        <b>{total}₫</b>
                    </li>
                    <li className="mx-3 my-8">
                        <label className="mr-3">Phương thức thanh toán:</label>
                        <b>{method}</b>
                    </li>
                </ul>
                {/* <a href={'/customer/orderdetail'} onClick={handleClick} className="mx-3 mb-4 text-sky-600">Xem chi tiết</a> */}
                <Link to={{ pathname: `/customer/orderdetail/${madonhang}/${status}` }} className="mx-3 mb-4 text-sky-600">Xem chi tiết</Link>
            </div>
            <div className="absolute top-0 right-0">
                <Status status={status}></Status>
            </div>
        </div>
    );
}