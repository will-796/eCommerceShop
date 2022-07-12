import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FinishPayment from './pages/FinishPayment';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ShoppingCart from './pages/ShoppingCart';
import { recoveryFromSection } from './services/sessionStorage';
import './styles/temporary.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      shoppingCartList: recoveryFromSection('shoppingCart'),
    };
  }

  updateShoppingCart = () => {
    this.setState({
      shoppingCartList: recoveryFromSection('shoppingCart'),
    });
  };

  render() {
    const { shoppingCartList } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            render={ (props) => (
              <Home
                { ...props }
                shoppingCartList={ shoppingCartList }
                updateShoppingCart={ this.updateShoppingCart }
              />
            ) }
            exact
          />
          <Route
            path="/productDetail/:id"
            render={ (props) => (<ProductDetail
              { ...props }
              shoppingCartList={ shoppingCartList }
              updateShoppingCart={ this.updateShoppingCart }
            />) }
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
