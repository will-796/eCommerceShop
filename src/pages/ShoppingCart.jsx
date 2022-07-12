import React from 'react';
import { Link } from 'react-router-dom';
import { recoveryFromSection } from '../services/sessionStorage';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      unityProducts: [],
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    const products = recoveryFromSection('shoppingCart');
    const ids = products.map((product) => product.id);
    this.setState({
      data: products,
      totalPrice: products.reduce(
        (totalprice, product) => totalprice + product.price,
        0,
      ),
      unityProducts: products.filter(
        ({ id }, index) => !ids.includes(id, index + 1),
      ),
    });
  };

  handleRemoveButtonClick = (id) => {
    const products = recoveryFromSection('shoppingCart');

    if (products.filter((product) => product.id === id).length > 1) {
      const ids = products.map((product) => product.id);
      const indexof = ids.indexOf(id);
      products.splice(indexof, 1);
      const productStingfy = JSON.stringify(products);
      sessionStorage.setItem('shoppingCart', productStingfy);
      this.setState({
        data: products,
        totalPrice: products.reduce(
          (totalprice, product) => totalprice + product.price,
          0,
        ),
      });
    }
  }

  handleAddButtonClick = (event) => {
    const products = recoveryFromSection('shoppingCart');
    const objt = products.find((element) => (element.id === event ? element : null));
    products.push(objt);
    const productStingfy = JSON.stringify(products);
    sessionStorage.setItem('shoppingCart', productStingfy);

    this.setState({
      data: products,
      totalPrice: products.reduce(
        (totalprice, product) => totalprice + product.price,
        0,
      ),

    });
  }

  render() {
    const { data, totalPrice, unityProducts } = this.state;
    return (
      <div>
        {data.length === 0
        && <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
        {unityProducts.map((item, index) => (
          <div key={ index }>
            <h1 data-testid="shopping-cart-product-name">{item.title}</h1>
            <h3>{item.price}</h3>
            <div>
              <button
                type="button"
                onClick={ () => this.handleRemoveButtonClick(item.id) }
                data-testid="product-decrease-quantity"
              >
                -
              </button>
              <h3 data-testid="shopping-cart-product-quantity">
                {data.filter(({ id }) => id === item.id).length}
              </h3>
              <button
                type="button"
                onClick={ () => this.handleAddButtonClick(item.id) }
                data-testid="product-increase-quantity"
              >
                +
              </button>
            </div>
            <button type="button">
              <Link
                to="/finishPayment"
                data-testid="checkout-products"
              >
                Finalizar Pedido
              </Link>
            </button>
          </div>
        ))}
        <div>{totalPrice}</div>
      </div>
    );
  }
}

export default ShoppingCart;
