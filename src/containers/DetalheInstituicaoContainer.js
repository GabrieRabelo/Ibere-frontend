import React, { Component } from 'react';
import { Grid, Typography, Fab } from '@material-ui/core';
import TabelaHorarioComponent from '../components/tabelaHorario/TabelaHorarioComponent';
import DescricaoInstituicaoComponent from '../components/descricaoInstituicao/DescricaoInstituicaoComponent';
import CarouselComponent from '../components/carrosselModal/carrosselComponent';
import InstituicaoService from '../services/InstituicaoService';

import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';

import './DetalheInstituicao.css';

class DetalheInstituicaoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instituicao: {}
    };
    this.instituicaoService = new InstituicaoService();
  }

  async componentWillMount() {
    const instituicao = await this.instituicaoService.buscaPorId(this.props.id);
    this.setState({ instituicao: instituicao });
  }

  render() {
    if (Object.keys(this.state.instituicao).length > 0) {
      return (
        <Grid className="container" justify="center" container>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <Grid className="container1" container>
                <Grid item xs={10}>
                  <Typography className="titulo" variant="h5">
                    {this.state.instituicao.nome}
                  </Typography>
                  <Typography variant="subtitle1">
                    {this.state.instituicao.endereco}
                  </Typography>
                  {this.state.instituicao.aberto ? (
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
                  <Fab
                    href={
                      'https://www.google.com/maps?saddr=My+Location&daddr=' +
                      this.state.instituicao.latitude +
                      ',' +
                      this.state.instituicao.longitude
                    }
                    color="inherit"
                    className="btnRotas"
                    size="small"
                  >
                    <SubdirectoryArrowRightIcon />
                  </Fab>
                </Grid>
              </Grid>
              <hr className="divider" />
              <Grid item xs={12}>
                <DescricaoInstituicaoComponent
                  descricao={this.state.instituicao.descricao}
                />
              </Grid>

              <Grid
                className="horariosContatoContainer"
                container
                justify="flex-start"
                spacing={2}
              >
                <Grid item xs={7}>
                  <TabelaHorarioComponent
                    horarios={this.state.instituicao.horarios}
                  />
                </Grid>
                <Grid item xs={5} className="contatoContainer">
                  <Typography variant="body2" id="email">
                    {this.state.instituicao.email}
                  </Typography>
                  <Typography variant="body2">
                    {this.state.instituicao.site
                      ? this.state.instituicao.site
                      : ''}
                  </Typography>
                  <Typography variant="body2">
                    {this.state.instituicao.telefone}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <CarouselComponent imagens={this.state.instituicao.imagens} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      );
    }
    return <div>carregando</div>;
  }
}

export default DetalheInstituicaoContainer;