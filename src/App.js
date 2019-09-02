import React from 'react';
import './App.css';
import DetalheInstituicaoContainer from './containers/DetalheInstituicaoContainer';

function App() {
  return (
    <DetalheInstituicaoContainer
      titulo={'Fundação Ibere Camargo'}
      endereco={'Avenida Padre Cacique, 1720'}
    />
  );
}

export default App;
