import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FinishPayment from './pages/FinishPayment';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ShoppingCart from './pages/ShoppingCart';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // shoppingCartList: [],
    };
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" render={ (props) => <Home { ...props } /> } exact />
          <Route
            path="/productDetail/:id"
            render={ (props) => <ProductDetail { ...props } /> }
          />
          <Route
            path="/shoppingCart"
            render={ (props) => <ShoppingCart { ...props } /> }
          />
          <Route
            path="/finishPayment"
            render={ (props) => <FinishPayment { ...props } /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
