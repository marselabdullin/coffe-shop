import React from 'react';

class SearchAndFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            filter: ''
        }
        this.buttons=[
            {name: 'Brazil', label: 'Brazil'},
            {name: 'Kenya', label: 'Kenya'},
            {name: 'Columbia', label: 'Columbia'},
            {name: 'All', label: 'All'}
        ]
        this.onUpdateSearch = this.onUpdateSearch.bind(this)
    }

    onUpdateSearch(e) {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const active = this.props.filter === name;
            const clazz = active ? 'shop__filter-btn active' : 'shop__filter-btn';
            return(
                <button 
                    key={name} 
                    className={clazz}
                    onClick={() => this.props.onFilterSelect(name)}
                >{label}</button>
            )
        });
        return(
            <>
                <div className="line"></div>
                <div className="row">
                    <div className="col-lg-4 offset-1">
                        <form action="#" className="shop__search">
                            <label className="shop__search-label" htmlFor="filter">Looking for</label>
                            <input 
                                id="filter" 
                                type="text" 
                                placeholder="start typing here..." className="shop__search-input"
                                onChange={this.onUpdateSearch}
                            />
                        </form>
                    </div>
                    <div className="col-lg-5 offset-1">
                        <div className="shop__filter">
                            <div className="shop__filter-label">
                                Or filter
                            </div>
                            <div className="shop__filter-group">
                                {buttons}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        ) 
    } 
}

export default SearchAndFilter;