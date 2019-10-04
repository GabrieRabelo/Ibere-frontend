import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import './TabelaHorario.css';

class TabelaHorarioComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid className="containerTotal" container>
        <Grid className="tituloContainer">
          <Typography variant="subtitle3" className="horario">
            Horários
          </Typography>
        </Grid>
        {this.props.horarios.map(h => {
          return (
            <Grid container className="dia" key={h.dia}>
              <Grid item xs={4}>
                <Typography variant="body2">{h.dia}</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body2">{`${h.horario_abertura} ----- ${h.horario_encerramento}`}</Typography>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

export default TabelaHorarioComponent;
