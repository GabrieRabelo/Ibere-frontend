import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';

type Props = {
  titulo: '',
  endereco: ''
};

class DetalheInstituicaoContainer extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid id justify="center" container spacing={12}>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <div>
                <Grid container spacing={8}>
                  <Grid item xs={8}>
                    <h1>{this.props.titulo}</h1>
                    <div style={{ color: 'grey' }}>{this.props.endereco}</div>
                    <div style={{ color: 'green' }}>Aberto</div>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    item
                    xs={4}
                  >
                    <button style={style}>Rotas</button>
                  </Grid>
                </Grid>
                <hr />
              </div>
            </Grid>
            {/* A completar abaixo */}
            <Grid item xs={5}>
              <Paper style={{ background: 'silver' }}>
                <Grid>
                  <p style={{ marginBottom: '0vh' }}>Horários</p>
                </Grid>

                <Grid container>
                  <Grid item xs={4}>
                    <p>DOM</p>
                  </Grid>
                  <Grid item xs={8}>
                    <p>00:00 - 00:00</p>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={4}>
                    <p>DOM</p>
                  </Grid>
                  <Grid item xs={8}>
                    <p>00:00 - 00:00</p>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={4}>
                    <p>DOM</p>
                  </Grid>
                  <Grid item xs={8}>
                    <p>00:00 - 00:00</p>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={4}>
                    <p>DOM</p>
                  </Grid>
                  <Grid item xs={8}>
                    <p>00:00 - 00:00</p>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={4}>
                    <p>DOM</p>
                  </Grid>
                  <Grid item xs={8}>
                    <p>00:00 - 00:00</p>
                  </Grid>
                </Grid>
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
}

export default DetalheInstituicaoContainer;

const style = {
  borderRadius: '5px',
  outline: '0'
};
