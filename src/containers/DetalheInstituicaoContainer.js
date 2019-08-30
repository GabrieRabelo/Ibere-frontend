import React, { Component } from 'react';

type Props = {
  titulo: '',
  endereco: ''
};

class DetalheInstituicaoContainer extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>{this.props.titulo}</h1>
        <div>{this.props.endereco}</div>
        <div>Aberto</div>
        <div>
          <button style={style}>Rotas</button>
        </div>
        <hr />
      </div>
    );
  }
}

export default DetalheInstituicaoContainer;

const style = {
  borderRadius: '4px'
};
