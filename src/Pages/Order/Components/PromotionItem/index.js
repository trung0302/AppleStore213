function PromotionItem() {
    return (
        <div className="flex items-center justify-center my-10">
            <div className="mr-[16px]">
                <img
                    src="https://shopdunk.com/images/thumbs/0013684_maxresdefault%20(9)_1600.jpeg"
                    alt="khuyen mai"
                    className="w-[70px] h-[70px] object-cover rounded-[8px]"
                />
            </div>
            <div>
                <div className="text-[18px] text-[#1D1D1F] font-semibold">
                    3 tính năng thú vị của iOS 16.4 mà bạn không thể bỏ qua
                </div>
                <span className="text-[15px] text-[#86868B]">31/03/2023</span>
            </div>
            <button
                className="ml-[60px] border border-solid border-[#0066cc] p-[10px] text-[14px] 
                                text-[#0066cc] rounded-[8px] hover:bg-sky-200"
            >
                Chọn
            </button>
        </div>
    );
}

export default PromotionItem;
