import React from 'react';
import { getProductData } from '../services/api';
import { recoveryFromSection } from '../services/sessionStorage';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],

    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const idProducts = recoveryFromSection('shoppingCart');
    const result = idProducts.map((id) => getProductData(id));
    const array = await Promise.all(result);
    this.setState({
      data: array,
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        {data.map((item) => (
          <div key={ item.id }>
            <h1 data-testid="shopping-cart-product-name">{ item.title }</h1>
            <h3>{item.price}</h3>
            <h3 data-testid="shopping-cart-product-quantity">1</h3>
            {' '}
          </div>
        ))}
      </div>
    );
  }
}

export default ShoppingCart;
