import React, { useEffect, useState } from 'react'
import Select from "react-select";
import ProductCard from './ProductCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import images from '../../../assets/image';
import { useLocation } from 'react-router-dom'
import { Splide, SplideSlide } from '@splidejs/react-splide';

const phoneDatas = [
    {
        name: "iPhone 14 Pro Max 128GB",
        type: "iPhone 14 Series",
        path: "/iphone-14-pro-max",
        image: "https://shopdunk.com/images/thumbs/0007808_iphone-14-pro-max-128gb_420.png",
        price: 34990000,
        discountPrice: 27390000,
        isReady: false,
    },
    {
        name: "iPhone 14 Pro 128GB",
        type: "iPhone 14 Series",
        path: "/iphone-14-pro-128gb",
        image: "https://shopdunk.com/images/thumbs/0008734_iphone-14-pro-128gb_420.png",
        price: 30990000,
        discountPrice: 25390000,
        isReady: false,
    },
    {
        name: "iPhone 14 128GB",
        type: "iPhone 14 Series",
        path: "/iphone-14-128gb",
        image: "https://shopdunk.com/images/thumbs/0009181_iphone-14-128gb_420.png",
        price: 24990000,
        discountPrice: 19790000,
        isReady: false,
    },
    {
        name: "iPhone 14 128GB - Yellow",
        type: "iPhone 14 Series",
        path: "/iphone-14-128gb-yellow",
        image: "https://shopdunk.com/images/thumbs/0012250_iphone-14-128gb-yellow_420.png",
        price: 24990000,
        discountPrice: 20190000,
        isReady: true,
    },
]

const iphoneNavigation = [
    {
        name: "iPhone 14 series",
        path: "/iphone-14-series",
    },
    {
        name: "iPhone 13 series",
        path: "/iphone-13-series",
    },
    {
        name: "iPhone 12 series",
        path: "/iphone-12-series",
    },
    {
        name: "iPhone 11 series",
        path: "/iphone-11-series",
    },
    {
        name: "iPhone SE",
        path: "/iphone-se-series",
    },
]

const ipadNavigation = [
    {
        name: "iPad Pro M1",
        path: "/ipad-pro-m1",
    },
    {
        name: "iPad Pro M2",
        path: "/ipad-pro-m2",
    },
    {
        name: "iPad Air",
        path: "/ipad-air",
    },
    {
        name: "iPad 10",
        path: "/ipad-10",
    },
    {
        name: "iPad 9",
        path: "/ipad-9",
    },
    {
        name: "iPad Mini",
        path: "/ipad-mini",
    },
]

const macnavigation = [
    {
        name: "MacBook Pro",
        path: "/macbook-pro",
    },
    {
        name: "MacBook Air",
        path: "/macbook-air",
    },
    {
        name: "iMac",
        path: "/imac",
    },
    {
        name: "Mac Mini",
        path: "/mac-mini",
    },
]

const watchNavigation = [
    {
        name: "Apple Watch Ultra",
        path: "/apple-watch-ultra",
    },
    {
        name: "Apple Watch Series 8",
        path: "/apple-watch-series-8",
    },
    {
        name: "Apple Watch Series 7",
        path: "/apple-watch-series-7",
    },
    {
        name: "Apple Watch Series 6",
        path: "/apple-watch-series-6",
    },
    {
        name: "Apple Watch SE",
        path: "/apple-watch-se",
    },
    {
        name: "Apple Watch Series 3",
        path: "/apple-watch-series-3",
    },
]

const soundNavigation = [
    {
        name: "AirPods",
        path: "/airpods",
    },
    {
        name: "EarPods",
        path: "/earpods",
    },
    {
        name: "Marshall",
        path: "/loa-marshall",
    },
    {
        name: "Beats",
        path: "/loa-beats",
    },
    {
        name: "Harman Kardon",
        path: "/loa-harman-kardon",
    },
    {
        name: "JBL",
        path: "/loa-jbl",
    },
    {
        name: "Google",
        path: "/loa-google",
    },
]

const accessoryNavigation = [
    {
        name: "Cường lực bảo vệ",
        image: images.cuongLuc,
        path: "/cuong-luc-bao-ve",
    },
    {
        name: "Sạc, cáp",
        image: images.sacCap,
        path: "/sac-cap",
    },
    {
        name: "Bao da/ Ốp lưng",
        image: images.opLung,
        path: "/bao-da-op-lung",
    },
    {
        name: "Sạc dự phòng",
        image: images.sacDuPhong,
        path: "/sac-du-phong",
    },
    {
        name: "Balo/ Túi chống sốc",
        image: images.balo,
        path: "/balo-tui-chong-soc",
    },
    {
        name: "Chuột/ Bàn phím",
        image: images.chuot,
        path: "/chuot-ban-phim",
    }, {
        name: "Bút Apple Pencil",
        image: images.applePencil,
        path: "/but-apple-pencil",
    }, {
        name: "Dây đeo Apple Watch",
        image: images.dayDeo,
        path: "/day-deo-apple-watch",
    }, {
        name: "AirTags",
        image: images.airtags,
        path: "/airtags",
    }, {
        name: "Máy ảnh",
        image: images.mayAnh,
        path: "/may-anh",
    },
    {
        name: "Máy đọc sách",
        image: images.mayDocSach,
        path: "/may-doc-sach",
    },
    {
        name: "Apple TV",
        image: images.appleTv,
        path: "/apple-tv",
    },
    {
        name: "Đồng hồ Garmin",
        image: images.garmin,
        path: "/dong-ho-garmin",
    },
]

