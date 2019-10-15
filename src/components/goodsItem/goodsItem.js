import React from 'react';

class ShopItem extends React.Component {
    render() {
        return(
            <div className="shop__item"
            >
                <img src={this.props.url} alt="coffee"/>
                <div className="shop__item-title">
                    {this.props.name}
                </div>
                <div className="shop__item-price">{this.props.price}</div>
            </div>
        )
    }
}

export default ShopItem;