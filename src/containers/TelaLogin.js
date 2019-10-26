import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import CaixaUsuarioSenha from '../components/caixaUsuarioSenha/CaixaUsuarioSenha';
import HeaderADM from '../components/headerADM/HeaderADM';
import './TelaLogin.css';
import Button from '@material-ui/core/Button';

export class TelaLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: '',
      senha: ''
    };
  }

  handleClick = () => {
  };

  onChangeUsuario = event => {
    this.setState({ usuario: event.target.value });
  };

  onChangeSenha = event => {
    this.setState({ senha: event.target.value });
  };

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <div className="paper">
          <HeaderADM />

          <form className="form">
            <CaixaUsuarioSenha
              nome="Usuario"
              onChangeUsuario={this.onChangeUsuario}
            />

            <CaixaUsuarioSenha
              nome="Senha"
              onChangeSenha={this.onChangeSenha}
            />
            <Button
              variant="outlined"
              color="default"
              size="medium"
              fullWidth
              onClick={this.handleClick.bind()}
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
