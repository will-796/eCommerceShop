import PropTypes from 'prop-types';
import React from 'react';
import { recoveryFromSection } from '../services/sessionStorage';

export default class ProductRating extends React.Component {
  constructor() {
    super();
    this.state = {
      data: recoveryFromSection('avaliations'),
      // reviews: [],
    };
  }

  renderStar = (rating) => {
    const number = 5;
    const stars = [...Array(number)].map((element, index) => {
      index += 1;
      if (rating >= index) {
        return '★';
      }
      return '☆';
    });
    return stars;
  }

  render() {
    const { id } = this.props;
    const { data } = this.state;
    return (
      <div>
        <h3>Avaliações</h3>
        {
          data.filter((avaliation) => avaliation.id === id)
            .map((element, index) => (
              <div key={ index }>
                <h4>{element.email}</h4>
                <p>{element.rating}</p>
                {this.renderStar(element.rating)}
                <p>{element.message}</p>
              </div>
            ))
        }
      </div>
    );
  }
}

ProductRating.propTypes = {
  id: PropTypes.string.isRequired,
};
