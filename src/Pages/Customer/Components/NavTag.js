export default ({ DivCss, setHref, aCss, setIcon, spanCss, spanContent}) => {
    return (
        <div className={DivCss}>
            <a href={setHref} className={aCss}>
                {setIcon}
                <span className={spanCss}>{spanContent}</span>
            </a>
        </div>
    );
}