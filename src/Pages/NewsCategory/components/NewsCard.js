import React from 'react'

export default function NewsCard() {
    return (
        <div className='h-[358px] bg-white rounded-2xl'>
            <img src='https://shopdunk.com/images/thumbs/0014158_Apple-Far-Out-Event-iPhone-14-Pro-and-iPhone-14-Pro-Max-89-scaled_1600.jpeg' alt='iphone14promax' className='h-[195px] object-cover rounded-t-2xl' />
            <div className='h-[163px] px-[35px] py-[31px] flex flex-col justify-around shrink-0'>
                <a href='/tin-tuc/iphone-14-pro-max-sap-gia' className='text-[18px] text-[#1d1d1f] font-bold'>iPhone 14 Pro Max sập giá. Lý do từ đâu?</a>
                <span className='text-[15px] text-[#86868B]'>11/04/2023</span>
            </div>
        </div>
    )
}
