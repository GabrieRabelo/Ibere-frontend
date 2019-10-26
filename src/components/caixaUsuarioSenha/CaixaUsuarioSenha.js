import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

export class CaixaUsuarioSenha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: ''
    };
  }
  render() {
    if (this.props.nome == 'Usuario') {
      return (
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Usuario"
          name="usuario"
          autoFocus
        />
      );
    } else {
      return (
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Senha"
          type="password"
          autoComplete="current-password"
          id="senha"
        />
      );
    }
  }
}

export default CaixaUsuarioSenha;
