import React from 'react'
import ProductSection from './ProductSection';
import SubcribeSection from './SubcribeSection';
import TopSection from './TopSection';

export default function AnotherProductList({ type }) {
    return (
        <div className='w-full bg-[#f5f5f7]'>
            <TopSection type={type} />
            <ProductSection type={type} />
            <SubcribeSection />
        </div >
    )
}
