import "./Home.module.css";
import AdvertisementSlide from "./Components/AdvertisementSlide";
import AdvertisementItem from "./Components/AdvertisementItem";
import ItemComponent from "./Components/ItemComponent";
import images from "../../assets/image";
function Home() {
    const iphone=[
        {
            image: images.ip14prm,
            name: 'Iphone 14 Pro Max 6 inch Wifi 64GB',
            newPrice: 6990000,
            oldPrice: 9990000
        },
        {
            image: images.ip14prm,
            name: 'Iphone 14 Pro Max 6 inch Wifi 64GB',
            newPrice: 6990000,
            oldPrice: 9990000
        },
        {
            image: images.ip14prm,
            name: 'Iphone 14 Pro Max 6 inch Wifi 64GB',
            newPrice: 6990000,
            oldPrice: 9990000
        },
        {
            image: images.ip14prm,
            name: 'Iphone 14 Pro Max 6 inch Wifi 64GB',
            newPrice: 6990000,
            oldPrice: 9990000
        }
    ];
    const itemUI=[
        {
            title: "iPhone",
            datas: iphone
        },
        {
            title: "iPad",
            datas: iphone
        },
        {
            title: "Mac",
            datas: iphone
        },
        {
            title: "Watch",
            datas: iphone
        },
        {
            title: "Âm thanh",
            datas: iphone
        }
];
    return(
    <div className="w-full bg-gray-100">
       <AdvertisementSlide/>
       <AdvertisementItem/>
       {
        itemUI.map((item, index)=>(
            <ItemComponent data={item} key={index}/>
        ))
       }
    </div>
    );
}

export default Home;
