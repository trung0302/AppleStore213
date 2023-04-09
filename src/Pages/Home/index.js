import "./Home.module.css";
import AdvertisementSlide from "./Components/AdvertisementSlide";
import AdvertisementItem from "./Components/AdvertisementItem";
import ItemComponent from "./Components/ItemComponent";
import images from "../../assets/image";
import SubcribeSection from "../ProductList/Components/SubcribeSection";
function Home() {
    const iphone=[
        {
            image: images.ip14prm,
            name: 'Iphone 14 Pro Max 6 inch Wifi 64GB',
            newPrice: 6990000,
            oldPrice: 9990000,
            note: images.khaitruong,
            link:'/detailproduct'
        },
        {
            image: images.ip14prm,
            name: 'Iphone 14 Pro Max 6 inch Wifi 64GB',
            newPrice: 6990000,
            oldPrice: 9990000,
            note: images.khaitruong,
            link:'/detailproduct'

        },
        {
            image: images.ip14prm,
            name: 'Iphone 14 Pro Max 6 inch Wifi 64GB',
            newPrice: 6990000,
            oldPrice: 9990000,
            note: images.khaitruong,
            link:'/detailproduct'
        },
        {
            image: images.ip14prm,
            name: 'Iphone 14 Pro Max 6 inch Wifi 64GB',
            newPrice: 6990000,
            oldPrice: 9990000,
            note: images.khaitruong,
            link:'/detailproduct'
        }
    ];
    const tintucData=[
    {
        image: images.tintuc,
        name: 'Sinh viên kinh tế có nên chọn Apple để làm việc',
        date: '07/04/2023',
        link:'/tintuc'
    },
    {
        image: images.tintuc,
        name: 'Sinh viên kinh tế có nên chọn Apple để làm việc',
        date: '07/04/2023',
        link:'/tintuc'
    },
    {
        image: images.tintuc,
        name: 'Sinh viên kinh tế có nên chọn Apple để làm việc',
        date: '07/04/2023',
        link:'/tintuc'
    }
]
    const itemUI=[
        {
            title: "iPhone",
            datas: iphone,
            link: '/iphone'
        },
        {
            title: "iPad",
            datas: iphone,
            link: '/ipad'
        },
        {
            title: "Mac",
            datas: iphone,
            link: '/ipad'
        },
        {
            title: "Watch",
            datas: iphone,
            link: '/watch'
        },
        {
            title: "Âm thanh",
            datas: iphone,
            link: '/am-thanh'
        }
];
const tintucUI={
    title: 'Tin tức',
    datas: tintucData,
    link: '/tin-tuc'
}
    return(
    <div className="w-full bg-gray-100">
       <AdvertisementSlide/>
       <AdvertisementItem/>
       {
        itemUI.map((item, index)=>(
            <ItemComponent data={item} key={index}/>
        ))
       }
       <div className="flex justify-center">
            <a  href="#" className="block h-[432px] m-8">
                    <img  className="" src={images.BannerBottom} alt={images.BannerBottom}></img>
            </a>
       </div>
       <ItemComponent data={tintucUI}/>
       <div className="my-[-80px]">
             <SubcribeSection/>
       </div>
    </div>
    );
}

export default Home;
