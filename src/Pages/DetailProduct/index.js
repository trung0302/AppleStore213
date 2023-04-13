import DetailBottom from "./detailBottom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useRef } from "react";
import images from "../../assets/image";
import classes from "./DetailProduct.module.css";
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
        <div className="grid grid-cols-1 justify-items-center">
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
                <section className={classes.overview}>
                    <div className={classes.wrapped_info}>
                        <h1>
                            <span>Macbook pro M1 2020</span>
                        </h1>
                        <div className={classes.wrapped_info_content}>
                            <div className={classes.rating}></div>
                            <a>Danh gia</a>
                            <button>So sanh</button>
                        </div>
                        <div>
                            <div className={classes.price}>
                                <span>28.550.000</span>
                            </div>

                            <label>Dung lượng</label>
                            <button>256GB</button>
                            <button>512GB</button>
                            <label>RAM</label>
                            <label>Maù sắc</label>
                        </div>
                    </div>


                </section>
            </section>
            <section className={classes.detailproduct}>
                <DetailBottom />
            </section>
        </div>
    );
}

export default DetailProduct;
