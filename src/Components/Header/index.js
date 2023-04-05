import styles from './Header.module.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { useState, useEffect, useRef } from 'react';

function Header() {
    const [search, setSearch] = useState(1);
    const [inputIsVisible, setInputIsVisible] = useState(false);

    const inputRef = useRef(null);

    // Ngay lúc diễn ra sự kiện click thì thanh search vẫn chưa hiện vì khi thoát ra khỏi hàm này search mới bằng 2 và inputIsVisible mới bằng true
    const handleClickSearch = () => {
        setSearch(2);
        setInputIsVisible(true);
    }

    const handleEnter = (e) => {
        console.log();
        if(e.key === 'Enter')
            if(e.target.value === "") 
                alert("Vui lòng nhập từ khóa tìm kiếm.")
            else
                window.location.href=`/search?q=${e.target.value}`;
    }
    // Lúc này input đã xuất hiện
    useEffect(() => {
    if (inputIsVisible) {
      inputRef.current.focus();
    }
  }, [inputIsVisible]); 

    return <div className={styles.container + " z-10"}>
         {/* Đây là thanh search trên Header khi nào click icon search thì xuất hiện */}
        <div onClick={()=>setSearch(1)} className= {search===2?"fixed w-full h-full bg-black opacity-70 z-10011":"hidden"}>
        </div>
        <div className={search===2?"fixed h-[64px] text-center leading-[64px] w-full bg-black z-10012":"hidden"}>
            {inputIsVisible && <input onKeyDown={handleEnter} ref={inputRef} placeholder='Tìm kiếm' id='search-box' className={"w-1/2 h-3/5 px-[16px] rounded-[3px] text-[16px] text-black-700 outline-none"}/>}
        </div>
        {/* //------------------------------------------------ */}
  
        <img src='https://shopdunk.com/images/thumbs/0012445_Logo_ShopDunk.png' alt="logo" className={styles.logo} />
        <ul className={styles.menu}>
            <li className={styles.menuItem}>
                <a href="/iphone" className={styles.menuItemLink}>iPhone</a>
            </li>
            <li className={styles.menuItem}>
                <a href="/ipad" className={styles.menuItemLink}>iPad</a>
            </li>
            <li className={styles.menuItem}>
                <a href="/mac" className={styles.menuItemLink}>Mac</a>
            </li>
            <li className={styles.menuItem}>
                <a href="/watch" className={styles.menuItemLink}>Watch</a>
            </li>
            <li className={styles.menuItem}>
                <a href="/am-thanh" className={styles.menuItemLink}>Âm thanh</a>
            </li>
            <li className={styles.menuItem}>
                <a href="/phu-kien" className={styles.menuItemLink}>Phụ kiện</a>
            </li>
            <li className={styles.menuItem}>
                <a href="/iphone" className={styles.menuItemLink}>Dịch vụ</a>
            </li>
            <li className={styles.menuItem}>
                <a href="/iphone" className={styles.menuItemLink}>Trả góp</a>
            </li>
        </ul>
        <div className={styles.utilities}>
            <div onClick={handleClickSearch} className="cursor-pointer">
                <SearchIcon style={{ color: "#fff", fontSize: "28px" }} />
            </div>
            <a href='/cart'>
                <ShoppingBagOutlinedIcon style={{ color: "#fff", fontSize: "28px" }} />
            </a>
            <PersonOutlinedIcon style={{ color: "#fff", fontSize: "28px" }} />
        </div>
    </div>;
}

export default Header;
