import images from "../../../assets/image/index";

export default ({bank}) => {
    return (
        <div>
            <div className="my-10">
                <img src={images[bank]} className="w-2/5 h-2/5 rounded-lg m-auto border-2 border-black"></img>
            </div>
            <div className="px-20">
                <div className="my-4">
                    <label className="pr-4">Số tài khoảng:</label> 
                    <span>0123456789</span>
                </div>
                <div className="my-4">
                    <label className="pr-4">Ngân hàng/ Ví điện tử:</label>
                    <span>{bank === "MomoQR" ? "Momo" : "Zalopay"}</span>
                </div>
                <div className="my-4">
                    <label className="pr-4">Nội dung chuyển khoảng:</label>
                    <span>Thanh toán hóa đơn ...</span>
                </div>
                <div className="my-4">
                    <label className="pr-4">Số tiền:</label>
                    <span>350.000₫</span>
                </div>
            </div>
        </div>
    );
}
