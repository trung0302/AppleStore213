import classes from "./Footer.module.css"


function Footer() {
    return <div className={classes.container}>
        <div className={classes.footerUpper + " grid grid-cols-4 gap-4"}>
            <div className="text-[#fff]">01</div>
            <div>01</div>
            <div>01</div>
            <div>01</div>
            <div>01</div>
            <div>01</div>
            <div>01</div>
            <div>01</div>
            <div>01</div>
            <div>09</div>
        </div>
        <div className={classes.footerLower}></div>
    </div>;
}

export default Footer;
