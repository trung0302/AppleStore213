import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [first, setfirst] = useState(0)
    //setfirst(window.google);
    const [user, setUser] = useState()
    function handleCallbackResponse(response){
        console.log("encoded jwt id token: "+response.credential);
        var userObject = jwt_decode(response.credential);
        console.log(userObject);
        setUser(userObject);
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
                width: document.getElementById("signInDiv").offsetWidth,
                height: document.getElementById("signInDiv").offsetHeight, }
             )
         }else{
            setfirst(first+1)
         }
    },[first]);


  const [value, setValue] = useState();

  const onDateChange = (e) => {
    setValue(e);
  };

  const checkEmailFormat = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  const [isSubscribed, setIsSubscribed] = useState(false);

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    dienthoai: "",
    password: "",
    gioitinh: "",
  });
  const [errors, setErrors] = useState({
    nameError: " ",
    emailError: " ",
    passwordError: " ",
    confirmError: " ",
  });
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
      if (checkEmailFormat(e.target.value) === false || e.target.value === "") {
        e.target.style.borderColor = "red";
        setErrors((prev) => {
          return {
            ...prev,
            emailError: "Email không hợp lệ.",
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
    if (e.target.name === "password") {
      if (e.target.value.length < 8 || e.target.value === "") {
        e.target.style.borderColor = "red";
        setErrors((prev) => {
          return {
            ...prev,
            passwordError: "Mật khẩu phải ít nhất 8 ký tự.",
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
    if (e.target.name === "password2") {
      if (e.target.value !== inputs.password) {
        e.target.style.borderColor = "red";
        setErrors((prev) => {
          return {
            ...prev,
            confirmError: "Mật khẩu không khớp.",
          };
        });
      } else {
        e.target.style.borderColor = "#fff";
        setErrors((prev) => {
          return {
            ...prev,
            confirmError: "",
          };
        });
      }
    }
    if (e.target.type === "text") {
      if (e.target.value === "") {
        e.target.style.borderColor = "red";
        setErrors((prev) => {
          return {
            ...prev,
            nameError: "Tên không được để trống.",
          };
        });
      } else {
        e.target.style.borderColor = "#fff";
        setErrors((prev) => {
          return {
            ...prev,
            nameError: "",
          };
        });
      }
    }
  };

  const handleSubmit = (e) => {
    if (errors.emailError !== "" || errors.passwordError !== "") {
      e.preventDefault();
      alert("Login failed!");
    } else {
        e.preventDefault();
      console.log(inputs);
      //navigate("/");
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <a href="/">
            <h3 className="text-7xl font-bold text-purple-600">SHOPDRUNK</h3>
          </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-4xl sm:rounded-lg">
          <form>
            <div>
              <label
                htmlFor="name"
                className="block text-2xl font-medium text-gray-700 undefined"
              >
                Tên
              </label>
              <div className="flex flex-col items-start">
                <input
                  value={inputs.name}
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Nhập tên"
                />
              </div>
            </div>
            <div className="mt-4">
              <fieldset className="flex">
                <label className="block text-2xl font-medium text-gray-700 undefined">
                  Giới tính:{" "}
                </label>
                <input
                  type="radio"
                  id="nu"
                  name="gioitinh"
                  value="Nữ"
                  checked={inputs.gioitinh === "Nữ"}
                  onChange={handleChange}
                  className="ml-10"
                />
                <label
                  htmlFor="unemployed"
                  className="block text-2xl font-medium text-gray-700 undefined"
                >
                  Nữ
                </label>
                <br />

                <input
                  type="radio"
                  id="nu"
                  name="gioitinh"
                  value="Nam"
                  checked={inputs.gioitinh === "Nam"}
                    onChange={handleChange}
                    className="ml-10"
                />
                <label
                  htmlFor="part-time"
                  className="block text-2xl font-medium text-gray-700 undefined"
                >
                  Nam
                </label>
                <br />
              </fieldset>
            </div>
            <div className="flex flex-col mt-2 items-start">
            <label
                htmlFor="email"
                className="block text-2xl font-medium text-gray-700 undefined"
              >
                Ngày Sinh:
              </label>
              </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-2xl font-medium text-gray-700 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  value={inputs.email}
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Nhập email"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-2xl font-medium text-gray-700 undefined"
              >
                Số Điện Thoại
              </label>
              <div className="flex flex-col items-start">
                <input
                  value={inputs.dienthoai}
                  type="number"
                  name="dienthoai"
                  onChange={handleChange}
                  //onBlur={handleBlur}
                  required
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Nhập số điện thoại"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-2xl font-medium text-gray-700 undefined"
              >
                Mật Khẩu
              </label>
              <div className="flex flex-col items-start">
                <input
                  value={inputs.password}
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Nhập mật khẩu"
                />
               
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="password_confirmation"
                className="block text-2xl  font-medium text-gray-700 undefined"
              >
                Xác Nhận Mật Khẩu
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password2"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Xác nhận mật khẩu"
                />
              </div>
            </div>

            <div className='mt-8 flex flex-col gap-y-4'>
                    <button 
                        onClick={handleSubmit}
                        className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'>
                        Đăng Kí
                    </button>
              </div>
          </form>
          <div className="mt-4 text-center text-grey-600">
            Bạn đã có tài khoản?{" "}
            <span>
              <a className="text-purple-600 hover:underline" href="/login">
                Đăng nhập
              </a>
            </span>
          </div>
          <div className="flex items-center w-full my-4">
            <hr className="w-full" />
            <p className="px-3 ">Hoặc</p>
            <hr className="w-full" />
          </div>
          


          <div className="my-6 space-y-2">
          <div id="signInDiv" style={{width:"100%"}}>
                  
                  </div>
            
            <div class="flex items-center justify-center">
  
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;



/**
 <button
              aria-label="Login with Google"
              type="button"
              className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <p>Login with Google</p>
            </button>




 */