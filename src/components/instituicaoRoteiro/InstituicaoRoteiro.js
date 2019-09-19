import React, { Component } from 'react';
import { ListItem, ListItemText, Typography } from '@material-ui/core';

import ArrowDropDownCircle from '@material-ui/icons/ArrowDropDownCircle';

import './instituicaoRoteiro.css';

export class InstituicaoRoteiro extends Component {
  render() {
    const { instituicao } = this.props;

    return (
      <ListItem button key={instituicao.id} className="lista-instituicoes">
        <ArrowDropDownCircle />
        <ListItemText
          primary={instituicao.nome}
          secondary={
            <React.Fragment>
              {instituicao.aberto ? (
                <React.Fragment>
                  <Typography component={'span'} className="instituicao-aberta">
                    Aberto
                  </Typography>

                  <Typography component={'span'} className="tempo-visita">
                    {`${instituicao.tempo_visita} min`}
                  </Typography>
                </React.Fragment>
              ) : (
                <Typography component={'span'} className="instituicao-fechada">
                  Fechado
                </Typography>
              )}
            </React.Fragment>
          }
        />
      </ListItem>
    );
  }
}

export default InstituicaoRoteiro;
