import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import CaixaUsuarioSenha from '../components/InputLogin/InputLoginComponent';
import HeaderADMComponent from '../components/headerADM/HeaderADMComponent';
import { Redirect, Route } from 'react-router-dom';
import './LoginContainer.css';
import Button from '@material-ui/core/Button';
import AutenticacaoService from '../services/AutenticacaoService';

export class TelaLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: '',
      senha: ''
    };
    this.autenticacaoService = new AutenticacaoService();
  }
  handleClick = () => {
    const result = this.autenticacaoService.autenticacaoLogin(
      this.state.usuario,
      this.state.senha
    );

    this.renderRedirect(result);
  };

  renderRedirect = result => {
    if (result == 201) {
      return <Redirect to="/admin-info" />;
    } else {
      return <Redirect to="/admin" />
    }
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
          <HeaderADMComponent />

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
