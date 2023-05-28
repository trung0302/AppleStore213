import ProductFilter from "./Product_Filter";
import ProductCard from "./Product_Card";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import RegisterNotify from "./RegisterNotify";
import Pagination from "./Pagination";
import { useEffect } from "react";
import axios from "axios";

function SearchResults() {
    const products = [
        {
            id: 1,
            image: "https://shopdunk.com/images/thumbs/0007808_iphone-14-pro-max-128gb_420.png",
            name: "iPhone 14 Pro Max 128GB",
            oldPrice: 34990000,
            newPrice: 27390000,
            note: ""
        },
        {
            id: 2,
            image: "https://shopdunk.com/images/thumbs/0008734_iphone-14-pro-128gb_420.png",
            name: "iPhone 14 Pro 128GB",
            oldPrice: 30990000,
            newPrice: 25390000,
            note: ""
        },
        {
            id: 3,
            image: "https://shopdunk.com/images/thumbs/0009495_iphone-14-plus-128gb_420.png",
            name: "iPhone 14 Plus 128GB",
            oldPrice: 27990000,
            newPrice: 22490000,
            note: ""
        },
        {
            id: 4,
            image: "https://shopdunk.com/images/thumbs/0007808_iphone-14-pro-max-128gb_420.png",
            name: "iPhone 14 Pro Max 128GB",
            oldPrice: 34990000,
            newPrice: 27390000,
            note: ""
        },
        {
            id: 5,
            image: "https://shopdunk.com/images/thumbs/0008734_iphone-14-pro-128gb_420.png",
            name: "iPhone 14 Pro 128GB",
            oldPrice: 30990000,
            newPrice: 25390000,
            note: ""
        },
        {
            id: 6,
            image: "https://shopdunk.com/images/thumbs/0009495_iphone-14-plus-128gb_420.png",
            name: "iPhone 14 Plus 128GB",
            oldPrice: 27990000,
            newPrice: 22490000,
            note: ""
        },
        {
            id: 7,
            image: "https://shopdunk.com/images/thumbs/0007808_iphone-14-pro-max-128gb_420.png",
            name: "Ipad 14 Pro Max 128GB",
            oldPrice: 34990000,
            newPrice: 27390000,
            note: ""
        },
        {
            id: 8,
            image: "https://shopdunk.com/images/thumbs/0008734_iphone-14-pro-128gb_420.png",
            name: "Ipad 14 Pro 128GB",
            oldPrice: 30990000,
            newPrice: 25390000,
            note: ""
        },
        {
            id: 9,
            image: "https://shopdunk.com/images/thumbs/0009495_iphone-14-plus-128gb_420.png",
            name: "Ipad 14 Plus 128GB",
            oldPrice: 27990000,
            newPrice: 22490000,
            note: ""
        },
        {
            id: 10,
            image: "https://shopdunk.com/images/thumbs/0007808_iphone-14-pro-max-128gb_420.png",
            name: "Ipad 14 Pro Max 128GB",
            oldPrice: 34990000,
            newPrice: 27390000,
            note: ""
        },
        {
            id: 11,
            image: "https://shopdunk.com/images/thumbs/0008734_iphone-14-pro-128gb_420.png",
            name: "Ipad 14 Pro 128GB",
            oldPrice: 30990000,
            newPrice: 25390000,
            note: ""
        },
        {
            id: 12,
            image: "https://shopdunk.com/images/thumbs/0009495_iphone-14-plus-128gb_420.png",
            name: "Ipad 14 Plus 128GB",
            oldPrice: 27990000,
            newPrice: 22490000,
            note: ""
        }
    ]
    
    const [searchParams, setSearchParams] = useSearchParams();
    
    const [searchKey, setSearchKey] = useState(searchParams.get("q"));

    const [searchKeyStatic, setSearchKeyStatic] = useState(searchParams.get("q"));

    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8);

    // Hàm lấy dữ liệu theo từ khóa
    useEffect(()=>{
        axios.get(`http://localhost:3001/api/product?tensanpham=${searchKey}`)
        .then( (response) => { 
            if(response.data !== undefined) {
                setItems(response.data.listProducts);      
                // setLoading(false);
                console.log(response.data)
            }
        })
        .catch(error => console.log(error));
    },[])

    // Hàm xử lý dữ liệu khi ô input onchange
    const handleOnChange = (e) => {
        e.preventDefault();
        setSearchKey(e.target.value);
    }

    const handleEnter = (e) => {
        if(e.key === 'Enter')
            if(e.target.value === "" || e.target.value.length < 3) 
                alert("Vui lòng nhập từ khóa tìm kiếm. Tối thiểu 3 kí tự!")
            else 
                window.location.href=`/search?q=${e.target.value}`;
    }

    const handleOnclickSearchBtn = () => {
        if(searchKey === "" || searchKey.length < 3)
            alert("Vui lòng nhập từ khóa tìm kiếm.")
        else
            window.location.href=`/search?q=${searchKey}`;
    }

    const handleSelectedSize = (e) => {
        console.log(e.target.value)
        setItemsPerPage(e.target.value)
    }

    const searchResults = () => {
        const results = products.filter((item) => {
            // console.log(item.name.toLowerCase()," và ", typeof searchKey)
            return item.name.toLowerCase().includes(searchKeyStatic.toLowerCase());
        })
        return results;
    }

    const lastItemIndex = currentPage * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;
    const Items = items.slice(firstItemIndex, lastItemIndex);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
     };

    const previousPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage !== Math.ceil(items.length / itemsPerPage)) {
           setCurrentPage(currentPage + 1);
        }
     };

    return ( <div className="grid grid-cols-1 justify-items-center pt-[30px] bg-gray-100">
        <div className="w-3/4">

            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p> */}
            <h1 className="text-[24px] font-semibold text-center py-[16px]">Tìm kiếm</h1>
            <div className="search-box flex justify-center">

            <div className="grid grid-cols-1 justify-items bg-white px-[40px] py-[30px] rounded-[7px] w-full">
                <label className="text-3xl">Tìm từ khóa:</label>

                <input id="search-key" onChange={handleOnChange} onKeyDown={handleEnter}
                value={searchKey} className="w-full rounded-[7px] my-[10px] px-[16px] h-[48px] text-[16px]
                border-[2px] border-solid border-gray-300 outline-blue-500" placeholder="iphone"></input>

                <button onClick={handleOnclickSearchBtn} className="w-[170px] h-[38px] bg-blue-500 rounded-[4px] text-[18px] text-white
                mt-[16px] justify-self-center">Tìm kiếm</button>
            </div>

            </div>

            {items.length === 0 ?"" : <div className="products-filter my-[40px] text-[16px] flex">
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
                    className="h-[32px] border-[1px] border-solid border-gray-300 rounded-[4px]" 
                    onClick={handleSelectedSize}>
                        <option value="8">8</option>
                        <option value="12">12</option>
                        <option value="16">16</option>
                        <option value="24">24</option>                   
                    </select>
                    <span className="ml-[8px]">trên một trang</span>
                </div>
            </div>}

            <div id="product-list" 
                className="grid justify-items-stretch gap-[20px] grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {Items.map(product => (
                        <ProductCard {...product}/>
                    ))}
            </div>

            <Pagination className = "h-[50px] w-1/2"
                totalItems={items.length}
                itemsPerPage={itemsPerPage}
                paginate={paginate}
                previousPage={previousPage}
                nextPage={nextPage}
            />
            

            <div className={items.length === 0 ? "text-center my-[30px] text-blue-800 text-[18px]" : " hidden"}>Không tìm thấy sản phẩm nào khớp với từ khóa tìm kiếm.</div>
            
        </div>
        <RegisterNotify/>
    </div>);
}
export default SearchResults;