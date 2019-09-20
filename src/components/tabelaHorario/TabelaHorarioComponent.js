import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import './TabelaHorario.css';

const TabelaHorarioComponent = () => {
  return (
    <Grid className="containerTotal" container>
      <Grid className="tituloContainer">
        <Typography classes={'horario'} variant="subtitle1" className="horario">
          Horários
        </Typography>
      </Grid>

      <Grid className="dias">
        <Grid container className="dia">
          <Grid item xs={4}>
            <Typography variant="body2">Seg</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body2">00:00 - 00:00</Typography>
          </Grid>
        </Grid>
        <Grid container className="dia">
          <Grid item xs={4}>
            <Typography variant="body2">Ter</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body2">00:00 - 00:00</Typography>
          </Grid>
        </Grid>
        <Grid container className="dia">
          <Grid item xs={4}>
            <Typography variant="body2">Qua</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body2">00:00 - 00:00</Typography>
          </Grid>
        </Grid>
        <Grid container className="dia">
          <Grid item xs={4}>
            <Typography variant="body2">Qui</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body2">00:00 - 00:00</Typography>
          </Grid>
        </Grid>
        <Grid container className="dia">
          <Grid item xs={4}>
            <Typography variant="body2">Sex</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body2">00:00 - 00:00</Typography>
          </Grid>
        </Grid>
        <Grid container className="dia">
          <Grid item xs={4}>
            <Typography variant="body2">Sab</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body2">00:00 - 00:00</Typography>
          </Grid>
        </Grid>
        <Grid container className="dia">
          <Grid item xs={4}>
            <Typography variant="body2">Dom</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body2">00:00 - 00:00</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default TabelaHorarioComponent;
