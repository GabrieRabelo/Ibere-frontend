import React, { Component } from 'react';
import { Grid, Typography, Fab } from '@material-ui/core';
import TabelaHorarioComponent from '../components/tabelaHorario/TabelaHorarioComponent';
import DescricaoInstituicaoComponent from '../components/descricaoInstituicao/DescricaoInstituicaoComponent';
import CarouselComponent from '../components/carrosselModal/carrosselComponent';

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
            <hr className="divider" />
            <Grid item xs={12}>
              <DescricaoInstituicaoComponent
                descricao={this.props.instituicao.descricao}
              />
            </Grid>

            <Grid
              className="horariosContatoContainer"
              container
              justify="flex-start"
              spacing={2}
            >
              <Grid item xs={6}>
                <TabelaHorarioComponent />
              </Grid>
              <Grid item xs={6} className="contatoContainer">
                <Typography variant="body2" id="email">
                  {this.props.instituicao.email}
                </Typography>
                <Typography variant="body2">
                  {this.props.instituicao.site ? this.props.site : ''}
                </Typography>
                <Typography variant="body2">
                  {this.props.instituicao.telefone}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <CarouselComponent />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default DetalheInstituicaoContainer;
