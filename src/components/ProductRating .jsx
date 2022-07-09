import PropTypes from 'prop-types';
import React from 'react';
import { recoveryFromSection } from '../services/sessionStorage';
import AvaliationForm from './AvaliationForm';
import Reviews from './ReviewCard';

export default class ProductRating extends React.Component {
  componentDidMount() {
    this.handleReviews();
  }

  handleReviews = () => {
    const { productId } = this.props;
    const data = recoveryFromSection('avaliations');
    const productReview = data.some((avaliation) => avaliation.productId === productId);
    console.log(data);
    console.log(productReview);
  }

  render() {
    const { productId } = this.props;
    return (
      <div>
        Avaliações
        <div><AvaliationForm productId={ productId } /></div>
        <div><Reviews productId={ productId } /></div>
      </div>
    );
  }
}

ProductRating.propTypes = {
  productId: PropTypes.string.isRequired,
};
