import images from "../../../assets/image"
import styles from "../KhuyenMai.module.css";

export default ({image, ten, mota, SL, batdau, ketthuc})=>{
    return (
        <div className={styles.bg_white+" rounded grid grid-cols-3 justify-items-center p-4 drop-shadow-lg"}>
            <div className=" ">
                <img src={images.sale} alt="hình ảnh khuyến mãi" className=""/>
            </div>
            <div className="col-span-2 px-4">
                <strong className="text-3xl my-4">{ten}</strong>
                <p className="my-4">{mota}</p>
                {(()=>{
                    if ({SL} == -1) return (<></>);
                    else return(<strong className="my-4">Số lượng còn lại: <b className="text-green-600">{SL}</b></strong>)
                })()}
                
                <p className="my-4">Thời gian: {batdau} - {ketthuc}</p>
            </div>
        </div>
    )
}