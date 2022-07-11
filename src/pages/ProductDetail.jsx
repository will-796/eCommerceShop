import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import AvaliationForm from '../components/AvaliationForm';
import ProductRating from '../components/ProductRating ';
import { getProductData } from '../services/api';

export default class ProductDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      productId: '',
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
      productId: id,
      productName: data.title,
      image: data.thumbnail,
      price: data.price,
      aditionalInfo: data.attributes,
    });
  }

  previousPage = () => {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    const { productName, image, price, aditionalInfo, productId } = this.state;
    return (
      <main>
        <header>
          <button type="button" onClick={ this.previousPage }>Voltar</button>
          <Link to="/shoppingCart" data-testid="shopping-cart-button">
            Carrinho
          </Link>
        </header>
        <main>
          <section>
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
            <div>
              <Link to="/shoppingCart">Ir para o Carrinho</Link>
            </div>
          </section>
          <section>
            <div>
              <AvaliationForm id={ productId } />
              <ProductRating id={ productId } />
            </div>
          </section>
        </main>
      </main>
    );
  }
}

ProductDetail.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
