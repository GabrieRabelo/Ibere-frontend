import React, { Component } from 'react';
import { ListItem, ListItemText, Typography, Divider } from '@material-ui/core';

import './Instituicao.css';

export class Instituicao extends Component {
  render() {
    const { instituicao } = this.props;

    return (
      <React.Fragment>
        <ListItem button alignItems="flex-start" key={instituicao.id}>
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
                <Typography component={'span'} className="distancia">
                  1KM
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider />
      </React.Fragment>
    );
  }
}

export default Instituicao;
