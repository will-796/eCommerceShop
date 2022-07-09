import React from 'react';
import PropTypes from 'prop-types';
import { handleSubmit } from '../services/sessionStorage';
import StarRating from './StarRating';

export default class AvaliationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      message: '',
      rating: 0,
    };
  }

  handleChanges = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleStar = (starIndex) => {
    this.setState({
      rating: starIndex,
    });
  }

  handleAvaliations = (event) => {
    const { productId } = this.props;
    event.preventDefault();
    const { email, message, rating } = this.state;
    const newReview = { email, message, rating, productId };
    handleSubmit('avaliations', newReview);
    this.setState({
      email: '',
      message: '',
      rating: 0,
    });
  }

  render() {
    const { email, message, rating } = this.state;
    return (
      <div>
        <form>
          <input
            name="email"
            type="email"
            value={ email }
            placeholder="Email"
            data-testid="product-detail-email"
            onChange={ this.handleChanges }
          />
          <StarRating rating={ rating } handleStar={ this.handleStar } />
          <textarea
            name="message"
            value={ message }
            onChange={ this.handleChanges }
            data-testid="product-detail-evaluation"
          />
          <button
            type="submit"
            data-testid="submit-review-btn"
            onClick={ this.handleAvaliations }
          >
            Avaliar
          </button>
        </form>
      </div>
    );
  }
}

AvaliationForm.propTypes = {
  productId: PropTypes.string.isRequired,
};
