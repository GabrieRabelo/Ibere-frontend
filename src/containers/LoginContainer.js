import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import CaixaUsuarioSenha from '../components/InputLogin/InputLoginComponent';
import HeaderADMComponent from '../components/headerADM/HeaderADMComponent';
import './LoginContainer.css';
import Button from '@material-ui/core/Button';
import AutenticacaoService from '../services/AutenticacaoService';
import AdminContainer from './AdminContainer';

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
     if (this.autenticacaoService(this.state.usuario, this.state.senha) == 201) {

     } else {

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
