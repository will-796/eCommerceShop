import PropTypes from 'prop-types';
import React from 'react';

// para esse componente foi consutado o site DEV (https://dev.to/michaelburrows/create-a-custom-react-star-rating-component-5o6)
class StarRating extends React.Component {
  starRating = () => {
    const { rating, handleStar } = this.props;
    const number = 5;
    const stars = [...Array(number)].map((element, index) => {
      index += 1;
      return (
        <button
          type="button"
          key={ index }
          onClick={ () => handleStar(index) }
          data-testid={ `${index}-rating` }
        >
          { (rating >= index) ? '★' : '☆' }
        </button>
      );
    });
    return stars;
  }

  render() {
    return (
      <div>
        {this.starRating()}
      </div>
    );
  }
}

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  handleStar: PropTypes.func.isRequired,
};

export default StarRating;
