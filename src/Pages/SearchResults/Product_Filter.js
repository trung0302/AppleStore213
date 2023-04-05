export default function ProductFilter() {
    const isFilter = true;
    return  <div className="products-filter my-[40px] text-[16px] flex">
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
                        <option value="8">8</option>
                        <option value="12">12</option>
                        <option value="16">16</option>
                        <option value="24">24</option>                   
                    </select>
                    <span className="ml-[8px]">trên một trang</span>
                </div>
            </div>
}