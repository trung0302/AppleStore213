import { useState, useEffect } from 'react';

function SelectTag( {setSelect, setIndex, setLength, setCss, setName} ) {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const newOptions = [];

        newOptions.push(
            <option key={0} value="0">
                {setSelect}
            </option>
        );

        for (let index = setIndex ; index <= setLength ; index++) {
            newOptions.push(<option key={index} value={index}>{index}</option>);
        }

        setOptions(newOptions);
    }, [setSelect, setIndex, setLength]);

    return (
        <select className={setCss} name={setName}>
            {options}
        </select>
    );
}

export default SelectTag;