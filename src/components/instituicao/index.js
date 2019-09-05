import React, { Component } from 'react';
import { ListItem, ListItemText, Typography } from '@material-ui/core';

export class Instituicao extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { instituicao } = this.props;

    return (
      <ListItem button alignItems="flex-start" key={instituicao.id}>
        <ListItemText
          primary={instituicao.nome}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className="AS"
                color="textPrimary"
              >
                {instituicao.descricao}
              </Typography>
              {` ${instituicao.telefone} | Aberto agora: ${
                instituicao.aberto ? 'Sim' : 'Não'
              } `}
            </React.Fragment>
          }
        />
      </ListItem>
    );
  }
}

export default Instituicao;
