function ItemProduct({ data }) {
    return (
        <div className="px-[12px] py-[24px] flex flex-col text-[14px] h-full justify-between">
            <a href="/">
                <img src={data.image} alt={data.image}></img>
            </a>
            <div className="text-[14px] text-center mb-4 min-h-[42px]">{data.name}</div>
            <div className="mb-4 text-center">
                {data.price.toLocaleString() + "đ"}
            </div>
            <button className="text-[14px] text-[#0066cc] rounded-[8px] w-full h-[40px] border-solid border border-[#0066cc]">
                Mua ngay
            </button>
        </div>
    );
}

export default ItemProduct;
