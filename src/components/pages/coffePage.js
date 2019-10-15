import React from 'react';
import Banner from '../banner/banner';
import ShopTitle from '../shopTitle/shopTitle';
import SearchAndFilter from '../searchAndFilter/searchAndFilter';
import ItemList from '../itemList/itemList';
import service from '../../services/service';

import {withRouter} from 'react-router-dom';

class CoffePage extends React.Component {
    service = new service();

    constructor(props) {
        super(props);
        this.state = {
            data: this.service.getCoffee(),
            term: '',
            filter: ''
        };
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
    }

    searchItems(items, term) {
        if (term.length ===0) {
            return items
        }
        return items.filter((item) => {
            return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    }

    filterItems(items, filter) {
        if(filter === 'Brazil') {
            return items.filter(item => item.country === 'Brazil')
        } else if(filter === 'Kenya') {
            return items.filter(item => item.country === 'Kenya')
        } else if(filter === 'Columbia') {
            return items.filter(item => item.country === 'Columbia')
        } else {
            return items
        }
    }

    onUpdateSearch(term) {
        this.setState({term})
    }

    onFilterSelect(filter) {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state;
        const visibleItems = this.filterItems(this.searchItems(data, term), filter);

        return(
            <>
                <Banner label="Our coffe"/>
                <section className="shop">
                    <div className="container">
                        <ShopTitle/>
                        <SearchAndFilter
                            onUpdateSearch={this.onUpdateSearch}
                            filter={filter}
                            onFilterSelect={this.onFilterSelect}
                        />
                        <ItemList
                            onItemSelected={(itemId) => {
                                this.props.history.push(itemId)
                            }}
                            visibleItems={visibleItems}
                        />  
                    </div>
                </section>
            </>
        )
    }
}

export default withRouter(CoffePage);