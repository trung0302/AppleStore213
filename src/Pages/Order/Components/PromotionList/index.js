import { HighlightOff, HighlightOffOutlined } from "@mui/icons-material";
import PromotionItem from "../PromotionItem";
import style from "./Promotion.module.css";

function PromotionList({ display, setDisplay }) {
    const handleDisplayOff = () => {
        setDisplay(!display);
    };

    return (
        <div>
            {display && (
                <div>
                    <div
                        className={style.overlay}
                        onClick={handleDisplayOff}
                    ></div>
                    <div className={style.bPopup}>
                        <HighlightOffOutlined
                            sx={{
                                position: "absolute",
                                top: 0,
                                right: 0,
                                fontSize: "32px",
                                color: "#ce3939",
                                cursor: "pointer",
                                marginTop: "12px",
                                marginRight: "20px",
                                ":hover": {
                                    color: "#dd2929"
                                }
                            }}
                            onClick={handleDisplayOff}
                        />
                        <div className="text-center text-[32px] font-semibold mb-4">
                            Danh sách khuyến mãi khả dụng
                        </div>
                        <div className="max-h-[400px] min-h-[150px] overflow-y-auto">
                            <div className="">
                                <PromotionItem />
                                <PromotionItem />
                                <PromotionItem />
                                <PromotionItem />
                                <PromotionItem />
                                <PromotionItem />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PromotionList;
