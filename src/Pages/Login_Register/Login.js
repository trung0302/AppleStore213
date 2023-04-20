import React, { useState,useEffect } from "react";
//import classes from "./Login.module.css";
import jwt_decode from "jwt-decode";
import axios from "axios";
import Cookies from "js-cookie";

//import images from "../../assets/image";
import ForgetPass from "./ForgetPass/ForgetPass";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
    const [first, setfirst] = useState(0)
    //setfirst(window.google);
    const [user, setUser] = useState()
    const handleCallbackResponse = async (response)=>{
        console.log("encoded jwt id token: "+response.credential);
        var userObject = jwt_decode(response.credential);
        console.log(userObject);
        const res = await axios
        .post(`http://localhost:3001/auth/googlelogin`, {
            token: String(response.credential)
        })
        .catch((err) => {
            alert("failed");
            console.log(err);
        });
    const data = await res.data;

    console.log(data);
    localStorage.setItem("user", JSON.stringify(data.khachhang));
                    //localStorage.setItem("token",data.token);
                    Cookies.set("token", data.token, {
                        expires: 30,
                    });
                    navigate("/")
    //return data;
        //setUser(userObject);
        //document.getElementById("signInDiv").hidden=true;
    }
    
    useEffect(()=>{
        /* global google */
        console.log(window.google);
        /**/
         if (window.google) {
            window.google.accounts.id.initialize({
                client_id:"992518564488-fsipb4qe4grfde0mnoh7skp7n1qn512s.apps.googleusercontent.com",
                callback: handleCallbackResponse
            });
            
             window.google.accounts.id.renderButton(
                document.getElementById("signInDiv"),
                { type: "standard",
                theme: "outline",
                size: "large",
                width: "900",
                height: document.getElementById("signInDiv").offsetHeight, }
             )
         }else{
            setfirst(first+1)
         }
    },[first]);
    const [modal, setModal] = useState(false);
    const navigate = useNavigate();
    const checkEmailFormat = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: "",
    });
    const handleFacebookLogin = async (response) => {
        try {
            console.log(response);
            console.log(response.data.accessToken);
            // Gọi API đến endpoint đăng nhập bằng Facebook trên server Node.js
            const res = await axios
            .post(`http://localhost:3001/auth/facebook`, {
                accessToken: String(response.data.accessToken)
            })
            const data = await res.data;
            localStorage.setItem("user", JSON.stringify(data.khachhang));
                    //localStorage.setItem("token",data.token);
                    Cookies.set("token", data.token, {
                        expires: 30,
                    });
                    navigate("/")
          } catch (error) {
            console.error(error);
          }
    }
    const handleChange = (e) => {
        setInputs((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    };
    const handleBlur = function (e) {
        if (e.target.type === "email") {
            if (
                checkEmailFormat(e.target.value) === false ||
                e.target.value === ""
            ) {
                e.target.style.borderColor = "red";
                setErrors((prev) => {
                    return {
                        ...prev,
                        emailError: "Email không hợp lệ",
                    };
                });
            } else {
                e.target.style.borderColor = "#fff";
                setErrors((prev) => {
                    return {
                        ...prev,
                        emailError: "",
                    };
                });
            }
        }
        if (e.target.type === "password") {
            if (e.target.value.length < 8 || e.target.value === "") {
                e.target.style.borderColor = "red";
                setErrors((prev) => {
                    return {
                        ...prev,
                        passwordError: "Mật khẩu phải dài hơn 8 ký tự.",
                    };
                });
            } else {
                e.target.style.borderColor = "#fff";
                setErrors((prev) => {
                    return {
                        ...prev,
                        passwordError: "",
                    };
                });
            }
        }
    };
    //const sendRequestSU = async () => {
      //  console.log("GUI API LOG IN");
    //};
    const sendRequestGG = async () => {
        const res = await axios
            .post(`http://localhost:3001/auth/googlelogin`, {
                token: String(inputs.email),
            })
            .catch((err) => {
                alert("failed");
                console.log(err);
            });
        const data = await res.data;
        console.log(data);
        return data;
    };
    const sendRequestSU = async () => {
        const res = await axios
            .post(`http://localhost:3001/auth/login`, {
                email: String(inputs.email),
                password: String(inputs.password),
            })
            .catch((err) => {
                alert("failed");
                console.log(err);
            });
        const data = await res.data;
        console.log(data);
        return data;
    };
    const handleSubmit = (e) => {
        if (errors.emailError !== "" || errors.passwordError !== "") {
            e.preventDefault();
            alert("Login failed!");
        } else {
            e.preventDefault();
            sendRequestSU()
                .then((data) => {
                    localStorage.setItem("user", JSON.stringify(data.findKH));
                    //localStorage.setItem("token",data.token);
                    Cookies.set("token", data.token, {
                        expires: 30,
                    });
                })
                //.then(()=>setIsLogin(true))
                .then(() => navigate("/"));
        }
    };

    /*const handleSubmit = (e) => {
        if (errors.emailError !== "" || errors.passwordError !== "") {
            e.preventDefault();
            alert("Login failed!");
        } else {
            console.log(inputs);
            //navigate("/");
        }
    };*/

//style={{backgroundImage: `url(${images.loginBG})`}}


  return (
    <div className="flex w-full h-screen">
        <div className="hidden relative w-1/2 h-full lg:flex items-center justify-center "
    >
        <div className="w-60 h-60 rounded-full bg-gradient-to-tr from-violet-500 to-pink-500 animate-spin"/> 
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
    </div>
    <div className="w-full flex items-center justify-center lg:w-1/2">
    <div className=' w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100'>
          <h1 className='text-5xl font-semibold'>Đăng Nhập</h1>
          <p className='font-medium text-lg text-gray-500 mt-4'>Chào mừng trở lại với Appledunk!</p>
          <div className='mt-8'>
              <div className='flex flex-col'>
              <div className='flex'>
                  <label className='text-2xl font-medium w-1/2'>Email</label>
                  <p className='text-2xl font-medium w-1/2 text-right text-red-600'>{errors.emailError}</p>
            </div>
                  <input 
                       value={inputs.email}
                       type="email"
                       name="email"
                       onChange={handleChange}
                       onBlur={handleBlur}
                       required
                      className='w-full text-2xl border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                      placeholder="Nhập email của bạn"/>
              </div>
              <div className='flex flex-col mt-4'>
              <div className='flex'>
                  <label className='text-2xl font-medium w-1/2'>Mật Khẩu</label>
                  <p className='text-2xl font-medium w-1/2 text-right text-red-600'>{errors.passwordError}</p>
            </div>
                  <input 
                      value={inputs.password}
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className='text-2xl w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                      placeholder="Nhập mật khẩu của bạn"
                      
                  />
              </div>
              <div className='mt-8 flex justify-between items-center'>
                  <div>
                      <input  type="checkbox" id='remember'/>
                      <label className='ml-2 font-medium text-base' for="remember">Nhớ mật khẩu</label>
                  </div>
                  <button  onClick={() => setModal(true)}
                  className='font-medium text-base text-violet-500'>Quên mật khẩu?</button>
              </div>
              <div className='mt-8 flex flex-col gap-y-4'>
                    <button 
                        onClick={handleSubmit}
                        className='text-2xl active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold '>
                        Đăng Nhập
                    </button>
              </div>
              <div className='mt-2 flex justify-center items-center'>
                  <p className='font-medium text-lg'>Bạn chưa có tài khoản?</p>
                  <button 
                      onClick={() => {navigate("/register")}}
                      className='ml-2 font-medium text-lg text-violet-500'>Đăng kí ngay!</button>
              </div>
              <div className="flex items-center w-full my-4">
            <hr className="w-full" />
            <p className="px-3 ">Hoặc</p>
            <hr className="w-full" />
          </div >
          <div style={{alignContent:"center"}}>
              <div id="signInDiv" style={{padding:"0 90px"}}>
                  
              </div>
              <div>
                <LoginSocialFacebook
                appId="918062536004658"
                onResolve={(response)=>
                {
                    handleFacebookLogin(response);
                }}
                onReject={(e)=>console.log(e)}
                >
                    <FacebookLoginButton></FacebookLoginButton>
                </LoginSocialFacebook>
              </div>
              </div>
          </div>
      </div>
      
    </div>
    
    {modal && (
                <ForgetPass
                    closewindow={setModal}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    inputs={inputs}
                    errors={errors}
                ></ForgetPass>
            )}
  </div>
  )
}

export default Login

/**<div className="w-60 h-60 rounded-full bg-gradient-to-tr from-violet-500 to-pink-500 animate-spin"/> 
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
     */