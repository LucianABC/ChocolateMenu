import React from 'react';
import useBool from '../useBoolean'
const Input = ()=> {
    const [bool, toggleValue]=useBool(false);
    return(
        <div>
            <input type="checkbox" onChange={toggleValue}></input>
            <input type="text" disabled={bool? "" : "disabled"}></input>
        </div>
    )
}

export default Input