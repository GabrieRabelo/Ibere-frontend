import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import './TabelaHorario.css';

const TabelaHorarioComponent = props => {
  props = {
    horario: [
      {
        dia: 'Segunda',
        horario_abertura: '10:50',
        horario_encerramento: '10:50'
      },
      {
        dia: 'Terça',
        horario_abertura: '10:50',
        horario_encerramento: '10:50'
      },
      {
        dia: 'Quarta',
        horario_abertura: '10:50',
        horario_encerramento: '10:50'
      },
      {
        dia: 'Quinta',
        horario_abertura: '10:50',
        horario_encerramento: '10:50'
      },
      {
        dia: 'Sexta',
        horario_abertura: '10:50',
        horario_encerramento: '10:50'
      },
      {
        dia: 'Sabado',
        horario_abertura: '10:50',
        horario_encerramento: '10:50'
      },
      {
        dia: 'Domingo',
        horario_abertura: '10:50',
        horario_encerramento: '10:50'
      }
    ]
  };

  return (
    <Grid className="containerTotal" container>
      <Grid className="tituloContainer">
        <Typography variant="subtitle1" className="horario">
          Horários
        </Typography>
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
    </Grid>
  );
};
export default TabelaHorarioComponent;
