import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductQuantity from '../components/ProductQuantity';
import { getProductData } from '../services/api';

export default class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      productName: '',
      image: '',
      price: '',
      aditionalInfo: [],
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    const data = await getProductData(id);
    this.setState({
      productName: data.title,
      image: data.thumbnail,
      price: data.price, // tem também um original_price
      aditionalInfo: data.attributes,
    });
  }

  render() {
    const { productName, image, price, aditionalInfo } = this.state;
    return (
      <div>
        <h1 data-testid="product-detail-name">{productName}</h1>
        <img src={ image } alt={ productName } />
        <h3>{price}</h3>
        <div>
          {aditionalInfo.map((details) => (
            <p key={ details.id }>
              {details.name}
              :
              {' '}
              {details.value_name}
            </p>))}
        </div>
        <ProductQuantity />
        <div>
          <Link to="/shoppingCart">Ir para o Carrinho</Link>
        </div>
        <div><ProductRating /></div>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
