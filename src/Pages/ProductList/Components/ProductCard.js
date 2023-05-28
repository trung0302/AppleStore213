import React from 'react'
import {convertToSlug} from '../../../utils'

export default function ProductCard({ item }) {
    return (
        <div className='w-[285px] h-[412px] bg-white p-[7px] rounded-[8px] drop-shadow-[0_1px_8px_rgba(0,0,0,0.025)] cursor-pointer hover:drop-shadow-2xl'>
            <a href={`/detailproduct/${item._id}`}>
                <div className='flex justify-end mb-[12px] h-[30px]'>
                    {item.soluong > 0 && <img src="https://shopdunk.com/images/uploaded/icon/san-hang-n.png" alt='' />}
                </div>
                <div className='w-[245px] h-[245px] mb-[20px] mx-auto'>
                    <img src={item.image} alt={item.tensanpham} />
                </div>
                <div className='mx-[13px] flex flex-col'>
                    <a href={convertToSlug(item.tensanpham)} className="text-[18px] text-[#1b1b1f] font-semibold">{item.tensanpham}</a>
                    <div className='flex items-center'>
                        <span className="text-[#0066CC] text-[15px] mr-[5px]">{item.gia.toLocaleString('en-US')}₫</span>
                        <span className="line-through text-[14px] text-[#86868B] mx-[5px] mt-0">{item.gia.toLocaleString('en-US')}₫</span>
                    </div>
                </div>
            </a>
        </div>
    )
}
