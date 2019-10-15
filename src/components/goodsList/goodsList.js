import React from 'react';
import GoodsItem from '../goodsItem/goodsItem';

export default class GoodsList extends React.Component {
    
    renderItems(arr) {
        return arr.map((item) => {
            const {name, url, price} = item;
            const id = name.replace(/ /g, '-');
            return (
                <GoodsItem
                    key = {id}
                    name={name}
                    url={url}
                    price={price}
                />
            )
        })
    }
    
    render() {
        const items = this.renderItems(this.props.items);

        return(
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="shop__wrapper">
                        {items}
                    </div>
                </div>
            </div>
        )
    }
}