import React, { Component } from 'react';
import logo from '../../assets/images/logo_fundacao_ibere_camargo.png';
import './HeaderADM.css';

export class HeaderADM extends Component {
  render() {
    return (
      <div className="HeaderADM">
        <img width="30%" src={logo} alt="logo" className="img" />
        <h1 className="Titulo">Mapas Culturais</h1>
        <h2 className="SubTitulo">Fundação Ibere Camargo</h2>
      </div>
    );
  }
}

export default HeaderADM;
