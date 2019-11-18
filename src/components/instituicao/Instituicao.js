import React, { Component } from 'react';
import {
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Modal,
  Paper
} from '@material-ui/core';

import { ExpandLess, ExpandMore } from '@material-ui/icons';

import DetalheInstituicaoContainer from '../../containers/DetalheInstituicaoContainer';

import './Instituicao.css';

export class Instituicao extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    };
  }

  handleClose = () => {
    this.setState({ modalOpen: false });
  };

  handleOpen = () => {
    this.setState({ modalOpen: true });
  };

  modal = instituicao => {
    return (
      <Modal
        open={this.state.modalOpen}
        onClose={this.handleClose}
        className="modal-instituicao"
      >
        <Paper className="conteudo-modal-instituicao">
          <DetalheInstituicaoContainer id={instituicao.id} />
        </Paper>
      </Modal>
    );
  };

  render() {
    const { instituicao } = this.props;

    return (
      <React.Fragment>
        {this.modal(instituicao)}
        <ListItem
          onClick={this.handleOpen}
          button
          alignItems="flex-start"
          key={instituicao.id}
        >
          <ListItemText
            primary={
              <Typography
                variant="h6"
                component={'span'}
                className="instituicao-nome"
              >
                {instituicao.nome}
              </Typography>
            }
            secondary={
              <React.Fragment>
                {instituicao.aberto ? (
                  <Typography component={'span'} className="instituicao-aberta">
                    Aberto
                  </Typography>
                ) : (
                  <Typography
                    component={'span'}
                    className="instituicao-fechada"
                  >
                    Fechado
                  </Typography>
                )}

                {isNaN(instituicao.distancia) ? null : (
                  <Typography component={'span'} className="distancia">
                    {instituicao.distancia} {' Km'}
                  </Typography>
                )}
              </React.Fragment>
            }
          />
          <div className="seta">
            {this.state.modalOpen ? <ExpandMore /> : <ExpandLess />}
          </div>
        </ListItem>
        <Divider />
      </React.Fragment>
    );
  }
}

export default Instituicao;
