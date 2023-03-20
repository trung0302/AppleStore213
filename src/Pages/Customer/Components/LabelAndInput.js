export default ({divCss, labelCss, inputType, inputName, inputCss, inputValue}) => {
    return (
        <div className={divCss}>
            <label for={inputName} className={labelCss}>Tên, Họ:</label><br/>
            <input type={inputType} name={inputName} className={inputCss} value={inputValue}/>
        </div>
    );
}