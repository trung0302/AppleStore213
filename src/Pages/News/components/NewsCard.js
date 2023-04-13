import React from 'react'

export default function NewsCard() {
    return (
        <div className='flex'>
            <a href='/tin-tuc' className='block w-[170px] h-[170px] shrink-0'>
                <img src='https://shopdunk.com/images/thumbs/0013684_maxresdefault%20(9)_1600.jpeg' alt='3 tinh nang ios 16' className='w-full h-full object-cover rounded-[8px]' />
            </a>
            <div className='mx-[35px] mt-[30px] mb-[10px] flex flex-col	justify-between'>
                <a href='/tin-tuc' className='text-[18px] text-[#1D1D1F] font-semibold	block hover:text-[#4B4B4B]'>3 tính năng thú vị của iOS 16.4 mà bạn không thể bỏ qua</a>
                <span className='text-[15px] text-[#86868B]'>31/03/2023</span>
            </div>
        </div>
    )
}
