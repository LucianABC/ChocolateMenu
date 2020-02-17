import React from 'react';
import './Brand.scss'

const Brand = ({imgSrc})=> {
    return(
        <div className="brand-img">
            <img src={imgSrc} alt="brand"/>
        </div>
    )
}


export default Brand; 