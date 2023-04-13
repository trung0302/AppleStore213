// import DetailBottom from "./DetailBottom";
import DetailBottom from "./detailBottom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useRef } from "react";
import images from "../../assets/image";
import classes from "./DetailProduct.module.css";
import Rating from "@mui/material/Rating";

function DetailProduct() {
    const mainCarouselRef = useRef(null);
    const thumbnailCarouselRef = useRef(null);

    const mainCarouselOptions = {
        perPage: 1,
        pagination: false,
        arrows: true,
        rewind: true,
        gap: '1rem',
        onMove: () => {
            thumbnailCarouselRef.current.go(mainCarouselRef.current.index);
        }
    };

    const thumbnailCarouselOptions = {
        fixedWidth: 100,
        fixedHeight: 100,
        gap: '0.5rem',
        cover: false,
        pagination: false,
        arrows: true,
        focus: 'center',
        updateOnMove: true,
        perPage: 3,
        breakpoints: {
            768: {
                fixedWidth: 66,
                fixedHeight: 50,
            },
        },
    };

    return (

        <div className={classes.container}>
            <section className={classes.detailproduct}>
                <section className={classes.product_splide}>
                    <Splide
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
                    </Splide>

                    <Splide
                        options={thumbnailCarouselOptions}
                        ref={thumbnailCarouselRef}
                        onFirstInit={() => {
                            thumbnailCarouselRef.current.sync(mainCarouselRef.current);
                        }}
                    >
                        <SplideSlide>
                            <img src={images.ip14prm} alt="Thumbnail 1" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={images.airpod2} alt="Thumbnail 2" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={images.ip14prm} alt="Thumbnail 3" />
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
                            <a>Danh gia</a>
                            <a>So sanh</a>
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
                                    <label>256GB</label>
                                </li>

                                <li>
                                    <label>512GB</label>
                                </li>
                            </ul>

                            <label>RAM</label>
                            <ul>
                                <li>8GB</li>
                            </ul>
                            <label>Màu sắc</label>
                            <ul>
                                <li>
                                    <label>Pink</label>
                                </li>

                                <li>
                                    <label>Red</label>
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