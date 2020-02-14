import React, {useState} from 'react';
import './Imagen.scss'
import GoldenTicket from  './goldenticket.jpg';
import useBool from '../useBoolean';

const Imagen = (props) => {
    const [bool, toggleValue] = useBool(false);

    return(
        <div className="gt-wrapper">
            <button type="button" 
                    className="gt-button"
                    onClick={toggleValue}>
                        Click here!</button>
            
            <img src={GoldenTicket} className="gt-img"></img>
        </div>
    )
}

export default Imagen