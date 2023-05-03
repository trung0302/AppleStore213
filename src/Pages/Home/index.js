import "./Home.module.css";
import AdvertisementSlide from "./Components/AdvertisementSlide";
import AdvertisementItem from "./Components/AdvertisementItem";
import ItemComponent from "./Components/ItemComponent";
import images from "../../assets/image";
import SubcribeSection from "../ProductList/Components/SubcribeSection";
import { useEffect, useState } from "react";
import HandleApiProduct from "../../Apis/HandleApiProduct.js";
function Home() {
    const [dataProduct, setDataProduct]=useState([]);
    const dataFromAPI=HandleApiProduct.getAllProduct();
    useEffect(()=>{
        dataFromAPI.then((data)=>{
            setDataProduct(()=>{
                return data.listProducts.slice(0,4)
            })
        })
    },[])
    let listProduct=[];
    dataProduct.map((value,index)=>{
        listProduct.push({
            image: value.hinh,
            name: value.tensanpham,
            newPrice: value.gia,
            oldPrice: value.gia,
            note: images.khaitruong,
            link:'/detailproduct'
        })
    })
    console.log(listProduct)
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
            datas: listProduct,
            link: '/iphone'
        },
        {
            title: "iPad",
            datas: listProduct,
            link: '/ipad'
        },
        {
            title: "Mac",
            datas: listProduct,
            link: '/ipad'
        },
        {
            title: "Watch",
            datas: listProduct,
            link: '/watch'
        },
        {
            title: "Âm thanh",
            datas: listProduct,
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
