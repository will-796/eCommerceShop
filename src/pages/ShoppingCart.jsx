import React from 'react';
import ShoppingCartProdutcs from '../components/ShoppingCartProdutcs';
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
      totalPrice: array.reduce((totalprice, product) => totalprice + product.price, 0),
    });
  }

  render() {
    const { data, totalPrice } = this.state;
    console.log(data);
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        {data.map((item, index) => (
          <div key={ index }>
            <h1 data-testid="shopping-cart-product-name">{ item.title }</h1>
            <h3>{item.price}</h3>
            <h3 data-testid="shopping-cart-product-quantity">1</h3>
            {' '}
          </div>
        ))}
        <div>
          {
            totalPrice
          }
        </div>
        <ShoppingCartProdutcs />
      </div>
    );
  }
}

export default ShoppingCart;
