import React, { useState } from "react";
import classes from "../Login.module.css";
import axios from "axios";

const ForgetPass = (props) => {
    const [message, setMessage] = useState();

    const sendRequestSU = async () => {
        const res = await axios
            .post(`https://showroomcar104.onrender.com/users/forgotPassword`, {
                email: String(props.inputs.email),
            })
            .catch((err) => {
                console.log(err);
                /*Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Your email is not exists",
                });*/
            });
        const data = await res.data;
        if (data.status == 201) {
            console.log(data.status);
        } else {
            console.log(data.message);
        }
        return data;
    };
    const handleClick = () => {
        props.closewindow(false);
    };
    const submitEmail = (e) => {
        if (props.errors.emailError != "") {
            e.preventDefault();
            alert("submit failed!");
        } else {
            e.preventDefault();
            sendRequestSU()
                .then((data) => {
                    setMessage(data.message);
                })
                .then(() => {
                    /*Swal.fire({
                        icon: "success",
                        title: "Hãy kiểm tra email",
                        text: "Email xác nhận mật khẩu đả được gửi cho bạn",
                    });*/
                });
        }
    };

    return (
        <>
            <div className={classes.forgetpass}>
                <form className={classes.form}>
                    <h2 style={{color:"black", fontWeight:"bold", fontSize:"25px"}}>Quên mật khẩu?</h2>
                    <p
                        style={{
                            padding: "10px 0",
                            fontSize: "10px",
                            textAlign: "center",
                        }}
                    >
                        Đừng lo lắng hãy nhập vào email của bạn và bắt đầu thiết
                        lập mật khẩu mới!
                    </p>
                    <p>
                        <label  style={{
                            padding: "10px 0",
                            fontSize: "15px",
                        }}
                        >Email</label>
                        <br />
                        <input
                            className='w-full text-lg border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            placeholder="Nhập mật khẩu của bạn"
                            
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            type="email"
                            name="email"
                            value={props.inputs.email}
                            required
                        />
                        <p
                            style={{
                                color: "red",
                                padding: "10px",
                                fontSize: "12px",
                            }}
                        >
                            {props.errors.emailError}
                        </p>
                    </p>
                    {message && (
                        <p style={{ color: "green", fontSize: "15px" }}>
                            {message}
                        </p>
                    )}
                    <p style={{ textAlign: "center", fontSize: "16px" }}>
                        <button
                            className='mb-5 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'
                            id="sub_btn"
                            type="submit"
                            onClick={submitEmail}
                        >
                            Gửi Email
                        </button>
                        <br />
                        <p className={classes.direct} onClick={handleClick}>
                            Quay về đăng nhập
                        </p>
                    </p>
                </form>
            </div>
            <div className={classes.backdrop} onClick={handleClick}></div>
        </>
    );
};

export default ForgetPass;