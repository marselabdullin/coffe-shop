import React from 'react';

function BestItem(props) {
    return(
        <div className="best__item"
        onClick={props.onItemSelected}
        >
            <img src={props.url} alt="coffee"/>
            <div className="best__item-title">
                {props.name}
            </div>
            <div className="best__item-price">{props.price}</div>
        </div>
    )
}


export default BestItem;