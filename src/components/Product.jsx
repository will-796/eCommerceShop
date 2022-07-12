import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { handleSubmit } from '../services/sessionStorage';

export default class Product extends Component {
  eventsClick = () => {
    const { updateShoppingCart, product } = this.props;
    handleSubmit('shoppingCart', product);
    updateShoppingCart();
  }

  render() {
    const { product } = this.props;
    return (
      <div data-testid="product" className="product">
        <p>{product.title}</p>
        <img src={ product.thumbnail } alt="" />
        <p>{product.price}</p>
        {product.shipping.free_shipping === true
          ? <p data-testid="free-shipping">Frete grátis disponível</p> : null}
        <Link
          data-testid="product-detail-link"
          to={ `/productDetail/${product.id}` }
        >
          detalhes do produto

        </Link>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ this.eventsClick }
        >
          Adicione ao carrinho

        </button>
      </div>
    );
  }
}

Product.propTypes = {
  updateShoppingCart: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    shipping: PropTypes.string,
  }).isRequired,
};
