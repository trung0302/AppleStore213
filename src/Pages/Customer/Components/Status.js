export default ({status}) => {
    if (status==="red")
        return(
            <div className="w-fit rounded-lg px-4 py-4 mx-3 my-3 bg-rose-600">
                <label className="text-white">Đã hủy</label>
            </div>
        );
    else if(status==="green")
        return(
            <div className="w-fit rounded-lg px-4 py-4 mx-3 my-3 bg-green-500">
                <label className="text-white">Thành công</label>
            </div>
        );
    else if(status==="blue")
        return (
            <div className="w-fit rounded-lg px-4 py-4 mx-3 my-3 bg-blue-500">
                <label className="text-white">Đang giao</label>
            </div>
        );
    else
        return (
            <div className="w-fit rounded-lg px-4 py-4 mx-3 my-3 bg-yellow-400">
                <label className="text-red-500">Đang xử lý</label>
            </div>
        );
}