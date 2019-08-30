import React from 'react';
import logo from './assets/logo.svg';
import './App.css';
import DetalheInstituicaoContainer from './containers/DetalheInstituicaoContainer';

function App() {
  return (
    <DetalheInstituicaoContainer
      titulo={'Fundação Iberê Camargo'}
      endereco={'Av. Padre Cacique'}
    ></DetalheInstituicaoContainer>
  );
}

export default App;
