import "@splidejs/react-splide/css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import images from "../../../assets/image";
function Banner({ type }) {
    const iphoneBanners = [
        {
            image: images.iphoneBanner1,
        },
        {
            image: images.iphoneBanner2,
        }
    ]

    const ipadBanners = [
        {
            image: images.ipadBanner1,
        },
        {
            image: images.ipadBanner2,
        }
    ]

    const macBanners = [
        {
            image: images.macBanner1,
        },
        {
            image: images.macBanner2,
        },
        {
            image: images.macBanner3,
        },
        {
            image: images.macBanner4,
        }
    ]

    const watchBanners = [
        {
            image: images.watchBanner1,
        },
        {
            image: images.watchBanner2,
        },
    ]

    const soundBanners = [
        {
            image: images.soundBanner1,
        }
    ]

    const accessoryBanners = [
        {
            image: images.accessoryBanner,
        }
    ]
    const options = {
        rewind: true,
        type: "loop",
        speed: 1400,
        perPage: 1,
        perMove: 1,
        autoplay: true,
        pagination: true,
        paginationKeyboard: true,
    };
    return (
        <di className="w-full">
            <div className="w-[1200px] m-auto">
                <Splide hasTrack={false} options={options} aria-label="Slider Product">
                    <div className="">
                        <SplideTrack>
                            {type === 'iPhone' && iphoneBanners.map((item, index) => (
                                <SplideSlide key={index}>
                                    <div>
                                        <img src={item.image} alt={item.image} className='mx-auto'></img>
                                    </div>
                                </SplideSlide>
                            ))}
                            {type === 'iPad' && ipadBanners.map((item, index) => (
                                <SplideSlide key={index}>
                                    <div>
                                        <img src={item.image} alt={item.image} className='mx-auto'></img>
                                    </div>
                                </SplideSlide>
                            ))}
                            {type === 'Mac' && macBanners.map((item, index) => (
                                <SplideSlide key={index}>
                                    <div>
                                        <img src={item.image} alt={item.image} className='mx-auto'></img>
                                    </div>
                                </SplideSlide>
                            ))}
                            {type === 'Watch' && watchBanners.map((item, index) => (
                                <SplideSlide key={index}>
                                    <div>
                                        <img src={item.image} alt={item.image} className='mx-auto'></img>
                                    </div>
                                </SplideSlide>
                            ))}
                            {type === 'Âm thanh' && soundBanners.map((item, index) => (
                                <SplideSlide key={index}>
                                    <div>
                                        <img src={item.image} alt={item.image} className='mx-auto'></img>
                                    </div>
                                </SplideSlide>
                            ))}
                            {type === 'Phụ kiện' && accessoryBanners.map((item, index) => (
                                <SplideSlide key={index}>
                                    <div>
                                        <img src={item.image} alt={item.image} className='mx-auto'></img>
                                    </div>
                                </SplideSlide>
                            ))}
                        </SplideTrack>
                    </div>
                </Splide>
            </div>
        </di >
    );
}
export default Banner;