import React, { Component } from 'react';
import { recoveryFromSection } from '../services/sessionStorage';

export default class ShoppingCartProdutcs extends Component {
  constructor() {
    super();
    this.state = ({
      arrayOfproducts: [],
    });
  }

  getProductsFromStorage=() => {
    const produtcs = recoveryFromSection();

    this.setState({
      arrayOfproducts: produtcs,

    });
  }

  render() {
    console.log(this.state.arrayOfproducts);
    return (

      <div />
    );
  }
}
