import React from 'react'
import { useLocation } from "react-router-dom"


export default function NewsSidebar() {
    const location = useLocation()

    return (
        <div className='w-[200px] flex shrink-0 justify-center pt-[12px] sticky top-0'>
            <ul>
                <li className='w-[180px] h-[52px] flex'>
                    <a href='/tin-tuc' className='flex items-center grow text-[16px] text-[#1D1D1F] font-bold'>Trang chủ News</a>
                </li>
                <li className='w-[180px] h-[52px] flex'>
                    <a href='/apple-news' className={`flex items-center grow  text-[16px] ${location.pathname === '/apple-news' ? 'text-[#0066CC]' : 'text-[#1D1D1F]'} font-bold`}>Tin tức Apples</a>
                </li>
                <li className='w-[180px] h-[52px] text-[16px] text-[#1D1D1F] font-bold flex'>
                    <a href='/news-review' className={`flex items-center grow  text-[16px] ${location.pathname === '/news-review' ? 'text-[#0066CC]' : 'text-[#1D1D1F]'} font-bold`}>Bài viết review</a>
                </li>
                <li className='w-[180px] h-[52px] text-[16px] text-[#1D1D1F] font-bold flex'>
                    <a href='/tin-kham-pha' className={`flex items-center grow  text-[16px] ${location.pathname === '/tin-kham-pha' ? 'text-[#0066CC]' : 'text-[#1D1D1F]'} font-bold`}>Khám phá</a>
                </li>
                <li className='w-[180px] h-[52px] text-[16px] text-[#1D1D1F] font-bold flex'>
                    <a href='/thu-thuat' className={`flex items-center grow  text-[16px] ${location.pathname === '/thu-thuat' ? 'text-[#0066CC]' : 'text-[#1D1D1F]'} font-bold`}>Thủ thuật</a>
                </li>
                <li className='w-[180px] h-[52px] text-[16px] text-[#1D1D1F] font-bold flex'>
                    <a href='/khuyen-mai' className={`flex items-center grow  text-[16px] ${location.pathname === '/khuyen-mai' ? 'text-[#0066CC]' : 'text-[#1D1D1F]'} font-bold`}>Khuyến mãi</a>
                </li>
                <li className='w-[180px] h-[52px] text-[16px] text-[#1D1D1F] font-bold flex'>
                    <a href='/tin-khac' className={`flex items-center grow  text-[16px] ${location.pathname === '/tin-khac' ? 'text-[#0066CC]' : 'text-[#1D1D1F]'} font-bold`}>Tin khác</a>
                </li>
            </ul>
        </div>
    )
}
