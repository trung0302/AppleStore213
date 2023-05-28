import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import api from '../../../Apis/HandleApiNews'
import parse from "html-react-parser"


export default function NewsPage() {
    const { id } = useParams();
    const [data, setData] = useState(null) 

    useEffect(() => {
        api.getNewsById(id).then(result => setData(result))
    }, [id])

    return (
        <div className='w-full'>
            <img src={data?.image} alt={data?.title} className='w-[984px] h-[315px] rounded-3xl object-cover'/>
            <div className='mt-[24px] border-2 mx-[100px] px-[25px] py-[21px] bg-white'>
                <h1 className='text-[24px] text-[#393939] font-bold'>{data?.title}</h1>
                <p className='text-[13px] text-[#86868B] mt-[6px]'>{data?.dateSource}</p>
                {data && <div className='text-center w-full'>{parse(data.detail)}</div>}
            </div>
        </div>
    )
}
