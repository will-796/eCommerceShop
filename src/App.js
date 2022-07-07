import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './component/Home';
import ProductDetail from './component/ProductDetail';
import ShoppingCart from './component/ShoppingCart';
import FinishPayment from './component/FinishPayment';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      shoppingCartList: [],
    }
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" render={(props) => <Home {...props} />} exact />
          <Route path="/productDetail/:id" render={(props) =>
            <ProductDetail {...props} />} />
          <Route path="/shoppingCart" render={(props) =>
            <ShoppingCart {...props} />} />
          <Route path="/finishPayment" render={(props) =>
            <FinishPayment {...props} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
