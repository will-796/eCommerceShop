import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      inputSearch: '',
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi = async () => {
    const result = await getCategories();
    console.log(result);
    this.setState({ categories: result });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { inputSearch, categories } = this.state;
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
              Carrinho
            </li>
          </ul>
        </header>
        {inputSearch.length === 0 && (
          <div data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </div>
        )}
        <aside>
          {categories.map((categorie) => (
            <span key={ categorie.id } data-testid="category">
              {categorie.name}
            </span>
          ))}
        </aside>
      </div>
    );
  }
}
