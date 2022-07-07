import React, { Component } from 'react';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      inputSearch: '',
    };
  }

  render() {
    const { inputSearch } = this.state;
    return (

      <header>
        <input type="text" />
      </header>
      // { inputSearch.length < 1 ? <h2>Digite algum termo de pesquisa ou escolha uma categoria</h2> : <div></div> }

    );
  }
}
