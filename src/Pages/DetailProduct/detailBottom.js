import { useState } from "react";
import "./DetailBottom.css";

function DetailBottom() {
    const [tongleState, setTongleState] = useState(1);

    const tongleTab = function(index) {
        setTongleState(index);
    }

    return <div>Detail Product Bottom
          <div className="container">
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
                <div class="tab-content">
                    <div class={tongleState === 1 ? "tab-pane active":"tab-pane"}>
                    <p>Mô tả sản phẩm</p>
                    </div>
                    <div class={tongleState === 2 ? "tab-pane active":"tab-pane"}>
                    <p>Thông số kỹ thuật</p>
                    </div>
                    <div class={tongleState === 3 ? "tab-pane active":"tab-pane"}>
                    <p>Chi tiết sản phẩm</p>
                    </div>
                    <div class={tongleState === 4 ? "tab-pane active":"tab-pane"}>
                    <p>Hỏi đáp</p>
                    </div>
                </div>
            </div>
    </div>;
}
export default DetailBottom;