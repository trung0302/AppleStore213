import React from 'react'
import NewsCard from './components/NewsCard'

export default function News() {
    return (
        <div className='w-full bg-[#f5f5f7] pt-[55px]'>
            <div className='w-[1200px] mx-auto'>
                <div className='h-[492px] w-full flex mb-[40px]'>
                    <div className='w-[787px] h-full bg-white rounded-xl mr-[20px] relative cursor-pointer overflow-hidden'>
                        <img className='w-full h-full object-cover' src='https://shopdunk.com/images/thumbs/0012659_ManageiCloudStorageJanuary2023Featured_1600.jpeg' alt='news' />
                        <div className='absolute bottom-0 w-full flex items-center bg-gradient-to-t from-black'>
                            <p className='text-[#FBFBFB] text-[18px] ml-[25px] opacity-95 py-[25px]'>Giải phóng dung lượng iCloud cực dễ trên iPhone mà bạn chưa biết</p>
                        </div>
                    </div>
                    <div className='h-full'>
                        <div className='w-[385px] h-[256px] bg-white rounded-xl mb-[20px] relative cursor-pointer overflow-hidden'>
                            <img className='w-full h-full object-cover' src='https://shopdunk.com/images/thumbs/0012611_t%E1%BA%A3i%20xu%E1%BB%91ng%20(1)_1600.jpeg' alt='news1' />
                            <div className='absolute bottom-0 w-full flex items-center bg-gradient-to-t from-black'>
                                <p className='text-[#FBFBFB] text-[18px] ml-[25px] opacity-95 py-[25px]'>Nếu iPad không thay thế được MacBook vậy thì MacBook có thay thế được iPad?</p>
                            </div>
                        </div>
                        <div className='w-[385px] h-[216px] bg-white rounded-xl relative cursor-pointer overflow-hidden'>
                            <img className='w-full h-full object-cover' src='https://shopdunk.com/images/thumbs/0012661_gg1q05sylg771_1600.png' alt='news2' />
                            <div className='absolute bottom-0 w-full flex items-center bg-gradient-to-t from-black'>
                                <p className='text-[#FBFBFB] text-[18px] ml-[25px] opacity-95 py-[25px]'>Sạc AirPods không dây từ màn hình MacBook</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full flex justify-center gap-[16px] mb-[40px]'>
                    <a href='/apple-news' className='h-[47px] bg-white flex justify-center items-center px-[25px] py-[10px] text-[15px] text-[#515154] rounded-[8px] drop-shadow-sm hover:drop-shadow-xl'>Tin tức Apple</a>
                    <a href='/news-review' className='h-[47px] bg-white flex justify-center items-center px-[25px] py-[10px] text-[15px] text-[#515154] rounded-[8px] drop-shadow-sm hover:drop-shadow-xl'>Bài viết review</a>
                    <a href='/tin-kham-pha' className='h-[47px] bg-white flex justify-center items-center px-[25px] py-[10px] text-[15px] text-[#515154] rounded-[8px] drop-shadow-sm hover:drop-shadow-xl'>Khám phá</a>
                    <a href='/thu-thuat' className='h-[47px] bg-white flex justify-center items-center px-[25px] py-[10px] text-[15px] text-[#515154] rounded-[8px] drop-shadow-sm hover:drop-shadow-xl'>Thủ thuật</a>
                    <a href='/khuyen-mai' className='h-[47px] bg-white flex justify-center items-center px-[25px] py-[10px] text-[15px] text-[#515154] rounded-[8px] drop-shadow-sm hover:drop-shadow-xl'>Khuyến mãi</a>
                    <a href='/tin-khac' className='h-[47px] bg-white flex justify-center items-center px-[25px] py-[10px] text-[15px] text-[#515154] rounded-[8px] drop-shadow-sm hover:drop-shadow-xl'>Tin khác</a>
                </div>

                <h2 className='text-[32px] text-[#1D1D1F]'>Tin tức Apple</h2>
                <div className='mt-[20px] grid grid-cols-2 gap-[20px] gap-y-[40px] mb-[40px]'>
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </div>

                <h2 className='text-[32px] text-[#1D1D1F]'>Bài viết review</h2>
                <div className='mt-[20px] grid grid-cols-2 gap-[20px] gap-y-[40px] mb-[40px]'>
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </div>

                <h2 className='text-[32px] text-[#1D1D1F]'>Khám phá</h2>
                <div className='mt-[20px] grid grid-cols-2 gap-[20px] gap-y-[40px] mb-[40px]'>
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </div>

                <h2 className='text-[32px] text-[#1D1D1F]'>Thủ thuật</h2>
                <div className='mt-[20px] grid grid-cols-2 gap-[20px] gap-y-[40px] mb-[40px]'>
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </div>

                <h2 className='text-[32px] text-[#1D1D1F]'>Khuyến mãi</h2>
                <div className='mt-[20px] grid grid-cols-2 gap-[20px] gap-y-[40px] mb-[40px]'>
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </div>

                <h2 className='text-[32px] text-[#1D1D1F]'>Tin khác</h2>
                <div className='mt-[20px] grid grid-cols-2 gap-[20px] gap-y-[40px] mb-[40px]'>
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </div>
            </div>
        </div>
    )
}
