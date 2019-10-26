import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CaixaUsuarioSenha from '../components/caixaUsuarioSenha/CaixaUsuarioSenha';
import HeaderADM from '../components/headerADM/HeaderADM';
import './TelaLogin.css';

export class TelaLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: '',
      senha: ''
    };
  }
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <div className="paper">
          <HeaderADM />

          <form className="form">
            <CaixaUsuarioSenha
              nome="Usuario"
              onChange={(event, newValue) =>
                this.setState({ usuario: newValue })
              }
            />

            <CaixaUsuarioSenha
              nome="Senha"
              onChange={(event, newValue) => this.setState({ senha: newValue })}
            />

            <Button
              variant="outlined"
              color="inherit"
              type="entrar"
              className="Entrar"
              fullWidth
            >
              Entrar
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}

export default TelaLogin;
