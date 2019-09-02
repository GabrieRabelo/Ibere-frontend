import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

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
        <Grid container spacing={8}>
          <Grid item xs={8}>
            <h1>{this.props.titulo}</h1>
            <div style={{ color: 'grey' }}>{this.props.endereco}</div>
            <div style={{ color: 'green' }}>Aberto</div>
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            item
            xs={4}
          >
            <button style={style}>Rotas</button>
          </Grid>
        </Grid>
        <hr />
      </div>
    );
  }
}

export default DetalheInstituicaoContainer;

const style = {
  borderRadius: '5px',
  outline: '0'
};
