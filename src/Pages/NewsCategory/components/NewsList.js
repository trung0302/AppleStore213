import React from 'react'
import { useLocation } from "react-router-dom"
import NewsCard from './NewsCard';
import { useState } from 'react';
import { useEffect } from 'react';
import HandleApiKM from "../../../Apis/HandleApiKM.js";
import KhuyenmaiItem from "./khuyenmaiItem"

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

    //Khuyến mãi
    const [Mucapdung, setMucapdung] = useState(10000);
    const handleMucapdungChange = (event) => {
        setMucapdung(event.target.value);
    };

    const [Mucgiam, setMucgiam] = useState(10);
    const handleMucgiamChange = (event) => {
        setMucgiam(event.target.value);
    };

    const [khuyenmais, setKhuyenmais] = useState([]);

    //hiển thị tất cả các khuyến mãi
    useEffect(() => {
        HandleApiKM.getKMByApdungAndPhanTram(Mucapdung,Mucgiam)
            .then((response) => {
                setKhuyenmais(response);
            })
            .catch((error) => {
                console.log(error);
            });
      }, []);
    
      // xử lý nút tìm khuyến mãi
    const handleSearch = () => {
        HandleApiKM.getKMByApdungAndPhanTram(Mucapdung,Mucgiam)
            .then((response) => {
                setKhuyenmais(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        handleSearch();
    }, []);

    return (
        <div className='w-full'>
            <div className='w-full text-[14px] text-[#515154] mt-[25px]'>
                <a href='/tin-tuc'>Trang chủ News</a>
                <span className='mx-[5px]'>{">"}</span>
                <a href={type.path}>{type.name}</a>
            </div>

            <div className='grid grid-cols-3 mt-[24px] gap-[30px] mb-5'>
            {/* chỉnh sửa lại để lọc được các khuyến mãi, nếu không phải path là khuyến mãi thì giữ nguyên */}
            {(()=>{
                if(type.name == "Khuyến mãi")
                return (
                    <>
                        <div className=" ">
                            <label htmlFor="mucapdung" className='text-[18px]'>Mức áp dụng: </label>
                            <input type="number" name="mucapdung" className="text-center border-2 border-black rounded text-[18px]" min={10000} step={10000} value={Mucapdung} onChange={handleMucapdungChange} style={{width: 100}}/>
                        </div>
                        <div>
                            <label htmlFor="phantram" className='text-[18px]'>Mức giảm: </label>
                            <input type="number" name="phantram" className="text-center border-2 border-black rounded text-[18px]" min={10} value={Mucgiam} onChange={handleMucgiamChange} style={{width: 70}}/> <span className='text-[18px]'>%</span>
                        </div>
                        <div>
                            <button className="border-2 rounded-lg px-4 py-4 bg-sky-600 text-white text-[18px]" onClick={handleSearch}>Tìm kiếm</button>
                        </div>
                        {khuyenmais.map((khuyenmai) => (
                            <KhuyenmaiItem ten={khuyenmai.ten} mota={khuyenmai.mota} 
                                SL={khuyenmai.SL} batdau={khuyenmai.batdau} ketthuc={khuyenmai.ketthuc}/>
                        ))}
                    </>
                );
                else 
                    return (
                        <>
                            <NewsCard />
                            <NewsCard />
                            <NewsCard />
                            <NewsCard />
                            <NewsCard />
                            <NewsCard />
                            <NewsCard />
                            <NewsCard />
                        </>
                    );
            })()}
            </div>
        </div>
    )
}
