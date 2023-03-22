import classes from './Header.module.css'


function Header() {
    return <div className={classes.container+ " z-10"}>
        <img src='https://shopdunk.com/images/thumbs/0012445_Logo_ShopDunk.png' alt="logo" className={classes.logo} />
        <ul className={classes.menu}>
            <li className={classes.menuItem}>
                <a href="/iphone" className={classes.menuItemLink}>iPhone</a>
            </li>
            <li className={classes.menuItem}>
                <a href="/iphone" className={classes.menuItemLink}>iPad</a>
            </li>
            <li className={classes.menuItem}>
                <a href="/iphone" className={classes.menuItemLink}>Mac</a>
            </li>
            <li className={classes.menuItem}>
                <a href="/iphone" className={classes.menuItemLink}>Watch</a>
            </li>
            <li className={classes.menuItem}>
                <a href="/iphone" className={classes.menuItemLink}>Âm thanh</a>
            </li>
            <li className={classes.menuItem}>
                <a href="/iphone" className={classes.menuItemLink}>Phụ kiện</a>
            </li>
            <li className={classes.menuItem}>
                <a href="/iphone" className={classes.menuItemLink}>Dịch vụ</a>
            </li>
            <li className={classes.menuItem}>
                <a href="/iphone" className={classes.menuItemLink}>Trả góp</a>
            </li>
        </ul>
    </div>;
}

export default Header;
