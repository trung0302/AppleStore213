import styles from './Header.module.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';



function Header() {
    return <div className={styles.container + " z-10"}>
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
            <SearchIcon style={{ color: "#fff", fontSize: "28px" }} />
            <a href='/cart'>
                <ShoppingBagOutlinedIcon style={{ color: "#fff", fontSize: "28px" }} />
            </a>
            <PersonOutlinedIcon style={{ color: "#fff", fontSize: "28px" }} />
        </div>
    </div>;
}

export default Header;
