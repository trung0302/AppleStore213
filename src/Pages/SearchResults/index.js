function SearchResults() {
    return ( <div className="grid grid-cols-1 justify-items-center pt-[30px] bg-gray-100">
        <div className="w-3/4">

        <h1 className="text-[24px] font-semibold text-center py-[16px]">Tìm kiếm</h1>
        <div className="search-box flex justify-center">

        <div className="grid grid-cols-1 justify-items bg-white px-[40px] py-[30px] rounded-[7px] w-full">
            <label className="text-3xl">Tìm từ khóa:</label>
            <input className="w-full rounded-[7px] my-[10px] px-[16px] h-[48px] text-[16px]
            border-[2px] border-solid border-gray-300 outline-blue-500" placeholder="iphone"></input>
            <button className="w-[170px] h-[38px] bg-blue-500 rounded-[4px] text-[18px] text-white
            mt-[16px] justify-self-center">Tìm kiếm</button>
        </div>

        </div>
        <div className="products-filter my-[40px] text-[16px] flex">
            <div className="sorting">
                <span className="mr-[8px]">Sắp xếp theo</span>
                <select id="products-orderby" name="products-orderby" form="sortform"
                className="h-[32px] border-[1px] border-solid border-gray-300 rounded-[4px]" >
                    <option value="all">Thứ tự hiển thị</option>
                    <option value="1">Giá cao đến thấp</option>
                    <option value="2">Mới nhất</option>
                    <option value="3">Tên: A đến Z</option>
                    <option value="4">Tên: Z đến A</option>                   
                    <option value="4">Giá thấp đến cao</option>
                </select>
            </div>
            <div className="products-per-page ml-[20px]">
            <span className="mr-[8px]">Hiển thị</span>
                <select id="products-orderby" name="products-orderby" form="sortform"
                className="h-[32px] border-[1px] border-solid border-gray-300 rounded-[4px]" >
                    <option value="all">Thứ tự hiển thị</option>
                    <option value="1">Giá cao đến thấp</option>
                    <option value="2">Mới nhất</option>
                    <option value="3">Tên: A đến Z</option>
                    <option value="4">Tên: Z đến A</option>                   
                    <option value="4">Giá thấp đến cao</option>
                </select>
                <span className="ml-[8px]">trên một trang</span>
            </div>
        </div>

        <div className="item-card "></div>
            <div className="product-tag"></div>
            <div className="picture"></div>
            <div className="details"></div>
            <div className="product-tag"></div>
        </div>
        <div className="grid grid-cols-1 auto-cols-auto justify-items-center w-full h-[250px] py-[50px] bg-gray-300 mt-[40px]">
            <h1 className="text-[24px] font-semibold">Đăng ký nhận tin từ ShopDunk</h1>
            <p className="text-[16px]">Thông tin sản phẩm mới nhất và chương trình khuyến mãi</p>
            <div>

            <input className="w-[500px] h-[40px] my-[8px] px-[16px] rounded-full
            text-[16px] border-b-[1px] border-gray-300 outline-none" placeholder="Email của bạn"></input>
            <button className="w-[100px] h-[40px] bg-blue-500 rounded-full text-[18px] text-white 
            ml-[-57px] mt-[16px]">Đăng ký</button>
            </div>
        </div>
    </div>);
}
export default SearchResults;