import React from 'react';
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

  handleRemoveButtonClick = (event) => {
    const idProducts = recoveryFromSection('shoppingCart');
    const ids = idProducts.map((product) => product.id);
    const indexof = ids.indexOf(event);
    idProducts.splice(indexof, 1);
    const arrayString = JSON.stringify(idProducts);
    sessionStorage.setItem('shoppingCart', arrayString);
    this.setState({
      data: idProducts,
      totalPrice: idProducts.reduce(
        (totalprice, product) => totalprice + product.price,
        0,
      ),

    });
  }

  handleAddButtonClick = (event) => {
    const idProducts = recoveryFromSection('shoppingCart');
    const objt = idProducts.find((element) => (element.id === event ? element : null));
    idProducts.push(objt);
    const arrayString = JSON.stringify(idProducts);
    sessionStorage.setItem('shoppingCart', arrayString);

    this.setState({
      data: idProducts,
      totalPrice: idProducts.reduce(
        (totalprice, product) => totalprice + product.price,
        0,
      ),

    });
  }

  // handleAddButtonClick = async (id) => {
  //   const idProducts = recoveryFromSection('shoppingCart');
  //   const newIdProducts = [...idProducts, id];
  //   handleSubmit('shoppingCart', id);
  //   const result = newIdProducts.map((ids) => getProductData(ids));
  //   const array = await Promise.all(result);
  //   this.setState({
  //     data: array,
  //     totalPrice: array.reduce(
  //       (totalprice, product) => totalprice + product.price,
  //       0,
  //     ),
  //   });
  // };

  // handleRemoveButtonClick = (id) => {
  //   const idProducts = recoveryFromSection('shoppingCart');
  //   const resultId = idProducts.filter((product) => product === id);
  //   console.log(resultId);
  // };

  render() {
    const { data, totalPrice, unityProducts } = this.state;
    // console.log(data);
    // console.log(unityProducts);
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
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

          </div>
        ))}
        <div>{totalPrice}</div>
      </div>
    );
  }
}

export default ShoppingCart;
