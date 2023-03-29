import React from 'react'

export default function TopSection({ type, detail }) {
    return (
        <div>
            <div className='px-[10px] py-[8px] bg-white'>
                <div className='max-w-[1200px] m-auto w-full flex items-center'>
                    <a
                        href="/"
                        className="text-[14px] text-[#515154] hover:text-[#0066cc]"
                    >
                        Trang chủ
                    </a>
                    <div className="px-[5px] py-0">&gt;</div>
                    <a
                        href={`/${type.toLowerCase()}`}
                        className="text-[14px] text-[#515154] hover:text-[#0066cc]"
                    >
                        {type}
                    </a>

                    {detail &&
                        <>
                            <div className="px-[5px] py-0">&gt;</div>
                            <a
                                href={detail.path}
                                className="text-[14px] text-[#515154]"
                            >
                                {detail.name}
                            </a>
                        </>
                    }
                </div>
            </div>
            <h1 className='text-[36px] text-center font-bold py-[16px] w-full bg-[#f5f5f7] m-auto'>{detail ? detail.name : type}</h1>
        </div >
    )
}
