import React from 'react'

export default function ProductCard() {
    return (
        <div className='w-[285px] h-[412px] bg-white p-[7px] rounded-[8px] drop-shadow-[0_1px_8px_rgba(0,0,0,0.025)] cursor-pointer'>
            <div className='flex justify-end mb-[12px] h-[30px]'>
                <img src="https://shopdunk.com/images/uploaded/icon/san-hang-n.png" alt=''></img>
            </div>
            <div className='w-[245px] h-[245px] mb-[20px] mx-auto'>
                <img src='https://shopdunk.com/images/thumbs/0008174_iphone-14-pro-max-1tb_420.png' alt="iphone 14" />
            </div>
            <div className='mx-[13px] flex flex-col'>
                <a href="/iphone-14-plus-512gb-yellow" className="text-[18px] text-[#1b1b1f] font-semibold">iPhone 14 Plus 512GB - Yellow</a>
                <div className='flex items-center'>
                    <span className="text-[#0066CC] text-[15px] mr-[5px]">27.390.000₫</span>
                    <span className="line-through text-[14px] text-[#86868B] mx-[5px] mt-0">36.990.000₫</span>
                </div>
            </div>
        </div>
    )
}
