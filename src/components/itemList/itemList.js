import React from 'react';
import ShopItem from '../shopItem/shopItem';

export default class ItemList extends React.Component {
    
    renderItems(arr) {
        return arr.map((item) => {
            const {name, url, price, country} = item;
            const id = name.replace(/ /g, '-');
            return (
                <ShopItem
                    key = {id}
                    name={name}
                    url={url}
                    price={price}
                    country={country}
                    onItemSelected={() => this.props.onItemSelected(id)}
                />
            )
        })
    }
    
    render() {
        const items = this.renderItems(this.props.visibleItems);

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