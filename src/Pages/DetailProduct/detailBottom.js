import { useState } from "react";
import "./DetailBottom.css";
import { Description } from "@mui/icons-material";

function DetailBottom() {
    const [tongleState, setTongleState] = useState(1);

    const tongleTab = function(index) {
        setTongleState(index);
    }

    const demoProduct = {
        name: "iPhone 14 Pro Max 128GB",
        description: {
            moTaChung: "iPhone 14 Pro Max. Bắt trọn chi tiết ấn tượng với Camera Chính 48MP. Trải nghiệm \
            iPhone theo cách hoàn toàn mới với Dynamic Island và màn hình Luôn Bật. Công nghệ \
            an toàn quan trọng – Phát Hiện Va Chạm  thay bạn gọi trợ giúp khi cần kíp",
            title1: "Tính năng nổi bật",
            des1: "Màn hình Super Retina XDR 6,7 inch với tính năng Luôn Bật và ProMotion \
            Dynamic Island, một cách mới tuyệt diệu để tương tác với iPhone \
            Camera Chính 48MP cho độ phân giải gấp 4 lần",
            title2: "Pháp lý",
            des2: "SOS Khẩn Cấp sử dụng kết nối mạng di động hoặc Cuộc Gọi Wi-Fi\
            Màn hình có các góc bo tròn. Khi tính theo hình chữ nhật, kích thước \
            màn hình theo đường chéo là 6,69 inch. Diện tích hiển thị thực tế nhỏ hơn.",
        },

        TSKT: [
            [
                "Màn hình",
                "6.7 inch, Super Retina XDR, 2796 x 1290 Pixels",
            ],
            [
                "Camera sau",
                "48.0 MP + 12.0 MP + 12.0 MP"
            ],
            [
                "Camera Selfie",
                "12.0 MP",
            ],
            [
                "Bộ nhớ trong",
                "128 GB",
            ],
            [
                "CPU",
                "Apple A16 Bionic",
            ],
            [
                "Dung lượng pin",
                "29 Giờ",
            ],
            [
                "Thẻ sim",
                "1 - 1 eSIM, 1 Nano SIM",
            ],
            [
                "Hệ điều hành",
                "iOS 16",
            ],
            [
                "Xuất xứ",
                "Trung Quốc",
            ],
            [
                "Thời gian ra mắt",
                "09/2022",
            ],
        ]
    }

    return (<div className="grid grid-cols-1 my-[50px]">
    <div className="w-[800px] place-self-center">
                <div className="tab-bar">
                    <div className={tongleState === 1 ? "tab-item tab-item-active":"tab-item"}
                        onClick={() => tongleTab(1)}>
                        <div className="tab-item-title">Mô tả sản phẩm</div>
                    </div>

                    <div className={tongleState === 2 ? "tab-item tab-item-active":"tab-item"}
                        onClick={() => tongleTab(2)}>
                        <div className="tab-item-title">Thông số kỹ thuật</div>
                    </div>

                    <div className={tongleState === 3 ? "tab-item tab-item-active":"tab-item"} 
                    onClick={() => tongleTab(3)}>
                        <div className="tab-item-title">Chi tiết sản phẩm</div>
                    </div>
                    <div className={tongleState === 4 ? "tab-item tab-item-active":"tab-item"}
                        onClick={() => tongleTab(4)}>
                        <div className="tab-item-title">Hỏi đáp</div>
                    </div>
                    <div className="line"></div>
                </div>
                {/* Tab content */}
                <div class="tab-content w-full">
                    <div class={tongleState === 1 ? "text-ellipsis overflow-hidden block":"hidden"}>
                            <h1 className="text-[26px] font-bold">{demoProduct.name}</h1>
                            <p className="text-[14px]">{demoProduct.description.moTaChung}</p>
                     
                            <h2 className="text-[18px] font-bold mt-[10px]">{demoProduct.description.title1}</h2>
                            <p className="text-[14px]">{demoProduct.description.des1}</p>
                       
                            <h2 className="text-[18px] font-bold mt-[10px]">{demoProduct.description.title2}</h2>
                            <p className="text-[14px]">{demoProduct.description.des2}</p>
                    </div>
                    <div class={tongleState === 2 ? "text-ellipsis overflow-hidden block":"hidden"}>
                        <table className="w-full table-fixed text-[16px] text-slate-600 border-collapse border border-slate-400">
                            <tbody>
                                {demoProduct.TSKT.map((tskt, index) => (
                                    <tr className={(index % 2) === 0 ?"w-full bg-slate-200":"w-full"}>
                                        <td className="border border-slate-300 py-[6px] px-[16px]">{tskt[0]}</td>
                                        <td className="border border-slate-300 py-[6px] px-[16px]">{tskt[1]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div class={tongleState === 3 ? "text-ellipsis overflow-hidden block":"hidden"}>
                    <p>Chi tiết sản phẩm</p>
                    </div>
                    <div class={tongleState === 4 ? "text-ellipsis overflow-hidden block":"hidden"}>
                    <p>Hỏi đáp</p>
                    </div>
                </div>

    </div>
                {/* Đánh giá sản phẩm */}
                <div className="place-self-start mt-[40px] w-full py-[16px] rounded-[7px] border-[2px] border-slate-300 boder-solid">
                    {/* Title */}
                    <div className="px-[16px] pb-[16px] text-[18px] text-slate-800 font-semi-bold border-b-[2px] border-slate-300">Đánh giá sản phẩm</div>
                    <div className="grid grid-cols-3 justify-items-stretch">
                        <div className="text-center">
                            <div className="text-[16px]">Đánh giá trung bình</div>
                            <div className="text-[26px]">5/5</div>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
    </div>);
}
export default DetailBottom;