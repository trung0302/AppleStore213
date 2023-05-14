import DetailBottom from "./detailBottom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useRef, useState, useEffect } from "react";
import images from "../../assets/image";
import classes from "./DetailProduct.module.css";
import Rating from "@mui/material/Rating";
import StoreIcon from '@mui/icons-material/Store';
import { useParams } from "react-router-dom";
import HandleApiProduct from "../../Apis/HandleApiProduct";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DetailProduct() {
    const [isLoading, setLoading] = useState(true);
    const params = useParams()
    const [currentSlide,setCurrentSlide] = useState(0);
    const mainCarouselRef = useRef(null);
    const thumbnailCarouselRef = useRef(null);
    const [sp, setSp] = useState(null)
    const [user, setUser] = useState(JSON.parse(window.localStorage.getItem("user")))
    
    const [dungluong, setDungluong] = useState("");
    const [ram, setRam] = useState("");
    const [color, setColor] = useState("");
    const navigate = useNavigate()

    useEffect( ()=>{
    //    await HandleApiProduct.getProductById(params.id)
    //     .then( (res) => {
    //         console.log(res.tensanpham);
    //          setSp(res);
    //     })

        axios.get(`http://localhost:3001/product/${params.id}`)
        .then( (response) => { 
            if(response.data !== undefined) {
                setSp(response.data);      
                setLoading(false);
            }
        })
        .catch(error => console.log(error));
        
    },[])

   

    // useEffect(()=>{
        // console.log(sp)
        // console.log(user)
        // console.log(sp.tensanpham)   
        // try {
        //     console.log(sp.tensanpham);
        //   } catch(error) {
        //     console.log(error);
        //   }
    // },[])

    const handleMuaNgayClick = (e) => {
        if(dungluong === "") 
            alert("Vui lòng lựa chọn dung lượng!")
        else if(ram === "")
            alert("Vui lòng lựa chọn ram!")
        else if(color === "")
            alert("Vui lòng lựa chọn màu sắc!")
        else {
            // màu đc chọn
            const cartData = {
                makh: user.makh,
                masp: params.id,
                mausac: color,
                soluong: 1,
                rom: dungluong,
            }

            console.log(cartData)
            axios.post(`http://localhost:3001/api/cart`,cartData)
            .then( (response) => { 
                console.log(response)
                navigate("/cart")
            })
            .catch(error => console.log(error));
        }
    }

    const mainCarouselOptions = {
        perPage: 1,
        pagination: false,
        arrows: false,
        rewind: true,
        gap: '2rem',
        onMove: () => {
            thumbnailCarouselRef.current.go(mainCarouselRef.current.index);
        }
    };

    const thumbnailCarouselOptions = {
        fixedWidth: 100,
        fixedHeight: 100,
        gap: '0.1rem',
        cover: true,
        pagination: false,
        arrows: true,
        focus: 'center',
        updateOnMove: false,
        perPage: 3,
        breakpoints: {
            768: {
                fixedWidth: 66,
                fixedHeight: 50,
            },
        },
    };
    const handleThumbnailClick = (index) => {
        setCurrentSlide(index);
        mainCarouselRef.current.go(index);
      };

    const handleDungLuongClick = (i) => {
        setDungluong(i)
        // console.log(params.id)
    }
    const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    });
    if (isLoading===false && sp!==undefined && sp!==null) {
        console.log("isLo ",isLoading)
        console.log(sp)
        
    return (
        <div className={classes.container}>
            <section className={classes.detailproduct}>
                <section className={classes.product_splide}>
                    <Splide
                        className={classes.mainSplide}
                        options={mainCarouselOptions}
                        ref={mainCarouselRef}
                    >
                        <SplideSlide>
                            
                                <img src={images.ip14prm} alt="Image 1" />
                        </SplideSlide>
                        <SplideSlide>
                                <img src={images.airpod2} alt="Image 2" />
                        </SplideSlide>
                        <SplideSlide>
                                <img src={images.ip14prm} alt="Image 3" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={images.mayAnh} alt="Image 4" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={images.ip14prm} alt="Image 5" />
                        </SplideSlide>
                    </Splide>

                    <Splide
                        className={classes.optionSplide}
                        options={thumbnailCarouselOptions}
                        ref={thumbnailCarouselRef}
                        onFirstInit={() => {
                            thumbnailCarouselRef.current.sync(mainCarouselRef.current);
                        }}
                    >
                        <SplideSlide>
                            <div>
                                <img src={images.ip14prm} alt="Thumbnail 1"
                                onClick={() => handleThumbnailClick(0)} />
                            </div>
                            
                        </SplideSlide>
                        <SplideSlide>
                            <div>
                                <img src={images.airpod2} alt="Thumbnail 2" 
                                onClick={() => handleThumbnailClick(1)}/>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div>
                                <img src={images.ip14prm} alt="Thumbnail 3" 
                                onClick={() => handleThumbnailClick(2)}/>
                            </div>           
                        </SplideSlide>
                    </Splide>
                </section>

                <div className={classes.overview}>
                    <div className={classes.wrapped_info}>
                        <h1>
                            <span>{sp.tensanpham}</span>
                        </h1>
                        <div className={classes.wrapped_info_content}>
                            <div className={classes.rating}>
                                <Rating name="size-small" defaultValue={2} size="big" />
                            </div>
                            <a>Đánh giá</a>
                        <hr />

                    </div>
                    <div className={classes.price}>
                        <span className={classes.currentPrice}>{VND.format(sp.gia)}</span>
                    </div>
                    <div className={classes.attribute}>
                        <div className={classes.detail_info}>
                            <label>Dung lượng</label>
                            <ul>
                                <li onClick={() => handleDungLuongClick("128GB")} 
                                    className={dungluong === "128GB" ? classes.active : "hover:border-blue-400 hover:border-[2px] hover:text-blue-600"}>
                                    128GB
                                </li>

                                <li onClick={()=> setDungluong("256GB")}
                                    className={dungluong === "256GB" ? classes.active : "hover:border-blue-400 hover:border-[2px] hover:text-blue-600"}>
                                    256GB
                                </li>

                                <li onClick={()=> setDungluong("512GB")} 
                                    className={dungluong === "512GB" ? classes.active : "hover:border-blue-400 hover:border-[2px] hover:text-blue-600"}>
                                    512GB
                                </li>

                                <li onClick={()=> setDungluong("1T")} 
                                    className={dungluong === "1T" ? classes.active : "hover:border-blue-400 hover:border-[2px] hover:text-blue-600"}>
                                    1T
                                </li>
                            </ul>

                            <label>RAM</label>
                            <ul>
                                <li onClick={()=> setRam("8GB")} 
                                    className={ram === "8GB" ? classes.active : "hover:border-blue-400 hover:border-[2px] hover:text-blue-600"}>
                                    8GB
                                </li>

                                <li onClick={()=> setRam("16GB")} 
                                    className={ram === "16GB" ? classes.active : "hover:border-blue-400 hover:border-[2px] hover:text-blue-600"}>
                                    16GB
                                </li>
                            </ul>
                            <label>Màu sắc</label>
                            
                        </div>
                        <div className={classes.itemColor}>
                        <ul >
                                <li className={color === "black"? "bg-[#a9a9a9] outline outline-[2px] outline-blue-500" : classes.black}
                                    onClick={()=>setColor("black")} value={"black"}>
                                </li>
                                <li className={color === "pink"? "bg-[#ffc0cb] outline outline-[2px] outline-blue-500" : classes.pink}
                                    onClick={()=>setColor("pink")} value={"pink"}>
                                </li>
                                <li className={color === "blue"? "bg-[#11114dcc] outline outline-[2px] outline-blue-500" : classes.blue}
                                    onClick={()=>setColor("blue")} value={"blue"}>
                                </li>
                                <li className={color === "gold"? "bg-[#bd8b0dcc] outline outline-[2px] outline-blue-500" : classes.gold}
                                    onClick={()=>setColor("gold")} value={"gold"}>
                                </li>
                        </ul>
                        </div>
                        
                        <div className={classes.confirm}>
                            <div className="flex text-[#5353e7]">
                                <StoreIcon fontSize="large"/>
                                <a className="text-[13px] mt-[3px] ml-[3px] block">Xem cửa hàng có sẵn sản phẩm</a>
                            </div>
                            <button onClick={()=>handleMuaNgayClick()}>MUA NGAY</button>
                        </div>


                    </div>



                    </div>
                </div>

            </section>
            <div>
                {(sp!==undefined)?<DetailBottom sp = {sp}
                              user = {user}/>:""}
            </div>


        </div>
    )}
}

export default DetailProduct;