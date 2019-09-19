import React, { Component } from 'react';
import { Grid, Divider, Typography, Fab } from '@material-ui/core';
import TabelaHorarioComponent from '../components/tabelaHorario/TabelaHorarioComponent';
import DescricaoInstituicaoComponent from '../components/descricaoInstituicao/DescricaoInstituicaoComponent';

import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';

import './DetalheInstituicao.css';

class DetalheInstituicaoContainer extends Component {
  render() {
    return (
      <Grid className="container" justify="center" container>
        <Grid item xs={12}>
          <Grid item xs={12}>
            <Grid className="container1" container>
              <Grid item xs={10}>
                <Typography className="titulo" variant="h5">
                  {this.props.instituicao.nome}
                </Typography>
                <Typography variant="subtitle1">
                  {this.props.instituicao.endereco}
                </Typography>
                {this.props.instituicao.aberto ? (
                  <Typography
                    variant="subtitle2"
                    className="instituicao-aberta"
                  >
                    Aberto
                  </Typography>
                ) : (
                  <Typography
                    variant="subtitle2"
                    className="instituicao-fechada"
                  >
                    Fechado
                  </Typography>
                )}
              </Grid>
              <Grid
                container
                className="btnContainer"
                direction="row"
                justify="flex-end"
                item
                xs={2}
              >
                <Fab color="inherit" className="btnRotas" size="small">
                  <SubdirectoryArrowRightIcon />
                </Fab>
              </Grid>
            </Grid>
            <Divider className="divider" />
            <Grid item xs={12}>
              <DescricaoInstituicaoComponent
                descricao={this.props.instituicao.descricao}
              />
            </Grid>

            <Grid className="horariosContatoContainer" container spacing={2}>
              <Grid item xs={6}>
                <TabelaHorarioComponent />
              </Grid>
              <Grid item xs={6}>
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
