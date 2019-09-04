import React from 'react';
import { Grid } from '@material-ui/core';
import './TabelaHorario.css';

const TabelaHorarioComponent = () => {
  return (
    <div className="GridHorarios">
      <Grid>
        <p className="Horario">Horários</p>
      </Grid>

      <Grid container className="dia">
        <Grid item xs={4}>
          <p>DOM</p>
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
      <Grid container className="dia">
        <Grid item xs={4}>
          <p>DOM</p>
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
      <Grid container className="dia">
        <Grid item xs={4}>
          <p>DOM</p>
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
      <Grid container className="dia">
        <Grid item xs={4}>
          <p>DOM</p>
        </Grid>
        <Grid item xs={8}>
          <p>00:00 - 00:00</p>
        </Grid>
      </Grid>
    </div>
  );
};
export default TabelaHorarioComponent;
