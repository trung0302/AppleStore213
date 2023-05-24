import styles from './Header.module.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { useState, useEffect, useRef } from 'react';
import image from '../../assets/image';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import {Login, Logout, Settings} from '@mui/icons-material'
import { Link } from 'react-router-dom';


function Header() {
    const [search, setSearch] = useState(1);
    const [inputIsVisible, setInputIsVisible] = useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const inputRef = useRef(null);

    // Ngay lúc diễn ra sự kiện click thì thanh search vẫn chưa hiện vì khi thoát ra khỏi hàm này search mới bằng 2 và inputIsVisible mới bằng true
    const handleClickSearch = () => {
        setSearch(2);
        setInputIsVisible(true);
    }

    const handleEnter = (e) => {
        console.log();
        if (e.key === 'Enter')
            if (e.target.value === "")
                alert("Vui lòng nhập từ khóa tìm kiếm.")
            else
                window.location.href = `/search?q=${e.target.value}`;
    }
    // Lúc này input đã xuất hiện
    useEffect(() => {
        if (inputIsVisible) {
            inputRef.current.focus();
        }
    }, [inputIsVisible]);

    return <div className={styles.container + " z-10"}>
        {/* Đây là thanh search trên Header khi nào click icon search thì xuất hiện */}
        <div onClick={() => setSearch(1)} className={search === 2 ? "fixed w-full h-full bg-black opacity-70 z-10011" : "hidden"}>
        </div>
        <div className={search === 2 ? "fixed h-[64px] text-center leading-[64px] w-full bg-black z-10012" : "hidden"}>
            {inputIsVisible && <input onKeyDown={handleEnter} ref={inputRef} placeholder='Tìm kiếm' id='search-box' className={"w-1/2 h-3/5 px-[16px] rounded-[3px] text-[16px] text-black-700 outline-none"} />}
        </div>
        {/* //------------------------------------------------ */}
        <a href='/' className={styles.logo}>
            <img src={image.logo} alt="logo" className='h-[45px] w-[180px] object-cover' />
        </a>
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
                <a href="/tin-tuc" className={styles.menuItemLink}>Tin tức</a>
            </li>
            <li className={styles.menuItem}>
                <a href="/khuyenmai" className={styles.menuItemLink}>Khuyến mãi</a>
            </li>
        </ul>
        <div className={styles.utilities}>
            <div onClick={handleClickSearch} className="cursor-pointer">
                <SearchIcon style={{ color: "#fff", fontSize: "28px" }} />
            </div>
            <a href='/cart'>
                <ShoppingBagOutlinedIcon style={{ color: "#fff", fontSize: "28px" }} />
            </a>
            <Tooltip title="Account settings">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: -0.2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <PersonOutlinedIcon style={{ color: "#fff", fontSize: "28px" }} />
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <Link to="/customer/info">
                    <MenuItem onClick={handleClose} sx={{fontSize: 15}}>
                        <Avatar /> Trang cá nhân
                    </MenuItem>
                </Link>
                <Divider />
                <MenuItem onClick={handleClose} sx={{fontSize: 15}}>
                    <ListItemIcon>
                        <Settings fontSize="large" />
                    </ListItemIcon>
                    Cài đặt
                </MenuItem>
                <Link to="/login">
                    <MenuItem onClick={handleClose} sx={{fontSize: 15}}>
                        <ListItemIcon>
                            <Login fontSize="large" />
                        </ListItemIcon>
                        Đăng nhập
                    </MenuItem>
                </Link>
                <MenuItem onClick={handleClose} sx={{fontSize: 15}}>
                    <ListItemIcon>
                        <Logout fontSize="large" />
                    </ListItemIcon>
                    Thoát
                </MenuItem>
            </Menu>
        </div>
    </div>;
}

export default Header;
