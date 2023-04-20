import "@splidejs/react-splide/css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
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
                            <div className="min-h-[400px]">
                                <img  className="h-full" src={product.image} alt={product.image}></img>
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
          <div className="splide__arrows">
                <button className="splide__arrow splide__arrow--prev  border-none bg-slate-400 opacity-50 ml-[80px] w-[60px] h-[60px]">
                    <NavigateNextIcon sx={{ width: 24, height: 24 }} />
                </button>
                <button className="splide__arrow splide__arrow--next  border-none bg-slate-400 opacity-50 mr-[80px] w-[60px] h-[60px]">
                    <NavigateNextIcon sx={{ width: 24, height: 24 }} />
                </button>
          </div>
        </Splide>
        </div>
    );
}
export default AdvertisementSlide;