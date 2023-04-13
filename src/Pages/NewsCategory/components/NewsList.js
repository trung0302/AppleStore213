import React from 'react'
import { useLocation } from "react-router-dom"
import NewsCard from './NewsCard';
import { useState } from 'react';
import { useEffect } from 'react';

export default function NewsList() {
    const location = useLocation();
    const [type, setType] = useState({ name: "", path: "" });
    useEffect(() => {
        switch (location.pathname) {
            case '/apple-news':
                setType({ name: "Tin tức Apple", path: location.pathname })
                break;
            case '/news-review':
                setType({ name: "Bài viết review", path: location.pathname })
                break;
            case '/tin-kham-pha':
                setType({ name: "Khám phá", path: location.pathname })
                break;
            case '/thu-thuat':
                setType({ name: "Thủ thuật", path: location.pathname })
                break;
            case '/khuyen-mai':
                setType({ name: "Khuyến mãi", path: location.pathname })
                break;
            case '/tin-khac':
                setType({ name: "Tin khác", path: location.pathname })
                break;
            default:
                break;
        }
    }, [location])

    return (
        <div className='w-full'>
            <div className='w-full text-[14px] text-[#515154] mt-[25px]'>
                <a href='/tin-tuc'>Trang chủ News</a>
                <span className='mx-[5px]'>{">"}</span>
                <a href={type.path}>{type.name}</a>
            </div>

            <div className='grid grid-cols-3 mt-[24px] gap-[30px]'>
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
        </div>
    )
}
