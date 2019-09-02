import React from 'react';
import './App.css';
import { Grid, Paper } from '@material-ui/core';
import DetalheInstituicaoContainer from './containers/DetalheInstituicaoContainer';

function App() {
  return (
    <Grid id justify="center" container spacing={12}>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <DetalheInstituicaoContainer
              titulo={'Fundação Iberê Camargo'}
              endereco={'Av. Padre Cacique'}
            ></DetalheInstituicaoContainer>
          </Grid>
          {/* A completar abaixo */}
          <Grid item xs={5}>
            <Paper style={{ background: 'silver' }}>
              Horários
              <p>DOM 00:00 - 00:00</p>
              <p>SEG 00:00 - 00:00</p>
              <p>TER 00:00 - 00:00</p>
              <p>QUA 00:00 - 00:00</p>
              <p>QUI 00:00 - 00:00</p>
              <p>SEX 00:00 - 00:00</p>
              <p>SAB 00:00 - 00:00</p>
            </Paper>
          </Grid>
          <Grid container spacing={2} item xs={7}>
            <Grid item xs={12}>
              A Fundação Iberê Camargo, sediada na cidade brasileira de Porto
              Alegre, é uma entidade cultural que tem como objetivos a
              preservação, o estudo e a divulgação da obra do pintor gaúcho
              Iberê Camargo (1914-1994).
            </Grid>
            <Grid item xs={12}>
              <p>E-mail:</p>
              <p>Site:</p>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            vet items
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
