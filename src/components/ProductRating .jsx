import PropTypes from 'prop-types';
import React from 'react';
// import { recoveryFromSection } from '../services/sessionStorage';
import AvaliationForm from './AvaliationForm';
import ReviewCard from './ReviewCard';

export default class ProductRating extends React.Component {
  // constructor() {
  //   super();
  //   const { id } = this.props;
  //   this.state = {
  //     id,
  //   };
  // }

  componentDidMount() {
    const { id } = this.props;
    console.log(id);
    // this.handleReviews(id);
  }

  // handleReviews = (productId) => {
  //   console.log(productId);
  //   const data = recoveryFromSection('avaliations');
  //   const productReview = data.filter((avaliation) => (
  //     (avaliation.id === productId) ? avaliation : 'nope'));
  //   // console.log(data);
  //   // console.log(id);

  //   console.log(productReview);
  // }

  render() {
    const { id } = this.props;
    console.log(id);

    return (
      <div>
        Avaliações
        <div><AvaliationForm id={ id } /></div>
        <div><ReviewCard /></div>
      </div>
    );
  }
}

ProductRating.propTypes = {
  id: PropTypes.string.isRequired,
};
