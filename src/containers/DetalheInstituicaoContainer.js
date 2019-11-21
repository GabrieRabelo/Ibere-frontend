import React, { Component } from 'react';
import { Grid, Typography, Fab, ButtonBase } from '@material-ui/core';
import TabelaHorarioComponent from '../components/tabelaHorario/TabelaHorarioComponent';
import DescricaoInstituicaoComponent from '../components/descricaoInstituicao/DescricaoInstituicaoComponent';
import CarouselComponent from '../components/carrosselModal/carrosselComponent';
import RedesSociaisComponent from '../components/redesSociais/RedesSociaisComponent';
import InstituicaoService from '../services/InstituicaoService';

import NavigationIcon from '../assets/icons/navigation_icon.svg';
import './DetalheInstituicao.css';

class DetalheInstituicaoContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      descricao: '',
      fullDescription: false,
      instituicao: {}
    };
    this.instituicaoService = new InstituicaoService();
  }

  async componentWillMount() {
    const instituicao = await this.instituicaoService.buscaPorId(this.props.id);
    this.setState({ instituicao: instituicao });
    this.setState({
      descricao: instituicao.descricao.substring(0, 70) + '...'
    });
  }

  openDescription = () => {
    if (!this.state.fullDescription) {
      this.setState({
        fullDescription: true,
        descricao: this.state.instituicao.descricao
      });
    } else {
      this.setState({
        fullDescription: false,
        descricao: this.state.instituicao.descricao.substring(0, 70) + '...'
      });
    }
  };

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
                      style={{ color: 'red' }}
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
                    <img
                      src={NavigationIcon}
                      alt="navigate"
                      width={50}
                      height={50}
                    />
                  </Fab>
                </Grid>
              </Grid>
              <hr className="divider" />

              <Grid item xs={12} zeroMinWidth container direction="column"
                alignItems="center">
                <ButtonBase onClick={this.openDescription}>
                  <DescricaoInstituicaoComponent
                    descricao={this.state.descricao}
                  />
                </ButtonBase>
              </Grid>

              <Grid
                className="horariosContatoContainer"
                container
                spacing={3}
                direction="column"
                alignItems="center"
              >
                <Grid item xs={7}>
                  <TabelaHorarioComponent
                    horarios={this.state.instituicao.horarios}
                  />
                </Grid>

                <Grid className="email-telefone">
                  <Typography
                    spacing="5"
                    align="left"
                    variant="body2"
                    id="email"
                  >
                    <b>Email:</b> {this.state.instituicao.email}
                  </Typography>
                  <Typography variant="body2">
                    <b>Telefone:</b> {this.state.instituicao.telefone}
                  </Typography>

                  {this.state.instituicao.redes ? (
                    <RedesSociaisComponent
                      redes={this.state.instituicao.redes}
                    />
                  ) : (
                    ' '
                  )}
                </Grid>
                <Grid>
                  <Grid className="observacoes">
                    {this.state.instituicao.observacoes ? (
                      <Typography variant="body2">
                        <b>Observações:</b> {this.state.instituicao.observacoes}
                      </Typography>
                    ) : (
                      ''
                    )}
                  </Grid>
                </Grid>

                <Grid item xs={5} className="contatoContainer">
                  <Typography variant="body2">
                    {this.state.instituicao.site ? this.state.site : ''}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <CarouselComponent imagem={this.state.instituicao.imagens} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      );
    }
    return <div>carregando...</div>;
  }
}

export default DetalheInstituicaoContainer;
