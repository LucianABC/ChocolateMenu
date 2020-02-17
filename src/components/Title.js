import React from 'react';
import './Title.scss';

const Title = ({titletxt}) => {
    return(
        <div className="title">
            <h1>{titletxt}</h1>
        </div>
    )
}

export default Title;