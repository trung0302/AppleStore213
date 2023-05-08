import { useState } from "react";
import HandleApiKM from "../../../../Apis/HandleApiKM";

function PromotionItem({
    item,
    display,
    setDisplay,
    setPromotion,
    styles,
    text,
    setSelected,
}) {
    const [data, setData] = useState([]);

    // Select khuyến mãi
    const handleSelectItem = () => {
        HandleApiKM.getKMByID(item._id)
            .then((data) => {
                setPromotion(data?.phantramkm);
                setData(data);
            })
            .catch((err) => console.log(err));

        setDisplay(!display);
        setSelected(item._id);
    };

    return (
        <div className="flex items-center justify-center my-10">
            <div className="mr-[16px]">
                <img
                    src={item.image}
                    alt="khuyen mai"
                    className="w-[70px] h-[70px] object-cover rounded-[8px]"
                />
            </div>
            <div className="w-[450px]">
                <div className="text-[18px] text-[#1D1D1F] font-semibold">
                    {item?.title}
                </div>
                <span className="text-[15px] text-[#86868B]">
                    {item?.batdau}
                </span>
                <span className="text-[15px] text-[#86868B]"> &minus; </span>
                <span className="text-[15px] text-[#86868B]">
                    {item?.ketthuc}
                </span>
            </div>
            <button
                // className={
                //     selected === item._id
                //         ? "ml-[50px] border border-solid p-[10px] text-[14px] cursor-not-allowed border-[#777] text-[#777] rounded-[8px]"
                //         : "ml-[50px] border border-solid border-[#0066cc] p-[10px] text-[14px] text-[#0066cc] rounded-[8px] hover:bg-sky-200"
                // }
                className={styles}
                onClick={handleSelectItem}
            >
                {text}
            </button>
        </div>
    );
}

export default PromotionItem;
