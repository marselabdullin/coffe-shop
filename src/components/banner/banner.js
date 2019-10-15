import React from 'react';
import Header from '../header/header';

function Banner(props) {
    return(
        <div className="banner">
            <div className="container">
                <Header/>
                <h1 className="title-big">{props.label}</h1>
            </div>
        </div>
    )
}

export default Banner;