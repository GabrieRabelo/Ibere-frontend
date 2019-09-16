import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import TabelaHorarioComponent from '../components/tabelaHorario/TabelaHorarioComponent';
import DescricaoInstituicaoComponent from '../components/descricaoInstituicao/DescricaoInstituicaoComponent';

class DetalheInstituicaoContainer extends Component {
  render() {
    return (
      <Grid justify="center" container spacing={6}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div>
                <Grid container spacing={8}>
                  <Grid item xs={8}>
                    <h1>{this.props.instituicao.nome}</h1>
                    <div style={{ color: 'grey' }}>
                      {this.props.instituicao.endereco}
                    </div>
                    {this.props.instituicao.aberto ? (
                      <div className="instituicao-aberta">Aberto</div>
                    ) : (
                      <div className="instituicao-fechada">Fechado</div>
                    )}
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
                <DescricaoInstituicaoComponent
                  descricao={this.props.instituicao.descricao}
                />
              </Grid>
              <Grid item xs={12}>
                <p>E-mail: {this.props.instituicao.email}</p>
                <p>Site:</p>
                <p>Telefone: {this.props.instituicao.telefone}</p>
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
