import DetailBottom from "./detailBottom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useRef, useState } from "react";
import images from "../../assets/image";
import classes from "./DetailProduct.module.css";
import Rating from "@mui/material/Rating";
import StoreIcon from '@mui/icons-material/Store';
import { useParams } from "react-router-dom";
function DetailProduct() {
    const {id} = useParams()
    const [currentSlide,setCurrentSlide] = useState(0);
    const mainCarouselRef = useRef(null);
    const thumbnailCarouselRef = useRef(null);
    
    const [dungluong, setDungluong] = useState(0);
    const [ram, setRam] = useState(0);
    const [color, setColor] = useState(0);

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

    const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    });
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
                            <span>MacBook Pro M1 2020</span>
                        </h1>
                        <div className={classes.wrapped_info_content}>
                            <div className={classes.rating}>
                                <Rating name="size-small" defaultValue={2} size="big" />
                            </div>
                            <a>Đánh giá</a>
                        <hr />

                    </div>
                    <div className={classes.price}>
                        <span className={classes.currentPrice}>{VND.format(28550000)}</span>
                    </div>
                    <div className={classes.attribute}>
                        <div className={classes.detail_info}>
                            <label>Dung lượng</label>
                            <ul>
                                <li onClick={()=> setDungluong(1)} value={256}
                                    className={dungluong === 1 ? classes.active : "hover:border-blue-400 hover:border-[2px] hover:text-blue-600"}>
                                    128GB
                                </li>

                                <li onClick={()=> setDungluong(2)} value={256}
                                    className={dungluong === 2 ? classes.active : "hover:border-blue-400 hover:border-[2px] hover:text-blue-600"}>
                                    256GB
                                </li>

                                <li onClick={()=> setDungluong(3)} 
                                    className={dungluong === 3 ? classes.active : "hover:border-blue-400 hover:border-[2px] hover:text-blue-600"}>
                                    512GB
                                </li>

                                <li onClick={()=> setDungluong(4)} 
                                    className={dungluong === 4 ? classes.active : "hover:border-blue-400 hover:border-[2px] hover:text-blue-600"}>
                                    1T
                                </li>
                            </ul>

                            <label>RAM</label>
                            <ul>
                                <li onClick={()=> setRam(1)} 
                                    className={ram === 1 ? classes.active : "hover:border-blue-400 hover:border-[2px] hover:text-blue-600"}>
                                    8GB
                                </li>

                                <li onClick={()=> setRam(2)} 
                                    className={ram === 2 ? classes.active : "hover:border-blue-400 hover:border-[2px] hover:text-blue-600"}>
                                    16GB
                                </li>
                            </ul>
                            <label>Màu sắc</label>
                            
                        </div>
                        <div className={classes.itemColor}>
                        <ul >
                                <li className={color === 1? "bg-[#a9a9a9] outline outline-[2px] outline-blue-500" : classes.black}
                                    onClick={()=>setColor(1)}>
                                </li>
                                <li className={color === 2? "bg-[#ffc0cb] outline outline-[2px] outline-blue-500" : classes.pink}
                                    onClick={()=>setColor(2)}>
                                </li>
                                <li className={color === 3? "bg-[#11114dcc] outline outline-[2px] outline-blue-500" : classes.blue}
                                    onClick={()=>setColor(3)}>
                                </li>
                                <li className={color === 4? "bg-[#bd8b0dcc] outline outline-[2px] outline-blue-500" : classes.gold}
                                    onClick={()=>setColor(4)}>
                                </li>
                        </ul>
                        </div>
                        
                        <div className={classes.confirm}>
                            <div className="flex text-[#5353e7]">
                                <StoreIcon fontSize="large"/>
                                <a className="text-[13px] mt-[3px] ml-[3px] block">Xem cửa hàng có sẵn sản phẩm</a>
                            </div>
                            <button>MUA NGAY</button>
                        </div>


                    </div>



                    </div>
                </div>

            </section>
            <div>
                <DetailBottom />
            </div>


        </div>

    );
}

export default DetailProduct;