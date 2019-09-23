import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import './TabelaHorario.css';

const TabelaHorarioComponent = props => {
  return (
    <Paper style={{ backgroundColor: 'darkgray' }}>
      <Grid>
        <p className="Horario">Horários</p>
      </Grid>
      {props.horario.map(h => {
        return (
          <Grid container className="dia" key={h.dia}>
            <Grid item xs={4}>
              <p>{h.dia}</p>
            </Grid>
            <Grid item xs={8}>
              <p>{`${h.horario_abertura} ----- ${h.horario_encerramento}`}</p>
            </Grid>
          </Grid>
        );
      })}
    </Paper>
  );
};
export default TabelaHorarioComponent;
