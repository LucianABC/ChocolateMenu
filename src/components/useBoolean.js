import React, {useState, useEffect} from 'react';

const useBool = (boolValue) => {
    const [bool, setBool] = useState(boolValue);
    const toggleValue = ()=>{
        if (bool){
            setBool(false);
        }else {
            setBool(true);
        }

    }
    console.log(bool)
    return [bool,toggleValue]
}

export default useBool;