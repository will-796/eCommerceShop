import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import states from '../data/states';

export default class FinishPayment extends Component {
  constructor() {
    super();
    this.state = {
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
    console.log(name);
    this.setState({ [name]: value });
  };

  validateForm=() => {
    if (null) {
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
            className={ null ? 'red' : '' }
            type="text"
            placeholder="Nome Completo"
            onChange={ this.handleChange }
            name="inputName"
            value={ inputName }
          />
          <input
            type="number"
            placeholder="CPF"
            onChange={ this.handleChange }
            name="inputCpf"
            value={ inputCpf }
          />
          <input
            type="email"
            placeholder="Email"
            onChange={ this.handleChange }
            name="inputEmail"
            value={ inputEmail }
          />
          <input
            type="number"
            placeholder="Telefone"
            onChange={ this.handleChange }
            name="inputPhone"
            value={ inputPhone }
          />
          <input
            type="number"
            placeholder="CEP"
            onChange={ this.handleChange }
            name="inputCEP"
            value={ inputCEP }
          />
          <input
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
