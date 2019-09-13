import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import TabelaHorarioComponent from '../components/tabelaHorario/TabelaHorarioComponent';
import DescricaoInstituicaoComponent from '../components/descricaoInstituicao/DescricaoInstituicaoComponent';
import ContatoInstituicaoComponent from '../components/contatoInstituicao/ContatoInstituicaoComponent';

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
      <Grid justify="center" container spacing={6}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div>
                <Grid container spacing={1}>
                  <Grid item xs={9}>
                    <h1 style={{ fontSize: '24px' }}>{this.props.titulo}</h1>
                    <div style={{ color: 'grey' }}>{this.props.endereco}</div>
                    <div style={{ color: 'green' }}>Aberto</div>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    item
                    xs={3}
                  >
                    <button style={style}>Rotas</button>
                  </Grid>
                </Grid>
                <hr />
              </div>
            </Grid>
            <Grid item xs={5}>
              <TabelaHorarioComponent />
            </Grid>

            <Grid container spacing={2} item xs={7}>
              <Grid item xs={12}>
                <DescricaoInstituicaoComponent />
              </Grid>
              <Grid item xs={12}>
                <ContatoInstituicaoComponent />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              Carrossel ficará aqui
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default DetalheInstituicaoContainer;

const style = {
  borderRadius: '50%',
  outline: '0'
};
