import React, { Component } from 'react';

export default class ProductQuantity extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
  }

  sumQuantity = () => {
    this.setState((prev) => ({
      quantity: prev.quantity + 1,
    }));
  }

  subQuantity = () => {
    const { quantity } = this.state;
    if (quantity > 1) {
      this.setState((prev) => ({
        quantity: prev.quantity - 1,
      }));
    }
  }

  render() {
    const { quantity } = this.state;
    return (
      <div>
        <button type="button" onClick={ this.subQuantity }>-</button>
        <div>{quantity}</div>
        <button type="button" onClick={ this.sumQuantity }>+</button>
      </div>
    );
  }
}
