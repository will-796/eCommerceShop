import React, { Component } from 'react';

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
