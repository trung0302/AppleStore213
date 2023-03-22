export default ({divCss, labelCss, inputType, inputName, inputCss, inputValue, labelContent}) => {
    return (
        <div className={divCss}>
            <label for={inputName} className={labelCss}>{labelContent}</label><br/>
            <input type={inputType} name={inputName} className={inputCss} value={inputValue} onChange={event => {}}/>
        </div>
    );
}