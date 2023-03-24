import "@splidejs/react-splide/css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import images from "../../../assets/image";
function AdvertisementSlide(){
    const data = [
        {
            image: images.banner1,
        },
        {
            image: images.banner2,
        },
        {
            image: images.banner3,
        },
        {
            image: images.banner4,
        },
        {
            image: images.banner5,
        },
        {
            image: images.banner6,
        },
    ];
    const options = {
        rewind: true,
        type: "loop",
        speed: 1400,
        perPage: 1,
        perMove: 1,
        autoplay: true,
        pagination: true,
        paginationKeyboard:true,
        //isNavigation: true,
        // fixedWidth: 250,
        // arrows: { prev: <WestIcon />, next: <EastIcon /> }
    };
    return (
        <div className="w-full">
            
            <Splide hasTrack={false} options={options} aria-label="Slider Product">
            <div className="">
                <SplideTrack>
                    {data.map((product, index) => (
                        <SplideSlide key={index}>
                            <div className="h-[400px]">
                                <img  src={product.image} alt={product.image}></img>
                            </div>
                        </SplideSlide>
                    ))}
                </SplideTrack>
            </div>
            {/* <div className="splide__arrows">
                <button className="splide__arrow splide__arrow--prev">
                    <EastIcon />
                </button>
                <button className="splide__arrow splide__arrow--next">
                    <EastIcon />
                </button>
            </div> */}
         
        </Splide>
        </div>
    );
}
export default AdvertisementSlide;