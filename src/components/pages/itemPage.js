import React from 'react';
import Banner from '../banner/banner';
import BeansLogoDark from '../../logo/Beans_logo_dark.svg';
import service from '../../services/service';

export default class ItemPage extends React.Component {
    service = new service();
    constructor(props) {
        super(props);
        this.state = {
            item: this.service.getItem(this.props.itemId)[0]
        } 
    }

    

    render() {
        const {item} = this.state;
        return(
            <>
                <Banner/>
                <section className="shop">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 offset-1">
                                <img className="shop__girl" src={item.url} alt="coffee_item"/>
                            </div>
                            <div className="col-lg-4">
                                <div className="title">About it</div>
                                <img className="beanslogo" src={BeansLogoDark} alt="Beans logo"/>
                                <div className="shop__point">
                                    <span>Country: </span>
                                    {item.country}
                                </div>
                                <div className="shop__point">
                                    <span>Description: </span>
                                    {item.description}
                                </div>
                                <div className="shop__point">
                                    <span>Price: </span>
                                    <span className="shop__point-price">{item.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}