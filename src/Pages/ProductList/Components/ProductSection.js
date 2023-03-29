import React, { useEffect, useState } from 'react'
import Select from "react-select";
import ProductCard from './ProductCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import DetailSection from './DetailSection';
import SubcribeSection from './SubcribeSection';
import { useLocation } from 'react-router-dom'

export default function ProductSection({ type }) {
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

    const [detail, setDetail] = useState();
    const [initPath, setInitPath] = useState();
    const location = useLocation();
    const [categories, setCategories] = useState([])

    const options = [
        { label: "Giá cao đến thấp" },
        { label: "Mới nhất" },
        { label: "Tên: A đến Z" },
        { label: "Tên: Z đến A" },
        { label: "Giá thấp đến cao" }
    ]

    useEffect(() => {
        if (type === "iPhone") { setCategories(iphoneNavigation); setInitPath("/iphone") }
        if (type === "iPad") { setCategories(ipadNavigation); setInitPath("/ipad") }
        if (type === "Mac") { setCategories(macnavigation); setInitPath("/mac") }
        if (type === "Watch") { setCategories(watchNavigation); setInitPath("/watch") }
        if (type === "Âm thanh") { setCategories(soundNavigation); setInitPath("/am-thanh") }
    }, [location])

    useEffect(() => {
        setDetail(categories.find(obj => {
            return obj.path === location.pathname
        }))
    }, [categories])

    return (
        <div className='w-[1200px] mx-auto'>
            <div className='w-full my-[36px] py-[6px]'>
                <div className='flex justify-between'>
                    <div className='flex gap-x-[40px] items-center'>
                        <a href={initPath} className={`text-[15px] ${detail === undefined ? 'text-[#0066cc]' : 'text-[#515154]'} block`}>Tất cả</a>
                        {categories.map((item, index) => (
                            <a key={index} href={item.path} className={`text-[15px] ${detail === item ? 'text-[#0066cc]' : 'text-[#515154]'} hover:text-[#0066cc] block`}>{item.name}</a>
                        ))}
                    </div>
                    <Select
                        options={options}
                        className="text-[16px]"
                        closeMenuOnSelect={true}
                        getOptionLabel={(option) => option.label}
                        getOptionValue={(option) => option.code}
                        // styles={customStyles}
                        placeholder="Thứ tự hiển thị"
                    // onChange={handleChangeProvince}
                    />
                </div>
            </div>

            <div className='flex gap-[20px] flex-wrap mb-[35px]'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
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
