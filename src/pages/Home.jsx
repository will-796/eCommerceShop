import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      inputSearch: '',
      categories: [],
      products: [],
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi = async () => {
    const result = await getCategories();
    this.setState({ categories: result });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleClick = async () => {
    const { inputSearch } = this.state;
    const products = await getProductsFromCategoryAndQuery(false, inputSearch);
    this.setState({ products: products.results });
  };

  handleClickCategorie = async (category) => {
    const products = await getProductsFromCategoryAndQuery(category);
    this.setState({ products: products.results });
    console.log(products);
  };

  render() {
    const { inputSearch, categories, products } = this.state;
    return (
      <div>
        <header>
          <input
            data-testid="query-input"
            type="text"
            name="inputSearch"
            value={ inputSearch }
            onChange={ this.handleChange }
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.handleClick }
            disabled={ inputSearch.length === 0 }
          >
            Pesquisar
          </button>
          <ul>
            <li>
              <Link to="/shoppingCart" data-testid="shopping-cart-button">
                Carrinho
              </Link>
            </li>
          </ul>
        </header>
        <main>
          {products.length === 0 ? (
            <div data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </div>
          ) : (
            <div className="products-container">
              {products.map((product) => (
                <Product key={ product.id } product={ product } />
              ))}
            </div>
          )}
          <aside className="categories-container">
            {categories.map((categoriy) => (
              <button
                key={ categoriy.id }
                type="button"
                data-testid="category"
                className="categoriy"
                onClick={ () => this.handleClickCategorie(categoriy.id, false) }
              >
                {categoriy.name}
              </button>
            ))}
          </aside>
        </main>
      </div>
    );
  }
}
