import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import './TabelaHorario.css';

const TabelaHorarioComponent = () => {
  return (
    <Paper style={{ backgroundColor: 'darkgray' }}>
      <Grid>
        <p className="Horario">Horários</p>
      </Grid>

      <Grid container className="dia">
        <Grid item xs={4}>
          <p>SEG</p>
        </Grid>
        <Grid item xs={8}>
          <p></p>
        </Grid>
      </Grid>
      <Grid container className="dia">
        <Grid item xs={4}>
          <p>TER</p>
        </Grid>
        <Grid item xs={8}>
          <p></p>
        </Grid>
      </Grid>
      <Grid container className="dia">
        <Grid item xs={4}>
          <p>QUA</p>
        </Grid>
        <Grid item xs={8}>
          <p></p>
        </Grid>
      </Grid>
      <Grid container className="dia">
        <Grid item xs={4}>
          <p>QUI</p>
        </Grid>
        <Grid item xs={8}>
          <p></p>
        </Grid>
      </Grid>
      <Grid container className="dia">
        <Grid item xs={4}>
          <p>SEX</p>
        </Grid>
        <Grid item xs={8}>
          <p></p>
        </Grid>
      </Grid>
      <Grid container className="dia">
        <Grid item xs={4}>
          <p>SAB</p>
        </Grid>
        <Grid item xs={8}>
          <p></p>
        </Grid>
      </Grid>
      <Grid container className="dia">
        <Grid item xs={4}>
          <p>DOM</p>
        </Grid>
        <Grid item xs={8}>
          <p></p>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default TabelaHorarioComponent;
