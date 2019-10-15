import React from 'react';

import Preview from '../preview/preview';
import About from '../about/about';
import Best from '../best/best';

import {withRouter} from 'react-router-dom';

class MainPage extends React.Component {
    render() {
        return(
            <>
                <Preview/>
                <About/>
                <Best
                onItemSelected={(itemId) => {
                    this.props.history.push(`/coffee/${itemId}`)
                    // console.log(itemId)
                }}
                />
            </>
        )
    }
    
}

export default withRouter(MainPage);