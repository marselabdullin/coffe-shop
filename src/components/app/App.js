import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import MainPage from '../pages/mainPage';
import Footer from '../footer/footer';
import CoffePage from '../pages/coffePage';
import ItemPage from '../pages/itemPage';
import GoodsPage from '../pages/goodsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
      <Route exact path="/coffee" component={CoffePage} />
      <Route path="/goods" component={GoodsPage} />
      <Route path="/coffee/:id" render={
        ({match}) => {
          const {id} = match.params;
          return <ItemPage itemId={id}/>
        }
      } />
      <Redirect to='/'/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
