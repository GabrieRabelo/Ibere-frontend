import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import './TabelaHorario.css';

class TabelaHorarioComponent extends React.Component {
  render() {
    return (
      <Grid className="containerTotal" container>
        <Grid className="tituloContainer">
          <Typography className="horarios" variant="subtitle1">
            Horários
          </Typography>
        </Grid>

        {this.props.horarios.map(h => {
          return (
            <Grid
              container
              direction="column"
              alignItems="center"
              className="dia"
              key={h.id}
            >
              <Grid item xs={4}>
                <Typography variant="body2">
                  <b>{h.dia}</b>
                </Typography>
              </Grid>

              <Grid item xs={8}>
                <Typography variant="body2">{`${h.horaAbertura} ----- ${h.horaFechamento}`}</Typography>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

export default TabelaHorarioComponent;
