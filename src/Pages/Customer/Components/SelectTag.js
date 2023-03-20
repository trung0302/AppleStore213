function SelectTag( {setSelect, setIndex, setLength, setCss, setName} ) {
    const OptionTag = [];
    OptionTag.push(<option value="0">{setSelect}</option>);
    for (let index = setIndex ; index <= setLength ; index++) {
        OptionTag.push(<option value={index}>{index}</option>);
    }
    return (
        <select className={setCss} name={setName}>{OptionTag}</select>
    );
}
export default SelectTag;