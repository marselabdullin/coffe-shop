import React from 'react';
import BestItem from '../bestItem/bestItem';
import service from '../../services/service';

export default class Best extends React.Component {

  service = new service();

  renderItems(arr) {
    return arr.map((item) => {
      const {name, url, price} = item;
      const id = name.replace(/ /g, '-');
      return(
        <BestItem
          key={id}
          name={name}
          url={url}
          price={price}
          onItemSelected={() => this.props.onItemSelected(id)}
        />
      )
    })
  }

  render() {
    return(
        <section className="best">
        <div className="container">
          <div className="title">Our best</div>
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="best__wrapper">
                  {this.renderItems(this.service.getBestsellers())}
                </div>
              </div>
            </div>
        </div>
      </section>
    )
  } 
}