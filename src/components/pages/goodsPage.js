import React from 'react';
import Banner from '../banner/banner';
import service from '../../services/service';
import GoodsTitle from '../goodsTitle/goodsTitle';
import GoodsList from '../goodsList/goodsList';

export default class GoodsPage extends React.Component {
    service = new service();

    constructor(props) {
        super(props);
        this.state = {
            data: this.service.getGoods()
        };
    }

    render() {
        return(
            <>
                <Banner label="For your pleasure"/>
                <section className="shop">
                    <div className="container">
                        <GoodsTitle/>
                        <GoodsList
                            items={this.state.data}
                        />
                    </div>
                </section>
            </>
        )
    }
}