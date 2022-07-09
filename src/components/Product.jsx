import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { handleSubmit } from '../services/sessionStorage';

export default class Product extends Component {
  render() {
    const { product } = this.props;
    return (
      <div data-testid="product" className="product">
        <p>{product.title}</p>
        <img src={ product.thumbnail } alt="" />
        <p>{product.price}</p>
        <Link
          data-testid="product-detail-link"
          to={ `/productDetail/${product.id}` }
        >
          detalhes do produto

        </Link>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ () => handleSubmit('shoppingCart', product.id) }
        >
          Adicione ao carrinho

        </button>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
