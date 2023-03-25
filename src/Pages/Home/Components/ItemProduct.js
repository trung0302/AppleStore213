function ItemProduct(props){
    return (
        <a href="#" className="flex flex-col py-4 w-[280px] h-[408px] bg-white rounded-xl drop-shadow-sm hover:drop-shadow-2xl">
            <div className="h-[50px] flex justify-end pr-4">
                <img className="w-[100px]" src={props.data.note} alt={props.data.note}></img>
            </div>
            <img className="px-4" src={props.data.image} alt={props.data.image}></img>
            <h3 className="text-[18px] flex-1 font-bold text-left px-8">
                {
                    props.data.name
                }
            </h3>
            <div className="flex items-end">
                <p className="text-[#0066cc] text-[16px] font-bold pl-8">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(props.data.newPrice)}</p>
                <p className="text-[#86868b] text-[13px] line-through  pl-4 ">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(props.data.oldPrice)}</p>
            </div>

        </a>
    );
}
export default ItemProduct;