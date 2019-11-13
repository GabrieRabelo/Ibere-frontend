import React, { Component } from 'react';
import { Grid, Typography, Fab, ButtonBase } from '@material-ui/core';
import TabelaHorarioComponent from '../components/tabelaHorario/TabelaHorarioComponent';
import DescricaoInstituicaoComponent from '../components/descricaoInstituicao/DescricaoInstituicaoComponent';
import CarouselComponent from '../components/carrosselModal/carrosselComponent';



import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';

import './DetalheInstituicao.css';


class DetalheInstituicaoContainer extends Component {
  constructor(props) {
    super(props)


    this.state = {
      descricao: this.props.instituicao.descricao.substring(0, 100)+'...',
      fullDescription: false
    };
  }

  openDescription = () => {
    if (!this.state.fullDescription) {
      this.setState({
        fullDescription: true,
        descricao: this.props.instituicao.descricao

      });
    } else {
      this.setState({
        fullDescription: false,
        descricao: this.props.instituicao.descricao.substring(0, 100)+'...'
      });
    }
  };


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
                <Fab href={"https://www.google.com/maps?saddr=My+Location&daddr=" + this.props.instituicao.latitude + "," + this.props.instituicao.longitude} color="inherit" className="btnRotas" size="small">
                  <SubdirectoryArrowRightIcon />
                </Fab>
              </Grid>
            </Grid>
            <hr className="divider" />

            <Grid item xs={12} zeroMinWidth>
              <ButtonBase onClick={this.openDescription} >
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
                  horarios={this.props.instituicao.horarios}
                />
              </Grid>

              <Grid className="email-telefone">
                <Typography spacing="5" align="left" variant="body2" id="email">
                  Email : {this.props.instituicao.email}
                </Typography>
                <Typography variant="body2">
                  Telefone : {this.props.instituicao.telefone}
                </Typography>
              </Grid>

              <Grid item xs={5} className="contatoContainer">
                <Typography variant="body2">
                  {this.props.instituicao.site ? this.props.site : ''}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <CarouselComponent instituicao={this.props.instituicao} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default DetalheInstituicaoContainer;
