import KhuyenmaiItem from "./Components/khuyenmaiItem"
import styles from "./KhuyenMai.module.css";
import React,{ useState, useEffect } from "react";
import axios from 'axios';

function KhuyenMai () {
    const [Mucapdung, setMucapdung] = useState(10000);
    const handleMucapdungChange = (event) => {
        setMucapdung(event.target.value);
    };

    const [Mucgiam, setMucgiam] = useState(10);
    const handleMucgiamChange = (event) => {
        setMucgiam(event.target.value);
    };

    const [khuyenmais, setKhuyenmais] = useState([]);

    useEffect(() => {
        axios
          .get("https://applestore213.onrender.com/khuyenmai/apdung&phantram/0/0")
          .then((response) => {
            setKhuyenmais(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

    const handleSearch = () => {
    axios
        .get(`https://applestore213.onrender.com/khuyenmai/apdung&phantram/${Mucapdung}/${Mucgiam}`)
        .then((response) => {
        setKhuyenmais(response.data);
        })
        .catch((error) => {
        console.log(error);
        });
    }

    useEffect(() => {
    handleSearch();
    }, []);
      
    return (
        <div className={styles.bg_primary}>
            <div className={" text-3xl text-center py-8"}>
                <h1 className="text-4xl py-4">Các Voucher khuyến mãi của Appledunk</h1>
                <div className=" pl-8 py-4">
                    <label htmlFor="mucapdung">Mức áp dụng: </label>
                    <input type="number" name="mucapdung" className="text-center border-2 border-black" min={10000} step={10000} value={Mucapdung} onChange={handleMucapdungChange} style={{width: 100}}/>
                </div>
                <div className=" pl-8 py-4">
                    <label htmlFor="phantram">Mức giảm: </label>
                    <input type="number" name="phantram" className="text-center border-2 border-black" min={10} value={Mucgiam} onChange={handleMucgiamChange} style={{width: 70}}/>%
                </div>
                <div className=" pl-8">
                    <button className="border-2 rounded-lg px-4 py-4 mb-5 bg-sky-600 text-white" onClick={handleSearch}>Tìm</button>
                </div>
            </div>
            <div className=" grid grid-cols-2 gap-4 text-2xl justify-items-center p-8">
                {khuyenmais.map((khuyenmai) => (
                    <KhuyenmaiItem ten={khuyenmai.ten} mota={khuyenmai.mota} 
                    SL={khuyenmai.SL} batdau={khuyenmai.batdau} ketthuc={khuyenmai.ketthuc}/>
                ))}
            </div>
        </div>
    )
}

export default KhuyenMai