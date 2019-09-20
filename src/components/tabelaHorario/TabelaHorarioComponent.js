import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import './TabelaHorario.css';

const TabelaHorarioComponent = () => {
  return (
    <Grid container>
      <Grid className="horarioContainer">
        <Typography variant="subtitle1" className="Horario">
          Horários
        </Typography>
      </Grid>

      <Grid className="dias">
        <Grid container className="dia">
          <Grid item xs={4}>
            <p>SEG</p>
          </Grid>
          <Grid item xs={8}>
            <p>00:00 - 00:00</p>
          </Grid>
        </Grid>
        <Grid container className="dia">
          <Grid item xs={4}>
            <p>TER</p>
          </Grid>
          <Grid item xs={8}>
            <p>00:00 - 00:00</p>
          </Grid>
        </Grid>
        <Grid container className="dia">
          <Grid item xs={4}>
            <p>QUA</p>
          </Grid>
          <Grid item xs={8}>
            <p>00:00 - 00:00</p>
          </Grid>
        </Grid>
        <Grid container className="dia">
          <Grid item xs={4}>
            <p>QUI</p>
          </Grid>
          <Grid item xs={8}>
            <p>00:00 - 00:00</p>
          </Grid>
        </Grid>
        <Grid container className="dia">
          <Grid item xs={4}>
            <p>SEX</p>
          </Grid>
          <Grid item xs={8}>
            <p>00:00 - 00:00</p>
          </Grid>
        </Grid>
        <Grid container className="dia">
          <Grid item xs={4}>
            <p>SAB</p>
          </Grid>
          <Grid item xs={8}>
            <p>00:00 - 00:00</p>
          </Grid>
        </Grid>
        <Grid container className="dia">
          <Grid item xs={4}>
            <p>DOM</p>
          </Grid>
          <Grid item xs={8}>
            <p>00:00 - 00:00</p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default TabelaHorarioComponent;
