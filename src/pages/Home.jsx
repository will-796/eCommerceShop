import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      inputSearch: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { inputSearch } = this.state;
    return (
      <div>
        <header>
          <input
            type="text"
            name="inputSearch"
            value={ inputSearch }
            onChange={ this.handleChange }
          />
          <ul>
            <li>
              <Link to="/shoppingCart" data-testid="shopping-cart-button" />
              Search
            </li>
          </ul>
        </header>
        {inputSearch.length === 0 && (
          <div data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </div>
        )}
      </div>
    );
  }
}
