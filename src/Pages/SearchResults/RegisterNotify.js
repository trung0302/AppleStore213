function RegisterNotify () {
    return (
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
    );
}

export default RegisterNotify;