export default function ProductSection({ type }) {
    const [detail, setDetail] = useState();
    const [initPath, setInitPath] = useState();
    const location = useLocation();
    const [categories, setCategories] = useState([]);
    const [sort, setSort] = useState();
    const [data, setData] = useState(phoneDatas.slice(0));

    const options = [
        { label: "Giá cao đến thấp", value: 1 },
        { label: "Mới nhất", value: 2 },
        { label: "Tên: A đến Z", value: 3 },
        { label: "Tên: Z đến A", value: 4 },
        { label: "Giá thấp đến cao", value: 5 }
    ]

    const onChangeSort = (changedSort) => {
        setSort(changedSort?.value)
    }

    useEffect(() => {
        if (type === "iPhone") { setCategories(iphoneNavigation); setInitPath("/iphone") }
        else if (type === "iPad") { setCategories(ipadNavigation); setInitPath("/ipad") }
        else if (type === "Mac") { setCategories(macnavigation); setInitPath("/mac") }
        else if (type === "Watch") { setCategories(watchNavigation); setInitPath("/watch") }
        else if (type === "Âm thanh") { setCategories(soundNavigation); setInitPath("/am-thanh") }
        else { setCategories(accessoryNavigation); setInitPath("/phu-kien") }
        // eslint-disable-next-line
    }, [location])

    useEffect(() => {
        setDetail(categories.find(obj => {
            return obj.path === location.pathname
        }))
        // eslint-disable-next-line
    }, [categories])

    useEffect(() => {
        if (!sort) setData(phoneDatas.slice(0));
        else if (sort === 1) setData(phoneDatas.slice(0).sort((a, b) => b.discountPrice - a.discountPrice));
        else if (sort === 2) setData(phoneDatas.slice(0));
        else if (sort === 3) setData(phoneDatas.slice(0));
        else if (sort === 4) setData(phoneDatas.slice(0));
        else setData(phoneDatas.slice(0).sort((a, b) => a.discountPrice - b.discountPrice));
    }, [sort])

    return (
        <div className='w-[1200px] mx-auto'>
            <div className='w-full my-[36px] py-[6px]'>
                <div className='flex justify-between'>
                    {type !== "Phụ kiện" ?
                        <>
                            <div className='flex gap-x-[40px] items-center overflow-x-scroll mr-[40px]'>
                                <a href={initPath} className={`text-[15px] ${detail === undefined ? 'text-[#0066cc]' : 'text-[#515154]'} shrink-0`}>Tất cả</a>
                                {categories.map((item, index) => (
                                    <a key={index} href={item.path} className={`text-[15px] ${detail === item ? 'text-[#0066cc]' : 'text-[#515154]'} hover:text-[#0066cc] shrink-0	`}>{item.name}</a>
                                ))}
                            </div>
                            <Select
                                options={options}
                                className="text-[16px] shrink-0"
                                isClearable={true}
                                closeMenuOnSelect={true}
                                placeholder="Thứ tự hiển thị"
                                onChange={onChangeSort}
                            />
                        </>
                        :
                        <Splide options={{
                            rewind: true,
                            perPage: 7
                        }}>
                            {categories.map((item, index) => (
                                <SplideSlide key={index}>
                                    <div className='flex justify-center flex-col items-center'>
                                        <a href={item.path} className={` ${detail === item && 'border-2 border-[#0066CC]'} w-[70px] h-[70px] bg-white p-[15px] rounded-full shrink-0 hover:drop-shadow-xl `}>
                                            <img src={item.image} alt={item.name} className='h-full w-full object-contain' />
                                        </a>
                                        <span className='text-[15px] text-[#1D1D1F] mt-[20px]'>{item.name}</span>
                                    </div>
                                </SplideSlide>
                            ))}
                        </Splide>
                    }

                </div>
            </div>

            <div className='flex gap-[20px] flex-wrap mb-[35px]'>
                {data?.map((item, index) => <ProductCard key={index} item={item} />)}
            </div>

            <div className="flex items-center space-x-1 justify-center gap-[10px]">
                <div className="flex items-center justify-center bg-white rounded-md hover:bg-blue-400 text-[15px] text-gray-700 hover:text-white w-[35px] h-[35px] cursor-pointer">
                    <KeyboardArrowLeftIcon />
                </div>
                <div className="flex items-center justify-center bg-white rounded-md hover:bg-blue-400 text-[15px] text-gray-700 hover:text-white w-[35px] h-[35px] cursor-pointer">
                    1
                </div>
                <div className="flex items-center justify-center bg-white rounded-md hover:bg-blue-400 text-[15px] text-gray-700 hover:text-white w-[35px] h-[35px] cursor-pointer">
                    2
                </div>
                <div className="flex items-center justify-center bg-white rounded-md hover:bg-blue-400 text-[15px] text-gray-700 hover:text-white w-[35px] h-[35px] cursor-pointer">
                    3
                </div>
                <div className="flex items-center justify-center bg-white rounded-md hover:bg-blue-400 text-[15px] text-gray-700 hover:text-white w-[35px] h-[35px] cursor-pointer">
                    <KeyboardArrowRightIcon />
                </div>
            </div>
        </div>
    )
}
