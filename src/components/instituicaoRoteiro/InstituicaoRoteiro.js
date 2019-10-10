import React, { Component } from 'react';
import { ListItem, ListItemText, Typography } from '@material-ui/core';

import './instituicaoRoteiro.css';
import Pointer from '../../assets/icons/pointer.svg';

export class InstituicaoRoteiro extends Component {
  render() {
    const { instituicao } = this.props;

    return (
      <ListItem button key={instituicao.id} className="lista-instituicoes">
        <img width="19vh" src={Pointer} alt="pointer" />

        <ListItemText
          className="instituicao-roteiro"
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
