// import DetailBottom from "./DetailBottom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useRef, useState } from "react";
import images from "../../assets/image";
import classes from "./DetailProduct.module.css";
import Rating from "@mui/material/Rating";
import DetailBottom from "./DetailBottom";

function DetailProduct() {
    const [currentSlide,setCurrentSlide] = useState(0);
    const mainCarouselRef = useRef(null);
    const thumbnailCarouselRef = useRef(null);

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
                            <a>|</a>
                            <a>So sánh</a>
                        </div>
                        <hr />

                    </div>
                    <div className={classes.price}>
                        <span className={classes.currentPrice}>28.550.000</span>
                    </div>
                    <div className={classes.attribute}>
                        <div className={classes.detail_info}>
                            <label>Dung lượng</label>
                            <ul>
                                <li>
                                    256GB
                                </li>

                                <li>
                                    512GB
                                </li>
                            </ul>

                            <label>RAM</label>
                            <ul>
                                <li>8GB</li>
                            </ul>
                            <label>Màu sắc</label>
                            
                        </div>
                        <div className={classes.itemColor}>
                        <ul >
                                <li className={classes.red}>
                                </li>
                                <li className={classes.pink}>
                                </li>
                                <li className={classes.green}>
                                </li>
                                <li className={classes.yellow}>
                                </li>
                        </ul>
                        </div>
                        
                        <div className={classes.confirm}>
                            <a>Xem cửa hàng có sẵn sản phẩm</a>
                            <button>MUA NGAY</button>
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