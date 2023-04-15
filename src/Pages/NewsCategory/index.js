import React from 'react'
import NewsList from './components/NewsList'
import NewsSidebar from './components/NewsSidebar'
import NewsPage from './components/NewsPage'

export default function NewsCategory({ isPage = false }) {
    return (
        <div className='w-full bg-[#f5f5f7]'>
            <div className='w-[1200px] m-auto min-h-[600px] flex pt-[30px] gap-[12px]'>
                <NewsSidebar />
                {isPage ? <NewsPage /> : <NewsList />}
            </div>
        </div>
    )
}
