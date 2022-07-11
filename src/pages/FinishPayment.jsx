import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import states from '../data/states';

export default class FinishPayment extends Component {
  constructor() {
    super();
    this.state = {
      empty: true,
      inputName: '',
      inputCpf: '',
      inputEmail: '',
      inputPhone: '',
      inputCEP: '',
      inputAddress: '',
      inputComplement: '',
      houseNumber: '',
      inputCity: '',
      selectUF: '',
      isValidate: false,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  validateForm=() => {
    const empty = this.state;
    if (empty) {
      this.setState({ inputName: '',
        inputCpf: '',
        inputEmail: '',
        inputPhone: '',
        inputCEP: '',
        inputAddress: '',
        inputComplement: '',
        houseNumber: '',
        inputCity: '',
        selectUF: '',
        isValidate: true,
      });
    }
  }

  render() {
    const {
      empty,
      inputName,
      inputCpf,
      inputEmail,
      inputPhone,
      inputCEP,
      inputAddress,
      inputComplement,
      houseNumber,
      inputCity,
      selectUF,
      isValidate,
    } = this.state;
    return (
      <div>
        {isValidate && <Redirect to="/" />}
        <Link to="/">voltar para a home</Link>
        <section>Revise seus produtos</section>
        <form action="">
          <input
            data-testid="checkout-fullname"
            className={ empty ? 'red' : '' }
            type="text"
            placeholder="Nome Completo"
            onChange={ this.handleChange }
            name="inputName"
            value={ inputName }
          />
          <input
            data-testid="checkout-cpf"
            type="text"
            placeholder="CPF"
            onChange={ this.handleChange }
            name="inputCpf"
            value={ inputCpf }
          />
          <input
            data-testid="checkout-email"
            type="email"
            placeholder="Email"
            onChange={ this.handleChange }
            name="inputEmail"
            value={ inputEmail }
          />
          <input
            data-testid="checkout-phone"
            type="text"
            placeholder="Telefone"
            onChange={ this.handleChange }
            name="inputPhone"
            value={ inputPhone }
          />
          <input
            data-testid="checkout-cep"
            type="text"
            placeholder="CEP"
            onChange={ this.handleChange }
            name="inputCEP"
            value={ inputCEP }
          />
          <input
            data-testid="checkout-address"
            type="text"
            placeholder="Endereço"
            onChange={ this.handleChange }
            name="inputAddress"
            value={ inputAddress }
          />
          <input
            type="text"
            placeholder="Complemento"
            onChange={ this.handleChange }
            name="inputComplement"
            value={ inputComplement }
          />
          <input
            type="text"
            placeholder="Número"
            onChange={ this.handleChange }
            name="houseNumber"
            value={ houseNumber }
          />
          <input
            type="text"
            placeholder="Cidade"
            onChange={ this.handleChange }
            name="inputCity"
            value={ inputCity }
          />
          <select
            name="selectUF"
            value={ selectUF }
            id="selectUF"
            onChange={ this.handleChange }
          >
            {states.map((state) => (
              <option key={ state } value={ state }>
                {state}
              </option>
            ))}
          </select>
        </form>
        <section>
          Imformações do comprador
          <form action="">
            <label
              htmlFor="payForm"
              onChange={ this.handleChange }
            >
              <input
                type="radio"
                name="payForm"
                id="payForm"
                value="Boleto"
              />
              <input
                type="radio"
                name="payForm"
                id="payForm"
                value="creditCardVisa"
              />
              <input
                type="radio"
                name="payForm"
                id="payForm"
                value="creditCardMaster"
              />
              <input
                type="radio"
                name="payForm"
                id="payForm"
                value="creditCardElo"
              />
            </label>
          </form>
        </section>

        <section>Metodo de pagamento</section>
        <button type="button" onClick={ this.validateForm }>Comprar</button>
      </div>
    );
  }
}
