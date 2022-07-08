import React, { Component } from 'react';

export default class ProductRating extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      // message: '',
    };
  }

   handleChanges =({ target }) => {
     const { name, value } = target;
     this.setState({
       [name]: value,
     });
   }

   render() {
     const { email } = this.state;
     return (
       <div>
         Avaliações
         <form>
           <input
             name="email"
             type="email"
             placeholder="Email"
             data-testid="product-detail-email"
           />
         </form>
       </div>
     );
   }
}
