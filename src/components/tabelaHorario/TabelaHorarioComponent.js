import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import './TabelaHorario.css';

class TabelaHorarioComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.horarios) {
      return (
        <Grid className="containerTotal" container>
          <Grid className="tituloContainer">
            <Typography variant="subtitle1" className="horario">
              Horários
            </Typography>
          </Grid>
          {this.props.horarios.map(h => {
            return (
              <Grid container className="dia" key={h.id}>
                <Grid item xs={4}>
                  <Typography variant="body2">{h.dia}</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="body2">{`${h.horaAbertura} ----- ${h.horaFechamento}`}</Typography>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      );
    } else {
      return <div>Carregando...</div>;
    }
  }
}

export default TabelaHorarioComponent;
